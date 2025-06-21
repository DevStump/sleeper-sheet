# Sleeper Fantasy Football Analysis Sheet

> **⚠️ DEPRECATED PROJECT ⚠️**
> 
> **This project has been deprecated and evolved into the Dynasty Nerds app. For the latest features, better performance, and ongoing support, please visit:**
> 
> **🚀 [Dynasty Nerds - Dynasty GM](https://www.dynastynerds.com/dynasty-gm-landing/)**
> 
> The Dynasty Nerds app provides all the functionality of this Google Sheets tool and much more, with a modern interface and regular updates.

---

A Google Apps Script-powered Google Sheets template that connects to the Sleeper fantasy football platform API to provide comprehensive league analysis, roster management, and trade calculations.

## Features

### 📊 **League Data Import**
- Import your Sleeper fantasy football leagues automatically
- View real-time roster data for all teams in your league
- Track player statistics and availability

### 🔄 **Automated Data Refresh**
- One-click refresh of all league data
- Automatic updates for matchups, rosters, and team information
- Configurable refresh intervals

### 💰 **Trade Calculator**
- Advanced trade analysis and valuation
- Compare player values across different scoring systems
- Interactive trade finder with customizable filters
- Reset functionality for clean slate analysis

### 👥 **Team Management**
- View your roster composition
- Analyze opponent rosters
- Track team performance metrics
- Player depth chart visualization

### 🎯 **Player Database**
- Complete NFL player database integration
- Player stats, injury status, and team information
- Search and filter functionality
- Position-based analysis

## Setup Instructions

### Prerequisites
- Google account with access to Google Sheets
- Active Sleeper fantasy football league
- Your Sleeper username (found in Sleeper app settings)

### Installation

1. **Copy the Google Sheet Template**
   - Click this link to make a copy: [Sleeper Fantasy Football Analysis Sheet](https://docs.google.com/spreadsheets/d/11brRnpj0p7nmMmT-OvnL1NhLPiRFfgWHnNRbXfUgoxw/copy)
   - Click "Make a copy" when prompted
   - The sheet will be added to your Google Drive

2. **Connect Your Sleeper Account**
   - Open your copied sheet
   - Go to the "Home" tab
   - Enter your Sleeper username in the designated cell
   - Your username can be found in the Sleeper app under Settings

3. **Load Your League Data**
   - Click the "Refresh Data" button or run the refresh function
   - Your leagues and roster data will automatically populate
   - The player database will be loaded automatically

## Usage

### Finding Your Sleeper Username
1. Open the Sleeper app on your phone or web browser
2. Go to Settings (usually in your profile section)
3. Your username is displayed in the account settings
4. Enter this username in the sheet's "Home" tab

### Refreshing Data
- Click the refresh button or run the `refresh()` function
- Data will automatically update from the Sleeper API
- Recommended to refresh before important league decisions

### Using the Trade Calculator
1. Navigate to the "Trade Finder" sheet
2. Select players you're considering trading
3. Use the built-in formulas to calculate trade values
4. Use `resetTradeFinder()` to clear selections

### Player Analysis
- Use the "Players" sheet to research player information
- Filter by position, team, or injury status
- Export data for external analysis tools

## Customization

### Adding Custom Formulas
The sheet supports custom Google Sheets formulas. Common examples:
```
=IMPORTJSON("https://api.sleeper.app/v1/league/LEAGUE_ID/rosters","")
=IMPORTJSON("https://api.sleeper.app/v1/league/LEAGUE_ID/users","")
=IMPORTJSON("https://api.sleeper.app/v1/league/LEAGUE_ID/matchups/WEEK","")
```

### Modifying Refresh Frequency
Edit the `refresh()` function in `refresh.gs` to customize:
- Which data sources to update
- Refresh intervals
- Additional league information

## API Reference

This tool uses the [Sleeper API](https://docs.sleeper.com/) to fetch:
- League information and settings
- User profiles and team names
- Roster compositions and player ownership
- Weekly matchups and scoring
- Complete NFL player database

## Troubleshooting

### Common Issues
- **Script execution timeout**: For large leagues, run functions individually
- **API rate limits**: Wait between successive data refreshes
- **Missing data**: Verify your league ID and user credentials

### Getting Help
- Check the Google Apps Script execution logs
- Verify your league is public or you have proper access
- Ensure all required sheets are created with correct names

## Support

If you encounter any issues or need help:
- Check the troubleshooting section above
- Verify your Sleeper username is entered correctly
- Ensure your leagues are set to public or you have proper access

## License

This project uses the ImportJSON library (GPL-3.0 license) for API integration. See individual files for specific licensing information.

## Disclaimer

This tool is not affiliated with Sleeper. Use responsibly and in accordance with Sleeper's terms of service. Fantasy football decisions are your own responsibility!