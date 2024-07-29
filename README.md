# Design System - Wierzynski Devs

Este é o projeto Design System Wierzynski Devs, um projeto de front-end que utiliza SCSS para estilos e BrowserSync para desenvolvimento em tempo real.

## Estrutura do Projeto

```plaintext
DS.WIERZYNSKI DEVS/
├── .vscode/
│   └── settings.json
├── dist/
│   ├── css/
│   ├── icons/
│   └── index.html
├── node_modules/
├── scripts/
│   ├── bs-config.js
│   ├── createDirs.js
│   └── webfont.js
├── src/
|   |-- fonts/
|       |-- Montserrat-VariableFont_wght.ttf
|       |-- Roboto-Regular.ttf
│   ├── icons/
│   ├── js/
│   │   └── index.js
│   ├── pages/
│   │   ├── buttons.html
│   │   ├── typography.html
│   │   └── hiperlinks.html
│   └── scss/
│       ├── base/
│       │   ├── _borders.scss
│       │   ├── _breakpoints.scss
│       │   ├── _icons.scss
│       │   └── _variables.scss
│       ├── colors/
│       │   ├── _dark.scss
│       │   └── _default.scss
│       ├── components/
│       │   ├── _buttons.scss
│       │   └── _hiperlinks.scss
│       ├── swatches/
│       │   └── _swatches.scss
│       ├── themes/
│       │   ├── _dark.scss
│       │   └── _default.scss
│       └── main.scss
├── .gitignore
├── index.html
└── package.json
```

## Instalação

Para começar a trabalhar neste projeto, você precisará clonar o repositório e instalar as dependências:

```bash
git clone <URL_DO_REPOSITORIO>
cd ds.wierzynskidevs
npm install
```

## Scripts Disponíveis

### `npm run clean`

Remove a pasta `dist`.

### `npm run create-dirs`

Cria os diretórios necessários em `dist`.

### `npm run build:sass`

Compila os arquivos SCSS para CSS.

### `npm run build:icons`

Gera os ícones a partir dos arquivos SVG.

### `npm run copy-html`

Copia os arquivos HTML da pasta `src` para a pasta `dist`.

### `npm run copy-fonts`

Copia as fonts da pasta `src/fonts` para a pasta `dist`.

### `npm run watch:html`

Usa o `nodemon` para monitorar mudanças nos arquivos HTML e copiá-los para a pasta `dist`.

### `npm run watch:sass`

Usa o `nodemon` para monitorar mudanças nos arquivos SCSS e executar o build correspondente.

### `npm run watch:icons`

Usa o `nodemon` para monitorar mudanças nos arquivos SVG e executar o build correspondente.

### `npm run build`

Executa os scripts `clean`, `create-dirs`, `build:sass`, `build:icons` e `copy-html`.

### `npm run serve`

Inicia o `browser-sync` para servir a pasta `dist` e atualizar automaticamente no navegador.

### `npm run watch`

Usa `npm-run-all` para executar `watch:html`, `watch:sass`, `watch:icons` e `serve` em paralelo.

## Desenvolvimento

### Estrutura de Pastas

- `.vscode/`: Configurações específicas do VS Code.
- `dist/`: Arquivos gerados e prontos para produção.
  - `css/`: Arquivos CSS gerados.
  - `icons/`: Arquivos de fontes de ícones gerados.
- `scripts/`: Scripts para automação e build.
  - `bs-config.js`: Configuração do BrowserSync.
  - `createDirs.js`: Script para criar diretórios.
  - `webfont.js`: Script para gerar fontes de ícones.
- `src/`: Fonte do projeto.
  - `icons/`: Arquivos SVG para ícones.
  - `js/`: Arquivos JavaScript.
  - `scss/`: Arquivos SCSS para estilos.
    - `base/`: Estilos base.
      - `_borders.scss`: Estilos de bordas.
      - `_breakpoints.scss`: Media queries e breakpoints.
      - `_icons.scss`: Estilos para ícones.
      - `_variables.scss`: Variáveis SCSS.
    - `colors/`: Estilos de cores.
      - `_dark.scss`: Tema escuro.
      - `_default.scss`: Tema padrão.
    - `components/`: Estilos para componentes.
      - `_buttons.scss`: Estilos para botões.
      - `hiperlinks.scss`: Estilos para hiperlinks.
    - `swatches/`: Estilos de amostras de cores.
      - `_swatches.scss`: Amostras de cores.
    - `themes/`: Temas.
      - `_dark.scss`: Tema escuro.
    - `main.scss`: Arquivo SCSS principal.

### Melhores Práticas

- **Consistência nos Nomes**: Use convenções de nomenclatura consistentes para arquivos e classes.
- **Modularidade**: Mantenha o código modular e reutilizável. Separe os estilos em arquivos específicos por componentes.
- **Variáveis**: Use variáveis SCSS para cores, espaçamentos e outros valores reutilizáveis.
- **Mixin e Funções**: Utilize mixins e funções para evitar repetição de código e para facilitar a manutenção.
- **Documentação**: Documente seu código com comentários claros e explicativos.

### Exemplos

#### Exemplo de Uso de Variáveis

```scss
// src/scss/base/_variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Helvetica, sans-serif';
$border-radius: 4px;
```

#### Exemplo de Mixin

```scss
// src/scss/base/_mixins.scss
@mixin border-radius($radius) {
  border-radius: $radius;
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
}
```

#### Exemplo de Importação de Arquivos

```scss
// src/scss/main.scss
@import 'base/variables';
@import 'base/mixins';
@import 'components/buttons';
@import 'components/hiperlinks';
@import 'themes/dark';
@import 'themes/default';

// Estilos adicionais
body {
  font-family: $font-stack;
  background-color: $primary-color;
}
```
