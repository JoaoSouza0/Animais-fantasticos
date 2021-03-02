import ScrollSuave from './modules/scrollSuave.js';

import initModal from './modules/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropDown from './modules/dropDown.js';
import initMenuMobile from './modules/menuMobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimalsFecth from './modules/animaisFecth.js';
import initBtcFetch from './modules/bitcoinFetch.js';
import Accordion from './modules/accordion.js';
import initScrollAnima from './modules/scrollAnimacao.js';
import TabNav from './modules/animacaoTab.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] li a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tab = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tab.init();

initModal();
initToolTip();
initDropDown();
initMenuMobile();
initFuncionamento();
initAnimalsFecth();
initBtcFetch();
initScrollAnima();
