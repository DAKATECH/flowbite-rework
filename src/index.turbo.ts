// core components
import Accordion, { initAccordions } from './components/accordion';
import Carousel, { initCarousels } from './components/carousel';
import Collapse, { initCollapses } from './components/collapse';
import Dial, { initDials } from './components/dial';
import Dismiss, { initDismisses } from './components/dismiss';
import Drawer, { initDrawers } from './components/drawer';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Popover, { initPopovers } from './components/popover';
import Tabs, { initTabs } from './components/tabs';
import Tooltip, { initTooltips } from './components/tooltip';
import Events from './dom/events';

export function initAll(parent = document) {
    initAccordions(parent);
    initCollapses(parent);
    initCarousels(parent);
    initDismisses(parent);
    initDropdowns(parent);
    initModals(parent);
    initDrawers(parent);
    initTabs(parent);
    initTooltips(parent);
    initPopovers(parent);
    initDials(parent);
}


const events = new Events('turbo:load', [
    () => initAll(),
]);
events.init();

export default {
    Accordion,
    Carousel,
    Collapse,
    Dial,
    Drawer,
    Dismiss,
    Dropdown,
    Modal,
    Popover,
    Tabs,
    Tooltip,
    Events,
};
