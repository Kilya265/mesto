const profilePopup = document.querySelector('.popup');
const profileForm = document.querySelector('.popup__form');
const popupPlace = document.querySelector('.popup_add');
const placeAddForm = popupPlace.querySelector('.popup__add-form');

const popupImg = document.querySelector('.popup_img');
const popupImgElement = document.querySelector('.popup__img');
const popupTitleImg = document.querySelector('.popup__title-img');

const buttonOpenProfilePopup = document.querySelector('.profile__edit-button');
const popupOpenAddButton = document.querySelector('.profile__add-button');

const popupCloseButtonElement = profilePopup.querySelector('.popup__close');
const popupCloseAddButton = popupPlace.querySelector('.popup__close');
const popupCloseImg = popupImg.querySelector('.popup__close');

const saveButtonElement = document.querySelector('.popup__save');
const createButtonElement = document.querySelector('.popup__save_add');

const titleProfile = document.querySelector('.profile__title');
const titlePopup = document.querySelector('.popup__input_key_title');

const descriptionProfile = document.querySelector('.profile__description');
const descriptionPopup = document.querySelector('.popup__input_key_description');

const titleAddProfile = document.querySelector('.place__title');
const titleAddPopup = document.querySelector('.popup__input_key_title-add');

const linkProfile = document.querySelector('.place__photo');
const linkPopup = document.querySelector('.popup__input_key_link-add');

const placesElements = document.querySelector('.place__elements');
const placesTemplate = document.querySelector('#place-template').content;
const placeElement = document.querySelector('.place__photo');

const createCard = ({name, link}) => {
  const сardElement = placesTemplate.querySelector('.place__new-card').cloneNode(true);
  сardElement.querySelector('.place__title').textContent = name;
  сardElement.querySelector('.place__photo').alt = name;
  сardElement.querySelector('.place__photo').src = link;

  setEventListeners(сardElement, { name, link });
  
  placesElements.prepend(сardElement);
}


const handleImgClick = (cardData) => {
  openPopup(popupImg);
  popupImgElement.src = cardData.link;
  popupImgElement.alt = cardData.name;
  popupTitleImg.textContent = cardData.name;
}

const handleLikeClickActive = (event) => { 
  event.target.classList.toggle('place__like-button_black');
}

const handleLikeClickOff = (event) => {
  event.target.classList.remove();
}

const buttonDeleteCard = (event) => {
  const сardElements = event.target.closest('.place__new-card');
  сardElements.remove();
}

const setEventListeners = (сardElement, cardData) => {
  сardElement.querySelector('.place__delete-button').addEventListener('click', buttonDeleteCard);
  сardElement.querySelector('.place__like-button').addEventListener('click', handleLikeClickActive);
  сardElement.querySelector('.place__like-button').addEventListener('click', handleLikeClickOff);
  сardElement.querySelector('.place__photo').addEventListener('click', () => {
    handleImgClick(cardData);
  });
}

initialCards.forEach(createCard);


//функция открытия и закрытия попапа
const openPopup = function (popup) {
  popup.classList.toggle('popup_is-opened');
}

buttonOpenProfilePopup.addEventListener('click', function openPropfilePopup() {
  titlePopup.value = titleProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
  openPopup(profilePopup);
});

popupOpenAddButton.addEventListener('click', function () {
  openPopup(popupPlace);
});

const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
}
popupCloseButtonElement.addEventListener('click', function () {
  closePopup(profilePopup);
});

popupCloseAddButton.addEventListener('click', function () {
  closePopup(popupPlace);
});

popupCloseImg.addEventListener('click', function () {
  closePopup(popupImg);
});

function handleProfileFormSubmit(evt)  {
  evt.preventDefault();
  titleProfile.textContent = titlePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;
  closePopup(profilePopup);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);

function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = createCard({
    name: titleAddPopup.value,
    link: linkPopup.value
  });

  closePopup(popupPlace);
  evt.target.reset();
}
placeAddForm.addEventListener('submit', handleCardFormSubmit);
