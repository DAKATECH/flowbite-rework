"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_init = exports.mark_as_init = void 0;
function mark_as_init(element) {
    element.setAttribute('data-flowbite-init', 'true');
}
exports.mark_as_init = mark_as_init;
function is_init(element) {
    return element.getAttribute('data-flowbite-init') === 'true';
}
exports.is_init = is_init;
//# sourceMappingURL=init.js.map