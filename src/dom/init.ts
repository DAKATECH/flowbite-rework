export function mark_as_init(element : Element) {
    element.setAttribute('data-flowbite-init', 'true');
}

export function is_init(element : Element) {
    return element.getAttribute('data-flowbite-init') === 'true';
}

