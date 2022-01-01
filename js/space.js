//Declaraions 
const gallerySpace = document.querySelector('#gallery-space .row')
const searchBar = document.querySelector('.search-bar')
const searchBtn = document.querySelector('.search-btn')

//data
space = [
    {
        source : '.\\images\\space\\space_1.png',
        text : 'Planet with rivers in past'
    },
    {
        source : '.\\images\\space\\space_2.png',
        text : 'Orion constelation'
    },
    {
        source : '.\\images\\space\\space_3.png',
        text : 'Saturn rings'
    },
    {
        source : '.\\images\\space\\space_4.png',
        text : 'Planet similar to earth but with different atmosphere'
    },
    {
        source : '.\\images\\space\\space_5.png',
        text : 'Planet similar to mars'
    },
    {
        source : '.\\images\\space\\space_6.jpg',
        text : 'The great Rose Nebula'
    },
    {
        source : '.\\images\\space\\space_7.jpg',
        text : 'Planet with rocky surface'
    },
    {
        source : '.\\images\\space\\space_8.jpg',
        text : 'The Great Renaissance Nebula'
    },
    {
        source : '.\\images\\space\\space_9.jpg',
        text : 'Inside a Nebula'
    },
    {
        source : '.\\images\\space\\space_10.jpg',
        text : 'View fropm a diffrent planet'
    },
    {
        source : '.\\images\\space\\space_11.jpg',
        text : 'A lush planet with rivers and lakes'
    },
    {
        source : '.\\images\\space\\space_12.jpg',
        text : 'The Great Fireduck Nebula'
    },
    {
        source : '.\\images\\space\\space_13.jpg',
        text : 'View fropm a diffrent planet II'
    },{
        source : '.\\images\\space\\space_14.jpg',
        text : 'The Great Empty Nebula'
    },
    {
        source : '.\\images\\space\\space_15.jpg',
        text : 'A beautiful globular cluster'
    },
    {
        source : '.\\images\\space\\space_16.jpg',
        text : 'The Great Mustard Nebula'
    },
    {
        source : '.\\images\\space\\space_17.jpg',
        text : 'A distant star'
    },
    {
        source : '.\\images\\space\\space_18.jpg',
        text : 'A distant Galaxy'
    },
    {
        source : '.\\images\\space\\space_19.jpg',
        text : 'High view of a Planet'
    },
    {
        source : '.\\images\\space\\space_20.jpg',
        text : 'A beautiful ring Planet'
    }
]

let search_str = ''

console.log(gallerySpace);
console.log(searchBar);
space.forEach(space => {
    gallerySpace.innerHTML += (`<div class="gallery col-lg-4">\
    <a target="_blank" href="${space.source}">\
      <img src="${space.source}" alt="${space.text}" >\
    </a>\
    <div class="desc">${space.text}</div>\
    </div>`)
});



const search = searchBtn.addEventListener('click',(event)=>{
    const spaceDesc = document.querySelectorAll('.desc')
    event.preventDefault()
    spaceDesc.forEach((space)=>{
        if(space.parentElement.classList.contains('invisible')){
            space.parentElement.classList.remove('invisible')
        }
    })
    search_str = searchBar.value.toLowerCase()
    console.log(search_str);
    spaceDesc.forEach((space)=>{
        if(!space.innerText.toLowerCase().includes(search_str)){
            console.log(space.parentElement.classList.add('invisible'));
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