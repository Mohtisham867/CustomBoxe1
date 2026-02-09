import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');

const assetsDir = path.join(projectRoot, 'src', 'assets');
const srcDir = path.join(projectRoot, 'src');

// Collect all .webp files
const webpFiles = new Set();

function collectWebPFiles(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            collectWebPFiles(fullPath);
        } else if (file.name.endsWith('.webp')) {
            // Store relative path from assets directory
            const relativePath = path.relative(assetsDir, fullPath);
            webpFiles.add(relativePath);
        }
    }
}

// Collect all imports from code
const importedFiles = new Set();

function scanCodeForImports(dir) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            scanCodeForImports(fullPath);
        } else if (file.name.endsWith('.tsx') || file.name.endsWith('.jsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
            const content = fs.readFileSync(fullPath, 'utf8');

            // Match import statements with .webp files
            const importRegex = /from\s+["']([^"']+\.webp)["']/gi;
            let match;

            while ((match = importRegex.exec(content)) !== null) {
                const importPath = match[1];
                // Extract just the filename
                const filename = path.basename(importPath);
                importedFiles.add(filename);
            }
        }
    }
}

console.log('🔍 Scanning for unused WebP assets...\n');

collectWebPFiles(assetsDir);
console.log(`Found ${webpFiles.size} WebP files in assets directory`);

scanCodeForImports(srcDir);
console.log(`Found ${importedFiles.size} WebP files imported in code\n`);

// Find unused files
const unusedFiles = [];

for (const webpFile of webpFiles) {
    const filename = path.basename(webpFile);
    if (!importedFiles.has(filename)) {
        unusedFiles.push(webpFile);
    }
}

console.log(`📊 Analysis Results:`);
console.log(`   Total WebP files: ${webpFiles.size}`);
console.log(`   Used in code: ${importedFiles.size}`);
console.log(`   Unused files: ${unusedFiles.length}\n`);

if (unusedFiles.length > 0) {
    console.log('🗑️  Unused files to be deleted:');
    unusedFiles.slice(0, 20).forEach(file => {
        console.log(`   - ${file}`);
    });
    if (unusedFiles.length > 20) {
        console.log(`   ... and ${unusedFiles.length - 20} more`);
    }

    console.log('\n⚠️  Run with --delete flag to remove these files');

    // Check for --delete flag
    if (process.argv.includes('--delete')) {
        console.log('\n🗑️  Deleting unused files...');
        let deletedCount = 0;

        for (const file of unusedFiles) {
            const fullPath = path.join(assetsDir, file);
            try {
                fs.unlinkSync(fullPath);
                deletedCount++;
            } catch (err) {
                console.error(`Error deleting ${file}:`, err.message);
            }
        }

        console.log(`✅ Deleted ${deletedCount} unused files`);
    }
} else {
    console.log('✅ No unused files found! All WebP assets are being used.');
}
