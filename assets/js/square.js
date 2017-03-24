import hasClass from './hasClass';

const COLOURS = 256;
const answer = Symbol();
const defaultBg = "#38b";
const exRange = 30;

class square{
  constructor(){
    this.on = document.querySelector('.on');
    this.box = document.querySelector('#container');
    this.htmls = '<div class="square"></div>';
    this.header = document.querySelector('header');
    this.message = document.querySelector('#msg');
    this.newBtn = document.querySelector('#new');
    this.header.style.background = defaultBg;
    this.message.innerHTML = "";

    this.newBtn.textContent = "new colour";

    if(this.on.innerHTML === "hard"){
      this.num = 9;
    }else if(this.on.innerHTML === "extreme"){
      this.num = 9;
    }else{
      this.num = 6;
    }

    this[answer] = Math.floor(Math.random() * this.num);
    this.ans = this[answer];

    this.drawSquare(this.num);
  }

  drawSquare(items = 6){
    this.box.innerHTML = "";
    for(var i = 0; i < items; i++){
      this.box.innerHTML += this.htmls;
    }
    this.setColour();
  }

  setColour(){
    let squares = document.querySelectorAll('.square');
    let bgColour = "";
    if(this.on.innerHTML === "extreme"){
      var baseRed = Math.floor(Math.random() * COLOURS);
      var baseGreen = Math.floor(Math.random() * COLOURS);
      var baseBlue = Math.floor(Math.random() * COLOURS);
      console.log('RGB(' + baseRed + ',' + baseGreen + ',' + baseBlue + ')');
      let posinega = 1;
      for(var i = 0; i < squares.length; i++){
        posinega = Math.floor(Math.random() * 2) == 0 ? 1 : -1;
        var red = Math.floor(Math.random() * exRange * posinega + baseRed);
        posinega = Math.floor(Math.random() * 2) == 0 ? 1 : -1;
        var green =  Math.floor(Math.random() * exRange * posinega + baseGreen);
        posinega = Math.floor(Math.random() * 2) == 0 ? 1 : -1;
        var blue = Math.floor(Math.random() * exRange * posinega + baseBlue);

        red = red <= 255 ? red : 255;
        red = red <= 0 ? 0 : red;
        green = green <= 255 ? green : 255;
        green = green <= 0 ? 0 : green;
        blue = blue <= 255 ? blue : 255;
        blue = blue <= 0 ? 0 : blue;

        bgColour = 'rgb(' + red + ',' + green + ',' + blue + ')';

        squares[i].style.background = bgColour;
        if(i === this[answer]){
          document.querySelector('#colourCode').innerHTML = bgColour;
        }
      }
    }else{
      for(var i = 0; i < squares.length; i++){
        bgColour = 'rgb(' + Math.floor(Math.random() * COLOURS) + ',' + Math.floor(Math.random() * COLOURS) + ',' + Math.floor(Math.random() * COLOURS) + ')';
        squares[i].style.background = bgColour;
        if(i === this[answer]){
          document.querySelector('#colourCode').innerHTML = bgColour;
        }
      }
    }
  }

  checkFunction(tag){
    if(!hasClass(tag,'done')){
      const squares = document.querySelectorAll('.square');
      let answer = squares[this.ans].style.background;
      if(tag.style.background === answer){
        this.message.textContent = "Correct!!";
        for(var i = 0; i < squares.length; i++){
          squares[i].style.background = answer;
          squares[i].classList.add('done');
        }
        this.header.style.background = answer;
        this.newBtn.textContent = "play again ?";
      }else{
        this.message.textContent = "Try Again!!";
        tag.style.background = "";
        tag.classList.add('done');
      }
    }
  }

}

export default square;
