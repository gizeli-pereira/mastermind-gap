window.onload = () => init();
/*----- constants -----*/

/*----- app's state (variables) -----*/
let number = 0;
let result = 0;
let secretCodeColor = []; //four secret colors
let colorSetArr = [];
let whichRow = 0; //tells wich row
let whereRow = 0; //where in the row
let winArr = [];
let colorSet; //unique set

/*----- cached element references -----*/
const colorsEl = document.querySelector('.colors');
const [...buttonArray] = document.querySelectorAll('button');
const resetBtn = document.querySelector(".reset");
const messageEl = document.querySelector('.winlose-message');

//Buttons
const blueEl = document.getElementById('blue');
const redEl = document.getElementById('red');
const yellowEl = document.getElementById('yellow');
const greenEl = document.getElementById('green');
const purpleEl = document.getElementById('purple');
const greyEl = document.getElementById('grey');

//Background colors for the buttons
blueEl.style =
  'background-color: blue';
redEl.style =
  'background-color: red';
yellowEl.style =
  'background-color: yellow';
greenEl.style =
  'background-color: green';
purpleEl.style =
  'background-color: purple';
greyEl.style =
  'background-color: grey';

//Guesses are put in an array
const [...one] = document.querySelectorAll('#c1, #c2, #c3, #c4');
const [...two] = document.querySelectorAll('#c5, #c6, #c7, #c8');
const [...three] = document.querySelectorAll('#c9, #c10, #c11, #c12');
const [...four] = document.querySelectorAll('#c13, #c14, #c15, #c16');
const [...five] = document.querySelectorAll('#c17, #c18, #c19, #c20');
const [...six] = document.querySelectorAll('#c21, #c22, #c23, #c24');

//Results are put in an array
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
const colorsPosArray = [
    'blue',
    'red',
    'yellow',
    'green',
    'purple',
    'grey'
  ];

//Guess positions array
const boardPosArray = [
    one,
    two,
    three,
    four,
    five,
    six
];

//Results positions array
const resultsPosArray = [
    resultOne,
    resultTwo,
    resultThree,
    resultFour,
    resultFive,
    resultSix 
];



/*----- event listeners -----*/
colorsEl.addEventListener('click', evt => putOnGuess(evt));
resetBtn.addEventListener('click', () => {
    location.reload();
   });

/*----- functions -----*/

const init = () => {
    buttonArray.map(button => (button.disabled = false));
    randomEl.style = 'opacity: 1';
    pickColors();
};

//Creates the secret code color using a random number generator.
//Put colors in an array to remove any duplicate color, because we need a unique code
//And sets have unique entries. We check the size of the set and if it is less than four
//The function try again until we have a unique four code of colors
const pickColors = () => {
    for (let i = 0; i < 4; i++ ) {
        result = getRandomIntInclusive(0, 5);
        secretCodeColor.push(colorsPosArray[result]);
    }
    colorSet = new Set(secretCodeColor);
    if (colorSet.size < 4) {
        secretCodeColor.length = 0;
        colorSet.clear();
        init();
    }
};

//Create a random number
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
};

//Click on the color code peg and put on the guess board.
//The variable whichRow shows witch row the color is.
//The variable whereRow shows where in the row the color is.
const putOnGuess = evt => {
    if (evt.target.tagName === 'BUTTON') {
        boardPosArray[whichRow][whereRow].style.backgroundColor = evt.target.style.backgroundColor;
        whereRow++;
        if (whereRow === 4) {
            checkSequence();
            checkColors();
            checkResults();
            whereRow = 0;
            whichRow++;
        }
    }
};

//Check correct color and position
const checkSequence = () => {
    boardPosArray[whichRow].map((pos1, idx) => {
     if (pos1.style.backgroundColor === secretCodeColor[idx]) {
        resultsPosArray[whichRow][idx].style.backgroundColor =
        'green';
     }   
    });
};

//Check correct color, but in a wrong position
const checkColors = () => {
    // resultsPosArray[whichRow].map((pos1,idx1) => {
    //     if (pos1.style.backgroundColor === '') {
    //         boardPosArray[whichRow].map((pos2, idx2) => {
    //             if (idx1 === idx2) {
    //                 secretCodeColor.map(color => {
    //                     if (pos2.style.backgroundColor === color) {
    //                         pos1.style.backgroundColor = 'white';
    //                     }
    //                 });
    //             }
    //         });
    //     }
    // });
};

const checkResults = () => {


    

    //Win with 4 greens
   
};

