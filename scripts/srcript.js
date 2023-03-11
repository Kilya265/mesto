let popupElement = document.querySelector('.popup');

let popupCloseButtonElement = popupElement.querySelector('.popup__close');
let popupOpenButtonElement = document.querySelector('.profile__edit-button');

let titleProfile = document.querySelector('.profile__title');
let titlePopup = document.querySelector('.popup__input_key_title');

let descriptionProfile = document.querySelector('.profile__description');
let descriptionPopup = document.querySelector('.popup__input_key_description');

let saveButtonElement = document.querySelector('.popup__save');

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

popupElement.addEventListener('submit', saveButtonEdit);
