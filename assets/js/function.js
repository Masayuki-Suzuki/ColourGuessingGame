import square from './square';

let square1;

reset(square1);

document.getElementById('new').addEventListener('click',function(square1){
  reset(square1);
});

document.querySelector('#easy').addEventListener('click',function(square1){
  document.querySelector('.on').classList.remove('on');
  this.classList.add('on');
  reset(square1);
});

document.querySelector('#hard').addEventListener('click',function(square1){
  document.querySelector('.on').classList.remove('on');
  this.classList.add('on');
  reset(square1);
});

document.querySelector('#extreme').addEventListener('click',function(square1){
  document.querySelector('.on').classList.remove('on');
  this.classList.add('on');
  reset(square1);
})

function reset(square1){
  square1 = new square();
  for(var i = 0; i < square1.num; i++){
    document.querySelectorAll('.square')[i].addEventListener('click',function(){
      square1.checkFunction(this);
    });
  }
}
