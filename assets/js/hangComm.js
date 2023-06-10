// //permissões e dicas
const commandsWords = [
    {
        command: "ls",
        trick: "Lista os arquivos e diretórios do diretório atual"
    },
    {
        command: "mkdir",
        trick: "Cria um novo diretório"
    },
    {
        command: "cat",
        trick: "Exibe o conteúdo de um arquivo"
    },
    {
        command: "chown",
        trick: "Altera o proprietário de arquivos e diretórios"
    },
    {
        command: "cd",
        trick: "Navega para um diretório específico"
    },
    {
        command: "man",
        trick: "Exibe o manual de comandos"
    },
    {
        command: "rm",
        trick: "Remove arquivos e diretórios"
    },
    {
        command: "sudo",
        trick: "Executa um comando com privilégios de superusuário"
    },
    {
        command: "find",
        trick: "Localiza arquivos e diretórios com base em critérios específicos"
    },
    {
        command: "kill",
        trick: "Encerra um processo"
    },
    {
        command: "du",
        trick: "Exibe o tamanho de arquivos e/ou diretórios"
    },
    {
        command: "chmod",
        trick: "Altera o permissões de acesso de um arquivo ou diretório"
    },
    {
        command: "ps",
        trick: "Mostra os processos do sistema num determinado instante"
    },
    {
        command: "touch",
        trick: "Cria um arquivo vazio"
    },
    {
        command: "help",
        trick: "Exibe opções de comandos"
    },
];

//vars
const trickItem = document.getElementById("trick");
const inputsElement = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset");
const nextButton = document.querySelector(".next");

let currentWordIndex = 0;

//mostrar proxima palavra
function nextWord() {
    if (currentWordIndex < commandsWords.length) {
        const currentWord = commandsWords[currentWordIndex];
        trickItem.textContent = currentWord.trick;
        inputsElement.innerHTML = "";

        for (let i = 0; i < currentWord.command.length; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.addEventListener("keyup", touchInputChange);
            input.addEventListener("keydown", touchKeyDown);
            inputsElement.appendChild(input);
        }

        resetButton.disabled = true;
        nextButton.disabled = true;

        if (currentWordIndex === commandsWords.length - 1) {
            nextButton.textContent = "Jogar novamente";
        } else {
            nextButton.textContent = "Próxima";
        }
    } else {
        showScore();
    }
}

//entrada de letras
function touchInputChange(event) {
    const inputs = [...inputsElement.querySelectorAll("input")];
    const allInputsFilled = inputs.every(input => input.value !== "");

    if (allInputsFilled) {
        const currentWord = commandsWords[currentWordIndex];
        const usercommand = inputs.map(input => input.value).join("");
        const correctcommand = currentWord.command;

        if (usercommand === correctcommand) {
            alert("Você acertou!");
        } else {
            alert(`Você errou! A permissão correta é: ${correctcommand}`);
        }

        resetButton.disabled = false;
        nextButton.disabled = false;

        if (currentWordIndex === commandsWords.length - 1) {
            nextButton.textContent = "Jogar novamente";
        }
    } else {
        resetButton.disabled = false;
        nextButton.disabled = true;
    }
}

//mudar de letras com "enter"
function touchKeyDown(event) {
    if (event.key === "Enter") {
        const currentInput = event.target;
        const nextInput = currentInput.nextElementSibling;

        if (nextInput) {
            nextInput.focus();
        }
    }
}

//pontuação
function showScore() {
    trickItem.textContent = "Jogo finalizado!";

    inputsElement.innerHTML = "";

    const imgWin = document.createElement("img");
    imgWin.src = "../img/winners cup with the number.png";
    imgWin.classList.add("img-win");

    inputsElement.appendChild(imgWin);

    resetButton.textContent = "Limpar";
    resetButton.disabled = true;
    nextButton.textContent = "Jogar novamente";
    nextButton.disabled = false;
}

//reset
function resetGame() {
    currentWordIndex = 0;
    nextWord();
}

//proximo e jogar novamente
nextButton.addEventListener("click", () => {
    if (currentWordIndex === commandsWords.length) {
        resetGame();
    } else {
        currentWordIndex++;
        nextWord();
    }
});

//limpar
resetButton.addEventListener("click", () => {
    resetButton.disabled = true; // Desativa o botão "Limpar"
    nextButton.disabled = true; // Desativa o botão "Próxima"

    const inputs = [...inputsElement.querySelectorAll("input")];
    inputs.forEach(input => {
        input.value = "";
    });
});

// Inicia o jogo
nextWord();
