function toggleTheme() {
  let body = document.body;
  if (body.classList.contains('default-theme')) {
    body.classList.remove('default-theme');
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('default-theme');
  }
  updateColors();
}

function updateColors() {
  updateSvgColors();
  updateLinkColors();
}

function updateSvgColors() {
  let svgStrokes = document.querySelectorAll('.svg-stroke');
  let primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-default')
    .trim();

  console.log('Primary color: ', primaryColor); // Adicionado para depuração

  svgStrokes.forEach(function (stroke) {
    let paths = stroke.querySelectorAll('path');
    paths.forEach(function (path) {
      if (primaryColor) {
        path.setAttribute('stroke', primaryColor);
      } else {
        path.setAttribute('stroke', '#ff0000');
      }
    });
  });
}

function updateLinkColors() {
  let links = document.querySelectorAll('a.primary-default');
  console.log(links);
  let primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('color')
    .trim();

  console.log('Primary color for links: ', primaryColor); // Adicionado para depuração

  links.forEach(function (link) {
    if (primaryColor) {
      link.style.color = primaryColor;
    }
  });
}

function loadSvg(iconName, container) {
  fetch(`/icons/${iconName}.svg`)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
      container.querySelector('svg').classList.add('svg-stroke');
      updateSvgColors();
    });
}

document.addEventListener('DOMContentLoaded', function () {
  let iconContainers = document.querySelectorAll('.icon');
  iconContainers.forEach(function (container) {
    let iconName = container.className
      .split(' ')
      .find((cls) => cls.startsWith('icon-'))
      .split('icon-')[1];
    loadSvg(iconName, container);
  });
  updateColors();
});
