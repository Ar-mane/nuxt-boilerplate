const fs = require('fs');

const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');

async function main() {
  const serviceAccountAuth = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY,
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
  });
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID, serviceAccountAuth);
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle['Raw data'];

  const manifest = JSON.parse(fs.readFileSync('.lighthouseci/manifest.json'));

  const rows = manifest
    .filter(data => data.isRepresentativeRun)
    .map(data => {
      const results = JSON.parse(fs.readFileSync(data.jsonPath));

      return {
        URL: results.requestedUrl,
        Date: new Date(results.fetchTime),
        UnixTime: new Date(results.fetchTime).getTime(),
        FCP: results.audits['first-contentful-paint'].numericValue,
        LCP: results.audits['largest-contentful-paint'].numericValue,
        TBT: results.audits['total-blocking-time'].numericValue,
        TTI: results.audits.interactive.numericValue,
        CLS: results.audits['cumulative-layout-shift'].numericValue,
        pageScore: results.categories.performance.score,
        device: results.configSettings.formFactor,
        brand: "LMDV"
      };
    });
  await sheet.addRows(rows);
}

main();
