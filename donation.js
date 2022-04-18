// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})


// form validation

document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();



    let errors = {};
    let form = event.target;
   
    
    // personal ID
    let ID = document.querySelector('[name = "ID"]').value;
    if(ID == " " || ID.length < 11) {
        errors.ID = 'ID must be 11 numbers, check it out!';
    }

    // CVV2
    let areacode = document.querySelector('[name= "areacode"]').value;
    if(areacode == " " || areacode.length != 4){
        errors.areacode = 'CVV2 must be 4 numbers and Card number must be 16 numbers';
    }
    // card number
    let cardnumber = document.querySelector('[name = "cardnumber"]').value;
    if( cardnumber == " " || cardnumber.length != 16){
        errors.areacode = 'CVV2 must be 4 numbers and Card number must be 16 numbers';
    }

    //  card-type

    let cardtype = document.querySelector('[name = "subject"]').value;
    if(cardtype == 'Choose the option'){
        errors.subject = 'Please choose option';
    } 

    // money
    let money = false;

    form.querySelectorAll('[name ="money"]').forEach(item => {
        if(item.checked) {
            money = true;
        }
    });

    if(!money){
        errors.money = 'Please, Mark the amount';
    }

    form.querySelectorAll('.error-text').forEach(item => {
        item.textContent = '';
    }) 

    
    for (let item in errors) {
    
        let errorPlaceholder = document.getElementById('error_' + item);

        if(errorPlaceholder) {
            errorPlaceholder.textContent = errors[item];
        }
    
    }

    if(Object.keys(errors).length == 0) {
        form.submit();
    }

});

// accordition .. humanitarian aid

let accordition = document.getElementsByClassName('acc-container');

for (let i = 0; i < accordition.length; i++) {
    accordition[i].addEventListener('click', function() {
        this.classList.toggle('active');
    })
}





//  local storage

let xs = sessionStorage.getItem('xs');

let newValue;

if(!xs){
    newValue = 1;
} else {
    newValue = parseInt(xs) + 1;
}

sessionStorage.setItem('xs', newValue);

document.getElementById('x').textContent = sessionStorage.getItem('xs');
