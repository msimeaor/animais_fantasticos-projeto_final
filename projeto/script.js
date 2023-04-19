import NavAnimais from "./modulos/navAnimais.js"
import Faq from "./modulos/faq.js"
import Modal from "./modulos/modal.js"
import Tooltip from "./modulos/tooltip.js"
import FetchAnimais from "./modulos/fetchAnimais.js"
import initScroll from "./modulos/init-scroll.js"
import initDropdown from "./modulos/dropdown-menu.js"
import initMenu from "./modulos/menu-mobile.js"
import initFuncionamento from "./modulos/funcionamento.js"
import fetchBictoin from "./modulos/fetch-bitcoin.js"

const faq = new Faq('[data-acc="accordion"] dt')

const navAnimais = new NavAnimais('[data-tab="menu"] li', '[data-tab="content"] section')

const modal = new Modal('[data-modal="container"]', '[data-menu="login"]', '[data-modal="fechar"]')

const tooltip = new Tooltip('[data-tooltip]')

const fetchAnimais = new FetchAnimais('./json/numeros-animaisapi.json', '.especies-container')

initScroll()
initDropdown()
initMenu()
initFuncionamento()
fetchBictoin()