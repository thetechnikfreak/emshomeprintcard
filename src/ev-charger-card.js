import { LitElement, html, css, nothing } from "lit";
import "./ev-charger-editor.js";
import { getLanguage, t } from "./translations.js";

const DEFAULT_IMAGE =
  "https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png";
const MODES = ["lock", "grid", "pv", "hybrid"];

const MODE_ICONS = {
  lock:   "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
  grid:   "M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z",
  pv:     "M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z",
  hybrid: "M7 2v11h3v9l7-12h-4l4-8z",
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

  _icon(mode) {
    return html`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${MODE_ICONS[mode] || ""}"/></svg>`;
  }

  _renderModeButton(mode, currentMode) {
    const active = currentMode === mode;
    return html`
      <button
        class="mode-btn ${active ? "active" : ""}"
        @click=${() => this._setChargingMode(mode)}
        aria-pressed=${active ? "true" : "false"}
      >
        ${this._icon(mode)}
        <span>${t(this._lang(), `modes.${mode}`)}</span>
      </button>
    `;
  }

  render() {
    if (!this.hass || !this.config) return nothing;

    if (!this._hasRequiredConfig()) {
      return html`
        <ha-card>
          <div class="shell">
            <h2>${this.config.title || this._text("card.title")}</h2>
            <p class="hint">Please configure charging_mode_entity, power_entity, and pv_quota_entity.</p>
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

    return html`
      <ha-card>
        <div class="shell">

          <!-- Image banner -->
          <div class="img-wrap">
            <img src=${this.config.image_url || DEFAULT_IMAGE} alt="EV charger" loading="lazy" />
          </div>

          <!-- Header -->
          <div class="header">
            <h2>${title}</h2>
            <p class="subhead">${this._text("card.mode")}: <strong>${t(this._lang(), `modes.${currentMode}`)}</strong></p>
          </div>

          <!-- Stats -->
          <div class="stats">
            <div class="stat primary">
              <span class="stat-label">${this._text("card.power")}</span>
              <span class="stat-value">${this._formatNumber(power)} <em>${this._text("card.watts")}</em></span>
            </div>
            ${speed > 0 ? html`
              <div class="stat">
                <span class="stat-label">${this._text("card.speed")}</span>
                <span class="stat-value">${this._formatNumber(speed, 1)} <em>${this._text("card.kmh")}</em></span>
              </div>
            ` : nothing}
            ${remaining > 0 ? html`
              <div class="stat">
                <span class="stat-label">${this._text("card.remaining")}</span>
                <span class="stat-value">${this._formatNumber(remaining)} <em>${this._text("card.minutes")}</em></span>
              </div>
            ` : nothing}
          </div>

          <!-- Mode buttons -->
          <div class="mode-grid">
            ${MODES.map((m) => this._renderModeButton(m, currentMode))}
          </div>

          <!-- Hybrid slider -->
          <div class="slider-wrap ${currentMode === "hybrid" ? "" : "disabled"}">
            <div class="slider-header">
              <span class="slider-label">${this._text("card.hybridMix")}</span>
              <span class="slider-value">${sliderValue}% PV</span>
            </div>
            <input
              type="range" min="0" max="100" step="1"
              .value=${String(sliderValue)}
              ?disabled=${currentMode !== "hybrid"}
              @change=${this._updateSliderValue}
            />
            <div class="slider-ticks">
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
      :host {
        display: block;
        --c-bg:         var(--card-background-color,                   #fff);
        --c-on-bg:      var(--primary-text-color,                      #1c1b1f);
        --c-secondary:  var(--secondary-text-color,                    #49454f);
        --c-divider:    var(--divider-color,                           #e0e0e0);
        --c-primary:    var(--primary-color,                           #6750a4);
        --c-primary-c:  var(--md-sys-color-primary-container,          #eaddff);
        --c-primary-on: var(--md-sys-color-on-primary-container,       #21005d);
        --c-surface-c:  var(--md-sys-color-surface-container,
                           color-mix(in srgb, var(--c-on-bg) 6%, var(--c-bg)));
        --c-active-bg:  var(--md-sys-color-secondary-container,
                           color-mix(in srgb, var(--c-primary) 15%, var(--c-bg)));
        --c-active-on:  var(--md-sys-color-on-secondary-container,     var(--c-primary));
        --c-accent:     var(--md-sys-color-secondary,                  #4caf50);
      }

      ha-card {
        background: var(--c-bg);
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.08);
      }

      .shell {
        padding: 16px;
        color: var(--c-on-bg);
        font-family: var(--paper-font-body1_-_font-family, Roboto, sans-serif);
      }

      /* ── Header ── */
      .img-wrap {
        margin: -16px -16px 14px;
      }

      img {
        width: 100%;
        height: 180px;
        object-fit: contain;
        object-position: center center;
        display: block;
        background: transparent;
      }

      .header {
        margin-bottom: 14px;
      }

      h2 {
        margin: 0;
        font-size: 1.2rem;
        font-weight: 500;
        color: var(--c-on-bg);
      }

      .subhead {
        margin: 3px 0 0;
        font-size: 0.8125rem;
        color: var(--c-secondary);
      }

      .subhead strong {
        color: var(--c-primary);
        font-weight: 500;
      }

      /* ── Stats ── */
      .stats {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        gap: 8px;
        margin-bottom: 14px;
      }

      .stat {
        background: var(--c-surface-c);
        border-radius: 10px;
        padding: 10px 12px;
        display: flex;
        flex-direction: column;
        gap: 2px;
      }

      .stat.primary {
        background: var(--c-primary-c);
        color: var(--c-primary-on);
      }

      .stat-label {
        font-size: 0.6875rem;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        opacity: 0.7;
      }

      .stat-value {
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.2;
      }

      .stat-value em {
        font-style: normal;
        font-size: 0.75rem;
        opacity: 0.65;
        margin-left: 1px;
      }

      /* ── Mode grid ── */
      .mode-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-bottom: 12px;
      }

      .mode-btn {
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 12px;
        border: 1px solid var(--c-divider);
        border-radius: 10px;
        background: transparent;
        color: var(--c-secondary);
        font-family: inherit;
        font-size: 0.8125rem;
        font-weight: 500;
        cursor: pointer;
        transition: background 150ms, border-color 150ms, color 150ms, box-shadow 150ms;
        text-align: left;
      }

      .mode-btn svg {
        width: 18px;
        height: 18px;
        fill: currentColor;
        flex-shrink: 0;
      }

      .mode-btn::after {
        content: "";
        position: absolute;
        inset: 0;
        background: currentColor;
        opacity: 0;
        transition: opacity 100ms;
        pointer-events: none;
      }

      .mode-btn:hover::after  { opacity: .06; }
      .mode-btn:active::after { opacity: .12; }

      .mode-btn.active {
        background: var(--c-active-bg);
        border-color: transparent;
        color: var(--c-active-on);
        box-shadow: 0 1px 3px rgba(0,0,0,.10);
      }

      /* ── Slider ── */
      .slider-wrap {
        background: var(--c-surface-c);
        border-radius: 10px;
        padding: 12px;
        transition: opacity 180ms;
      }

      .slider-wrap.disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      .slider-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
      }

      .slider-label {
        font-size: 0.8125rem;
        font-weight: 500;
        color: var(--c-on-bg);
      }

      .slider-value {
        font-size: 0.8125rem;
        font-weight: 600;
        color: var(--c-accent);
      }

      input[type="range"] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 4px;
        border-radius: 2px;
        background: var(--c-divider);
        accent-color: var(--c-accent);
        outline: none;
        cursor: pointer;
      }

      input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: var(--c-accent);
        cursor: pointer;
        transition: box-shadow 150ms, transform 120ms;
      }

      input[type="range"]:not(:disabled):hover::-webkit-slider-thumb {
        box-shadow: 0 0 0 6px color-mix(in srgb, var(--c-accent) 18%, transparent);
        transform: scale(1.1);
      }

      input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border: none;
        border-radius: 50%;
        background: var(--c-accent);
        cursor: pointer;
      }

      .slider-ticks {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        font-size: 0.6875rem;
        color: var(--c-secondary);
      }

      /* ── Responsive ── */
      @media (max-width: 400px) {
        img { height: 150px; }
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
