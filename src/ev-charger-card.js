import { LitElement, html, css, nothing } from "lit";
import "./ev-charger-editor.js";
import { getLanguage, t } from "./translations.js";

const DEFAULT_IMAGE =
  "https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png";
const MODES = ["lock", "grid", "pv", "hybrid"];

/* Mode metadata: icon (Material Symbols codepoints as SVG paths) + MD3 tonal role */
const MODE_META = {
  lock:   { icon: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" },
  grid:   { icon: "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z" },
  pv:     { icon: "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" },
  hybrid: { icon: "M7 2v11h3v9l7-12h-4l4-8z" },
};

class EvChargerCard extends LitElement {
  static get properties() {
    return { hass: {}, config: {} };
  }

  static getStubConfig() {
    return {
      title: "EV Charger",
      language: "auto",
      image_url: DEFAULT_IMAGE,
      charging_mode_entity: "",
      power_entity: "",
      pv_quota_entity: "",
      speed_entity: "",
      remaining_entity: "",
    };
  }

  static getConfigElement() {
    return document.createElement("ev-charger-editor");
  }

  setConfig(config) {
    this.config = {
      ...EvChargerCard.getStubConfig(),
      ...config,
      image_url: config.image_url || DEFAULT_IMAGE,
    };
  }

  getCardSize() { return 4; }

  _lang() { return getLanguage(this.hass, this.config?.language); }
  _text(key) { return t(this._lang(), key); }
  _state(id, fb = "") { return this.hass?.states?.[id]?.state ?? fb; }
  _numberState(id, fb = 0) {
    const v = Number(this._state(id, fb));
    return Number.isFinite(v) ? v : fb;
  }
  _formatNumber(v, d = 0) {
    return new Intl.NumberFormat(this._lang(), {
      minimumFractionDigits: d,
      maximumFractionDigits: d,
    }).format(v);
  }
  _hasRequiredConfig() {
    return Boolean(
      this.config?.charging_mode_entity &&
      this.config?.power_entity &&
      this.config?.pv_quota_entity
    );
  }

  async _setChargingMode(mode) {
    const currentPvQuota = this._numberState(this.config.pv_quota_entity, 50);
    let minpvpowerquota = 0;
    if (mode === "pv") minpvpowerquota = 100;
    else if (mode === "hybrid") minpvpowerquota = currentPvQuota;
    try {
      await this.hass.callService("emshome", "set_charging_mode", { mode, minpvpowerquota });
    } catch (e) {
      console.error(this._text("card.serviceError"), e);
    }
  }

  async _updateSliderValue(event) {
    const value = Number(event.target.value);
    try {
      await this.hass.callService("emshome", "prozentage", { prozentage: value });
    } catch (e) {
      console.error(this._text("card.serviceError"), e);
    }
  }

  _modeIcon(mode) {
    const d = MODE_META[mode]?.icon || "";
    return html`<svg class="mode-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="${d}"/></svg>`;
  }

  _renderModeButton(mode, currentMode) {
    const active = currentMode === mode;
    return html`
      <button
        class="mode-btn ${active ? "active" : ""}"
        @click=${() => this._setChargingMode(mode)}
        aria-pressed=${active ? "true" : "false"}
      >
        ${this._modeIcon(mode)}
        <span>${t(this._lang(), `modes.${mode}`)}</span>
        ${active ? html`<span class="mode-indicator"></span>` : nothing}
      </button>
    `;
  }

  render() {
    if (!this.hass || !this.config) return nothing;

    if (!this._hasRequiredConfig()) {
      return html`
        <ha-card>
          <div class="md-shell">
            <div class="md-header">
              <h2>${this.config.title || this._text("card.title")}</h2>
              <p class="md-subtitle">Please configure charging_mode_entity, power_entity, and pv_quota_entity.</p>
            </div>
          </div>
        </ha-card>
      `;
    }

    const currentMode = this._state(this.config.charging_mode_entity, "lock");
    const power       = this._numberState(this.config.power_entity, 0);
    const sliderValue = this._numberState(this.config.pv_quota_entity, 50);
    const speed       = this.config.speed_entity     ? this._numberState(this.config.speed_entity, 0) : 0;
    const remaining   = this.config.remaining_entity ? this._numberState(this.config.remaining_entity, 0) : 0;
    const title       = this.config.title || this._text("card.title");

    const pvPct = sliderValue;
    const gridPct = 100 - sliderValue;

    return html`
      <ha-card>
        <div class="md-shell">

          <!-- ── Header ── -->
          <div class="md-header">
            <div class="md-header-text">
              <h2>${title}</h2>
              <p class="md-subtitle">
                <span class="mode-chip mode-chip--${currentMode}">
                  ${this._modeIcon(currentMode)}
                  ${t(this._lang(), `modes.${currentMode}`)}
                </span>
              </p>
            </div>
            <div class="live-badge">
              <span class="live-dot"></span>
              LIVE
            </div>
          </div>

          <!-- ── Hero ── -->
          <div class="md-hero">
            <div class="md-image-wrap">
              <img src=${this.config.image_url || DEFAULT_IMAGE} alt="EV charger" loading="lazy" />
            </div>
            <div class="md-stats">
              <div class="md-stat md-stat--primary">
                <span class="md-stat-label">${this._text("card.power")}</span>
                <span class="md-stat-value">${this._formatNumber(power)}<em>${this._text("card.watts")}</em></span>
              </div>
              ${speed > 0 ? html`
                <div class="md-stat">
                  <span class="md-stat-label">${this._text("card.speed")}</span>
                  <span class="md-stat-value">${this._formatNumber(speed, 1)}<em>${this._text("card.kmh")}</em></span>
                </div>
              ` : nothing}
              ${remaining > 0 ? html`
                <div class="md-stat">
                  <span class="md-stat-label">${this._text("card.remaining")}</span>
                  <span class="md-stat-value">${this._formatNumber(remaining)}<em>${this._text("card.minutes")}</em></span>
                </div>
              ` : nothing}
            </div>
          </div>

          <!-- ── Mode grid ── -->
          <div class="md-divider"></div>
          <div class="md-section-label">${this._text("card.mode")}</div>
          <div class="md-mode-grid">
            ${MODES.map((m) => this._renderModeButton(m, currentMode))}
          </div>

          <!-- ── Hybrid slider ── -->
          <div class="md-slider-card ${currentMode === "hybrid" ? "" : "md-slider-card--disabled"}">
            <div class="md-slider-header">
              <span class="md-section-label" style="margin:0">${this._text("card.hybridMix")}</span>
              ${currentMode === "hybrid" ? html`
                <span class="md-slider-readout">
                  <span class="pv-val">${pvPct}%</span>&thinsp;PV &nbsp;·&nbsp; <span class="grid-val">${gridPct}%</span>&thinsp;Grid
                </span>
              ` : nothing}
            </div>
            <input
              id="mix-slider"
              type="range"
              min="0" max="100" step="1"
              .value=${String(sliderValue)}
              ?disabled=${currentMode !== "hybrid"}
              @change=${this._updateSliderValue}
            />
            <div class="md-slider-labels">
              <span>${this._text("card.pvFull")}</span>
              <span>${this._text("card.balanced")}</span>
              <span>${this._text("card.gridFull")}</span>
            </div>
          </div>

        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      /* ── MD3 token fallbacks ── */
      :host {
        /* Surface / background */
        --ev-surface:         var(--md-sys-color-surface,            #faf9fd);
        --ev-surface-variant: var(--md-sys-color-surface-variant,    #e4e1ec);
        --ev-surface-container: var(--md-sys-color-surface-container, #eeedf1);
        --ev-on-surface:      var(--md-sys-color-on-surface,         #1c1b1f);
        --ev-on-surface-var:  var(--md-sys-color-on-surface-variant, #49454f);
        --ev-outline:         var(--md-sys-color-outline,            #7a757f);
        --ev-outline-var:     var(--md-sys-color-outline-variant,    #cac4d0);

        /* Primary tonal */
        --ev-primary:         var(--md-sys-color-primary,            #6750a4);
        --ev-on-primary:      var(--md-sys-color-on-primary,         #ffffff);
        --ev-primary-container: var(--md-sys-color-primary-container, #eaddff);
        --ev-on-primary-cont: var(--md-sys-color-on-primary-container, #21005d);

        /* Secondary tonal (green accent — custom) */
        --ev-secondary:         #1b6e4b;
        --ev-on-secondary:      #ffffff;
        --ev-secondary-container: #b1f0cc;
        --ev-on-secondary-cont: #002114;

        /* Error */
        --ev-error:           var(--md-sys-color-error,              #b3261e);

        /* Elevation shadows (MD3 levels) */
        --ev-elev1: 0 1px 2px rgba(0,0,0,.12), 0 1px 3px 1px rgba(0,0,0,.08);
        --ev-elev2: 0 1px 2px rgba(0,0,0,.12), 0 2px 6px 2px rgba(0,0,0,.10);
        --ev-elev3: 0 4px 8px 3px rgba(0,0,0,.10), 0 1px 3px rgba(0,0,0,.14);

        /* Typography */
        --ev-font: var(--md-ref-typeface-brand, 'Google Sans', Roboto, sans-serif);
        --ev-font-plain: var(--md-ref-typeface-plain, Roboto, sans-serif);

        display: block;
      }

      ha-card {
        background: var(--ev-surface);
        border-radius: 16px;
        box-shadow: var(--ev-elev1);
        overflow: hidden;
        font-family: var(--ev-font-plain);
        color: var(--ev-on-surface);
      }

      .md-shell {
        padding: 16px;
        animation: md-enter 260ms cubic-bezier(.2,.0,0,1) both;
      }

      /* ── Header ── */
      .md-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 16px;
        gap: 8px;
      }

      .md-header-text { flex: 1 1 auto; }

      h2 {
        margin: 0;
        font-family: var(--ev-font);
        font-size: 1.375rem; /* MD3 title-large */
        font-weight: 400;
        letter-spacing: 0;
        line-height: 1.75rem;
        color: var(--ev-on-surface);
      }

      .md-subtitle {
        margin: 4px 0 0;
        font-size: 0.875rem;
        color: var(--ev-on-surface-var);
      }

      /* mode chip in header */
      .mode-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 2px 10px 2px 6px;
        border-radius: 99px;
        font-size: 0.8125rem;
        font-weight: 500;
        background: var(--ev-surface-container);
        color: var(--ev-on-surface-var);
        line-height: 1.6;
      }

      .mode-chip--lock   { background: #fde7e7; color: #8c1d18; }
      .mode-chip--grid   { background: #e3f2fd; color: #0d47a1; }
      .mode-chip--pv     { background: #e8f5e9; color: #1b5e20; }
      .mode-chip--hybrid { background: var(--ev-primary-container); color: var(--ev-on-primary-cont); }

      .mode-chip .mode-icon { width: 15px; height: 15px; fill: currentColor; }

      /* LIVE badge */
      .live-badge {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 4px 10px;
        border-radius: 99px;
        background: var(--ev-secondary-container);
        color: var(--ev-on-secondary-cont);
        font-size: 0.6875rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        flex-shrink: 0;
        align-self: center;
      }

      .live-dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-secondary);
        animation: pulse 1.8s ease-in-out infinite;
      }

      /* ── Hero ── */
      .md-hero {
        display: grid;
        grid-template-columns: 1.1fr 1fr;
        gap: 12px;
        margin-bottom: 16px;
        align-items: stretch;
      }

      .md-image-wrap {
        border-radius: 12px;
        overflow: hidden;
        background: var(--ev-surface-container);
      }

      img {
        width: 100%;
        height: 152px;
        object-fit: cover;
        display: block;
      }

      .md-stats {
        display: grid;
        gap: 8px;
        align-content: start;
      }

      .md-stat {
        background: var(--ev-surface-container);
        border-radius: 12px;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        transition: box-shadow 200ms ease;
      }

      .md-stat--primary {
        background: var(--ev-primary-container);
        color: var(--ev-on-primary-cont);
        box-shadow: var(--ev-elev1);
      }

      .md-stat-label {
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.07em;
        text-transform: uppercase;
        opacity: 0.72;
      }

      .md-stat-value {
        font-family: var(--ev-font);
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.3;
        color: var(--ev-on-surface);
      }

      .md-stat--primary .md-stat-value { color: var(--ev-on-primary-cont); }

      .md-stat-value em {
        font-style: normal;
        font-size: 0.75rem;
        font-weight: 500;
        margin-left: 2px;
        opacity: 0.7;
        vertical-align: baseline;
      }

      /* ── Divider + section label ── */
      .md-divider {
        height: 1px;
        background: var(--ev-outline-var);
        margin: 4px 0 12px;
      }

      .md-section-label {
        font-size: 0.75rem;
        font-weight: 500;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--ev-primary);
        margin-bottom: 8px;
        display: block;
      }

      /* ── Mode grid ── */
      .md-mode-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-bottom: 14px;
      }

      .mode-btn {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid var(--ev-outline-var);
        background: var(--ev-surface);
        color: var(--ev-on-surface-var);
        border-radius: 12px;
        padding: 10px 12px;
        font-family: var(--ev-font-plain);
        font-size: 0.8125rem;
        font-weight: 500;
        letter-spacing: 0.01em;
        cursor: pointer;
        transition:
          background 160ms ease,
          border-color 160ms ease,
          box-shadow 160ms ease,
          color 160ms ease;
        text-align: left;
      }

      .mode-btn::before {
        content: "";
        position: absolute;
        inset: 0;
        background: currentColor;
        opacity: 0;
        transition: opacity 120ms ease;
        border-radius: inherit;
        pointer-events: none;
      }

      .mode-btn:hover::before  { opacity: 0.06; }
      .mode-btn:active::before { opacity: 0.12; }

      .mode-btn:hover {
        border-color: var(--ev-outline);
        box-shadow: var(--ev-elev1);
      }

      .mode-btn.active {
        background: var(--ev-secondary-container);
        border-color: transparent;
        color: var(--ev-on-secondary-cont);
        box-shadow: var(--ev-elev2);
      }

      .mode-icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
        flex-shrink: 0;
      }

      .mode-btn span { flex: 1 1 auto; }

      .mode-indicator {
        flex: 0 0 auto !important;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--ev-secondary);
      }

      /* ── Hybrid slider card ── */
      .md-slider-card {
        background: var(--ev-surface-container);
        border-radius: 12px;
        padding: 12px 14px;
        transition: opacity 200ms ease;
      }

      .md-slider-card--disabled { opacity: 0.45; pointer-events: none; }

      .md-slider-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .md-slider-readout {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--ev-on-surface-var);
      }

      .pv-val   { color: #1b6e4b; font-weight: 700; }
      .grid-val { color: #0d47a1; font-weight: 700; }

      /* MD3-flavoured range input */
      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(
          to right,
          var(--ev-secondary) 0%,
          var(--ev-secondary) calc(var(--slider-pct, 50) * 1%),
          var(--ev-outline-var) calc(var(--slider-pct, 50) * 1%),
          var(--ev-outline-var) 100%
        );
        outline: none;
        cursor: pointer;
        accent-color: var(--ev-secondary);
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--ev-secondary);
        box-shadow: 0 0 0 0 rgba(27,110,75,.3);
        transition: box-shadow 160ms ease, transform 120ms ease;
        cursor: pointer;
      }

      input[type="range"]:not(:disabled):hover::-webkit-slider-thumb {
        box-shadow: 0 0 0 6px rgba(27,110,75,.14);
        transform: scale(1.1);
      }

      input[type="range"]:not(:disabled):active::-webkit-slider-thumb {
        box-shadow: 0 0 0 10px rgba(27,110,75,.22);
        transform: scale(1.15);
      }

      input[type="range"]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 50%;
        background: var(--ev-secondary);
        cursor: pointer;
      }

      .md-slider-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 6px;
        font-size: 0.6875rem;
        color: var(--ev-on-surface-var);
        opacity: 0.8;
      }

      /* ── Animations ── */
      @keyframes md-enter {
        from { opacity: 0; transform: translateY(6px); }
        to   { opacity: 1; transform: translateY(0); }
      }

      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50%       { opacity: .35; }
      }

      /* ── Responsive ── */
      @media (max-width: 480px) {
        .md-hero { grid-template-columns: 1fr; }
        img { height: 130px; }
      }
    `;
  }
}

customElements.define("ev-charger-card", EvChargerCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ev-charger-card",
  name: "EV Charger Card",
  description: "Premium EV charger card for the EMS Home integration",
});
