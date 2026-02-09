import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pagesDir = path.join(__dirname, 'src', 'pages');

function addLazyLoadingToFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern to find img tags without loading="lazy"
    const imgPattern = /<img([^>]*?)(?<!loading="lazy")(\s*\/?>)/g;

    content = content.replace(imgPattern, (match, attrs, closing) => {
        // Check if this img already has loading attribute
        if (attrs.includes('loading=')) {
            return match;
        }
        modified = true;
        return `<img${attrs} loading="lazy"${closing}`;
    });

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        return true;
    }
    return false;
}

function processDirectory(dir) {
    let count = 0;
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            count += processDirectory(fullPath);
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx')) {
            if (addLazyLoadingToFile(fullPath)) {
                console.log(`✅ Added lazy loading to: ${path.relative(__dirname, fullPath)}`);
                count++;
            }
        }
    }

    return count;
}

const componentsDir = path.join(__dirname, 'src', 'components');

console.log('Adding lazy loading to images...\n');
let count = processDirectory(pagesDir);
count += processDirectory(componentsDir);
console.log(`\n✨ Added lazy loading to ${count} files!`);
