// ESERCIZIO EMAIL

// lista delle persone che puo' accedere
const listEmail = ["johnny@gmail.com", "andrea@gmail.com", "luca@gmail.com", "alfredo@gmail.com", "pinco@gmail.com"];
const selectInput = document.getElementById('input-email');
const selectButton = document.getElementById('button-input');

// prendi il valore dell'input con un bottone
selectButton.addEventListener('click',
    function () {
        const inputValue = selectInput.value;

        // fai un controllo ciclico con tra il valore e la array
        for (let i = 0; i < listEmail.length; i++) {

            if (inputValue === listEmail[i]) {
                console.log("sei nella lista");
            } else {
                console.log("non sei nella lista");
            }
        }
    })



// ESERCIZIO DADI

// genera due numeri random con un bottone
const selectButtonDadi = document.getElementById('button-dadi');
selectButtonDadi.addEventListener('click',
    function () {
        const numUser = Math.floor(Math.random() * 6) + 1;
        const numComputer = Math.floor(Math.random() * 6) + 1;

        if (numUser > numComputer) {
            console.log("User ha vinto");
        } else if (numUser < numComputer) {
            console.log("Computer ha vinto");
        } else {
            console.log("Pareggio");
        }


    }

)

// metti i due numeri in due variabili

// confronta le due variabie e stampa
