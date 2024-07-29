const fs = require('fs');
const path = require('path');

// Diretórios a serem criados
const directories = [
    path.join(__dirname, '../dist'),
    path.join(__dirname, '../dist', 'fonts'),
    path.join(__dirname, '../dist', 'css'),
    path.join(__dirname, '../dist', 'js'),
    path.join(__dirname, '../dist', 'icons'),
];

// Criar diretórios se não existirem
directories.forEach((dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

