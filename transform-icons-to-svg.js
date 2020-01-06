const puppeteer = require('puppeteer')
const potrace = require('potrace')
const fs = require('fs')
const path = require('path');
const SVGTranslator = require('@rikishi/svg-scaler-viewbox').default;
const sharp = require('sharp');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const generateIcon = async (icon) => {
        const iconFileName = `${icon}.css`
        const iconCSS = fs.readFileSync(path.resolve(__dirname, 'icons', iconFileName), 'utf8');

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

        // const browser = await puppeteer.launch();
        // const page = await browser.newPage();

        // Set the viewport to a resonable size to get high fidellity screenshots
        await page.setViewport({
            width: 480,
            height: 480
        })
        await page.setContent(htmlTemplate)

        await page.screenshot({
            path: `./icons-png/${icon}.png`,
            omitBackground: true
        })

        // Start by making svg before resizing PNG
        await new Promise((resolve) => {
            potrace.posterize(`./icons-png/${icon}.png`, { threshold: 180, steps: 4, background: "#00000000" }, async (err, svg) => {
                const resizedSvgRaw = await new SVGTranslator({ width: 24 }).process(svg);

                // Fix for SVGTranslater not being able to set size on <rect>
                const resizedSvg = resizedSvgRaw.replace(/NaN/g, '24')

                fs.writeFile(path.resolve(__dirname, 'icons-svg', `${icon}.svg`), resizedSvg, (err) => {
                    if (err) throw err;
                    console.log(`The icon ${icon} is saved as svg in ./icons-svg/${icon}.svg`)
                    resolve()
                })
            });
        })

        // then resize png so it's usable in design software
        const resizedPng = await sharp(`./icons-png/${icon}.png`).resize(24, 24).toBuffer()

        await new Promise((resolve) => {
            fs.writeFile(`./icons-png/${icon}.png`, resizedPng, (err) => {
                if (err) throw err;
                console.log(`The icon ${icon} is saved as png in ./icons-png/${icon}.png`)
                resolve()
            })
        })

        return;
    }


    // Read all files and generate PNG and SVG

    const startTime = new Date()
    const files = fs.readdirSync(path.resolve(__dirname, 'icons'))

    for (const [i, file] of files.entries()) {
        await generateIcon(file.replace('.css', ''))

        if (i + 1 === files.length) {
            await browser.close()
            const endTime = new Date() - startTime

            console.info('Execution time: %dms', endTime)
        }
    }
})()