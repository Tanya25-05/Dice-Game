function rollDice()
{    
// For Dice 1
let number = Math.floor(Math.random()*6)+1;
let randomImage = "dice"+number+".png";  //dice1 - dice6 images
let randomImageSrc = randomImage; //folderName/dice1.png - folderName/dice2.png
let img1 = document.getElementsByClassName("img1")[0] 
img1.setAttribute("src",randomImageSrc)

// For Dice 2
let number1 = (Math.floor(Math.random() * 6))+1
let randomImage1 = "dice"+number1+".png"
let randomImgSrc1 =randomImage1;
let img2 = document.getElementsByClassName("img2")[0]
img2.setAttribute("src",randomImgSrc1) 

 if(number > number1)
 {
    document.querySelector(".wins").innerHTML="Player 1 wins!";
 }
 else if(number1 > number)
 {
    document.querySelector(".wins").innerHTML= "player 2 wins!";
 }
 else
 {
    document.querySelector(".wins").innerHTML= "Draw!"  ;
 }
}










// alert("do you want to roll  the dice?")
// prompt("Do you want to roll the dice? ");
// var number = Math.random();
// number = number*6;  
// number = Math.floor(number)+1;
// console.log(number);
//Comparators: "==" doesn't care about data type but "===" does
 
// function fizzbuzz()
// {
//     var arr = [];
//     let i=1;
//     // arr.push(i);
//     if(i%3===0)
//    {   
//     arr.push("fizz")
//    }
//     else if(i%5===0)
//     {
//     arr.push("buzz")
//     // alert("buzz");
//     // i++;
//     }
//     else if(i%3===0 && i%5===0)
//     {
//         arr.push("fizzBuzz");
//         // i++;  
// }
// else
// arr.push(i);
// i++;
// console.log(arr);
// }
  
 