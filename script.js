//set variable for question number
var questionNumber = 0;

//score count
var score = 0; 

//entry page if button is clicked change html to question 
// function handleQuizStart(){
    //event listner for "button" 'Away We Go!'
$('.quizStart').on('click', '.startButton', event => {
        console.log('`handleQuizStart` ran');   
        hideQuizStart();
        initializeQuizQuestion();
}); 

// }

//sends .quizStart away slowly 
function hideQuizStart(){
    //"slow" animation   
    $( ".quizStart" ).hide( "slow", function() {
        console.log('"hideQuizStart" ran')
    });
}

// initialize quiz questions
function initializeQuizQuestion() {  
    console.log('`initializeQuizQuestion` ran');
    // insert quiz question HTML into the DOM 
    $('.startQuestion').html(generateQuizQuestion(water[questionNumber]));
  }

//generate question page with blanks for data 
var generateQuizQuestion = function(questionItem){
   //want to iterate and create the html 
    return `
        <div class="question">
            <h2>${questionItem.question}</h2>
            <form>
                
                    <div class='radio-group'>
                    <label class='radio-label'>
                        <input type="radio"  name="answer" value="${questionItem.answer[0]}" required>
                        <span class='inner-label'>${questionItem.answer[0]}</span>
                    </label>
                    <label class='radio-label'>
                        <input type="radio"  name="answer" value="${questionItem.answer[1]}"required>
                        <span class='inner-label'>${questionItem.answer[1]}</span>
                    </label>
                    <label class='radio-label'>
                        <input type="radio" name="answer" value="${questionItem.answer[2]}" required>
                        <span class='inner-label'>${questionItem.answer[2]}</span>
                    </label>
                    <label class='radio-label'>
                        <input type="radio"  name="answer" value="${questionItem.answer[3]}" required>
                        <span class='inner-label'>${questionItem.answer[3]}</span>
                    </label>
                    </div>
                    <button type="submit" class="submitButtonQuestion">Question Submit</button>
                
            </form>
       </div>` 
};






//on submit evaluate if the answer is correct or not using data from json
// function questionBtnOnSubmit(){
$(".startQuestion").on("click",'.submitButtonQuestion',function(event){
        var eventTarget = event.target;
        var $el = $(this);
        event.preventDefault();
        console.log("onSubmit happened! :3");
        checkQuiz();
});
// }

//evaluate if quiz is correct or incorrect
function checkQuiz(){     

    var checkedAnswer = $(".radio-label :checked").val();
    var correctQ = water[questionNumber].correctAnswer;
    // then
    /// compare it to the answer stored in the current questions object
    if (checkedAnswer === undefined) {
        alert("You must submit an answer");
    }
    else if (checkedAnswer === correctQ) {
        // iterate score
        score += water[questionNumber].score;
        initializeQuizCorrect();
        
        // IMPORTANT: tally up the score before switching to the next question number
        questionNumber++;
        $(".questionNumber").text(`${questionNumber}`);
        $(".score").text(`${score}`);
    }
    //if answer is incorrect 
    else {
        initializeIncorrect();
          
        questionNumber++;
        $(".questionNumber").text(`${questionNumber}`);
    }
}

//generate html if answer was correct
function initializeQuizCorrect() { 
    $('.logo').attr('src',`${water[questionNumber].icon}`);
    $('.logo').attr('alt',`${water[questionNumber].alt}`);
    $('.startQuestion').html(
        `<div class ="feedback">
        <h2>you got this</h2> 
        <button type="button" class="returnBtn">Resume Quiz</button>
        </div>`
    );
}

//generate html is answer was incorrect
function initializeIncorrect() {
    $('.logo').attr('src','art/incorrect.png');
    $('.logo').attr('alt','penrose triangle one')
    $('.startQuestion').html(
        `
        <div class="feedback">
        <h2>incorrect</h2> 
        <button type="button" class="returnBtn">Resume Quiz</button>
        </div>`
        );
}

//return button leads to quizEndCheck
// function returnBtn() {
$('.startQuestion').on('click',".returnBtn", function(event){
    quizEndCheck();
})
// }

//before moving to the next question 
function quizEndCheck() {
    //if you have not answered all the questions this renders the next question
    if (questionNumber < water.length) {
        console.log('next question')
        var nextQuizHtml = generateQuizQuestion(water[questionNumber]);
        //renders next question 
        $('.logo').attr('src','art/hexagram.png');
        $('.logo').attr('alt','hexagram');
        $('.startQuestion').html(nextQuizHtml);
    }
    //you have answered all the questions
    else{

        console.log('quiz end')
        endings();

        
    };
}

//quiz end logic 
function endings(){
    //if score is above 70 do this 
    if (score >= 70) {
        $('.logo').attr('src','art/penrose.png');
        $('.logo').attr('alt','penrose star');
        $('.startQuestion').html(
            `<div class="feedback">
            <h2 class="quizEnd">Great Job! let your knowledge of the major arcana travel throught the universe!</h2> 
            <button type="button" class="reset">Start Over</button>
            </div>`
            ); 
    }
    //else if score is between 50 and 70 do this 
    else if (score >= 50 ) {
        $('.logo').attr('src','art/enlightmentskull.png');
        $('.logo').attr('alt','skull over book');
        $('.startQuestion').html(
            `<div class="feedback">
            <h2 class="quizEnd">You must continue further along the path to reach true enlightenment...</h2> 
            <button type="button" class="reset">Start Over</button>
            </div>`
            ); 
    }
    //else if score is below 50 do this
    else{
        $('.logo').attr('src','art/drowning.png');
        $('.logo').attr('alt','drowning symbol');
        $('.startQuestion').html(
            `<div class="feedback">
            <h2 class="quizEnd">Sometimes you must sink in the waters of history to gain true knowledge...</h2> 
            <button type="button" class="reset">Start Over</button>
            </div>`
            ); 
    }

}




//reset quiz to begining 
$('.startQuestion').on('click', ".reset", function(event){
        // event.preventDefault();
        //hide last 
        $( '.startQuestion' ).empty();
        $( ".quizStart" ).show("slow");
       resetQuiz(); 
       console.log('"clickResetBtn" ran')
});

//reset quiz score and question number
function resetQuiz() {
    questionNumber = 0; 
    score = 0; 
    $('.questionNumber').text(questionNumber);
    $('.score').text(score);
    $('.logo').attr('src','art/hexagram.png');
    $('.logo').attr('alt','hexagram');


}
