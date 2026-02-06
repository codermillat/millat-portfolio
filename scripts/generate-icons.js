const sharp = require('sharp');
const fs = require('fs');

const sizes = [16, 32, 180, 192, 512];

async function generateIcons() {
  const input = 'public/profile.jpg';
  
  // Generate favicons
  for (const size of sizes) {
    await sharp(input)
      .resize(size, size, { fit: 'cover' })
      .toFile(`public/favicon-${size}x${size}.png`);
    console.log(`Generated favicon-${size}x${size}.png`);
  }
  
  // Generate apple-touch-icon
  await sharp(input)
    .resize(180, 180, { fit: 'cover' })
    .toFile('public/apple-touch-icon.png');
  console.log('Generated apple-touch-icon.png');
  
  // Generate OG image (1200x630)
  await sharp(input)
    .resize(1200, 630, { fit: 'cover', position: 'center' })
    .toFile('public/og-image.png');
  console.log('Generated og-image.png');
  
  console.log('✅ All icons generated!');
}

generateIcons().catch(console.error);
