import { LitElement, html, css } from "lit";
import { getLanguage, t } from "./translations.js";

class EvChargerEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: { state: true },
    };
  }

  setConfig(config) {
    this._config = {
      title: "",
      language: "auto",
      image_url: "",
      charging_mode_entity: "",
      power_entity: "",
      pv_quota_entity: "",
      speed_entity: "",
      remaining_entity: "",
      ...config,
    };
  }

  _lang() {
    return getLanguage(this.hass, this._config?.language);
  }

  _text(key) {
    return t(this._lang(), key);
  }

  _onInputChanged(event) {
    if (!this._config) {
      return;
    }

    const target = event.target;
    const key = target.configValue;
    const value = event.detail?.value ?? target.value;

    if (!key) {
      return;
    }

    const nextConfig = {
      ...this._config,
      [key]: value,
    };

    this._config = nextConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: nextConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  _onLanguageChanged(event) {
    this._onInputChanged({
      target: {
        configValue: "language",
        value: event.target.value,
      },
    });
  }

  _renderEntityPicker(key, label) {
    return html`
      <ha-textfield
        .label=${label}
        .value=${this._config?.[key] || ""}
        .configValue=${key}
        @change=${this._onInputChanged}
      ></ha-textfield>
    `;
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    return html`
      <div class="editor">
        <h3>${this._text("editor.title")}</h3>

        <section>
          <h4>${this._text("editor.entities")}</h4>
          ${this._renderEntityPicker("charging_mode_entity", this._text("editor.chargingModeEntity"))}
          ${this._renderEntityPicker("power_entity", this._text("editor.powerEntity"))}
          ${this._renderEntityPicker("pv_quota_entity", this._text("editor.pvQuotaEntity"))}
          ${this._renderEntityPicker("speed_entity", this._text("editor.speedEntity"))}
          ${this._renderEntityPicker("remaining_entity", this._text("editor.remainingEntity"))}
        </section>

        <section>
          <h4>${this._text("editor.appearance")}</h4>
          <ha-textfield
            .label=${this._text("editor.cardTitle")}
            .value=${this._config.title || ""}
            .configValue=${"title"}
            @change=${this._onInputChanged}
          ></ha-textfield>

          <ha-textfield
            .label=${this._text("editor.imageUrl")}
            .value=${this._config.image_url || ""}
            .configValue=${"image_url"}
            @change=${this._onInputChanged}
          ></ha-textfield>

          <ha-select
            .label=${this._text("editor.language")}
            .value=${this._config.language || "auto"}
            @change=${this._onLanguageChanged}
            @closed=${(event) => event.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="auto">${this._text("editor.languageAuto")}</mwc-list-item>
            <mwc-list-item value="en">${this._text("editor.languageEn")}</mwc-list-item>
            <mwc-list-item value="de">${this._text("editor.languageDe")}</mwc-list-item>
          </ha-select>
        </section>
      </div>
    `;
  }

  static get styles() {
    return css`
    .editor {
      display: grid;
      gap: 16px;
      padding: 10px 6px 0;
    }

    h3,
    h4 {
      margin: 0;
      color: var(--primary-text-color);
    }

    section {
      display: grid;
      gap: 10px;
      border: 1px solid var(--divider-color);
      border-radius: 12px;
      padding: 12px;
      background: color-mix(in srgb, var(--card-background-color) 92%, #d9e8f7);
    }

    ha-textfield,
    ha-select,
    ha-entity-picker {
      width: 100%;
    }
    `;
  }
}

customElements.define("ev-charger-editor", EvChargerEditor);
