/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./projeto/modulos/anima-numeros.js":
/*!******************************************!*\
  !*** ./projeto/modulos/anima-numeros.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initNumeros)\n/* harmony export */ });\nfunction initNumeros() {\n  function iniciarContagem() {\n    const spanNumeros = document.querySelectorAll('[data-especie=\"numero\"]')\n\n    spanNumeros.forEach(numero => {\n      const valorNumero = +numero.innerHTML\n      const iterador = Math.floor(valorNumero / 30)\n      \n      let start = 0\n      const intervalo = setInterval(() => {\n        start += iterador\n        numero.innerHTML = start\n\n        if(start > valorNumero) {\n          clearInterval(intervalo)\n          numero.innerHTML = valorNumero\n        }\n      }, Math.random() * 100)\n\n    })\n  }\n\n  const observador = new MutationObserver(handleMutation)\n\n  function handleMutation(mutation) {\n    if(mutation[0].target.classList.contains('ativo'))  {\n      iniciarContagem()\n      observador.disconnect()\n    }\n  }\n\n  const section = document.querySelector('.especies')\n  observador.observe(section, {attributes: true})\n}\n\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/anima-numeros.js?");

/***/ }),

/***/ "./projeto/modulos/dropdown-menu.js":
/*!******************************************!*\
  !*** ./projeto/modulos/dropdown-menu.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdown)\n/* harmony export */ });\nfunction initDropdown() {\r\n  const liSobre = document.querySelector('[data-dropdown=\"drop-menu\"]')\r\n  const ulDropdown = document.querySelector('[data-dropdown=\"ul-dropdown\"]')\r\n\r\n  liSobre.addEventListener('mouseover', ativarDropdown)\r\n  function ativarDropdown(event) {\r\n    ulDropdown.classList.add('ativo')\r\n\r\n    this.addEventListener('mouseleave', desativarDropdown)\r\n  }\r\n\r\n  function desativarDropdown(event) {\r\n    ulDropdown.classList.remove('ativo')\r\n    this.removeEventListener('mouseleave', desativarDropdown)\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/dropdown-menu.js?");

/***/ }),

/***/ "./projeto/modulos/faq.js":
/*!********************************!*\
  !*** ./projeto/modulos/faq.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Faq)\n/* harmony export */ });\nclass Faq {\r\n  constructor(listaPerguntas) {\r\n    this.listaPerguntas = document.querySelectorAll(listaPerguntas)\r\n    this.initFaq()\r\n  }\r\n\r\n  adcEventoNasPerguntas() {\r\n    this.listaPerguntas.forEach(pergunta => {\r\n      pergunta.addEventListener('click', () => this.toggleClassNaPerguntaEResposta(event))\r\n    })\r\n  }\r\n\r\n  toggleClassNaPerguntaEResposta({target}) {\r\n    this.toggleClassNaPergunta(target)\r\n    this.toggleClassNaResposta(target.nextElementSibling)\r\n  }\r\n\r\n  toggleClassNaPergunta(pergunta) {\r\n    pergunta.classList.toggle('ativo')\r\n  }\r\n\r\n  toggleClassNaResposta(resposta) {\r\n    resposta.classList.toggle('ativo')\r\n  }\r\n\r\n  initFaq() {\r\n    if (this.listaPerguntas.length)\r\n      this.adcEventoNasPerguntas()\r\n    else\r\n      console.log('Erro ao carregar classe \"Faq\"!');\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/faq.js?");

/***/ }),

/***/ "./projeto/modulos/fetch-bitcoin.js":
/*!******************************************!*\
  !*** ./projeto/modulos/fetch-bitcoin.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBictoin)\n/* harmony export */ });\nfunction fetchBictoin() {\r\n  const timer = setInterval(() => {\r\n    coletarDadoApiBitcoin()\r\n  }, 15000)\r\n\r\n  async function coletarDadoApiBitcoin() {\r\n    const response = await fetch('https://blockchain.info/ticker')\r\n    const bitcoinBRL = (await response.json()).BRL\r\n\r\n    alterarValorElemento(bitcoinBRL)\r\n\r\n  }\r\n\r\n  function alterarValorElemento(bitcoinBRL) {\r\n    const spanBTCPreco = document.querySelector('.btc-preco')\r\n    spanBTCPreco.innerHTML = (100 / bitcoinBRL.buy).toFixed(6)\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/fetch-bitcoin.js?");

/***/ }),

/***/ "./projeto/modulos/funcionamento.js":
/*!******************************************!*\
  !*** ./projeto/modulos/funcionamento.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector('[data-semana]')\r\n  const arrayDiasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n  const horarioFuncionamento = funcionamento.dataset.hora.split(',').map(Number)\r\n\r\n  const data = new Date()\r\n\r\n  const diaSemanaAberto = arrayDiasSemana.some(numDia => numDia === data.getDay())\r\n\r\n  function lojaAberta() {\r\n    const hora = data.getHours()\r\n    const minuto = data.getMinutes()\r\n\r\n    return (diaSemanaAberto && (hora >= horarioFuncionamento[0] && hora < horarioFuncionamento[1]))\r\n  }\r\n\r\n  if(lojaAberta())\r\n    funcionamento.classList.add('aberto')\r\n  else \r\n    funcionamento.classList.remove('aberto')\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/funcionamento.js?");

/***/ }),

/***/ "./projeto/modulos/init-fetch-animais.js":
/*!***********************************************!*\
  !*** ./projeto/modulos/init-fetch-animais.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./projeto/modulos/anima-numeros.js\");\n\r\n\r\nfunction initFetchAnimais() {\r\n  fazerFetchApiAnimais()\r\n\r\n  async function fazerFetchApiAnimais() {\r\n    const response = await fetch('json/numeros-animaisapi.json')\r\n    const objAnimais = await response.json()\r\n    \r\n    objAnimais.forEach(animal => {\r\n      const div = createAnimal(animal)\r\n      const divSpanAnimais = div.querySelector('[data-especie=\"animal\"]')\r\n      const divSpanNumeros = div.querySelector('[data-especie=\"numero\"]')\r\n\r\n      divSpanAnimais.innerHTML = animal.especie\r\n      divSpanNumeros.innerHTML = animal.numero\r\n      \r\n      const especiesContainer = document.querySelector('.especies-container')\r\n      especiesContainer.appendChild(div)\r\n    });\r\n    (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n  }\r\n\r\n  function createAnimal(animal) {\r\n    const div = document.createElement('div')\r\n    div.classList.add('animal-container')\r\n\r\n    const spanAnimal = document.createElement('span')\r\n    spanAnimal.classList.add('sp-animal')\r\n    spanAnimal.setAttribute('data-especie', 'animal')\r\n\r\n    const spanNumero = document.createElement('span')\r\n    spanNumero.classList.add('sp-numero')\r\n    spanNumero.setAttribute('data-especie', 'numero')\r\n\r\n    div.appendChild(spanAnimal)\r\n    div.appendChild(spanNumero)\r\n    return div\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/init-fetch-animais.js?");

/***/ }),

/***/ "./projeto/modulos/init-scroll.js":
/*!****************************************!*\
  !*** ./projeto/modulos/init-scroll.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nfunction initScroll() {\r\n  const classeAtivo = 'ativo'\r\n  const sections = document.querySelectorAll('[data-tab=\"scroll\"]')\r\n  sections[0].classList.add(classeAtivo)\r\n  const $60porcentoHeightView = window.innerHeight * 0.6\r\n\r\n  window.addEventListener('scroll', medirSecTopEAtivar)\r\n\r\n  function medirSecTopEAtivar() {\r\n    sections.forEach(section => {\r\n      const sectionTop = section.getBoundingClientRect().top\r\n\r\n      if(sectionTop < $60porcentoHeightView) {\r\n        section.classList.add(classeAtivo)\r\n      }\r\n\r\n    })\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/init-scroll.js?");

/***/ }),

/***/ "./projeto/modulos/menu-mobile.js":
/*!****************************************!*\
  !*** ./projeto/modulos/menu-mobile.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\r\n  const botaoMenu = document.querySelector('[data-menu=\"button\"]')\r\n  const menuLista = document.querySelector('.menu-lista')\r\n  const body = document.querySelector('body')\r\n\r\n  botaoMenu.addEventListener('click', mostrarListaMenu)\r\n\r\n  function mostrarListaMenu(event) {\r\n    menuLista.classList.toggle('ativo')\r\n    body.removeEventListener('click', fecharMenu)\r\n\r\n    setTimeout(() => body.addEventListener('click', fecharMenu)) \r\n  }\r\n\r\n  function fecharMenu(event) {\r\n    if(!menuLista.contains(event.target)) {\r\n      menuLista.classList.remove('ativo')\r\n      this.removeEventListener('click', fecharMenu)\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/menu-mobile.js?");

/***/ }),

/***/ "./projeto/modulos/modal.js":
/*!**********************************!*\
  !*** ./projeto/modulos/modal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(containerModal, botaoLoginMenu, botaoFecharModal) {\r\n    this.containerModal = document.querySelector(containerModal)\r\n    this.botaoLoginMenu = document.querySelector(botaoLoginMenu)\r\n    this.botaoFecharModal = document.querySelector(botaoFecharModal)\r\n\r\n    this.toggleModal = this.toggleModal.bind(this)\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this)\r\n\r\n    this.initModal()\r\n  }\r\n\r\n  adicionarEventos() {\r\n    this.botaoLoginMenu.addEventListener('click', this.toggleModal)\r\n    this.botaoFecharModal.addEventListener('click', this.toggleModal)\r\n    this.containerModal.addEventListener('click', this.cliqueForaModal)\r\n  }\r\n\r\n  toggleModal(event) {\r\n    event.preventDefault()\r\n    this.containerModal.classList.toggle('ativo')\r\n  }\r\n\r\n  cliqueForaModal(event) {\r\n    if (event.target === this.containerModal) {\r\n      this.toggleModal(event)\r\n    }\r\n  }\r\n\r\n  initModal() {\r\n    if(this.containerModal && this.botaoLoginMenu && this.botaoFecharModal)\r\n      this.adicionarEventos()\r\n    else\r\n      console.log('Não foi possivel carregar o modal');\r\n  }\r\n\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/modal.js?");

/***/ }),

/***/ "./projeto/modulos/navAnimais.js":
/*!***************************************!*\
  !*** ./projeto/modulos/navAnimais.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NavAnimais)\n/* harmony export */ });\nclass NavAnimais {\r\n  constructor(listaImagensAnimais, listaSections) {\r\n    this.listaImagensAnimais = document.querySelectorAll(listaImagensAnimais)\r\n    this.listaSections = document.querySelectorAll(listaSections)\r\n    this.initNavAnimais()\r\n  }\r\n\r\n  adcEventoNasImagens() {\r\n    this.listaImagensAnimais.forEach((imagem, index) => {\r\n      imagem.addEventListener('click', () => this.ativarSectionDescricao(imagem, index))\r\n    })\r\n  }\r\n\r\n  ativarSectionDescricao(imagem, index) {\r\n    this.desativarSectionsDescricao()\r\n    this.listaSections[index].classList.add(this.listaSections[index].dataset.anime)\r\n  }\r\n\r\n  desativarSectionsDescricao() {\r\n    this.listaSections.forEach((section) => {\r\n      const datasetAnime = section.dataset.anime\r\n      section.classList.remove(datasetAnime)\r\n    })\r\n  }\r\n\r\n  initNavAnimais() {\r\n    if (this.listaImagensAnimais.length && this.listaSections.length) {\r\n      this.listaSections[0].classList.add('show-right')\r\n      this.adcEventoNasImagens()\r\n    } else\r\n      console.log('Erro ao carregar \"arquivo navAnimais.js\"');\r\n  }\r\n}\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/navAnimais.js?");

/***/ }),

/***/ "./projeto/modulos/tooltip.js":
/*!************************************!*\
  !*** ./projeto/modulos/tooltip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTooltip)\n/* harmony export */ });\nfunction initTooltip() {\r\n  const mapa = document.querySelector('[data-tooltip]')\r\n\r\n  mapa.addEventListener('mouseover', onMouseOver)\r\n  function onMouseOver(event) {\r\n    const tooltipContainer = criarElemento(this)\r\n\r\n    onMouseLeave.tooltipContainer = tooltipContainer\r\n    this.addEventListener('mouseleave', onMouseLeave)\r\n\r\n    onMouseMove.tooltipContainer = tooltipContainer\r\n    this.addEventListener('mousemove', onMouseMove)\r\n  }\r\n\r\n  function criarElemento(elemento) {\r\n    const tooltip = document.createElement('div')\r\n    tooltip.classList.add('tooltip')\r\n    tooltip.innerText = elemento.getAttribute('aria-label')\r\n    document.body.appendChild(tooltip)\r\n    return tooltip\r\n  }\r\n\r\n  const onMouseLeave = {\r\n    handleEvent() {\r\n      this.tooltipContainer.remove()\r\n    }\r\n  }\r\n\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.tooltipContainer.style.top = (event.pageY + 15) + 'px'\r\n      this.tooltipContainer.style.left = (event.pageX + 10) + 'px'\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/modulos/tooltip.js?");

/***/ }),

/***/ "./projeto/script.js":
/*!***************************!*\
  !*** ./projeto/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modulos_navAnimais_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulos/navAnimais.js */ \"./projeto/modulos/navAnimais.js\");\n/* harmony import */ var _modulos_faq_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulos/faq.js */ \"./projeto/modulos/faq.js\");\n/* harmony import */ var _modulos_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulos/modal.js */ \"./projeto/modulos/modal.js\");\n/* harmony import */ var _modulos_init_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modulos/init-scroll.js */ \"./projeto/modulos/init-scroll.js\");\n/* harmony import */ var _modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modulos/tooltip.js */ \"./projeto/modulos/tooltip.js\");\n/* harmony import */ var _modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modulos/dropdown-menu.js */ \"./projeto/modulos/dropdown-menu.js\");\n/* harmony import */ var _modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modulos/menu-mobile.js */ \"./projeto/modulos/menu-mobile.js\");\n/* harmony import */ var _modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modulos/funcionamento.js */ \"./projeto/modulos/funcionamento.js\");\n/* harmony import */ var _modulos_init_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modulos/init-fetch-animais.js */ \"./projeto/modulos/init-fetch-animais.js\");\n/* harmony import */ var _modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modulos/fetch-bitcoin.js */ \"./projeto/modulos/fetch-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst faq = new _modulos_faq_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-acc=\"accordion\"] dt')\r\nconst navAnimais = new _modulos_navAnimais_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section')\r\nconst modal = new _modulos_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-modal=\"container\"]', '[data-menu=\"login\"]', '[data-modal=\"fechar\"]')\r\n\r\n;(0,_modulos_init_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modulos_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_modulos_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_modulos_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_modulos_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_modulos_init_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_modulos_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\n\n//# sourceURL=webpack://animais-fantasticos/./projeto/script.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./projeto/script.js");
/******/ 	
/******/ })()
;