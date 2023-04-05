let popupElement = document.querySelector('.popup');
let popupFormElement = document.querySelector('.popup__form');
let popupPlace = document.querySelector('.popup_add');
let placeAddForm = popupPlace.querySelector('.popup_add-form');

//popupImg
let popupImg = document.querySelector('.popup_img');


//открытие попапа с картинкой
// let popupOpenImg = document.querySelector('.')
let popupImgElement = document.querySelector('.popup__img');
let popupTitleImg = document.querySelector('.popup__title-img');

let popupOpenButtonElement = document.querySelector('.profile__edit-button');
let popupOpenAddButton = document.querySelector('.profile__add-button');

let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupCloseAddButton = popupPlace.querySelector('.popup__close');

let saveButtonElement = document.querySelector('.popup__save');
let createButtonElement = document.querySelector('.popup__save_add');

let titleProfile = document.querySelector('.profile__title');
let titlePopup = document.querySelector('.popup__input_key_title');

let descriptionProfile = document.querySelector('.profile__description');
let descriptionPopup = document.querySelector('.popup__input_key_description');


let titleAddProfile = document.querySelector('.place__title');
let titleAddPopup = document.querySelector('.popup__add-input_key_title');

let linkProfile = document.querySelector('.place__photo');
let linkPopup = document.querySelector('.popup__add-input_key_link');

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

const placesElements = document.querySelector('.place__elements');
const placesTemplate = document.querySelector('#place-template').content;
const placeElement = document.querySelector('.place__photo');

const placeCard = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  }
})

const render = () => {
  placeCard.forEach(createCard);
}

const createCard = ({ name, link }) => {
  const сardElements = placesTemplate.querySelector('.place__new-card').cloneNode(true);
  сardElements.querySelector('.place__title').textContent = name;
  сardElements.querySelector('.place__photo').src = link;

  setEventListeners(сardElements);

  placesElements.prepend(сardElements);
}

const likeActive = (event) => {
  const likeButtonActive = event.target.closest('.place__like-button');
  likeButtonActive.setAttribute('style', 'background: url(images/like-active.svg) no-repeat center');
}

const deleteCard = (event) => {
  const сardElements = event.target.closest('.place__new-card');
  сardElements.remove();
}

const setEventListeners = (сardElements) => {
  сardElements.querySelector('.place__delete-button').addEventListener('click', deleteCard);
  сardElements.querySelector('.place__like-button').addEventListener('click', likeActive);
}

render();

//функция открытия и закрытия попапа
const openPopup = function (popup) {
  popup.classList.toggle('popup_is-opened');
  titlePopup.value = titleProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
}
popupOpenButtonElement.addEventListener('click', function () {
  openPopup(popupElement);
});

popupOpenAddButton.addEventListener('click', function () {
  openPopup(popupPlace);
});

const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
}
popupCloseButtonElement.addEventListener('click', function () {
  closePopup(popupElement);
});

popupCloseAddButton.addEventListener('click', function () {
  closePopup(popupPlace);
});

function saveButtonEdit(saveButton) {
  saveButton.preventDefault()

  titleProfile.textContent = titlePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;

  closePopup(popupElement);
}
popupFormElement.addEventListener('submit', saveButtonEdit);

function saveAddCard(evt) {
  evt.preventDefault();

  const newCard = createCard({
    name: titleAddPopup.value,
    link: linkPopup.value
  });
  document.querySelector('.popup__save_add');
  closePopup(popupPlace);
}
placeAddForm.addEventListener('submit', saveAddCard);

