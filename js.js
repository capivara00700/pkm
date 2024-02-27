const pokemonName = document.querySelector('.pkm_nome');
const pokemonNumber = document.querySelector('.pkm_numero');
const pokemonFoto = document.querySelector('.pkm');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let ProcurarPkm = 1;

const Buscarpkm = async (pokemon) => {
const Resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
if(Resposta.status === 200){
    const data = await Resposta.json();
    return data;
}

}


const renderpokemon = async (pokemon) => {

    pokemonName.innerHTML = 'Loading...'
    pokemonNumber.innerHTML = ''

    const data = await Buscarpkm(pokemon)

    if(data){
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        ProcurarPkm = data.id

        if(pokemonFoto.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']){
            pokemonFoto.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        } else {
            pokemonFoto.src = data['sprites']['versions']['generation-vii']['ultra-sun-ultra-moon']['front_default'];
        }

    } else {
        pokemonName.innerHTML = 'Not found'
        pokemonNumber.innerHTML = '0'
        pokemonFoto.src = "https://i.pinimg.com/originals/0b/61/1f/0b611f10b6bf172d2b70d94cc515b6d5.png"
    }
}



form.addEventListener('submit', (event) => {

    event.preventDefault()

    renderpokemon(input.value.toLowerCase())
    input.value = ''
});

buttonPrev.addEventListener('click', () => {
    if(ProcurarPkm > 1){
        ProcurarPkm -= 1
        renderpokemon(ProcurarPkm)
    }
});

buttonNext.addEventListener('click', () => {
    ProcurarPkm += 1
    renderpokemon(ProcurarPkm)
});





renderpokemon(ProcurarPkm)
