// Consegna:
// Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
// Creare un carosello come nella foto allegata.




// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.

let container = document.querySelector(".container_img")

container.innerHTML = `<img class="img_size" src="img/01.webp" alt="">`

console.log(container)

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.



// Al click dell’utente sulle frecce, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.






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