console.log('funguju!');

let side = 1;

const dice = document.querySelector('.dice');

document.addEventListener('keydown', () => {
  side += 1;
  if (side > 6) {
    side = 1;
  }
  dice.src = `img/side${side}.svg`;
});


