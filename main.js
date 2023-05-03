// ESERCIZIO EMAIL

// lista delle persone che puo' accedere
const listEmail = ["johnny@gmail.com", "andrea@gmail.com", "luca@gmail.com", "alfredo@gmail.com", "pinco@gmail.com"];
const selectInput = document.getElementById('input-email');
const selectButton = document.getElementById('button-input');

// prendi il valore dell'input con un bottone
selectButton.addEventListener('click',
    function () {
        const inputValue = selectInput.value;
        let result;

        // fai un controllo ciclico con tra il valore e la array
        for (let i = 0; i < listEmail.length; i++) {
            if (inputValue === listEmail[i]) {
                result = "sei nella lista";

            } else {
                result = "non sei nella lista";
                console.log(result);
            }
        }

        // stampa su html
        const selectDivText = document.getElementById('text');
        const printText = `<p>Tu ${result} !</p>`;
        selectDivText.innerHTML = printText;

    })



// ESERCIZIO DADI
const selectButtonDadi = document.getElementById('button-dadi');
const selectCheck = document.getElementById('check-uno');

// genera due numeri random con un bottone
selectButtonDadi.addEventListener('click',
    function () {
        const numUser = Math.floor(Math.random() * 6) + 1;
        const numComputer = Math.floor(Math.random() * 6) + 1;
        // confronta i due numeri e stampa il vincitore

        if (numUser > numComputer) {
            console.log("User ha vinto");
        } else if (numUser < numComputer) {
            console.log("Computer ha vinto");
        } else {
            console.log("Pareggio");
        }
    }
);


// ESERCIZIO DADI VERSIONE ARRAY
const selectButtonDadiDue = document.getElementById('button-dadi2');
const numbers = [];

// genera due numeri random con un bottone
selectButtonDadiDue.addEventListener('click',
    function () {
        const numUser = Math.floor(Math.random() * 6) + 1;
        const numComputer = Math.floor(Math.random() * 6) + 1;
        // metti il risultato in una array
        const putIntoArray = numbers.push(numUser, numComputer);
        console.log(numbers);

    }
);