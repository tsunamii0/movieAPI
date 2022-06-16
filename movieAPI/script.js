const mostPopular = document.querySelector('.mostPop')
const mov0 = document.querySelector('.movieImg0')
const poster = document.getElementsByTagName('img')
const blocker = document.querySelector('.blockBG')
const showMorePop = document.querySelector('.showMorePop')

showMorePop.addEventListener('click', showMorePopMov)


const baseURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=ac611aa60fbb0355792b075ff8337fbe&language=en-US&page=1';


const fetchMov = async () => {
    const users = await fetch(baseURL)
    .catch(err => console.log(err))
    const movies = await users.json().catch(err => console.log(err))
    console.log(movies)
    const topEight = movies.results.slice(0, 10)
    console.log(topEight)
    topEight.forEach(value => {
    const img = document.createElement('img');
    img.addEventListener('click', getMovie)
function getMovie() {    blocker.style.display = ('block')
    const div = document.createElement('div')
    const h1 = document.createElement('h1');
    const description = document.createElement('p');
    const x = document.createElement('p')
    x.innerHTML = '✕'
    h1.innerHTML = `${value.title}`
    description.innerHTML = `${value.overview}`
    div.appendChild(x)
    div.appendChild(h1)
    div.appendChild(description)
    div.style.backgroundImage = 'url(' + 'https://image.tmdb.org/t/p/w500/' +  value.backdrop_path + ')'
    div.setAttribute('class', 'movieShow');
    x.setAttribute('class', 'xBTN')
    document.body.appendChild(div);
    x.addEventListener('click', hideMov)
function hideMov() {
    div.style.display = ('none')
    blocker.style.display = ('none')
}
}
    img.src = 'https://image.tmdb.org/t/p/w500/' +  value.poster_path
    mostPopular.appendChild(img);
    });
function showMorePopMov() {
        console.log('sui')
    }
}


fetchMov()