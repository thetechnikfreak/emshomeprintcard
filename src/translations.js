const TRANSLATIONS = {
  en: {
    card: {
      title: "EV Charger",
      power: "Power",
      speed: "Speed",
      remaining: "Remaining",
      watts: "W",
      kmh: "km/h",
      minutes: "min",
      mode: "Charging mode",
      hybridMix: "PV / Grid mix",
      pvFull: "100% PV",
      balanced: "50/50",
      gridFull: "100% Grid",
      serviceError: "Service call failed. See browser console for details.",
    },
    modes: {
      lock: "Do not charge",
      grid: "Grid",
      pv: "PV surplus",
      hybrid: "Hybrid",
    },
    editor: {
      title: "EV Charger Card configuration",
      cardTitle: "Card title",
      language: "Language",
      imageUrl: "Image URL",
      chargingModeEntity: "Charging mode entity",
      powerEntity: "Power entity",
      pvQuotaEntity: "PV quota entity",
      speedEntity: "Speed entity (optional)",
      remainingEntity: "Remaining time entity (optional)",
      entities: "Entities",
      appearance: "Appearance",
      languageAuto: "Auto (Home Assistant language)",
      languageEn: "English",
      languageDe: "German",
    },
  },
  de: {
    card: {
      title: "EV-Ladestation",
      power: "Leistung",
      speed: "Geschwindigkeit",
      remaining: "Verbleibend",
      watts: "W",
      kmh: "km/h",
      minutes: "Min",
      mode: "Lademodus",
      hybridMix: "PV-/Netz-Mix",
      pvFull: "100% PV",
      balanced: "50/50",
      gridFull: "100% Netz",
      serviceError: "Service-Aufruf fehlgeschlagen. Details in der Browser-Konsole.",
    },
    modes: {
      lock: "Nicht laden",
      grid: "Netz",
      pv: "PV-Überschuss",
      hybrid: "Hybrid",
    },
    editor: {
      title: "EV Charger Card Konfiguration",
      cardTitle: "Kartentitel",
      language: "Sprache",
      imageUrl: "Bild-URL",
      chargingModeEntity: "Entity für Lademodus",
      powerEntity: "Entity für Leistung",
      pvQuotaEntity: "Entity für PV-Anteil",
      speedEntity: "Entity für Geschwindigkeit (optional)",
      remainingEntity: "Entity für Restzeit (optional)",
      entities: "Entitäten",
      appearance: "Darstellung",
      languageAuto: "Auto (Home Assistant Sprache)",
      languageEn: "Englisch",
      languageDe: "Deutsch",
    },
  },
};

function getNestedValue(object, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), object);
}

export function getLanguage(hass, override) {
  if (override === "en" || override === "de") {
    return override;
  }
  const language = hass?.locale?.language || hass?.language || "en";
  return String(language).toLowerCase().startsWith("de") ? "de" : "en";
}

export function t(language, key) {
  const selected = TRANSLATIONS[language] || TRANSLATIONS.en;
  return getNestedValue(selected, key) || getNestedValue(TRANSLATIONS.en, key) || key;
}
