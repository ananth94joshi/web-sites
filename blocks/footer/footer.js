import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.innerHTML = html;
  await decorateIcons(footer);
  block.append(footer);
   var footerContainer = document.querySelector("body > footer > div > div > div > div");
  footerContainer.classList.add('container');
  var footerRow = document.querySelector("body > footer > div > div > div > div > div");
  footerRow.classList.add('row', 'gy-4');
  var footerAbout = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(1)");
  footerAbout.classList.add('col-lg-5', 'col-md-12');
  var footerUsefulLinks = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(2)");
  footerUsefulLinks.classList.add('col-lg-2', 'col-6');
  var footerServices = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(3)");
  footerServices.classList.add('col-lg-2', 'col-6');
  var footerContactUs = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(4)");
  footerContactUs.classList.add('col-lg-3', 'col-md-12');
}

 
