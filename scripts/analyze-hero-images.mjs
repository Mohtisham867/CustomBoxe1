import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsDir = path.join(__dirname, 'src', 'assets');

async function analyzeImages(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            await analyzeImages(fullPath);
        } else if (file.name.match(/\.(png|jpg|jpeg)$/i) && file.name.toLowerCase().includes('hero')) {
            try {
                const metadata = await sharp(fullPath).metadata();
                console.log(`Image: ${file.name}`);
                console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
                console.log(`Size: ${(fs.statSync(fullPath).size / 1024 / 1024).toFixed(2)} MB`);
                console.log('---');
            } catch (err) {
                console.error(`Error reading ${file.name}:`, err.message);
            }
        }
    }
}

console.log('Analyzing Hero Images...\n');
analyzeImages(assetsDir).catch(console.error);
