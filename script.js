const questions=[
    {
        question:"How black is Aditya?",
        answers:[
            {text:'Nigger',correct:false},
            {text:'Light-Skin',correct:false},
            {text:'kala',correct:true},
            {text:'Dark-skin',correct:false},
        ]
    },
    {
        question:"Who is the shortest?",
        answers:[
            {text:'Tanmay',correct:true},
            {text:'Anmol',correct:false},
            {text:'Sannit ki choti luli',correct:false},
            {text:'Dada',correct:false},
        ]
    },
    {
        question:"Whos the thickest?",
        answers:[
            {text:'Zack',correct:true},
            {text:'Dada',correct:false},
            {text:'Sannit Mom',correct:false},
            {text:'Rajiya',correct:false},
        ]
    },
    {
        question:"Dada ka weight(Its accurate)?",
        answers:[
            {text:'72kg',correct:false},
            {text:'65kg',correct:false},
            {text:'80kg',correct:true},
            {text:'90kg',correct:false},
        ]
    },
    {
        question:"Zack's full name",
        answers:[
            {text:'Atharav dadaranla',correct:false},
            {text:'Atharav darandale',correct:true},
            {text:'Atharav darundale',correct:false},
            {text:'Atharav darendra',correct:false},
        ]
    },
    {
        question:"When was group Created(original)",
        answers:[
            {text:'15 june 2021',correct:false},
            {text:'26 dec',correct:false},
            {text:'7 jan 2021',correct:false},
            {text:'20 july 2021',correct:true},
        ]
    },
    {
        question:"Subse Cringe?",
        answers:[
            {text:'Zack',correct:false},
            {text:'sannit',correct:true},
            {text:'aditya',correct:false},
            {text:'yog',correct:false},
        ]
    },
    {
        question:"Indra ka age?",
        answers:[
            {text:'legally can date 13 year old girl/boy',correct:false},
            {text:'15',correct:false},
            {text:'17',correct:true},
            {text:'22',correct:false},
        ]
    },
    {
        question:"Who looks like asia/chinesh,japanesh,small eye",
        answers:[
            {text:'sannit areakar',correct:true},
            {text:'sannit arekar',correct:true},
            {text:'sannit chutikar',correct:true},
            {text:'sannit areilkar',correct:true},
        ]
    },
    {
        question:"Who is the gayesh?",
        answers:[
            {text:'kelker',correct:false},
            {text:'granditya gara(amin)',correct:true},
            {text:'rajiya',correct:true},
            {text:'om gule',correct:true},
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
