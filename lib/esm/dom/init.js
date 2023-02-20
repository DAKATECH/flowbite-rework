export function mark_as_init(element) {
    element.setAttribute('data-flowbite-init', 'true');
}
export function is_init(element) {
    return element.getAttribute('data-flowbite-init') === 'true';
}
//# sourceMappingURL=init.js.map