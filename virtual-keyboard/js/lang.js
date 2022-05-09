import {
  renderEnBoard,
} from './js/keyboard.js';


const keys = document.querySelectorAll('.key');
const letRu = document.querySelectorAll('.letRU');
const textArea = document.querySelector('#textArea');
const sectionA = document.querySelector('.section-a');
const shiftLeft = document.querySelector('.shiftLeft');
const shiftRight = document.querySelector('.shiftRight');
const altRight = document.querySelector('.altRight');
const altLeft = document.querySelector('.altLeft');
const shiftRus = document.querySelectorAll('#shiftRus');
const ctrlRight = document.querySelector('.ctrlRight');
const ctrlLeft = document.querySelector('.ctrlLeft');
const keyUp = document.querySelector('.keyUp');
const keyRight = document.querySelector('.keyRight');
const keyLeft = document.querySelector('.keyLeft');
const keyDown = document.querySelector('.keyDown');
const space = document.querySelector('.space');
const capsLock = document.querySelector('.capsLock');
const win = document.querySelector('.win');

const keyCode = [
  192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
  9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 46,
  20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
  16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 144, 38, 16,
  17, 91, 18, 32, 17, 37, 40, 39, 18,
];

const checkClick = ['Backspace', 'Delete', 'Tab', 'CapsLock', 'Shift', 'Ctrl', 'Alt', 'Win', '←', '→', '↑', '↓', 'Win', 'Enter'];
const checkType = ['Tab', 'AltGraph', 'CapsLock', 'Control', 'Shift', 'Backspace', 'Delete', 'Ctrl', 'Alt', 'Win', '←', '→', '↑', '↓', 'Win', 'ArrowLeft', 'ArrowRight', 'ArrowDown', 'Enter', 'ArrowUp'];

const ruKey = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl',
];

const arrEn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];

const enKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift',
  'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl',
];

const shiftRu = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+',
  '/', ',',
];

const shiftRuEnd = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  '\\', '.',
];

const shiftEn = ['~', '!', '@', '#', '$', '%', '^', '&', '(', ')', '_', '+',
  '{', '}', '|', ':', '"', '<', '>', '?',
];

if (localStorage.test !== '0') {
  for (let i = 0; i < keys.length; i++) {
    keys[i].innerHTML = ruKey[i];
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase());
    localStorage.test = 1;
  }
  for (let i = 0; i < keyCode.length; i++) {
    keys[i].setAttribute('keyCode', keyCode[i]);
  }
} else {
  for (let i = 0; i < keys.length; i++) {
    keys[i].innerHTML = enKey[i];
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase());
    localStorage.test = 0;
  }
  for (let i = 0; i < keyCode.length; i++) {
    keys[i].setAttribute('keyCode', keyCode[i]);
  }
}

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener('keydown', (event) => {
    pressed.add(event.code);

    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.code);
  });
}
runOnKeys(
  () => {
    if (localStorage.getItem('test') >= 1) {
      for (let i = 0; i < keys.length; i++) {
        keys[i].innerHTML = enKey[i];
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase());
        localStorage.test = 0;
      }
    } else {
      for (let i = 0; i < keys.length; i++) {
        keys[i].innerHTML = ruKey[i];
        keys[i].setAttribute('keyname', keys[i].innerText);
        keys[i].setAttribute('upperCase', keys[i].innerText.toUpperCase());
        localStorage.test = 1;
      }
    }
  },
  'AltLeft',
  'ControlLeft',
);
window.addEventListener('keydown', (e) => {
  let str = '';
  if (localStorage.test == 0) {
    if (e.key == 'Backspace') {
      textArea.value = textArea.value.slice(0, textArea.value.length - 1);
    }
    if (capsLock.classList.contains('keyPress') || shiftLeft.classList.contains('keyPress')) {
      textArea.value += String.fromCharCode(e.which).toUpperCase();
    }

    if (capsLock.classList.contains('keyPress') || shiftLeft.classList.contains('keyPress')) {
      textArea.value += str.toUpperCase();
    } else {
      textArea.value += str;
    }
    if (!checkType.includes(e.key) && !capsLock.classList.contains('keyPress') && !shiftLeft.classList.contains('keyPress')) {
      textArea.value += String.fromCharCode(e.which).toLowerCase();
    }
  } else if (localStorage.test == 1) {
    for (let i = 0; i < keyCode.length; i++) {
      if (e.which == keyCode[i] && !checkType.includes(e.key)) {
        for (let y = 0; y < keys.length; y++) {
          if (keys[i].getAttribute('keycode') == keyCode[i]) {
            str = (keys[i].getAttribute('keyname'));
          }

          if (keys[i] == space) {
            str = ' ';
          }
        }
      }
    }
    if (capsLock.classList.contains('keyPress') || shiftLeft.classList.contains('keyPress')) {
      textArea.value += str.toUpperCase();
    } else {
      textArea.value += str;
    }
  }

  textArea.readOnly = 'true';
  textArea.focus();
  if (e.key == 'Backspace') {
    textArea.value = textArea.value.slice(0, textArea.value.length - 1);
  }
  for (let i = 0; i < keys.length; i++) {
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('uppercase') || e.which == keys[i].getAttribute('keyCode')) {
      keys[i].classList.add('keyPress');
    }
  }
  for (let i = 0; i < shiftRus.length; i++) {
    if (e.key === shiftRu[i]) {
      shiftRus[i].classList.add('keyPress');
    }
  }

  if (e.code == 'CapsLock') {
    capsLock.classList.add('keyPress');
    for (let i = 0; i < letRu.length; i++) {
      letRu[i].innerHTML = letRu[i].innerHTML.toUpperCase();
    }
  }

  if (e.code == 'ShiftLeft') {
    shiftRight.classList.remove('keyPress');
    for (let i = 0; i < letRu.length; i++) {
      letRu[i].innerHTML = letRu[i].innerHTML.toUpperCase();
    }
  }

  if (e.code == 'ShiftLeft' || e.code == 'ShiftRight') {
    for (let i = 0; i < shiftRus.length; i++) {
      shiftRus[i].innerHTML = shiftRu[i];
    }
  }

  if (e.code == 'AltLeft' || e.code == 'AltRight' || e.code == 'Tab') {
    e.preventDefault();
  }

  if (e.code == 'MetaLeft') {
    win.classList.add('keyPress');
  }
  if (e.code == 'AltLeft') {
    altRight.classList.remove('keyPress');
  }

  if (e.code == 'AltRight') {
    ctrlLeft.classList.remove('keyPress');
    altLeft.classList.remove('keyPress');
    altRight.classList.add('keyPress');
  }

  if (e.code == 'ShiftRight') {
    for (let i = 0; i < letRu.length; i++) {
      letRu[i].innerHTML = letRu[i].innerHTML.toUpperCase();
    }
    shiftLeft.classList.remove('keyPress');
  }
  if (e.code == 'ControlLeft') {
    ctrlLeft.classList.add('keyPress');
  }
  if (e.code == 'ControlRight') {
    ctrlRight.classList.add('keyPress');
  }

  if (e.code == 'Space') {
    space.classList.add('keyPress');
  }

  if (e.code == 'ArrowUp') {
    keyUp.classList.add('keyPress');
  }
  if (e.code == 'ArrowLeft') {
    keyLeft.classList.add('keyPress');
  }
  if (e.code == 'ArrowDown') {
    keyDown.classList.add('keyPress');
  }
  if (e.code == 'ArrowRight') {
    keyRight.classList.add('keyPress');
  }
});

window.addEventListener('keyup', (e) => {
  const caps = e.getModifierState && e.getModifierState('CapsLock');
  if (!caps && !e.shiftKey) {
    for (let i = 0; i < letRu.length; i++) {
      letRu[i].innerHTML = letRu[i].innerHTML.toLowerCase();
    }
    for (let i = 0; i < shiftRus.length; i++) {
      shiftRus[i].innerHTML = shiftRuEnd[i];
    }
  }
  for (let i = 0; i < shiftRus.length; i++) {
    if (e.key === shiftRu[i]) {
      shiftRus[i].classList.remove('keyPress');
    }
  }
  for (let i = 0; i < keys.length; i++) {
    if (caps) {
      capsLock.classList.add('keyPress');
    }
    if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('uppercase') || e.which == keys[i].getAttribute('keyCode')) {
      keys[i].classList.remove('keyPress');
    }
  }
  space.classList.remove('keyPress');
  ctrlLeft.classList.remove('keyPress');
  ctrlRight.classList.remove('keyPress');
  keyUp.classList.remove('keyPress');
  keyRight.classList.remove('keyPress');
  keyLeft.classList.remove('keyPress');
  keyDown.classList.remove('keyPress');
  altLeft.classList.remove('keyPress');
  win.classList.remove('keyPress');
  altRight.classList.remove('keyPress');
});

sectionA.addEventListener('mousedown', (e) => {
  textArea.focus();
 /*  textArea.removeAttribute('readonly') */
  if (e.target.getAttribute('keyname') !== null && !checkClick.includes(e.target.getAttribute('keyname'))) {
    textArea.value += e.target.innerText;
  }

  if (e.target.getAttribute('keyname') == 'Backspace') {
    textArea.value = textArea.value.slice(0, textArea.value.length - 1);
  }
  for (let i = 0; i < keys.length; i++) {
    if (e.target.getAttribute('keyname') == keys[i].getAttribute('keyname')) {
      keys[i].classList.add('keyPress');
    }
  }
});

window.addEventListener('mouseup', (e) => {
    /* textArea.removeAttribute('readonly') */
  for (let i = 0; i < keys.length; i++) {
    if (e.target.getAttribute('keyname') == keys[i].getAttribute('keyname')) {
      keys[i].classList.remove('keyPress');
    }
    setTimeout(() => {
      keys[i].classList.remove('keyPress');
    });
  }
});

window.addEventListener('mousemove', (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.target.getAttribute('keyname') == keys[i].getAttribute('keyname')) {
      keys[i].classList.remove('keyPress');
    }
  }
});
alert('Здравствуйте, работа в процессе завершения,если можно,пока не проверяйте.Спасибо!')
export default keys;
