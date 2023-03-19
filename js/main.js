window.onload = () => init();
/*----- constants -----*/

/*----- app's state (variables) -----*/
let number = 0;
let result = 0;
let secretCodeColor = [];
let colorSetArr = [];
let setCounter = 0; //tells wich row
let posCounter = 0; //position inside the row
let winArr = [];
let colorSet; //unique set

/*----- cached element references -----*/
const codepegContainerEl = document.querySelector('.codepeg-container');
const [...buttonArray] = document.querySelectorAll('.colorBtn');

//Buttons
const blueEl = document.getElementById('blue');
const redEl = document.getElementById('red');
const yellowEl = document.getElementById('yellow');
const greenEl = document.getElementById('green');
const purpleEl = document.getElementById('purple');
const greyEl = document.getElementById('grey');

//Guesses are put in an array
const [...one] = document.querySelectorAll('#c1, #c2, #c3, c4');
const [...two] = document.querySelectorAll('#c5, #c6, #c7, c8');
const [...three] = document.querySelectorAll('#c9, #c10, #c11, c12');
const [...four] = document.querySelectorAll('#c13, #c14, #c15, c16');
const [...five] = document.querySelectorAll('#c17, #c18, #c19, c20');
const [...six] = document.querySelectorAll('#c21, #c22, #c23, c24');

//Result are put in an array
const [...resultOne] = document.querySelectorAll('.resultOne .small');
const [...resultTwo] = document.querySelectorAll('.resultTwo .small');
const [...resultThree] = document.querySelectorAll('.resultThree .small');
const [...resultFour] = document.querySelectorAll('.resultFour .small');
const [...resultFive] = document.querySelectorAll('.resultFive .small');
const [...resultSix] = document.querySelectorAll('.resultSix .small');

//Random code 
const randomEl = document.querySelector('.random-code');
const [...random] = document.querySelectorAll('.random-code .code');

//Color array
const coloursArray = [
    'radial-gradient(circle at 10px 10px, blue, rgb(1, 1, 44))',
    'radial-gradient(circle at 10px 10px, red, rgb(1, 1, 44))',
    'radial-gradient(circle at 10px 10px, yellow, rgb(1, 1, 44))',
    'radial-gradient(circle at 10px 10px, green, rgb(1, 1, 44))',
    'radial-gradient(circle at 10px 10px, purple, rgb(1, 1, 44))',
    'radial-gradient(circle at 10px 10px, white, rgb(1, 1, 44))'
  ];

//Guess positions array
const BoardPosEl = [
    one,
    two,
    three,
    four,
    five,
    six
];

//Results positions array
const ResultsPosEl = [
    resultOne,
    resultTwo,
    resultThree,
    resultFour,
    resultFive,
    resultSix 
];


/*----- event listeners -----*/


/*----- functions -----*/

const init = () => {

}

