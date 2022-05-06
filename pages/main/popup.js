// JSON И ДАННЫЕ

document.addEventListener('DOMContentLoaded', async () => {
  let newArr = [];
  await getData();

  async function getData() { // Достаем JSON
    let petsData = '../pets.json';
    let res = await fetch(petsData);
    let pets = await res.json();

    for (let pet of pets) {
      newArr.push(pet)
    }

    return pets
  }

  let cardList = document.querySelector('.carousel');
  let popupWrapper = document.querySelector('.popup-wrapper');
  let popupCloseButton = document.querySelector('.popup-close');
  let cardName = document.querySelectorAll('[data-info]')

  let popupImg = document.querySelector('.popup-img');
  let popupName = document.querySelector('.popup-name');
  let popupType = document.querySelector('.popup-type');
  let popupDescription = document.querySelector('.popup-description');
  let popupAge = document.querySelector('.popup-age');
  let popupInoculations = document.querySelector('.popup-inoculations');
  let popupDiseases = document.querySelector('.popup-diseases');
  let popupParasites = document.querySelector('.popup-parasites');
  const body = document.querySelector('body');
  

  cardList.addEventListener("click", function(e) { // Появление модалки

    for (let key in newArr) {
      if (newArr[key].name === e.target.dataset.info) {

        popupImg.src = newArr[key].img;
        popupName.textContent = newArr[key].name;
        popupType.textContent = newArr[key].type;
        popupDescription.textContent = newArr[key].description;
        popupAge.textContent = newArr[key].age;
        popupInoculations.textContent = newArr[key].inoculations.join(', ');
        popupDiseases.textContent = newArr[key].diseases.join(', ');
        popupParasites.textContent = newArr[key].parasites.join(', ');
        
        popupWrapper.classList.add('popup-wrapper-active');
        body.classList.add('_bodyNotScroll');
      }
    }
  });

  popupCloseButton.addEventListener("click", function(e) { // Закрытие модалки по крестику
    popupWrapper.classList.remove('popup-wrapper-active');
    body.classList.remove('_bodyNotScroll');
  });

  document.addEventListener("click", function(e) { 
    console.log(e.target)
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-wrapper')) {
      popupWrapper.classList.remove('popup-wrapper-active');
      body.classList.remove('_bodyNotScroll');
    }
  });

  document.addEventListener("mouseover", function(e) {
    if (e.target.classList.contains('popup') || e.target.classList.contains('popup-close') || e.target.classList.contains('popup-wrapper')) {
      popupCloseButton.classList.add('popup-close-hover')
    }
  });
  document.addEventListener("mouseover", function(e) { 
    if (!e.target.classList.contains('popup') && !e.target.classList.contains('popup-close') && !e.target.classList.contains('popup-wrapper')) {
      popupCloseButton.classList.remove('popup-close-hover')
    }
  });
});