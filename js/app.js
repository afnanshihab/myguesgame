
'use strict';
let score = 0;
let userName = prompt('enter your name ?');
alert(`Welcome ${userName} to my game `);




function userQuestion(question, correcAnsMsg, wrongAnsMsg, correctAns) {
    let userInput;
    do {
        userInput = prompt(question);
        if (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n') {
            alert('Please type (yes) or (no) ');
        }
    } while (userInput !== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

    if (userInput === correctAns) {
        console.log(correcAnsMsg);
        alert(correcAnsMsg);
        score++
    } else {
        console.log(wrongAnsMsg);
        alert(wrongAnsMsg);


    }
}

userQuestion('Do you think I am under 30?', 'this is a correct answer i am 28', 'wrong answer, try to guess in the next question', 'yes');
userQuestion('Do you think I like to drink coffe?', 'this is a correct answer actully I prefer coffee more than anything else', 'wrong answer, try to guess in the next question', 'yes');
userQuestion('Do you think I am Graphic designer?', 'this is a correct answer im not a designer i am an engineer//', 'wrong answer, try to guess in the next question', 'no');
userQuestion('Do you think I live in Canada', 'this is a correct answer i live in Jordan right now but i hope to go to Canada/', 'wrong answer, try to guess in the next question', 'no');
userQuestion('Do you think I come from Jordan ?', 'this is a correct answer, actully i came from Palestine/', ' wrong answer, try to guess in the next question', 'no');




let guessNum = prompt('ok, Now can you guess what the number in my mind its between 1 and 9');


for (let i = 0; i < 3; i++) {



    if (guessNum === 5) {
        alert('this is a correct answer ,its 5');
        score++;
        break;
    }
    else {
        if (guessNum > 5) {
            alert('too high');
            guessNum = prompt('ok, Now can you guess what the number in my mind its between 1 and 9');
        }
        else {
            alert(' too low ');
            guessNum = prompt('ok, Now can you guess what the number in my mind its between 1 and 9');
        }
    }
}
alert('the correct answer is 5');








let myBrotherName = ['osama', 'yousef', 'huthaifa', 'ahmad'];


for (let j = 0; j < 6; j++) {

    let brotherName = prompt('can you guess one of my brothers name?');

    let rightAnswer = false;
    for (let index = 0; index < myBrotherName.length; index++) {
        if (brotherName === myBrotherName[index]) {
            alert('you got it , great ');
            score++
            rightAnswer = true;
            break;
        }
    }
    if (j === 5 && rightAnswer === false) {
        alert('the correct answer is osama , yousef ,huthaifa , ahmad');
    }
}





alert(`your score is  ${score}`);

alert(`Goodby ${userName} , come back again  `);


