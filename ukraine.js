// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})


// server information

let result = document.getElementById('result');
let filter = document.getElementById('filter');
let listItems = [];
 
let currentPage = 1;

function getUsers(page) {
    fetch('https://reqres.in/api/users?page=' + page, {
        method: 'GET',
    })
    .then(function(response) {

        if (response.status !== 200) {
           throw 'error';
             }

        return response.json();
    })
    .then(function(responseData) {
        responseData.data.forEach(item => {
            let li = document.createElement('li');

            let span = document.createElement('span');
            span.innerHTML = `${item.first_name} ${item.last_name}`;

            let img = document.createElement('img');
            img.src = item.avatar;
            li.appendChild(img);
            li.appendChild(span);
            listItems.push(li);


            result.appendChild(li);
        });
    })
    .catch(function(error) {
       
              if (error == 404) {
                     let p = document.createElement('p');
                     p.textContent = 'Page not Found';
        
                     document.getElementById('api').appendChild(p);
                 } else {
                     let p = document.createElement('p');
                  p.textContent = 'Server Error';
        
                   document.getElementById('api').appendChild(p);
                 }
        
            })
}
document.getElementById('loadmore').addEventListener('click', function() {
    currentPage += 1;
    getUsers(currentPage);
})

getUsers(currentPage);





// filter
function filterData(searchItem) {
    listItems.forEach( (item) => {
        console.log(item);
        if (item.innerText.toLowerCase().includes(searchItem.toLowerCase() ) ) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    })
}

filter.addEventListener('input', (event) => filterData(event.target.value));


//  session storage

let sessionx = sessionStorage.getItem('sessionx');

let newValue;

if(!sessionx){
    newValue = 1;
} else {
    newValue = parseInt(sessionx) + 1;
}

sessionStorage.setItem('sessionx', newValue);

document.getElementById('x').textContent = sessionStorage.getItem('sessionx');

// local storage
let localx = localStorage.getItem('localx');

let NewValue;

if(!localx){
    NewValue = 1;
} else {
    NewValue = parseInt(localx) + 1;
}

localStorage.setItem('localx', NewValue);













