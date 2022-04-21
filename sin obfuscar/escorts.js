const body = document.querySelector('body');
const lista = document.querySelector('.lista-chicas');
const galeria = document.querySelector('.galeria');
const search = document.querySelector('.search');


const nombreChicas = ["ImagenDefault"]

// Inserta imagenes en la galeria 

    nombreChicas.forEach( N => {
    const div = document.createElement('div');
    div.classList.add('card')

    div.innerHTML = `<a href="./chicas/${N}.html" >
                        <img src="./img/${N}/${N}1.jpg" alt="${N}" title="Encuentros Casuales | ${N}">
                     </a>
                      <p class="name">${N}</p>  `

    galeria.appendChild(div)

   
 })

 
 
// **********************************************
// Inserta nombres en la seccion de busqueda

const nombres = document.querySelectorAll('.galeria .card');

 const allNames = [];
    nombres.forEach( N => {
        allNames.push(N.lastElementChild.textContent.toLowerCase())
        allNames.sort();
    } )

    allNames.forEach( N => {
        const li = document.createElement('li');
        li.classList.add('lista')
        li.innerHTML = `<a href="chicas/${N}.html">${N}</a>`;
        lista.appendChild(li)
    })

    search.addEventListener('click', ()=> {
        lista.classList.toggle('hide');          
    })

    body.addEventListener('click', ( e ) => {
        if( !e.target.classList.contains('busqueda-nombre') ){
            if(!e.target.classList.contains('fa-angle-down')){
                if( !e.target.classList.contains('lista-chicas')){
                    if( !e.target.classList.contains('lista')) {
                        lista.classList.add('hide')
                    }
                }
            }
        }
    })

 
