var numberOfDrumButtons = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

document.querySelectorAll("button")[i].addEventListener("click", function() {
  // alert("I got clicked!"); 这是弹出话
  // var audio = new Audio("sounds/tom-3.mp3");
  // audio.play(); 这是如何插入声音
  // this.style.color = "white";
  // this is the identity of the button that triggered the event listener
  // switch: can take the code dowm a different track depending on the value of a variable.
  var buttonInnerHTML = this.innerHTML;

  makeSound(buttonInnerHTML);

  buttonAnimation(buttonInnerHTML);

  });

}
// detecting keyboard press
document.addEventListener("keydown",function(event) {
// once the keydown event was detected, the fucntion gets called, passing in the event that triggered the keydown
// and that event contains a property called key, which tells us which keyboard key was pressed.
// 此时function(event) as callbacks include things that we get back after the event has happened.
  makeSound(event.key);
  // event.key指的是tells us which keyboard key was pressed. key是keydown的一个property
buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    case "a":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "d":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "j":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "k":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "l":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    default:console.log(buttonInnerHTML);
  // default是指对那些没有被定义到的变量，应该怎么设置
    }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
