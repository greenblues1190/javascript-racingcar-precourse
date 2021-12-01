import Car from './Car.js';

function App() {
  function isValidCarNames(carNameList) {
    const isUnique = (array) => {
      const set = new Set(array);

      return array.length === set.size;
    };

    const isLengthValid = (array, min, max) =>
      array.every((str) => str.length >= min && str.length <= max);

    return isUnique(carNameList) && isLengthValid(carNameList, 1, 5);
  }

  document.querySelector('#racing-count-heading').style.visibility = 'hidden';
  document.querySelector('#racing-count-form').style.visibility = 'hidden';
  document.querySelector('#result-heading').style.visibility = 'hidden';

  document.querySelector('#car-names-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  document
    .querySelector('#racing-count-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();
    });

  document.querySelector('#car-names-submit').addEventListener('click', () => {
    const inputString = document.querySelector('#car-names-input').value.trim();
    const nameList = inputString.split(',').map((name) => name.trim());

    if (!isValidCarNames(nameList)) {
      alert('잘못된 입력입니다.');
      document.querySelector('#car-names-input').value = '';

      return;
    }

    const carList = nameList.map((name) => new Car(name));

    console.log(carList);

    document.querySelector('#racing-count-heading').style.visibility =
      'visible';
    document.querySelector('#racing-count-form').style.visibility = 'visible';
  });

  document
    .querySelector('#racing-count-submit')
    .addEventListener('click', () => {
      console.log(document.querySelector('#racing-count-input').valueAsNumber);
    });
}

App();
