const questions=[
    {
        question:"What is Capital of India?",
        answers:[
            {text:'UP',correct:false},
            {text:'Maharastra',correct:false},
            {text:'Delhi',correct:true},
            {text:'Goa',correct:false},
        ]
    },
    {
        question:"Which is the largest coffee-producing state of India?",
        answers:[
            {text:'Maharastra',correct:true},
            {text:'Kerala',correct:false},
            {text:'Karnataka',correct:false},
            {text:'UP',correct:false},
        ]
    },
    {
        question:"Which state has the largest area?",
        answers:[
            {text:'Rajasthan ',correct:true},
            {text:'UP',correct:false},
            {text:'Mahrastra',correct:false},
            {text:'Bihar',correct:false},
        ]
    },
    {
        question:"Which is the national tree of India?",
        answers:[
            {text:'Manggo',correct:false},
            {text:'Apple',correct:false},
            {text:'Banyan',correct:true},
            {text:'Grapes',correct:false},
        ]
    },
   
    

];

const questionElment=document.getElementById("question");
const answerButtons=document.getElementById("answerBtn");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
  resetState()
  let currentQuestion=questions[currentQuestionIndex];
  let questionNo=currentQuestionIndex +1;
  questionElment.innerHTML=questionNo + ". " + currentQuestion.
  question;

  currentQuestion.answers.forEach(answer =>{
    const button=document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn")
    answerButtons.appendChild(button)
    if(answer.correct){
        button.dataset.correct=answer.correct
    }
    button.addEventListener("click",selectAnswer)
  })

}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct=="true") {
            button.classList.add("correct")
        }
        button.disabled=true;
    })
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElment.innerHTML=`sannit ka baap ${score} out of ${questions.length}!`
    nextButton.innerHTML="play Again";
    nextButton.style.display="block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",() =>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
