const cardObjectDefinitions = [
    {id: 1, imagePath: "/images/card-KingHearts.png"},
    {id: 2, imagePath: "/images/card-JackClubs.png"},
    {id: 3, imagePath: "/images/card-QueenDiamonds.png"},
    {id: 4, imagePath: "/images/card-AceSpades.png"},
];

const createCard = (cardItem) => {
    // Generate elements that make up cards
    const cardElem = createElement("div");
    const cardInnerElem = createElement("div");
    const cardFrontElem = createElement("div");
    const cardBackElem = createElement("div");
    const cardFrontImg = createElement("img");
    const cardBackImg = createElement("img");

    // Add ID & class to overall card
    addClassToElement(cardElem, "card");
    addIdToElement(cardElem, cardItem.id);

    // Add classes to card elements
    addClassToElement(cardElem, "card-inner");
    addClassToElement(cardElem, "card-front");
    addClassToElement(cardElem, "card-back");

}

const createElement = (elemType) => {
    return document.createElement(elemType);
}

// Reusable method that adds class to HTML element
function addClassToElement(elem, className) {
    elem.classList.add(className);
}

// Adds ID to HTML element
function addIdToElement(elem, id) {
    elem.id = id;
}