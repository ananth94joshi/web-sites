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


// Step 1: Get the parent element
const parentElement = document.querySelector("body > main > div.section.columns-container.counter-container > div:nth-child(1) > p:nth-child(3)");

if (parentElement) {
    // Step 2: Create the input element
    const inputElement = document.createElement('input');
    
    // Step 3: Set placeholder attribute
    inputElement.placeholder = "Enter your Email Address";
    
    // Step 4: Append the input element to the parent element
    parentElement.appendChild(inputElement);
}

// Step 1: Get the input element and target element
const inputElement = document.querySelector("body > main > div.section.columns-container.counter-container > div:nth-child(1) > p:nth-child(3) input");
const targetElement = document.querySelector("body > main > div.section.columns-container.counter-container > div:nth-child(1) > p:nth-child(3) strong > a");

if (inputElement && targetElement) {
    // Step 2: Insert the target element after the input element
    insertAfter(targetElement, inputElement);
}

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

// Add a class to the selected div for counters
const targetDivCounter = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(1)");
targetDivCounter.classList.add("counter");

const counterElements = document.querySelectorAll(".counter");
let count = 0;
const targetCount = 232;

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

// Add a class to the selected div for projects
const targetDivProject = document.querySelector("body > main > div:nth-child(5) > div.columns-wrapper > div > div:nth-child(1) > div:nth-child(2)");
targetDivProject.classList.add("project");

const projectCounterElements = document.querySelectorAll(".project");
let projectCount = 0;
const projectTargetCount = 521;

const projectInterval = setInterval(() => {
    if (projectCount <= projectTargetCount) {
        projectCounterElements.forEach(element => {
            element.textContent = projectCount;
        });
        projectCount++;
    } else {
        clearInterval(projectInterval);
    }
}, 50); // Adjust the interval as needed
