// ESERCIZIO EMAIL

// lista delle persone che puo' accedere
const listEmail = ["johnny@gmail.com", "andrea@gmail.com", "luca@gmail.com", "alfredo@gmail.com", "pinco@gmail.com"];
const selectInput = document.getElementById('input-email');
const selectButton = document.getElementById('button-input');

// prendi il valore dell'input con un bottone
selectButton.addEventListener('click',
    function () {
        const inputValue = selectInput.value;
        let result = " ";

        // fai un controllo ciclico con tra il valore e la array
        for (let i = 0; i < listEmail.length; i++) {
            if (inputValue === listEmail[i]) {
                result = "sei nella lista";
            }
        }

        // stampa su html
        const selectDivText = document.getElementById('text');
        selectDivText.innerHTML = result;

    })



////////////////////////////////////////////////////////////////////////////////////////////



// ESERCIZIO DADI
const selectButtonDadi = document.getElementById('button-dadi');
const selectCheck = document.getElementById('check-uno');
const selectParagrph = document.getElementById('winner');

// genera due numeri random con un bottone
selectButtonDadi.addEventListener('click',
    function () {
        const numUser = Math.floor(Math.random() * 6) + 1;
        const numComputer = Math.floor(Math.random() * 6) + 1;
        let result;

        // confronta i due numeri e stampa il vincitore
        if (numUser > numComputer) {
            result = "User ha vinto";
        } else if (numUser < numComputer) {
            result = "Computer ha vinto";
        } else {
            result = "Pareggio";
        }

        // Stampa su html
        selectParagrph.innerHTML = `Il tuo numero: ${numUser}, Il numero Computer: ${numComputer}. ${result}`;
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
        console.log(putIntoArray);

    }
);