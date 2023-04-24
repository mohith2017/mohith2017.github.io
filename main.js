/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadContactPage\": function() { return /* binding */ loadContactPage; }\n/* harmony export */ });\nconst loadContactPage = () => {\n  const contentDiv = document.querySelector('#content');\n\n  const contactContainer = document.createElement('div');\n  const contactHeading = document.createElement('h1');\n  const contactParagraph = document.createElement('p');\n  const iframeMap = document.createElement('iframe');\n  const contactDiv = document.createElement('div');\n  const contactForm = document.createElement('form');\n\n  const formHeading = document.createElement('h3');\n\n  const formUserNameDiv = document.createElement('div');\n\n  const formFirstNameDiv = document.createElement('div');\n  const formFirstNameLabel = document.createElement('label');\n  const formFirstNameInput = document.createElement('input');\n\n  const formSecondNameDiv = document.createElement('div');\n  const formSecondNameLabel = document.createElement('label');\n  const formSecondNameInput = document.createElement('input');\n\n  const formEmailDiv = document.createElement('div');\n  const formEmailLabel = document.createElement('label');\n  const formEmailInput = document.createElement('input');\n\n  const formPhoneDiv = document.createElement('div');\n  const formPhoneLabel = document.createElement('label');\n  const formPhoneInput = document.createElement('input');\n\n  const formMessageDiv = document.createElement('div');\n  const formMessageLabel = document.createElement('label');\n  const formMessageInput = document.createElement('textarea');\n\n  const formSubmitButton = document.createElement('button');\n\n  contactContainer.classList.add('contact');\n  contactHeading.classList.add('page-heading');\n  iframeMap.classList.add('map');\n  contactDiv.classList.add('contact-container');\n  contactForm.classList.add('contact-form');\n\n  formUserNameDiv.classList.add('form-user-name-div');\n  formFirstNameDiv.classList.add('input-group');\n  formSecondNameDiv.classList.add('input-group');\n  formEmailDiv.classList.add('input-group');\n  formPhoneDiv.classList.add('input-group');\n  formMessageDiv.classList.add('input-group');\n\n  formFirstNameLabel.classList.add('label');\n  formSecondNameLabel.classList.add('label');\n  formEmailLabel.classList.add('label');\n  formPhoneLabel.classList.add('label');\n  formMessageLabel.classList.add('label');\n\n  formFirstNameInput.classList.add('input');\n  formSecondNameInput.classList.add('input');\n  formEmailInput.classList.add('input');\n  formPhoneInput.classList.add('input');\n  formMessageInput.classList.add('input');\n\n  contactHeading.textContent = 'Contact Us';\n  contactParagraph.textContent =\n    'We would love to hear from you and will do our best to respond as soon as possible.';\n  formHeading.textContent = 'Send a message';\n\n  formFirstNameLabel.textContent = 'First Name *';\n  formSecondNameLabel.textContent = 'Second Name *';\n  formEmailLabel.textContent = 'Email *';\n  formPhoneLabel.textContent = 'Phone *';\n  formMessageLabel.textContent = 'Message *';\n\n  formSubmitButton.textContent = 'Send';\n\n  formFirstNameLabel.setAttribute('for', 'first_name');\n  formSecondNameLabel.setAttribute('for', 'second_name');\n  formEmailLabel.setAttribute('for', 'email');\n  formPhoneLabel.setAttribute('for', 'phone');\n  formMessageLabel.setAttribute('for', 'message');\n\n  formFirstNameInput.id = 'first_name';\n  formSecondNameInput.id = 'second_name';\n  formEmailInput.id = 'email';\n  formPhoneInput.id = 'phone';\n  formMessageInput.id = 'message';\n\n  formFirstNameInput.name = 'first_name';\n  formSecondNameInput.name = 'second_name';\n  formEmailInput.name = 'email';\n  formPhoneInput.name = 'phone';\n  formMessageInput.name = 'message';\n\n  formFirstNameInput.required = true;\n  formSecondNameInput.required = true;\n  formEmailInput.required = true;\n  formPhoneInput.required = true;\n  formMessageInput.required = true;\n  formMessageInput.rows = '3';\n\n  formEmailInput.type = 'email';\n  formPhoneInput.type = 'tel';\n\n  formSubmitButton.setAttribute('type', 'submit');\n\n  iframeMap.src =\n    'https://www.openstreetmap.org/export/embed.html?bbox=-1.3126891851425173%2C53.69312690948469%2C-1.3092076778411867%2C53.69459593405764&amp;layer=mapnik';\n\n  formFirstNameDiv.append(formFirstNameLabel, formFirstNameInput);\n  formSecondNameDiv.append(formSecondNameLabel, formSecondNameInput);\n  formUserNameDiv.append(formFirstNameDiv, formSecondNameDiv);\n  formEmailDiv.append(formEmailLabel, formEmailInput);\n  formPhoneDiv.append(formPhoneLabel, formPhoneInput);\n  formMessageDiv.append(formMessageLabel, formMessageInput);\n\n  contactForm.append(\n    formHeading,\n    formUserNameDiv,\n    formEmailDiv,\n    formPhoneDiv,\n    formMessageDiv,\n    formSubmitButton\n  );\n  contactDiv.append(contactForm, iframeMap);\n  contactContainer.append(contactHeading, contactParagraph, contactDiv);\n  contentDiv.append(contactContainer);\n\n  const initalAnimationDuration = 0.2;\n\n  const conactFormElements = document.querySelectorAll('.contact-form > *');\n  let animationDuration = initalAnimationDuration;\n\n  for (const element of conactFormElements) {\n    element.style.animationDuration = `${animationDuration}s`;\n    animationDuration += initalAnimationDuration;\n  }\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFooter\": function() { return /* binding */ loadFooter; }\n/* harmony export */ });\nconst loadFooter = () => {\n  const footerContainer = document.querySelector('footer');\n\n  const footerText = document.createElement('p');\n  const devNameLink = document.createElement('a');\n  const sourceCodeLink = document.createElement('a');\n  const copyrightSpan = document.createElement('span');\n\n  const dividerSymbol = '⸱';\n  footerText.textContent = '';\n\n  devNameLink.textContent = 'Dev Team @ Delta';\n  devNameLink.setAttribute('href', 'https://github.com/mohith2017');\n  devNameLink.setAttribute('target', '_blank');\n\n  const year = new Date().getFullYear();\n  copyrightSpan.textContent = `© ${year}`;\n\n  sourceCodeLink.textContent = 'Source code';\n  sourceCodeLink.setAttribute(\n    'href',\n    'https://github.com/mohith2017/spark_website'\n  );\n  sourceCodeLink.setAttribute('target', '_blank');\n\n  footerText.append(\n    'Made with ❤️ by',\n    devNameLink,\n    dividerSymbol,\n    copyrightSpan,\n    dividerSymbol,\n    sourceCodeLink\n  );\n  footerContainer.append(footerText);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHeader\": function() { return /* binding */ loadHeader; },\n/* harmony export */   \"toggleDarkTheme\": function() { return /* binding */ toggleDarkTheme; }\n/* harmony export */ });\nconst loadHeader = () => {\n  const headerContainer = document.querySelector('header');\n\n  const leftElementsContainer = document.createElement('div');\n\n  const logo = document.createElement('img');\n  const tabLinks = document.createElement('ul');\n\n  const homeLinkListItem = document.createElement('li');\n  const menuLinkListItem = document.createElement('li');\n  const contactLinkListItem = document.createElement('li');\n\n  const homeLink = document.createElement('a');\n  const menuLink = document.createElement('a');\n  const contactLink = document.createElement('a');\n\n  const rightElementsContainer = document.createElement('div');\n  const ctaButton = document.createElement('button');\n\n  const themeToggleSwitch = document.createElement('label');\n  const themeToggleCheckbox = document.createElement('input');\n  const themeToggleSlider = document.createElement('span');\n\n  const cartButton = document.createElement('button');\n  const cartIcon = document.createElement('img');\n\n  leftElementsContainer.classList.add('header-left-elements');\n  rightElementsContainer.classList.add('header-right-elements');\n  logo.classList.add('header-logo', 'selected-tab', 'tab-link');\n  tabLinks.classList.add('tab-links');\n  homeLink.classList.add('selected-tab', 'tab-link', 'header-tab-link');\n  menuLink.classList.add('tab-link', 'header-tab-link');\n  contactLink.classList.add('tab-link', 'header-tab-link');\n  themeToggleSwitch.classList.add('switch');\n  themeToggleCheckbox.classList.add('dark-theme-toggler');\n  themeToggleSlider.classList.add('slider');\n  cartButton.classList.add('header-icon', 'cart-icon');\n  ctaButton.classList.add('cta-button', 'tab-link');\n\n  logo.src = 'components/images/sparkicon.png';\n  cartIcon.src = 'components/icons/black-shopping-bag.svg';\n  cartButton.title = 'Your Cart';\n  themeToggleSwitch.title = 'Toggle theme';\n  themeToggleCheckbox.type = 'checkbox';\n  if (\n    window.matchMedia &&\n    window.matchMedia('(prefers-color-scheme: dark)').matches\n  )\n    themeToggleCheckbox.checked = true;\n\n  logo.setAttribute('data-tab-link', 'home');\n  homeLink.setAttribute('data-tab-link', 'home');\n  menuLink.setAttribute('data-tab-link', 'menu');\n  contactLink.setAttribute('data-tab-link', 'contact');\n  cartButton.setAttribute('data-count', 0);\n  ctaButton.setAttribute('data-tab-link', 'menu');\n\n  homeLink.textContent = 'home';\n  menuLink.textContent = 'application';\n  contactLink.textContent = 'contact';\n  ctaButton.textContent = 'LOGIN';\n\n  homeLinkListItem.append(homeLink);\n  menuLinkListItem.append(menuLink);\n  contactLinkListItem.append(contactLink);\n  tabLinks.append(homeLinkListItem, menuLinkListItem, contactLinkListItem);\n  leftElementsContainer.append(logo, tabLinks);\n  themeToggleSwitch.append(themeToggleCheckbox, themeToggleSlider);\n  cartButton.append(cartIcon);\n  rightElementsContainer.append(themeToggleSwitch, cartButton, ctaButton);\n\n  headerContainer.append(leftElementsContainer, rightElementsContainer);\n};\n\nconst toggleBodyClass = () => document.body.classList.toggle('dark-theme');\n\nconst changeIconsColor = (isThemeDark) => {\n  const cartIcon = document.querySelector('.cart-icon img');\n  const headerLogo = document.querySelector('.header-logo');\n  if (isThemeDark) {\n    headerLogo.src = 'components/images/sparkicon-dark.png';\n    cartIcon.src = 'components/icons/white-shopping-bag.svg';\n    return;\n  }\n  headerLogo.src = 'components/images/sparkicon.png';\n  cartIcon.src = 'components/icons/black-shopping-bag.svg';\n};\n\nconst toggleDarkTheme = () => {\n  const toggleButton = document.querySelector('.dark-theme-toggler');\n  if (toggleButton.checked) {\n    toggleBodyClass();\n    changeIconsColor(true);\n  }\n  toggleButton.addEventListener('click', () => {\n    toggleBodyClass();\n    if (toggleButton.checked) {\n      changeIconsColor(true);\n      return;\n    }\n    changeIconsColor(false);\n  });\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": function() { return /* binding */ loadHomePage; }\n/* harmony export */ });\nconst loadHomePage = () => {\n  const contentDiv = document.querySelector('#content');\n\n  const homeContainer = document.createElement('div');\n  const homeTextContainer = document.createElement('div');\n  const homeImage = document.createElement('img');\n  const headline = document.createElement('h1');\n  const homeParagraph = document.createElement('p');\n  const ctaButton = document.createElement('button');\n  const arrowRightIcon = document.createElement('img');\n\n  homeContainer.classList.add('home');\n  homeTextContainer.classList.add('home-text');\n  homeImage.classList.add('home-image');\n  headline.classList.add('headline');\n  ctaButton.classList.add('cta-button', 'home-cta-button');\n\n  headline.textContent = 'The KEY to your Student Loan';\n  homeParagraph.textContent =\n    \"Have a stellar profile, but co-signer stopping you from chasing your dreams? We've got you!\";\n  ctaButton.textContent = 'Check eligibility';\n\n  arrowRightIcon.setAttribute('src', 'components/icons/arrow-right.svg');\n  homeImage.setAttribute('src', 'components/images/lock-key.png');\n  ctaButton.setAttribute('data-tab-link', 'menu');\n\n  ctaButton.append(arrowRightIcon);\n  homeTextContainer.append(headline, homeParagraph, ctaButton);\n  homeContainer.append(homeTextContainer, homeImage);\n  contentDiv.append(homeContainer);\n};\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n// import { updateCartOnClick } from './menu.js';\n\n\nconst emptyContentDiv = () => {\n  const contentDiv = document.querySelector('#content');\n  while (contentDiv.firstChild) {\n    contentDiv.removeChild(contentDiv.lastChild);\n  }\n};\n\nconst loadPage = (tabName) =>\n  ({\n    home: _home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage,\n    menu: _menu_js__WEBPACK_IMPORTED_MODULE_3__.loadMenuPage,\n    contact: _contact_js__WEBPACK_IMPORTED_MODULE_4__.loadContactPage,\n  }[tabName]?.());\n\nconst addSelectedTabClass = (tabName) => {\n  const headerTabLinks = document.querySelectorAll('.tab-link');\n  for (const link of headerTabLinks)\n    if (link.dataset.tabLink === tabName) link.classList.add('selected-tab');\n};\n\nconst removeSelectedTabClass = () => {\n  const headerTabLinks = document.querySelectorAll('.tab-link');\n  for (const link of headerTabLinks)\n    if (link.classList.contains('selected-tab'))\n      link.classList.remove('selected-tab');\n};\n\nconst loadNewTab = (clickedTabName) => {\n  const tabLink = clickedTabName.dataset.tabLink;\n  emptyContentDiv();\n  loadPage(tabLink);\n  removeSelectedTabClass();\n  addSelectedTabClass(tabLink);\n  // if (tabLink === 'menu') updateCartOnClick();\n};\n\nconst addCtaEventListener = () => {\n  const ctaButton = document.querySelector('.home-cta-button');\n  ctaButton.addEventListener('click', () => loadNewTab(ctaButton));\n};\n\nconst switchTabOnClick = () => {\n  const tabLinks = document.querySelectorAll('.tab-link');\n  for (const link of tabLinks) {\n    link.addEventListener('click', () => {\n      if (link.classList.contains('selected-tab')) return;\n      loadNewTab(link);\n      const tabLink = link.dataset.tabLink;\n      if (tabLink === 'home') addCtaEventListener();\n    });\n  }\n};\n\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.loadHeader)();\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n(0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.loadFooter)();\nswitchTabOnClick();\naddCtaEventListener();\n(0,_header_js__WEBPACK_IMPORTED_MODULE_0__.toggleDarkTheme)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": function() { return /* binding */ loadMenuPage; }\n/* harmony export */ });\nlet menu = [];\n\nconst TimeLine = function (name, image, components) {\n  this.name = name;\n  this.image = image;\n  this.components = components;\n};\n\nconst addApptoLine = (name, image, components) => {\n  const newTimeLine = new TimeLine(name, image, components);\n  menu = [...menu, newTimeLine];\n};\n\naddApptoLine(\n  'Fill Basic Details',\n  'components/app-images/degree.png',\n  'University, Degree, Location'\n);\n\naddApptoLine(\n  'Upload Documents',\n  'components/app-images/doc.png',\n  'Transcripts, SSN'\n);\n\naddApptoLine(\n  'Pay the Application fee',\n  'components/app-images/fee.png',\n  'Credit card, Apple/Google Pay'\n);\n\n// addSaladToMenu(\n//   'Chicken Caesar Salad',\n//   'components/salad-images/salad3.png',\n//   'Chicken, lettuce, pasta, garlic',\n//   '7.90'\n// );\n\n// addSaladToMenu(\n//   'Israeli Spinach Salad',\n//   'components/salad-images/salad6.png',\n//   'Chicken, spinach, carrot, jalapeno, onion, seed',\n//   '10.90'\n// );\n\n// addSaladToMenu(\n//   'Roast Beef Coleslaw Salad',\n//   'components/salad-images/salad4.png',\n//   'Roasted beef, coleslaw, tomato, onion',\n//   '8.90'\n// );\n\nconst loadMenuPage = () => {\n  const contentDiv = document.querySelector('#content');\n\n  const menuContainer = document.createElement('div');\n  const menuHeading = document.createElement('h1');\n  const saladGrid = document.createElement('div');\n\n  menuContainer.classList.add('menu');\n  saladGrid.classList.add('salad-grid');\n\n  const initalAnimationDuration = 0.17;\n  let animationDuration = initalAnimationDuration;\n\n  for (const salad of menu) {\n    const AppCard = document.createElement('div');\n\n    const AppImage = document.createElement('img');\n    const AppName = document.createElement('h2');\n    const AppFee = document.createElement('p');\n    // const saladPrice = document.createElement('p');\n    // const addToCartButton = document.createElement('button');\n    // const plusIcon = document.createElement('img');\n\n    menuHeading.classList.add('page-heading');\n    AppCard.classList.add('salad-card');\n    AppImage.classList.add('salad-card-image');\n    AppName.classList.add('salad-card-name');\n    AppFee.classList.add('salad-card-ingredients');\n    // saladPrice.classList.add('salad-card-price');\n    // addToCartButton.classList.add('salad-card-add-to-cart');\n    // plusIcon.classList.add('salad-card-plus-icon');\n\n    AppImage.src = salad.image;\n    // plusIcon.src = 'components/icons/plus.svg';\n\n    menuHeading.textContent = 'Our Process';\n    AppName.textContent = salad.name;\n    AppFee.textContent = salad.components;\n    // saladPrice.textContent = `€${salad.price}`;\n\n    AppCard.style.animationDuration = `${animationDuration}s`;\n    animationDuration += initalAnimationDuration;\n\n    // addToCartButton.append(plusIcon);\n    AppCard.append(\n      AppImage,\n      AppName,\n      AppFee\n      // saladPrice,\n      // addToCartButton\n    );\n\n    saladGrid.append(AppCard);\n  }\n\n  menuContainer.append(menuHeading, saladGrid);\n  contentDiv.append(menuContainer);\n};\n\n// export const updateCartOnClick = () => {\n//   const addToCartButtons = document.querySelectorAll('.salad-card-add-to-cart');\n//   const cartIcon = document.querySelector('.cart-icon');\n//   for (const button of addToCartButtons) {\n//     button.addEventListener('click', () => {\n//       cartIcon.classList.add('shake');\n//       cartIcon.addEventListener('animationend', () =>\n//         cartIcon.classList.remove('shake')\n//       );\n//       const currentItemCount = parseInt(cartIcon.dataset.count);\n//       if (currentItemCount >= 9) {\n//         cartIcon.dataset.count = '9+';\n//         return;\n//       }\n//       cartIcon.dataset.count = currentItemCount + 1;\n//       cartIcon.classList.add('cart-has-item');\n//     });\n//   }\n// };\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;