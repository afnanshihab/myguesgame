
'use strict';
let score = 0 ;
let userName = prompt('enter your name ?') ;
    alert(`Welcome ${userName} to my game `);
   

let aboutAge = prompt('Do you think I am under 30?').toLowerCase();


if (aboutAge === 'yes' || aboutAge === 'y') {
    alert('this is a correct answer i am 28 ');
    //console.log(`Your age is  ${aboutAge} and it is correct`);
    let score = score + 1
} else if (aboutAge === 'no' || aboutAge === 'n') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Please type (yes) or (no) or (y) or (n)');


}

let aboutLikes = prompt('Do you think I like to drink coffe?').toLowerCase();


if (aboutLikes === 'yes' || aboutLikes === 'y') {
    alert('this is a correct answer actully I prefer coffee more than anything else ');
    let score = score + 1
    //console.log(`Your answer is  ${aboutLikes} and it is correct`);

} else if (aboutLikes === 'no' || aboutLikes === 'n') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Please type (yes) or (no) or (y) or (n)');


}


let aboutstudy = prompt('Do you think I am Graphic designer?').toLowerCase();


if (aboutstudy === 'no' || aboutstudy === 'n') {
    alert('this is a correct answer im not a designer i am an engineer ');
    let score = score + 1
    //console.log(`Your answer is  ${aboutstudy} and it is correct`);

} else if (aboutstudy === 'yes' || aboutstudy === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Please type (yes) or (no) or (y) or (n)');



}


let aboutLive = prompt('Do you think I live in Canada?').toLowerCase();


if (aboutLive === 'no' || aboutLive === 'n') {
    alert('this is a correct answer i live in Jordan right now but i hope to go to Canada ');
    let score = score + 1
    //console.log(`Your answer is  ${aboutLive} and it is correct`);

} else if (aboutLive === 'yes' || aboutLive === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Please type (yes) or (no) or (y) or (n)');



}


let abouOrigin = prompt('Do you think I come from Jordan ?').toLowerCase();


if (abouOrigin === 'no' || abouOrigin === 'n') {
    alert('this is a correct answer, actully i came from Palestine ');
    let score = score + 1
    //console.log(`Your answer is  ${abouOrigin} and it is correct`);

} else if (abouOrigin === 'yes' || abouOrigin === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Please type (yes) or (no) or (y) or (n)');
}





    let guessNum = prompt('ok, Now can you guess what the number in my mind its between 1 and 9' );

    for (let i = 0; i < 3 ; i++){

  while (guessNum !== 5) ; {
    guessNum = prompt('ok, Now can you guess the number ?try again');
  }

if (guessNum === 5 ) {
   alert('this is a correct answer ,its 5');
   else{ 
    if (guessNum > 5 ) {
        alert('too high');
   }
  else {
    alert('too low');
}  
}
}
 alert('the correct answer is' );
 







    let brotherName = ['osama','yousef','huthaifa','ahmad'];

   for (let j = 0; j < 4 ; j++); {

while (brotherName !== 'osama' && brotherName !== 'yousef' && brotherName !== 'huthaifa' && brotherName !== 'ahmad') ; {
    brotherName = prompt('ok, Now can you guess one of my brothers name?' ).toLowerCase();
}  

if(makeTrouble === 'ocama' || brotherName === 'yousef' || brotherName === 'huthaifa' || brotherName === 'ahmad')  {
      alert('you got it , great '); 
      let score = score + 1
}  

  
}
  alert('the correct answer is osama , yousef,huthaifa,ahmad' ); 
    


  alert(`your score is  ${score}`);

   alert(`Goodby ${userName} , come back again  `);


