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
- Basic familiarity with Google Sheets

### Installation

1. **Create a new Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create a new blank spreadsheet

2. **Open Google Apps Script**
   - In your Google Sheet, go to `Extensions` → `Apps Script`
   - Delete any existing code in the editor

3. **Add the Script Files**
   - Copy and paste each of the following files into separate script files:
     - `importjson.gs` - JSON import functionality
     - `players.gs` - Player database management
     - `refresh.gs` - Data refresh automation
     - `reset.gs` - Sheet reset utilities

4. **Set Up Your League Information**
   - In your Google Sheet, create a "Home" sheet
   - Add your Sleeper username in cell B2
   - Add the current year in cell B3
   - Add your Sleeper user ID in cell B4

5. **Create Required Sheets**
   Create the following sheets in your Google Sheets document:
   - `Home` - Main dashboard and configuration
   - `Players` - NFL player database
   - `Trade Finder` - Trade analysis tool
   - `Team Name/Owner ID` - League roster information
   - `Team Names` - League user information
   - `Master` - Matchup and scoring data

6. **Initial Data Load**
   - Run the `Players()` function to load the NFL player database
   - Run the `refresh()` function to load your league data

## Usage

### Getting Your Sleeper User ID
1. Go to your Sleeper profile
2. Your user ID is in the URL: `https://sleeper.app/leagues/[LEAGUE_ID]/team/[USER_ID]`
3. Or use the Sleeper API: `https://api.sleeper.app/v1/user/[USERNAME]`

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

## Contributing

This is an open-source project. Feel free to:
- Report bugs or request features
- Submit improvements to the codebase
- Share your customizations with the community

## License

This project uses the ImportJSON library (GPL-3.0 license) for API integration. See individual files for specific licensing information.

## Disclaimer

This tool is not affiliated with Sleeper. Use responsibly and in accordance with Sleeper's terms of service. Fantasy football decisions are your own responsibility!