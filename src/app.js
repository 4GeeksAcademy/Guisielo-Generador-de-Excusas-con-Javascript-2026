import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = [
    'before the class',
    'when I was sleeping',
    'while I was exercising',
    'during my lunch',
    'while I was praying'
  ];

  // elegir aleatoriamente un elemento de cada array
  let randWho = who[Math.floor(Math.random() * who.length)];
  let randAction = action[Math.floor(Math.random() * action.length)];
  let randWhat = what[Math.floor(Math.random() * what.length)];
  let randWhen = when[Math.floor(Math.random() * when.length)];

  let excusa = `${randWho} ${randAction} ${randWhat} ${randWhen}`;
  
  document.getElementById("excuse").innerHTML = excusa;
};