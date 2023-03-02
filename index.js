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

    // Generate front & back
    const cardFrontImg = createElement("img");
    const cardBackImg = createElement("img");
}

const createElement = (elemType) => {
    return document.createElement(elemType);
}