import { LitElement, html, css } from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class EvChargerCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {},
    };
  }
  setConfig(config) {
    this.config = config;
  }
 
  getCardSize() {
    return 3;
  }

  _setChargingMode(mode) {
    // Hole den aktuellen PV-Prozentsatz
    const currentPvQuota = this.hass.states[this.config.pv_quota_entity]?.state || 50;
    
    // Setze Standard-Werte basierend auf dem Modus
    let minpvpowerquota;
    if (mode === 'pv') {
      minpvpowerquota = 100;
    } else if (mode === 'grid') {
      minpvpowerquota = 0;
    } else if (mode === 'hybrid') {
      minpvpowerquota = parseInt(currentPvQuota);
    } else { // lock
      minpvpowerquota = 0;
    }

    this.hass.callService("emshome", "set_charging_mode", {
      mode: mode,
      minpvpowerquota: minpvpowerquota
    });
  }

  _updateSliderValue(e) {
    const value = Number(e.target.value);
    
    // Call the emshome prozentage service
    this.hass.callService("emshome", "prozentage", {
      prozentage: value
    }).catch(err => {
      console.error("Failed to call prozentage service:", err);
    });
  }

  render() {
    const currentMode = this.hass.states[this.config.charging_mode_entity]?.state;
    const power = this.hass.states[this.config.power_entity]?.state || 0;
    const sliderValue = this.hass.states[this.config.pv_quota_entity]?.state || 50;
    
    // Optional: Geschwindigkeit und verbleibende Zeit (falls vorhanden)
    const speed = this.config.speed_entity 
      ? this.hass.states[this.config.speed_entity]?.state || 0 
      : 0;
    const remaining = this.config.remaining_entity 
      ? this.hass.states[this.config.remaining_entity]?.state || 0 
      : 0;

    return html`
      <ha-card header="EV-Ladestation">
        <div class="card-content">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />

          <!-- Bild und Statistiken nebeneinander -->
          <div class="image-stats">
            <img
              src="https://www.ablmobility.de/global/bilder/introabschnitt/produkte/basic-mobil/13_licht-1024.png"
              alt="Ladestation"
            />
            <div class="stats">
              <div class="stat-line">
                <span class="material-icons">bolt</span>
                <strong>${power} W</strong>
              </div>
              ${speed > 0 ? html`
                <div class="stat-line">
                  <span class="material-icons">speed</span>
                  <strong>${speed} km/h</strong>
                </div>
              ` : ''}
              ${remaining > 0 ? html`
                <div class="stat-line">
                  <span class="material-icons">schedule</span>
                  <strong>${remaining} min</strong>
                </div>
              ` : ''}
            </div>
          </div>

          <!-- Lademodus-Auswahl -->
          <div class="button-grid">
            <mwc-button
              class="${currentMode === 'lock' ? 'active' : ''}"
              @click="${() => this._setChargingMode('lock')}"
            >
              Nicht laden
            </mwc-button>
            <mwc-button
              class="${currentMode === 'grid' ? 'active' : ''}"
              @click="${() => this._setChargingMode('grid')}"
            >
              Netz-Laden
            </mwc-button>
            <mwc-button
              class="${currentMode === 'pv' ? 'active' : ''}"
              @click="${() => this._setChargingMode('pv')}"
            >
              PV-Überschuss
            </mwc-button>
            <mwc-button
              class="${currentMode === 'hybrid' ? 'active' : ''}"
              @click="${() => this._setChargingMode('hybrid')}"
            >
              Hybrid
            </mwc-button>
          </div>

          <!-- PV/Netz-Mix-Slider (nur im Hybrid-Modus aktiv) -->
          <div class="slider-section ${currentMode === 'hybrid' ? '' : 'disabled'}">
            <label for="mix-slider">PV-/Netz-Mix</label>
            <input
              type="range"
              id="mix-slider"
              min="0"
              max="100"
              .value="${sliderValue}"
              @change="${this._updateSliderValue}"
              ?disabled="${currentMode !== 'hybrid'}"
            />
            <div class="slider-labels">
              <span>100 % PV</span>
              <span>50/50</span>
              <span>100 % Netz</span>
            </div>
          </div>
        </div>
      </ha-card>
    `;
  }

  static get styles() {
    return css`
      ha-card {
        padding: 16px;
      }

      .image-stats {
        display: flex;
        align-items: flex-start;
        gap: 16px;
        margin-bottom: 16px;
      }

      img {
        width: 100%;
        max-width: 220px;
        height: auto;
        display: block;
      }

      .stats {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .stat-line {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 6px;
      }

      .material-icons {
        font-family: "Material Icons";
        font-size: 18px;
        color: var(--primary-color);
      }

      .button-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin-bottom: 16px;
      }

      mwc-button {
        --mdc-theme-primary: var(--primary-color);
      }

      mwc-button.active {
        --mdc-theme-primary: var(--primary-color);
        font-weight: bold;
        border: 2px solid var(--primary-color);
        background-color: rgba(0, 123, 255, 0.1);
      }

      .slider-section {
        margin-top: 12px;
        transition: opacity 0.3s ease;
      }

      .slider-section.disabled {
        opacity: 0.5;
      }

      .slider-section label {
        font-weight: bold;
        display: block;
        margin-bottom: 8px;
      }

      input[type="range"] {
        width: 100%;
      }

      input[type="range"]:disabled {
        cursor: not-allowed;
      }

      .slider-labels {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-top: 4px;
        color: #666;
      }
    `;
  }
}

customElements.define("ev-charger-card", EvChargerCard);
