document.querySelector('.infocard')
let title = document.getElementsByTagName("h2")
    // console.log(title[0])
    // cambiar titulo generation 1
title[0].innerText = "Generasion 1 Pokimon"
let generation1 = document.getElementsByClassName("infocard-list infocard-list-pkmn-lg")
console.log(generation1)

generation1[0].style.backgroundColor = "green"

// imprimir URL
let url = document.URL
console.log(url)
    // imprimir domain
let domain = document.domain
console.log(domain)
    // imprimir nodos imagen
let nodoimage = document.getElementsByTagName("img")
    // console.log(nodoimage)

// sustituir src imagenes
for (let i = 0; i < nodoimage.length; i++) {
    nodoimage[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

}

// premium
let pokimon = document.getElementsByClassName("infocard-lg-data text-muted")
console.log(pokimon[200].children[4].children[0].innerHTML)
    // let tipoPokemon = pokimon[1].children[4].children[0]
    //     // console.log(tipoPokemon)
    //     // console.log(typeof tipoPokemon)
const flying = []

let voladores = document.getElementsByClassName("flying")


for (let i = 0; i < voladores.length; i++) {
    // console.log("voladores", voladores[i].parentElement)
    voladores[i].parentNode.parentNode.parentNode.style.backgroundColor = "aquamarine"

}