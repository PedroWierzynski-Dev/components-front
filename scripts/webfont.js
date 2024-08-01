const webfont = require('webfont').default;
const fs = require('fs');
const path = require('path');

const generateFonts = (options) => {
    return webfont({
        files: options.files,
        dest: options.dest,
        template: options.template,
        templateClassName: options.templateClassName,
        templateFontPath: options.templateFontPath
    })
        .then(result => {
            if (!fs.existsSync(options.dest)) {
                fs.mkdirSync(options.dest, { recursive: true });
            }

            if (!fs.existsSync('dist/css')) {
                fs.mkdirSync('dist/css', { recursive: true });
            }

            fs.writeFileSync(path.join(options.dest, `${options.prefix}.woff`), result.woff);
            fs.writeFileSync(path.join(options.dest, `${options.prefix}.woff2`), result.woff2);
            fs.writeFileSync(path.join(options.dest, `${options.prefix}.ttf`), result.ttf);
            fs.writeFileSync(path.join(options.dest, `${options.prefix}.eot`), result.eot);
            fs.writeFileSync(path.join(options.dest, `${options.prefix}.svg`), result.svg);
            fs.writeFileSync(path.join('dist/css', `${options.prefix}.css`), result.template);
            console.log(`${options.prefix} generated and saved successfully`);
        })
        .catch(error => {
            console.error(`Error generating ${options.prefix}`, error);
        });
};

const args = process.argv.slice(2);
const target = args[0];

if (target === 'icons') {
    const iconOptions = {
        files: 'src/icons/*.svg',
        dest: 'dist/icons',
        template: 'css',
        templateClassName: 'icon',
        templateFontPath: '../icons/',
        prefix: 'icons'
    };
    generateFonts(iconOptions);

} else if (target === 'flags') {
    const flagOptions = {
        files: 'src/flags/*.svg',
        dest: 'dist/flags',
        template: 'css',
        templateClassName: 'flag',
        templateFontPath: '../flags/',
        prefix: 'flags'
    };
    generateFonts(flagOptions);
} else {
    console.error('Unknown target specified. Use "icons" or "flags".');
}
