const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'images';
const outputDir = 'images/optimized';

fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const oputputFileName = file.replace(/\.(png|jpg|jpeg)$/, '.webp');
    const outputPath = path.join(outputDir, oputFileName);

    sharp(inputPath)
    .webp({ quality: 20 })
    .toFile(outputPath, (err, info) => {
        if (err) {
            console.error(`Error processing ${file}. ${err}`); 
        } else {
            console.log(`Processed ${file} to ${outputFileName}`);
        }
    });
});