"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initAll = void 0;
// core components
var accordion_1 = require("./components/accordion");
var carousel_1 = require("./components/carousel");
var collapse_1 = require("./components/collapse");
var dial_1 = require("./components/dial");
var dismiss_1 = require("./components/dismiss");
var drawer_1 = require("./components/drawer");
var dropdown_1 = require("./components/dropdown");
var modal_1 = require("./components/modal");
var popover_1 = require("./components/popover");
var tabs_1 = require("./components/tabs");
var tooltip_1 = require("./components/tooltip");
var events_1 = require("./dom/events");
function initAll(parent) {
    if (parent === void 0) { parent = document; }
    (0, accordion_1.initAccordions)(parent);
    (0, collapse_1.initCollapses)(parent);
    (0, carousel_1.initCarousels)(parent);
    (0, dismiss_1.initDismisses)(parent);
    (0, dropdown_1.initDropdowns)(parent);
    (0, modal_1.initModals)(parent);
    (0, drawer_1.initDrawers)(parent);
    (0, tabs_1.initTabs)(parent);
    (0, tooltip_1.initTooltips)(parent);
    (0, popover_1.initPopovers)(parent);
    (0, dial_1.initDials)(parent);
}
exports.initAll = initAll;
var events = new events_1.default('turbo:load', [
    function () { return initAll(); },
]);
events.init();
exports.default = {
    Accordion: accordion_1.default,
    Carousel: carousel_1.default,
    Collapse: collapse_1.default,
    Dial: dial_1.default,
    Drawer: drawer_1.default,
    Dismiss: dismiss_1.default,
    Dropdown: dropdown_1.default,
    Modal: modal_1.default,
    Popover: popover_1.default,
    Tabs: tabs_1.default,
    Tooltip: tooltip_1.default,
    Events: events_1.default,
};
// @ts-ignore
window.flowbite = {
    initAccordions: accordion_1.initAccordions,
    initCarousels: carousel_1.initCarousels,
    initCollapses: collapse_1.initCollapses,
    initDials: dial_1.initDials,
    initDismisses: dismiss_1.initDismisses,
    initDrawers: drawer_1.initDrawers,
    initDropdowns: dropdown_1.initDropdowns,
    initModals: modal_1.initModals,
    initPopovers: popover_1.initPopovers,
    initTabs: tabs_1.initTabs,
    initTooltips: tooltip_1.initTooltips,
    initAll: initAll,
};
//# sourceMappingURL=index.turbo.js.map