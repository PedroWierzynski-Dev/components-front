const webfont = require('webfont').default;
const fs = require('fs');
const path = require('path');

webfont({
    files: 'src/icons/*.svg',
    dest: 'dist/icons',
    template: 'css',
    templateClassName: 'icon',
    templateFontPath: '../icons/'
})
    .then(result => {
        // Salvar os arquivos gerados manualmente
        if (!fs.existsSync('dist/icons')) {
            fs.mkdirSync('dist/icons', { recursive: true });
        }

        if (!fs.existsSync('dist/css')) {
            fs.mkdirSync('dist/css', { recursive: true });
        }

        fs.writeFileSync(path.join('dist/icons', 'icons.woff'), result.woff);
        fs.writeFileSync(path.join('dist/icons', 'icons.woff2'), result.woff2);
        fs.writeFileSync(path.join('dist/icons', 'icons.ttf'), result.ttf);
        fs.writeFileSync(path.join('dist/icons', 'icons.eot'), result.eot);
        fs.writeFileSync(path.join('dist/icons', 'icons.svg'), result.svg);
        fs.writeFileSync(path.join('dist/css', 'icons.css'), result.template);
        console.log('Icons generated and saved successfully');
    })
    .catch(error => {
        console.error('Error generating icons', error);
    });
