import './flowbite.css';
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
export function initAll(parent) {
    if (parent === void 0) { parent = document; }
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
var events = new Events('load', [
    function () { return initAll(); },
]);
events.init();
export default {
    Accordion: Accordion,
    Carousel: Carousel,
    Collapse: Collapse,
    Dial: Dial,
    Drawer: Drawer,
    Dismiss: Dismiss,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    Tabs: Tabs,
    Tooltip: Tooltip,
    Events: Events,
};
// @ts-ignore
window.flowbite = {
    initAccordions: initAccordions,
    initCarousels: initCarousels,
    initCollapses: initCollapses,
    initDials: initDials,
    initDismisses: initDismisses,
    initDrawers: initDrawers,
    initDropdowns: initDropdowns,
    initModals: initModals,
    initPopovers: initPopovers,
    initTabs: initTabs,
    initTooltips: initTooltips,
    initAll: initAll,
};
//# sourceMappingURL=index.umd.js.map