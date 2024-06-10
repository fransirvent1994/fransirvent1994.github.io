function play(userChoice) {
    const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const resultText = document.getElementById("result_text");

    const result = getResult(userChoice, computerChoice);
    resultText.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
}

function getResult(userChoice, computerChoice) {
    const winConditions = {
        Rock: ["Scissors", "Lizard"],
        Paper: ["Rock", "Spock"],
        Scissors: ["Paper", "Lizard"],
        Lizard: ["Spock", "Paper"],
        Spock: ["Scissors", "Rock"]
    };

    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (winConditions[userChoice].includes(computerChoice)) {
        return "You win!";
    }

    return "You lose!";
}
