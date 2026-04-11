import { LitElement, html, css, nothing } from "lit";
import "./ev-charger-editor.js";
import { getLanguage, t } from "./translations.js";

const DEFAULT_IMAGE = "https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png";
const MODES = ["lock", "grid", "pv", "hybrid"];

class EvChargerCard extends LitElement {
  static properties = {
    hass: {},
    config: {},
  };

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
    if (!config?.charging_mode_entity || !config?.power_entity || !config?.pv_quota_entity) {
      throw new Error("Required: charging_mode_entity, power_entity, pv_quota_entity");
    }

    this.config = {
      ...EvChargerCard.getStubConfig(),
      ...config,
      image_url: config.image_url || DEFAULT_IMAGE,
    };
  }

  getCardSize() {
    return 4;
  }

  _lang() {
    return getLanguage(this.hass, this.config?.language);
  }

  _text(key) {
    return t(this._lang(), key);
  }

  _state(entityId, fallback = "") {
    return this.hass?.states?.[entityId]?.state ?? fallback;
  }

  _numberState(entityId, fallback = 0) {
    const value = Number(this._state(entityId, fallback));
    return Number.isFinite(value) ? value : fallback;
  }

  _formatNumber(value, decimals = 0) {
    return new Intl.NumberFormat(this._lang(), {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(value);
  }

  async _setChargingMode(mode) {
    const currentPvQuota = this._numberState(this.config.pv_quota_entity, 50);
    let minpvpowerquota = 0;

    if (mode === "pv") {
      minpvpowerquota = 100;
    } else if (mode === "hybrid") {
      minpvpowerquota = currentPvQuota;
    }

    try {
      await this.hass.callService("emshome", "set_charging_mode", {
        mode,
        minpvpowerquota,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(this._text("card.serviceError"), error);
    }
  }

  async _updateSliderValue(event) {
    const value = Number(event.target.value);

    try {
      await this.hass.callService("emshome", "prozentage", {
        prozentage: value,
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(this._text("card.serviceError"), error);
    }
  }

  _renderModeButton(mode, currentMode) {
    const active = currentMode === mode;
    return html`
      <button
        class="mode-btn ${active ? "active" : ""}"
        @click=${() => this._setChargingMode(mode)}
        aria-pressed=${active ? "true" : "false"}
      >
        ${t(this._lang(), `modes.${mode}`)}
      </button>
    `;
  }

  render() {
    if (!this.hass || !this.config) {
      return nothing;
    }

    const currentMode = this._state(this.config.charging_mode_entity, "lock");
    const power = this._numberState(this.config.power_entity, 0);
    const sliderValue = this._numberState(this.config.pv_quota_entity, 50);
    const speed = this.config.speed_entity ? this._numberState(this.config.speed_entity, 0) : 0;
    const remaining = this.config.remaining_entity ? this._numberState(this.config.remaining_entity, 0) : 0;

    const title = this.config.title || this._text("card.title");

    return html`
      <ha-card>
        <div class="shell">
          <div class="header">
            <div>
              <h2>${title}</h2>
              <p>${this._text("card.mode")}: ${t(this._lang(), `modes.${currentMode}`)}</p>
            </div>
            <span class="live-pill">LIVE</span>
          </div>

          <div class="hero">
            <img src=${this.config.image_url || DEFAULT_IMAGE} alt="EV charger" loading="lazy" />
            <div class="stats-grid">
              <article class="stat primary">
                <span>${this._text("card.power")}</span>
                <strong>${this._formatNumber(power)} ${this._text("card.watts")}</strong>
              </article>
              ${speed > 0
                ? html`
                    <article class="stat">
                      <span>${this._text("card.speed")}</span>
                      <strong>${this._formatNumber(speed, 1)} ${this._text("card.kmh")}</strong>
                    </article>
                  `
                : nothing}
              ${remaining > 0
                ? html`
                    <article class="stat">
                      <span>${this._text("card.remaining")}</span>
                      <strong>${this._formatNumber(remaining)} ${this._text("card.minutes")}</strong>
                    </article>
                  `
                : nothing}
            </div>
          </div>

          <div class="mode-grid">${MODES.map((mode) => this._renderModeButton(mode, currentMode))}</div>

          <div class="slider-shell ${currentMode === "hybrid" ? "" : "disabled"}">
            <label for="mix-slider">${this._text("card.hybridMix")}</label>
            <input
              id="mix-slider"
              type="range"
              min="0"
              max="100"
              step="1"
              .value=${String(sliderValue)}
              ?disabled=${currentMode !== "hybrid"}
              @change=${this._updateSliderValue}
            />
            <div class="slider-labels">
              <span>${this._text("card.pvFull")}</span>
              <span>${this._text("card.balanced")}</span>
              <span>${this._text("card.gridFull")}</span>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      --ev-accent: #0b8f6a;
      --ev-accent-soft: #a7f1d8;
      --ev-bg-top: #e9f7ff;
      --ev-bg-mid: #f8fffd;
      --ev-bg-bottom: #eef5ff;
      --ev-text-primary: #132235;
      --ev-text-secondary: #49607c;
      --ev-surface: rgba(255, 255, 255, 0.72);
      display: block;
    }

    ha-card {
      overflow: hidden;
      border-radius: 20px;
      border: 1px solid rgba(35, 87, 141, 0.18);
      box-shadow: 0 14px 36px rgba(15, 34, 68, 0.12);
      background:
        radial-gradient(120% 180% at 0% 0%, #d8f5e9 0%, transparent 52%),
        radial-gradient(120% 180% at 100% 100%, #d6e7ff 0%, transparent 50%),
        linear-gradient(160deg, var(--ev-bg-top), var(--ev-bg-mid) 48%, var(--ev-bg-bottom));
    }

    .shell {
      padding: 18px;
      color: var(--ev-text-primary);
      animation: fade-in 320ms ease-out;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 14px;
      gap: 12px;
    }

    h2 {
      margin: 0;
      font-size: 1.15rem;
      letter-spacing: 0.01em;
      line-height: 1.3;
    }

    .header p {
      margin: 4px 0 0;
      color: var(--ev-text-secondary);
      font-size: 0.82rem;
    }

    .live-pill {
      align-self: center;
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      padding: 5px 10px;
      border-radius: 99px;
      color: #ffffff;
      background: linear-gradient(90deg, #0e9f74, #09935f);
      box-shadow: 0 6px 14px rgba(13, 112, 80, 0.3);
    }

    .hero {
      display: grid;
      grid-template-columns: 1.05fr 1fr;
      gap: 12px;
      margin-bottom: 14px;
      align-items: stretch;
    }

    img {
      width: 100%;
      height: 148px;
      object-fit: cover;
      border-radius: 14px;
      border: 1px solid rgba(15, 50, 96, 0.1);
      background: #ffffff;
    }

    .stats-grid {
      display: grid;
      gap: 8px;
      align-content: start;
    }

    .stat {
      background: var(--ev-surface);
      border: 1px solid rgba(31, 79, 128, 0.12);
      backdrop-filter: blur(2px);
      border-radius: 12px;
      padding: 9px 10px;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .stat span {
      font-size: 0.72rem;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #55708d;
    }

    .stat strong {
      font-size: 1.05rem;
      line-height: 1.2;
    }

    .stat.primary {
      border-color: rgba(11, 143, 106, 0.32);
      box-shadow: inset 0 0 0 1px rgba(11, 143, 106, 0.06);
    }

    .mode-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8px;
      margin-bottom: 14px;
    }

    .mode-btn {
      border: 1px solid rgba(25, 78, 128, 0.2);
      background: rgba(255, 255, 255, 0.62);
      color: #20334a;
      border-radius: 12px;
      padding: 10px;
      font-size: 0.85rem;
      font-weight: 600;
      transition: transform 120ms ease, box-shadow 150ms ease, border-color 150ms ease, background 150ms ease;
      cursor: pointer;
    }

    .mode-btn:hover {
      transform: translateY(-1px);
      border-color: rgba(11, 143, 106, 0.5);
    }

    .mode-btn.active {
      background: linear-gradient(160deg, #d3f9ea, #e7fff6 60%, #f9fffd);
      border-color: rgba(11, 143, 106, 0.6);
      box-shadow: 0 8px 16px rgba(11, 143, 106, 0.15);
      color: #0b684e;
    }

    .slider-shell {
      background: rgba(255, 255, 255, 0.54);
      border: 1px solid rgba(32, 70, 108, 0.13);
      border-radius: 14px;
      padding: 12px;
      transition: opacity 180ms ease;
    }

    .slider-shell.disabled {
      opacity: 0.5;
    }

    label {
      display: block;
      font-size: 0.84rem;
      font-weight: 700;
      margin-bottom: 8px;
      color: #1f3652;
    }

    input[type="range"] {
      width: 100%;
      accent-color: var(--ev-accent);
    }

    .slider-labels {
      margin-top: 7px;
      display: flex;
      justify-content: space-between;
      font-size: 0.72rem;
      color: #4f6784;
      gap: 8px;
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 480px) {
      .hero {
        grid-template-columns: 1fr;
      }

      img {
        height: 128px;
      }
    }
  `;
}

customElements.define("ev-charger-card", EvChargerCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ev-charger-card",
  name: "EV Charger Card",
  description: "Premium EV charger card for the EMS Home integration",
});
