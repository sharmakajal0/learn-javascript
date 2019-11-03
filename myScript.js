/**
 * 
 * @param {string} selector 
 * @returns {HTMLElement}
 */
function getElement(selector) {
    return document.querySelector(selector);
}

/**
 * 
 * @param {string} selector 
 * @returns {NodeListOf<HTMLElement>}
 */
function getElements(selector) {
    return document.querySelectorAll(selector);
}

(() => {
    getElement('#button-1').onclick = function () {
        getElement('#demo').innerHTML = "change in paragraph!";
    }
})();