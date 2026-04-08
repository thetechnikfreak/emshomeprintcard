# EV Card for my Ems Home Intigration
A Ev Card for my [ Ems Home Intigration ]([https://hacs.xyz/](https://github.com/thetechnikfreak/emshomehacs]) for the Abl Wallbox eMH1 
## Installation
1. Make sure you have [HACS](https://hacs.xyz/) installed
2. Go to HACS > Integrations
3. Click the "..." menu and select "Custom repositories"
4. Add the URL of this repository and select "Integration" as the category
5. Click "ADD"
6. Search for "Emshome EV Card"
7. Click "Install"
8. Restart Home Assistant
## Usage
```yaml
type: custom:ev-charger-card
charging_mode_entity: 
power_entity: 
speed_entity: 
remaining_entity: 
```
