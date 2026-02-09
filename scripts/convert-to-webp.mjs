import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const assetsDir = path.join(__dirname, 'src', 'assets');
const srcDir = path.join(__dirname, 'src');
const MAX_WIDTH = 1920; // Max width for hero images

// Track conversions for reporting
const conversions = [];
const codeUpdates = [];

async function convertImageToWebP(imagePath) {
    try {
        const ext = path.extname(imagePath).toLowerCase();
        if (!['.png', '.jpg', '.jpeg'].includes(ext)) {
            return null;
        }

        const webpPath = imagePath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

        // Check if WebP already exists
        if (fs.existsSync(webpPath)) {
            console.log(`⏭️  Skipping ${path.basename(imagePath)} (WebP exists)`);
            return null;
        }

        const metadata = await sharp(imagePath).metadata();
        let pipeline = sharp(imagePath);

        // Resize if width exceeds MAX_WIDTH
        if (metadata.width > MAX_WIDTH) {
            pipeline = pipeline.resize(MAX_WIDTH, null, {
                withoutEnlargement: true,
                fit: 'inside'
            });
        }

        // Convert to WebP with quality 85
        await pipeline.webp({ quality: 85 }).toFile(webpPath);

        const originalSize = fs.statSync(imagePath).size;
        const newSize = fs.statSync(webpPath).size;
        const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

        conversions.push({
            original: path.basename(imagePath),
            size: `${(originalSize / 1024 / 1024).toFixed(2)} MB → ${(newSize / 1024 / 1024).toFixed(2)} MB`,
            savings: `${savings}%`
        });

        console.log(`✅ Converted: ${path.basename(imagePath)} (${savings}% smaller)`);
        return { originalPath: imagePath, webpPath };
    } catch (err) {
        console.error(`❌ Error converting ${path.basename(imagePath)}:`, err.message);
        return null;
    }
}

async function processDirectory(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            await processDirectory(fullPath);
        } else if (file.name.match(/\.(png|jpg|jpeg)$/i)) {
            await convertImageToWebP(fullPath);
        }
    }
}

function updateCodeReferences(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            updateCodeReferences(fullPath);
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Replace .png, .jpg, .jpeg with .webp in imports and src attributes
            const patterns = [
                /from\s+["']([^"']+)\.(png|jpg|jpeg)["']/gi,
                /src=\{([^}]+)\.(png|jpg|jpeg)\}/gi,
                /src=["']([^"']+)\.(png|jpg|jpeg)["']/gi
            ];

            patterns.forEach(pattern => {
                const newContent = content.replace(pattern, (match, p1, p2) => {
                    return match.replace(`.${p2}`, '.webp');
                });
                if (newContent !== content) {
                    modified = true;
                    content = newContent;
                }
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                codeUpdates.push(path.relative(__dirname, fullPath));
                console.log(`📝 Updated: ${path.relative(__dirname, fullPath)}`);
            }
        }
    }
}

console.log('🚀 Starting WebP Conversion Process...\n');
console.log('Step 1: Converting images to WebP...\n');

await processDirectory(assetsDir);

console.log('\n✨ Image conversion complete!\n');
console.log('Step 2: Updating code references...\n');

updateCodeReferences(srcDir);

console.log('\n📊 Conversion Summary:');
console.log(`   Images converted: ${conversions.length}`);
console.log(`   Code files updated: ${codeUpdates.length}`);

if (conversions.length > 0) {
    console.log('\n💾 Size Savings:');
    conversions.slice(0, 10).forEach(c => {
        console.log(`   ${c.original}: ${c.size} (${c.savings} saved)`);
    });
    if (conversions.length > 10) {
        console.log(`   ... and ${conversions.length - 10} more`);
    }
}

console.log('\n✅ WebP conversion complete!');
