// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const glob = require('glob');
const path = require('path');

function loadScripts() {
  const files = glob.sync(path.join(__dirname, 'src/**/*.js'));
  files.forEach((file) => require(file));
}

window.addEventListener('DOMContentLoaded', () => {
  loadScripts();
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
});
