# EMS Home EV Charger Card

Premium Lovelace card for the [EMS Home integration](https://github.com/thetechnikfreak/emshomehacs) and ABL eMH1 wallbox setups.

## Features

- Premium UI with responsive layout for desktop and mobile.
- Fast charging mode switching (`lock`, `grid`, `pv`, `hybrid`).
- Hybrid PV/grid slider with direct service calls.
- Optional speed and remaining time stats.
- Visual Lovelace editor with entity pickers.
- Built-in i18n (`en`, `de`, or auto language based on Home Assistant).

## Installation

1. Make sure [HACS](https://hacs.xyz/) is installed.
2. Open HACS, then go to Integrations.
3. Open the menu (`...`) and select Custom repositories.
4. Add this repository URL and choose `Dashboard` as category.
5. Install `Emshome EV Card`.
6. Restart Home Assistant.

## Lovelace Configuration

### Required options

```yaml
type: custom:ev-charger-card
charging_mode_entity: sensor.ev_charging_mode
power_entity: sensor.ev_charging_power
pv_quota_entity: sensor.ev_pv_quota
```

### Optional options

```yaml
type: custom:ev-charger-card
title: EV Charger
language: auto # auto | en | de
image_url: https://example.com/charger.png
charging_mode_entity: sensor.ev_charging_mode
power_entity: sensor.ev_charging_power
pv_quota_entity: sensor.ev_pv_quota
speed_entity: sensor.ev_charge_speed
remaining_entity: sensor.ev_remaining_minutes
```

## Visual Editor

The card includes a Lovelace visual editor (`ev-charger-editor`) with:

- Entity pickers for required and optional entities.
- Appearance settings (`title`, `image_url`).
- Language selector (`auto`, `en`, `de`).

## Services Used

The card calls EMS Home services on user interaction:

- `emshome.set_charging_mode`
- `emshome.prozentage`

## Development

Install dependencies and build:

```bash
npm install
npm run build
```

Rollup outputs the production bundle to `dist/emshomeevcard.js`.
