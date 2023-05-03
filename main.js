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




