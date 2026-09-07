// Program main operational level and command centre which organises and cleans up the data.
//  It loops over multiple cities asynchronously, catches specific errors (like network failures or bad city inputs), and prints the clean, destructured summaries.


require('dotenv').config();
// index.js
const { fetchCleanWeather } = require('./weatherService');

// Batch of cities to test simultaneously
const targetedCities = ['Toronto', 'London', 'InvalidCityXYZ', 'Tokyo'];

async function runDashboard() {
  console.log("=== WEATHER DASHBOARD START ===");

  for (const city of targetedCities) {
    try {
      const report = await fetchCleanWeather(city);
      
      // Print our beautifully sanitized data
      console.log(`\n✅ WEATHER REPORT: ${report.locationName}`);
      console.log(`   Condition:   ${report.condition}`);
      console.log(`   Temperature: ${report.currentTemp} (Low: ${report.minTemp} | High: ${report.maxTemp})`);
      console.log(`   Humidity:    ${report.humidity}\n`);

    } catch (error) {
      // Micro-Problem 4: Intentionally catching specific errors gracefully
      console.error(`\n❌ ERROR processing "${city}": ${error.message}\n`);
    }
    
    console.log("-----------------------------------------");
  }

  console.log("=== DASHBOARD PROCESS FINISHED ===");
}

runDashboard();
