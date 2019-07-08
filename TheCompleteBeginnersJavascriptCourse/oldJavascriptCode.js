//--------------------------------------
// Variables
//--------------------------------------

let maxHealth = 100;        // number
var currentHealth = 50.5;   // number
currentHealth = 40.5;       // number
currentHealth = maxHealth;  // 100
// maxHealth = currentHealth;

var isGameOver = false;     // boolean
isGameOver = true;

var numberOfLives = 3;      // number
var hasShield = false;      // boolean

//---------------------------------------
// Strings
//---------------------------------------

let characterName = "Gary";     // string
characterName = "Zenva";
const age = 26;                 // number

const welcomeMessage =
    `Hi, my name is ${characterName} and my age is ${age}`;  // string with interpolation

const length = characterName.length;                // number calculated using a string with it's method to count the length of itself
const upperName = characterName.toUpperCase();      // string with it's method to convert to uppercase
const lowerName = characterName.toLowerCase();      // string with it's method to convert to lowercase

const zen = characterName.slice(0,3);               // string with it's method to select items from a string

let currentLevel = 1;                               // number
const levelTitle = `Level ${currentLevel}`;         // string with interpolation

//----------------------------------------
// Operators
//----------------------------------------

// =, +, -, *, /, %, **

let health = 50;    // assignment operator
health = 100;       // assignment operator
health = health - 10;   // 90
health = health + 5;    // 95;
health = health % 50;   // 45;
//health % 2 === 0;     // false;
health = health ** 2;   // 90;

// +=, -=, *=, /=

health -= 20;           // health = health - 20;    // 70

// ++, --

health++;   // 71
health--;   // 70

// order of operations

health = (health * 2) - (health / 2) - (health / 2);    // 70

// three ways to increase health by 1

health++;               // 71
health = health + 1;    // 72
health += 1;            // 73