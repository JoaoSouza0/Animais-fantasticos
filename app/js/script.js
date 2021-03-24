import ScrollSuave from './modules/scrollSuave.js';
import Modal from './modules/modal.js';
import DropDown from './modules/dropDown.js';
import MenuMobile from './modules/menuMobile.js';
import Funcionamento from './modules/funcionamento.js';
import animalsFecth from './modules/animaisFecth.js';
import BtcFetch from './modules/bitcoinFetch.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/animacaoTab.js';
import ToolTip from './modules/toolTip.js';
import AnimaScroll from './modules/scrollAnimacao.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] li a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tab.init();

const toolTip = new ToolTip('[data-mapa]');
toolTip.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const animaScroll = new AnimaScroll('[data-anime="scroll"]');
animaScroll.init();

const dropDown = new DropDown('[data-dropdown]', ['click', 'touchstart']);
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="list"]', '[data-menu="button"]');
menuMobile.init();

const funcionemento = new Funcionamento('[data-horario]');
funcionemento.init();

animalsFecth('./animaisAPI.json', '.numeros-grid');

BtcFetch('https://blockchain.info/ticker', '[data-btc]');
