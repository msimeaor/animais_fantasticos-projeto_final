import NavAnimais from "./modulos/navAnimais.js"
import Faq from "./modulos/faq.js"
import Modal from "./modulos/modal.js"
import Tooltip from "./modulos/tooltip.js"
import FetchAnimais from "./modulos/fetchAnimais.js"
import Scroll from "./modulos/scroll.js"
import DropdownMenu from "./modulos/dropdownMenu.js"
import MenuMobile from "./modulos/menuMobile.js"
import FetchBitcoin from "./modulos/fetchBitcoin.js"
import Funcionamento from "./modulos/funcionamento.js"


const faq = new Faq('[data-acc="accordion"] dt')

const navAnimais = new NavAnimais('[data-tab="menu"] li', '[data-tab="content"] section')

const modal = new Modal('[data-modal="container"]', '[data-menu="login"]', '[data-modal="fechar"]')

const tooltip = new Tooltip('[data-tooltip]')

const fetchAnimais = new FetchAnimais('./json/numeros-animaisapi.json', '.especies-container')

const fetchBictoin = new FetchBitcoin('https://blockchain.info/ticker')

const scroll = new Scroll('[data-tab="scroll"]')

const dropDownMenu = new DropdownMenu('[data-dropdown="drop-menu"] a', '[data-dropdown="ul-dropdown"]')

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="menu"]', 'body')

const funcionamento = new Funcionamento('.funcionamento')