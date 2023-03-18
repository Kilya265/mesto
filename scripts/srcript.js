let popupElement = document.querySelector('.popup');
let popupFormElement = document.querySelector('.popup__form');

let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');

let titleProfile = document.querySelector('.profile__title');
let titlePopup = document.querySelector('.popup__input_key_title');

let descriptionProfile = document.querySelector('.profile__description');
let descriptionPopup = document.querySelector('.popup__input_key_description');

let saveButtonElement = document.querySelector('.popup__save');

const initialCards = [
  {
    name: 'Дубай',
    link: 'https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80'
  },
  {
    name: 'Испания',
    link: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  },
  {
    name: 'Япония',
    link: 'https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2106&q=80'
  },
  {
    name: 'Индонезия',
    link: 'https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
  },
  {
    name: 'Соединённые Штаты Америки',
    link: 'https://images.unsplash.com/photo-1543158266-0066955047b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
  },
  {
    name: 'Италия',
    link: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80'
  }
];

const placesElements = document.querySelector(".place__elements");
const placeTemplate = document.querySelector("#place-template").content;

const placeInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const placeElement = placeTemplate.querySelector(".place__new-card").cloneNode(true);
  placeElement.querySelector(".place__title").textContent = name;
  placeElement.querySelector(".place__photo").src = link;

  placesElements.prepend(placeElement);
}

render();

const openPopup = function () {
  popupElement.classList.toggle('popup_is-opened');
  titlePopup.value = titleProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
}
popupOpenButtonElement.addEventListener('click', openPopup);

const closePopup = function () {
  popupElement.classList.remove('popup_is-opened');
}
popupCloseButtonElement.addEventListener('click', closePopup);


function saveButtonEdit(saveButton) {
  saveButton.preventDefault()

  titleProfile.textContent = titlePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;

  closePopup();
}

popupFormElement.addEventListener('submit', saveButtonEdit);