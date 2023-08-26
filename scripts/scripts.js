import {
  sampleRUM,
  buildBlock,
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForLCP,
  loadBlocks,
  loadCSS,
} from './lib-franklin.js';

const LCP_BLOCKS = []; // add your LCP blocks to the list

/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await waitForLCP(LCP_BLOCKS);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  const main = doc.querySelector('main');
  await loadBlocks(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  sampleRUM('lazy');
  sampleRUM.observe(main.querySelectorAll('div[data-block-name]'));
  sampleRUM.observe(main.querySelectorAll('picture > img'));
}

/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}
loadPage();

// Function to insert an element after another element
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
//scripts for contact form
var appendParentFormContainer = document.querySelector("body > main > div.section.cards-container.forms-container");
var appendFormContainer = document.querySelector("body > main > div.section.cards-container.forms-container > div.cards-wrapper");
var appendFormContainerForm = document.querySelector("body > main > div.section.cards-container.forms-container > div.forms-wrapper");
var newRow = document.createElement('div');
newRow.classList.add('row');
appendFormContainer.classList.add('col-lg-6');
appendFormContainerForm.classList.add('col-lg-6');

newRow.appendChild(appendFormContainer);
newRow.appendChild(appendFormContainerForm);
appendParentFormContainer.appendChild(newRow);
//bootstrap classes 



const selectBody = document.querySelector('body');

  function toggleScrolled() {
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);
  
  // var footerContainer = document.querySelector("body > footer > div > div > div > div");
  // footerContainer.classList.add('container');
  // var footerRow = document.querySelector("body > footer > div > div > div > div > div");
  // footerRow.classList.add('row', 'gy-4');
  // var footerAbout = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(1)");
  // footerAbout.classList.add('col-lg-5', 'col-md-12');
  // var footerUsefulLinks = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(2)");
  // footerUsefulLinks.classList.add('col-lg-2', 'col-6');
  // var footerServices = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(3)");
  // footerServices.classList.add('col-lg-2', 'col-6');
  // var footerContactUs = document.querySelector("body > footer > div > div > div > div > div > div:nth-child(4)");
  // footerContactUs.classList.add('col-lg-3', 'col-md-12');
  
  var testimonialContainer = document.querySelector("body > main > div:nth-child(13) > div");
  var testimonialsTitle = document.querySelector("body > main > div:nth-child(13) > div.default-content-wrapper > h2#testimonials");
  var testimonialDesc = document.querySelector("body > main > div:nth-child(13) > div.default-content-wrapper > p:nth-child(2)");
  var testimonialCaro = document.querySelector("body > main > div:nth-child(13) > div > p:nth-child(3)");
  var testimonialNewRow = document.createElement('div');
  testimonialNewRow.classList.add('col-lg-5');
  testimonialNewRow.appendChild(testimonialsTitle);
  testimonialNewRow.appendChild(testimonialDesc);
  testimonialContainer.appendChild(testimonialNewRow);
  var testimonialNewCarousal = document.createElement('div');
  testimonialNewCarousal.classList.add('col-lg-7');
  testimonialNewCarousal.appendChild(testimonialCaro);
  testimonialContainer.appendChild(testimonialNewCarousal);
  testimonialContainer.classList.add('row');
  

// Find the existing strong tag in hero for updating input
var strongTag = document.querySelector(".button-container strong");

if (strongTag) {
    // Check if the input element already exists within the strong tag
    var inputElement = strongTag.querySelector("input.enteryouremail");

    if (!inputElement) {
        // Create a new input element
        inputElement = document.createElement("input");
        inputElement.type = "email"; // Set input type to 'email'
        inputElement.placeholder = "Enter your email address"; // Set the placeholder text
        inputElement.className = "enteryouremail"; // Add a class to the input element

        // Add the input element to the existing strong tag
        strongTag.appendChild(inputElement);
    }
}



//counter logic

// Function to create a counter animation for a given target div and count
function animateCounter(targetSelector, targetCount) {
    const targetDiv = document.querySelector(targetSelector);
    targetDiv.classList.add("counter");
    const counterElements = document.querySelectorAll(targetSelector);
    let count = 0;

    const counterInterval = setInterval(() => {
        if (count <= targetCount) {
            counterElements.forEach(element => {
                element.textContent = count;
            });
            count++;
        } else {
            clearInterval(counterInterval);
        }
    }, 50); // Adjust the interval as needed

    // Worker counter animation
    const workerTargetSelector = targetSelector.replace("div:nth-child(4)", "div:nth-child(5)");
    const workerTargetDiv = document.querySelector(workerTargetSelector);
    workerTargetDiv.classList.add("worker");
    const workerCounterElements = document.querySelectorAll(workerTargetSelector);
    let workerCount = 0;
    const workerTargetCount = 32; // Updated worker count

    const workerInterval = setInterval(() => {
        if (workerCount <= workerTargetCount) {
            workerCounterElements.forEach(element => {
                element.textContent = workerCount;
            });
            workerCount++;
        } else {
            clearInterval(workerInterval);
        }
    }, 50); // Adjust the interval as needed
}

// Create counter animation for counters
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)", 232);

// Create counter animation for projects
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(2)", 521);

// Create counter animation for support
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(3)", 1453); // Updated support count

// Create counter animation for worker
animateCounter("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(4)", 32); // Updated worker count

