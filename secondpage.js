// burger
let burgerButton = document.getElementById('toggleButton');
let navBar = document.getElementById('navigation-ul');


burgerButton.addEventListener('click', function() {
    navBar.classList.toggle('toggle');
    burgerButton.classList.toggle('active');
})

// slider 


let data = [
    {
        id : 1 ,
        pictureUrl: "https://slavaukraine.fund/design/default/assets/images/auction/8.jpg" ,
        autor : "Liza, 5 years old, Kharkiv",
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 2 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/26.png" ,
        autor : "Chernetska Tetyana 8 years old, Kyiv" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 3 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/27.png" ,
        autor : "Lisa Bolyuk, 8 years old, Kyiv" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 4 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/20.png" ,
        autor : "Kalytka Zlata 4 years Kyiv city" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 5 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/18.png" ,
        autor : "CHELOVSKY YURA 7 YEARS ODESSA UKRAINE" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 6 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/9.jpg" ,
        autor : "Nastya Kuzmenko 11 years old Kharkiv" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
    {
        id : 7 ,
        pictureUrl : "https://slavaukraine.fund/design/default/assets/images/auction/4.jpg" ,
        autor : "Polina Korneenko, 7 years old" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
        
    },
    {
        id : 8 ,
        pictureUrl: "https://slavaukraine.fund/design/default/assets/images/auction/30.png" ,
        autor : "Vika, 8 years old, Yurivka village, Kyiv region" ,
        url : "https://ih1.redbubble.net/image.3284862814.0655/st,small,507x507-pad,600x600,f8f8f8.jpg"
    },
]

let btnleft = document.getElementById('leftbtn');
let btnright = document.getElementById('rightbtn');
let sliderpic = document.getElementById('sliderpic');
let dotsList = document.getElementsByClassName('dot');

let sliderIndex = 0;

function createAtag(item){
    let tag = document.createElement('a');
    tag.setAttribute('href', item.url)
    tag.setAttribute('class', 'slide');

    return tag;
}


function createH2tag(item) {
    let autor = document.createElement('h2');
    autor.setAttribute('class', 'autor');
    autor.append(item.autor);

    return autor;
}


function createImgtag(item){
    let tagImg = document.createElement('img');
    tagImg.setAttribute('src', item.pictureUrl);
    tagImg.setAttribute('alt', item.autor);

    return tagImg;
}


function createDots(item){
    let dots = document.createElement('div');
    dots.setAttribute('class', 'dots');

    data.forEach( (element) => {
        let dotElement = document.createElement('div');
        dotElement.setAttribute('class', 'dot');
        dotElement.setAttribute('data-id', element.id - 1);

        dotElement.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }

        dots.appendChild(dotElement);
    });

  

    return dots;

}

function dotActive(){
    dotsList[sliderIndex].classList.add('active');
}

function setSlide(){
    sliderpic.innerHTML = ' ';
    let slideItem = createAtag(data[sliderIndex]);
    let h2Tag = createH2tag(data[sliderIndex]);
    let imgTag = createImgtag(data[sliderIndex]);
    let dots = createDots();
    
    slideItem.appendChild(imgTag);
    slideItem.appendChild(h2Tag);

    sliderpic.appendChild(slideItem);
    sliderpic.appendChild(dots);

    dotActive();
    
    
}

function leftClick (){
    if(sliderIndex <= 0){
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }

    sliderIndex--;
    setSlide();
}

function rightClick(){
    if(sliderIndex >= data.length - 1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}

btnleft.addEventListener('click', leftClick);

btnright.addEventListener('click', rightClick);

setInterval( () => {
    rightClick();
}, 7000);

setSlide();




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
