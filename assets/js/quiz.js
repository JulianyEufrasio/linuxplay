//perguntas e repostas
const questions = [
    //01
    {
        question: "Qual dos comandos abaixo cria um usuário completo, com senha e diretório home?",
        answers: [
            {answ: "adduser", correct: true},
            {answ: "user -create", correct: false},
            {answ: "useradd", correct: false},
            {answ: "useradd -full", correct: false},
            {answ: "createUser", correct: false},
        ]
    },
    //02
    {
        question: "Qual dos comandos abaixo cria um novo diretório?",
        answers: [
            {answ: "touch", correct: false},
            {answ: "mkdir", correct: true},
            {answ: "mv", correct: false},
            {answ: "ls", correct: false},
            {answ: "rm", correct: false},
        ]
    },
    //03
    {
        question: "Abaixo de que diretório ficam os arquivos de configuração no GNU/Linux?",
        answers: [
            {answ: "/conf", correct: false},
            {answ: "/boot", correct: false},
            {answ: "/system", correct: false},
            {answ: "/etc", correct: true},
            {answ: "/config", correct: false},
        ]
    },
    //04
    {
        question: "Qual é o nome do núcleo do sistema operacional Linux?",
        answers: [
            {answ: "UNIX", correct: false},
            {answ: "Kernel", correct: true},
            {answ: "Windows", correct: false},
            {answ: "Linux", correct: false},
            {answ: "DOM", correct: false},
        ]
    },
    //05
    {
        question: "Quais são as instruções que permitem desligar a máquina imediatamente?",
        answers: [
            {answ: "poweroff e shutdown off", correct: false},
            {answ: "systemoff e poweroff", correct: false},
            {answ: "poweroff e shutdown -h now", correct: true},
            {answ: "shutdown e off-line", correct: false},
            {answ: "shutdown -r now e shutdown -h now", correct: false},
        ]
    },
    //06
    {
        question: "Quais são as duas principais distribuições de Linux?",
        answers: [
            {answ: "Arch e Slackware", correct: false},
            {answ: "Ubuntu e CentOSsystemoff e poweroff", correct: false},
            {answ: "Gentoo e Mageia", correct: false},
            {answ: "Red Hat e openSUSE", correct: false},
            {answ: "Fedora e Debian", correct: true},
        ]
    },
    //07
    {
        question: "Qual é o comando para exibir o diretório atual no terminal?",
        answers: [
            {answ: "pwd", correct: true},
            {answ: "dir", correct: false},
            {answ: "showdir", correct: false},
            {answ: "ls", correct: false},
            {answ: "cd", correct: false},
        ]
    },
    //08
    {
        question: "Como renomear um arquivo no terminal?",
        answers: [
            {answ: "move", correct: false},
            {answ: "rn", correct: false},
            {answ: "mv", correct: true},
            {answ: "rename", correct: false},
            {answ: "renamefile", correct: false},
        ]
    },
    //09
    {
        question: "O diretório home do usuário root fica em que caminho?",
        answers: [
            {answ: "/user/root", correct: false},
            {answ: "/root", correct: true},
            {answ: "/home/root", correct: false},
            {answ: "/users/root", correct: false},
            {answ: "/root/home", correct: false},
        ]
    },
    //10
    {
        question: "O número 765 representa o conjunto de permissões:",
        answers: [
            {answ: "rw-rw-r-x", correct: false},
            {answ: "r-xrw-r-x", correct: false},
            {answ: "rw-r-x--", correct: false},
            {answ: "rwxrw-r-x", correct: false},
            {answ: "rwxrwxr-x", correct: true},
        ]
    },
    //11
    {
        question: "Que comando remove linhas duplicadas?",
        answers: [
            {answ: "uniq", correct: true},
            {answ: "rmd", correct: false},
            {answ: "wc", correct: false},
            {answ: "remove -d", correct: false},
            {answ: "sed", correct: false},
        ]
    },
    //12
    {
        question: "Qual é a função do comando cat no Linux?",
        answers: [
            {answ: "Comprimir um arquivo", correct: false},
            {answ: "Renomear um arquivo", correct: false},
            {answ: "Exibir o conteúdo de um arquivo", correct: true},
            {answ: "Criar um novo arquivo vazio", correct: false},
            {answ: "Copiar um arquivo para um diretório diferente", correct: false},
        ]
    },
    //13
    {
        question: "Qual é o comando utilizado para alterar as permissões de acesso de um arquivo ou diretório no Linux?",
        answers: [
            {answ: "chown", correct: false},
            {answ: "mv", correct: false},
            {answ: "rm", correct: false},
            {answ: "chmod", correct: true},
            {answ: "cp", correct: false},
        ]
    },
    //14
    {
        question: "Qual comando é usado para exibir informações sobre a utilização do espaço em disco?",
        answers: [
            {answ: "df", correct: true},
            {answ: "info", correct: false},
            {answ: "space", correct: false},
            {answ: "du", correct: false},
            {answ: "size", correct: false},
        ]
    },
    //15
    {
        question: "Qual é o diretório raiz no sistema de arquivos do Linux",
        answers: [
            {answ: "/bin", correct: false},
            {answ: "/", correct: true},
            {answ: "/home", correct: false},
            {answ: "/root", correct: false},
            {answ: "/usr", correct: false},
        ]
    },
];

//vars
const questionItem = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next");

let currentQuestionPosition = 0;
let score = 0;

//começar quiz
function start(){
    currentQuestionPosition = 0;
    score = 0;
    nextBtn.innerHTML = "Próxima";
    showQuestion();
}

//mostra a pergunta
function showQuestion(){
    reset();
    let currentQuestion = questions[currentQuestionPosition];
    let questionNum = currentQuestionPosition + 1;
    questionItem.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.answ;
        button.classList.add("btn-quiz");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnsw);
    });
}

//reseta o estado dos campos de resposta
function reset(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

//respostas
function selectAnsw(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    //quando a resposta marcada for a errada, a resposta correta será exibida
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true; //desativa as outras opções
    });
    nextBtn.style.display = "block";
}

//pontuação
function showScore(){
    reset();
    questionItem.innerHTML = `Você acertou ${score} de ${questions.length} questões!`;

    const imgWin = document.createElement("img");
    imgWin.src = "../img/winners cup with the number.png";
    imgWin.classList.add("img-win");

    questionItem.appendChild(imgWin);
    
    nextBtn.innerHTML = "Jogar de novo";
    nextBtn.style.display = "block";
    nextBtn.style.backgroundColor = "#1B1464";
}

//proxima pergunta
function touchNextBtn(){
    currentQuestionPosition++;
    if(currentQuestionPosition < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextBtn.addEventListener("click", ()=>{
    if(currentQuestionPosition < questions.length){
        touchNextBtn();
    }else{
        start();
    }
});

start();