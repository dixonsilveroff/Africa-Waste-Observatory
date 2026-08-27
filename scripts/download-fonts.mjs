import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const fontsDir = path.resolve('public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  fs.mkdirSync(fontsDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        const redirectUrl = new URL(res.headers.location, url).toString();
        downloadFile(redirectUrl, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: status ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved: ${dest} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading Inter and Public Sans variable woff2 files...');

  // Inter Variable woff2
  await downloadFile(
    'https://unpkg.com/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
    path.join(fontsDir, 'Inter-Variable.woff2')
  );

  // Public Sans Variable woff2
  await downloadFile(
    'https://unpkg.com/@fontsource-variable/public-sans/files/public-sans-latin-wght-normal.woff2',
    path.join(fontsDir, 'PublicSans-Variable.woff2')
  );

  console.log('Done downloading fonts.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
