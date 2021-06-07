
'use strict';

let userName = prompt('enter your name ?') ;
    alert(`Welcome ${userName} to my game `);
   

let aboutAge = prompt('Do you think I am under 30?').toLowerCase();


if (aboutAge === 'yes' || aboutAge === 'y') {
    alert('this is a correct answer i am 28 ');

    console.log(`Your answer is  ${aboutAge} and it is correct`);

} else if (aboutAge === 'no' || aboutAge === 'n') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Pease type (yes) or (no) or (y) or (n)');


}

let aboutLikes = prompt('Do you think I like to drink coffe?').toLowerCase();


if (aboutLikes === 'yes' || aboutLikes === 'y') {
    alert('this is a correct answer actully I prefer coffee more than anything else ');

    console.log(`Your answer is  ${aboutLikes} and it is correct`);

} else if (aboutLikes === 'no' || aboutLikes === 'n') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Pease type (yes) or (no) or (y) or (n)');


}


let aboutstudy = prompt('Do you think I am Graphic designer?').toLowerCase();


if (aboutstudy === 'no' || aboutstudy === 'n') {
    alert('this is a correct answer im not a designer i am an engineer ');

    console.log(`Your answer is  ${aboutstudy} and it is correct`);

} else if (aboutstudy === 'yes' || aboutstudy === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Pease type (yes) or (no) or (y) or (n)');



}


let aboutLive = prompt('Do you think I live in Canada?').toLowerCase();


if (aboutLive === 'no' || aboutLive === 'n') {
    alert('this is a correct answer i live in Jordan right now but i hope to go to Canada ');

    console.log(`Your answer is  ${aboutLive} and it is correct`);

} else if (aboutLive === 'yes' || aboutLive === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Pease type (yes) or (no) or (y) or (n)');



}


let abouOrigin = prompt('Do you think I come from Jordan ?').toLowerCase();


if (abouOrigin === 'no' || abouOrigin === 'n') {
    alert('this is a correct answer, actully i came from Palestine ');

    console.log(`Your answer is  ${abouOrigin} and it is correct`);

} else if (abouOrigin === 'yes' || abouOrigin === 'y') {
    alert('wrong answer, try to guess in the next question');
} else {
    alert('Pease type (yes) or (no) or (y) or (n)');
}





    alert(`Goodby ${userName} , come back again  `);
   