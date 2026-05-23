# Highland Energy Audits

Static website for Highland Energy Audits, including the home audit profile, scheduling page, about page, favicon assets, and interactive cottage audit map.

## Notes

- `schedule.php` sends scheduling requests to `HighlandEnergyAudits@gmail.com` when hosted on a PHP-capable server with mail configured.
- The cottage model is embedded in `cottage-model-data.js` so the homepage can render locally without a build step.
