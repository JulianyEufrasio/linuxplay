// //permissões e dicas
const permissionWords = [
    {
        permission: "rw-r--r--",
        trick: "Representada pelo numero 644"
    },
    {
        permission: "rwxrw-r-x",
        trick: "Representada pelo numero 765"
    },
    {
        permission: "400",
        trick: "Representada pelo conjunto r--------"
    },
    {
        permission: "rw-rw-rw-",
        trick: "Representada pelo número 666"
    },
    {
        permission: "555",
        trick: "Representada pelo conjunto r-xr-xr-x"
    },
    {
        permission: "-wx-wx-wx",
        trick: "Representada pelo número 333"
    },
    {
        permission: "rwxr-x---",
        trick: "Representada pelo número 750"
    },
    {
        permission: "711",
        trick: "Representada pelo conjunto rwx--x--x"
    },
    {
        permission: "666",
        trick: "Representada pelo conjunto rw-rw-rw-"
    },
    {
        permission: "rwxr-xr-x",
        trick: "Representada pelo número 755"
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
    if (currentWordIndex < permissionWords.length) {
        const currentWord = permissionWords[currentWordIndex];
        trickItem.textContent = currentWord.trick;
        inputsElement.innerHTML = "";

        for (let i = 0; i < currentWord.permission.length; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 1;
            input.addEventListener("keyup", touchInputChange);
            input.addEventListener("keydown", touchKeyDown);
            inputsElement.appendChild(input);
        }

        resetButton.disabled = true;
        nextButton.disabled = true;

        if (currentWordIndex === permissionWords.length - 1) {
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
        const currentWord = permissionWords[currentWordIndex];
        const userPermission = inputs.map(input => input.value).join("");
        const correctPermission = currentWord.permission;

        if (userPermission === correctPermission) {
            alert("Você acertou!");
        } else {
            alert(`Você errou! A permissão correta é: ${correctPermission}`);
        }

        resetButton.disabled = false;
        nextButton.disabled = false;

        if (currentWordIndex === permissionWords.length - 1) {
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
    if (currentWordIndex === permissionWords.length) {
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
