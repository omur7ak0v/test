let number = 0; //Номер алгач 0гө барабар
let span = document.getElementById("cart_count"); //cart_count idни таап аолдык
let modal = document.getElementById("modal"); //modal idни таап аолдык

function addToCart(button) {
    number++; // number = number + 1 
    span.textContent = number; //span | cart_count дин маанисин number ге жаңылайбыз

    const card = button.closest('.card'); //card class таап алдык
    if (card) {
        //Продукт атын алабыз h2 элемени ичинен
        const productName = card.querySelector('h2').textContent; 

        let h5 = document.createElement('h5');  // modal үчүн h5 элемент түзөбүз
        h5.textContent = productName; // Продукт атын h5 элемент мааниси кылып коебуз
        modal.appendChild(h5); // Жаңы түзүлгөн h5 элементин модал ичине кошобуз
    }

}