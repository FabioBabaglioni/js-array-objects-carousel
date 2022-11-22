// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.




// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

let container = document.querySelector(".container_img")

// container.innerHTML = `<img class="img_size" src="img/01.webp" alt="">`

// console.log(container)

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.

const images = [ 
    { 
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 

    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 

    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

console.log(images)

let next = document.getElementById("next")
let previous = document.getElementById("previous")


next.addEventListener("click",

    images.forEach(immmagine, index) => {

        let element = document.createElement("div")

        element.innerHTML = `<img class="img_size" src="${images.image}" alt="">`

        element.classList.add("container_img")

        if(index === 0){
            element.classList.add("Active")
        }else{
            element.classList.add("none")
        }

        container.append(element)
        }
    )

);   

// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// next.addEventListener("click",

//     function(){

//     if(activeItem < img.length - 1){

//         img[activeItem].classList.remove("active")

//         activeItem++

//         img[activeItem].classList.add("active")

//         if(activeItem === img.length - 1){

//             next.classList.add("hidden")
//         }else{
//             previous.classList.remove("hidden")
//         }
//     }
// }
// )

// previous.addEventListener("click",

//     function(){
//     if(activeItem <= img.length - 1 ){

//         img[activeItem].classList.remove("active")

//         activeItem--

//         img[activeItem].classList.add("active")

//         if(activeItem === 0){

//             previous.classList.add("hidden")
//         }else{
//             next.classList.remove("hidden")
//         }
//     }
// }
// )





// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se l’img attiva è la prima e l’utente clicca la freccia prev, l’img che deve attivarsi sarà l’ultima e viceversa per l’ultima img se l’utente clicca la freccia next.




// let img = document.getElementsByClassName("items")

// console.log(img)

// let activeItem = 0

// const next = document.getElementById("next")
// const previous = document.getElementById("previous")


// next.addEventListener("click",

//     function(){

//     if(activeItem < img.length - 1){

//         img[activeItem].classList.remove("active")

//         activeItem++

//         img[activeItem].classList.add("active")

//         if(activeItem === img.length - 1){

//             next.classList.add("hidden")
//         }else{
//             previous.classList.remove("hidden")
//         }
//     }
// }
// )

// previous.addEventListener("click",

//     function(){
//     if(activeItem <= img.length - 1 ){

//         img[activeItem].classList.remove("active")

//         activeItem--

//         img[activeItem].classList.add("active")

//         if(activeItem === 0){

//             previous.classList.add("hidden")
//         }else{
//             next.classList.remove("hidden")
//         }
//     }
// }
// )