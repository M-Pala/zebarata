//Declaraions 
const galleryCars = document.querySelector('#gallery-cars .row')
const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')

//data
cars = [
    {
        source : '.\\images\\cars\\car_1.png',
        text : 'Mercedes Bens slk'
    },
    {
        source : '.\\images\\cars\\car_2.png',
        text : 'McLaren 720s'
    },
    {
        source : '.\\images\\cars\\car_3.png',
        text : 'Porche gt3'
    },
    {
        source : '.\\images\\cars\\car_4.png',
        text : 'Mercedes amg gtr'
    },
    {
        source : '.\\images\\cars\\car_5.png',
        text : 'Lexus lfa'
    },
    {
        source : '.\\images\\cars\\car_6.png',
        text : 'Lamborghini Urus'
    },
    {
        source : '.\\images\\cars\\car_7.png',
        text : 'Nissan GTR'
    },
    {
        source : '.\\images\\cars\\car_8.png',
        text : 'Lamborghini Urus back'
    },
    {
        source : '.\\images\\cars\\car_9.png',
        text : 'Lamborghini Aventador SV'
    },
    {
        source : '.\\images\\cars\\car_10.png',
        text : 'Lamborghini Aventador SV Portrait'
    },
    {
        source : '.\\images\\cars\\car_11.png',
        text : 'Mercedes Bens A-Class amg rear'
    },
    {
        source : '.\\images\\cars\\car_12.png',
        text : 'Mercedes Bens A-Class amg front'
    },
    {
        source : '.\\images\\cars\\car_13.png',
        text : 'Hyper group'
    }
]

let search_str = ''

console.log(galleryCars);
console.log(searchBar);
cars.forEach(car => {
    galleryCars.innerHTML += (`<div class="gallery col-lg-4">\
    <a target="_blank" href="${car.source}">\
      <img src="${car.source}" alt="${car.text}" >\
    </a>\
    <div class="desc">${car.text}</div>\
    </div>`)
});



const search = searchBtn.addEventListener('click',(event)=>{
    const carDesc = document.querySelectorAll('.desc')
    event.preventDefault()
    carDesc.forEach((car)=>{
        if(car.parentElement.classList.contains('invisible')){
            car.parentElement.classList.remove('invisible')
        }
    })
    search_str = searchBar.value.toLowerCase()
    console.log(search_str);
    carDesc.forEach((car)=>{
        if(!car.innerText.toLowerCase().includes(search_str)){
            console.log(car.parentElement.classList.add('invisible'));
        }
    })
})

// const searchText = searchBar.addEventListener('keydown',(event)=>{
//     if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode == 32)){
//         console.log(event.key);
//         search_str = search_str + event.key
//         console.log(search_str);
//     }
//     else if (event.keyCode == 8){
//         search_str = search_str.slice(0,(search_str.length-1));
//         console.log(search_str);
//     }
// })