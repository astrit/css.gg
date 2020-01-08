// Node filesystem module
const fs = require('fs')
// Node path module
const path = require('path');
// Headless browser to load and take screenshot of icons
const puppeteer = require('puppeteer')
// PNG to SVG transformer
const potrace = require('potrace')
// Module for resizing SVG
const SVGTranslator = require('@rikishi/svg-scaler-viewbox').default;
// Image processing module
const sharp = require('sharp');
// Console progress bar module
const cliProgress = require('cli-progress');

const SVG_ICON_DIR = path.resolve(__dirname, '..', 'icons-svg');
const PNG_ICON_DIR = path.resolve(__dirname, '..', 'icons-png');

/**
 * GenerateIcon
 * This function takes the name of an icon and loads it up in a browser,
 * takes a screenshot, saves the png, transforms it into svg and saves it in 
 * respective folders 'icons-svg', 'icons-png'
 * 
 * @param {string} icon - Name of icon as it is named in the '/icons' folder
 * @param {Page} browserPage - The headless chrome browser page to render the icon
 */

const generateIcon = async (icon, browserPage) => {
    const iconFileName = `${icon}.css`
    const iconCSS = fs.readFileSync(path.resolve(__dirname, '..', 'icons', iconFileName), 'utf8')
    const pngIconPath = path.resolve(PNG_ICON_DIR, `${icon}.png`)
    const svgIconPath = path.resolve(SVG_ICON_DIR, `${icon}.svg`)

    // This template loads a single icon and scales it with a factor of 20
    // which is equivilant to 480px based on a 24px bounding-box, this is done to ensure a 
    // high fidelity for generating the svg icons
    const htmlTemplate = `
    <!DOCTYPE html>
        <head>
            <style>
                ${iconCSS} 
                html, body {
                    padding: 0;
                    margin: 0;
                }

                :root {
                    --ggs: 20;
                }

                .icon {
                    position: fixed;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }

                .gg-${icon} {
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
            <div class="icon">
                <i class="gg-${icon}"></i>
            </div>
        </body>
    </html>
`;


    // Set the viewport to resemble the bounding-box
    await browserPage.setViewport({
        width: 480,
        height: 480
    })

    // Inject the html template with the icon
    await browserPage.setContent(htmlTemplate)
    
    // Create the '/icons-png' folder if it doesn't exist yet
    if (!fs.existsSync(PNG_ICON_DIR)) {
        fs.mkdirSync(PNG_ICON_DIR)
    }

    // Take a screenshot, and save it to '/icons-png'
    await browserPage.screenshot({
        path: pngIconPath,
        omitBackground: true
    })

    // Make the SVG from the image saved to '/icons-png'
    await new Promise((resolve) => {

        // Portrace posterices the image in 4 layers to ensure transparency on parts of the icon
        potrace.posterize(pngIconPath, { 
            threshold: 180, 
            steps: 4, 
            background: "#00000000" 
        }, async (err, svg) => {

            // Resize the SVG icon from 480px to 24px 
            const resizedSvgRaw = await new SVGTranslator({ width: 24 }).process(svg);

            // Fix for SVGTranslater not being able to set size on <rect>
            const resizedSvg = resizedSvgRaw.replace(/NaN/g, '24')

            // Create the '/icons-svg' folder if it doesn't exist yet
            if (!fs.existsSync(SVG_ICON_DIR)) {
                fs.mkdirSync(SVG_ICON_DIR)
            }

            // Save the generated svg to '/icons-svg'
            fs.writeFile(svgIconPath, resizedSvg, (err) => {
                if (err) throw err;
                // console.log(`SVG - ${icon} saved to ${svgIconPath}`)
                resolve()
            })
        });
    })

    // Resize the PNG to 24px
    const resizedPng = await sharp(pngIconPath)
        .resize(24, 24)
        .toBuffer()

    // Overwrite the large png with the small 24px version
    await new Promise((resolve) => {
        fs.writeFile(pngIconPath, resizedPng, (err) => {
            if (err) throw err;

            // console.log(`PNG - ${icon} saved to ${pngIconPath}`)
            resolve()
        })
    })

    return;
}

(async () => {
    // Start a headless chrome browser to reuse on every icon
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Set a start time we can use to track duration of this script
    const startTime = new Date()

    // Read all files in the '/icons' directory and generate PNG and SVG icons
    const files = fs.readdirSync(path.resolve(__dirname, '..', 'icons'))

    const progressBar = new cliProgress.SingleBar({
        format: 'Transforming CSS icons to PNG and SVG | {bar} | {percentage}% || {value} / {total} Icons transformed',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    }, cliProgress.Presets.legacy);

    progressBar.start(files.length, 0)
    
    for (const [i, file] of files.entries()) {
        await generateIcon(file.replace('.css', ''), page)
        progressBar.increment();
        
        // When all icons have been processed, close the headless chrome browser 
        // and print the duration time to the console
        if (i + 1 === files.length) {
            await browser.close()
            progressBar.stop()
            const endTime = new Date() - startTime

            console.info('Execution time: %dms', endTime)
        }
    }
})()