//форма редактирования профиля
const profilePopup = document.querySelector('.popup');
const profileForm = document.querySelector('.popup__form');
const titleProfile = document.querySelector('.profile__title');
const titlePopup = document.querySelector('.popup__input_key_title');
const descriptionProfile = document.querySelector('.profile__description');
const descriptionPopup = document.querySelector('.popup__input_key_description');

//открытие/закрытие попапа редактирование профиля
const buttonOpenProfilePopup = document.querySelector('.profile__edit-button');
const buttonCloseProfilePopup = profilePopup.querySelector('.popup__close');

//кнопка сохранить редактирование профиля
const buttonSaveProfile = document.querySelector('.popup__save');

//форма добавления места
const placePopup = document.querySelector('.popup_add');
const placeFormCard = placePopup.querySelector('.popup__add-form');
const titleCardProfile = document.querySelector('.place__title');
const titleCardPopup = document.querySelector('.popup__input_key_title-add');
const linkCardProfile = document.querySelector('.place__photo');
const linkCardPopup = document.querySelector('.popup__input_key_link-add');

//открытие/закрытие попапа добавление места
const buttonOpenAddPopup = document.querySelector('.profile__add-button');
const buttonCloseAddPopup = placePopup.querySelector('.popup__close');

//кнопка создание(добавления) места
const buttonCreatePlace = document.querySelector('.popup__save_add');

//форма открытия маштабной картинки
const imagePopup = document.querySelector('.popup_img');
const imagePopupElement = document.querySelector('.popup__img');
const imageTitleElement = document.querySelector('.popup__title-img');
const buttonCloseImgProfile = imagePopup.querySelector('.popup__close');

//template-element
const placesContainer = document.querySelector('.place__elements');
const placesTemplate = document.querySelector('#place-template').content;
const placeElement = document.querySelector('.place__photo');

//функция добавления карточек на страницу
const createCard = ({name, link}) => {
  const сardElement = placesTemplate.querySelector('.place__new-card').cloneNode(true);
  сardElement.querySelector('.place__title').textContent = name;
  сardElement.querySelector('.place__photo').alt = name;
  сardElement.querySelector('.place__photo').src = link;

  setEventListeners(сardElement, { name, link });
  
  placesContainer.prepend(сardElement);
}

//функция лайк
const handleLikeClickActive = (event) => { 
  event.target.classList.toggle('place__like-button_black');
}

//функция снять лайк
const handleLikeClickOff = (event) => {
  event.target.classList.remove();
}

//удалить карточку
const buttonDeleteCard = (event) => {
  const сardElements = event.target.closest('.place__new-card');
  сardElements.remove();
}
//функция открытия PopUp картинки
const handleImgClick = (cardData) => {
  openPopup(imagePopup);
  imagePopupElement.src = cardData.link;
  imagePopupElement.alt = cardData.name;
  imageTitleElement.textContent = cardData.name;
}

//слушатели для вызова функций
const setEventListeners = (сardElement, cardData) => {
  сardElement.querySelector('.place__delete-button').addEventListener('click', buttonDeleteCard);
  сardElement.querySelector('.place__like-button').addEventListener('click', handleLikeClickActive);
  сardElement.querySelector('.place__like-button').addEventListener('click', handleLikeClickOff);
  сardElement.querySelector('.place__photo').addEventListener('click', () => {
    handleImgClick(cardData);
  });
}

initialCards.forEach(createCard);


//функция открытия PopUp
const openPopup = function (popup) {
  popup.classList.toggle('popup_is-opened');
}

//слушатели для открытия PopUp
buttonOpenProfilePopup.addEventListener('click', function openPropfilePopup() {
  titlePopup.value = titleProfile.textContent;
  descriptionPopup.value = descriptionProfile.textContent;
  openPopup(profilePopup);
});

buttonOpenAddPopup.addEventListener('click', function () {
  openPopup(placePopup);
});

//функция закрытия PopUp
const closePopup = function (popup) {
  popup.classList.remove('popup_is-opened');
}

//слушатели для закрытия PopUp
buttonCloseProfilePopup.addEventListener('click', function () {
  closePopup(profilePopup);
});
buttonCloseAddPopup.addEventListener('click', function () {
  closePopup(placePopup);
});
buttonCloseImgProfile.addEventListener('click', function () {
  closePopup(imagePopup);
});

//кнопка Сохранить в Редактировать профиль
function handleProfileFormSubmit(evt)  {
  evt.preventDefault();
  titleProfile.textContent = titlePopup.value;
  descriptionProfile.textContent = descriptionPopup.value;
  closePopup(profilePopup);
}
profileForm.addEventListener('submit', handleProfileFormSubmit);


//кнопка Создать в Добавление места
function handleCardFormSubmit(evt) {
  evt.preventDefault();

  const newCard = createCard({
    name: titleCardPopup.value,
    link: linkCardPopup.value
  });

  closePopup(placePopup);
  evt.target.reset();
}
placeFormCard.addEventListener('submit', handleCardFormSubmit);