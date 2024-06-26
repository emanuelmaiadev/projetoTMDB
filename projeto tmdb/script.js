const movieContainer = document.querySelector("#movieContainer")

async function getData(){
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7d14869f82ca6dee1750249a3ab5f398&language=pt-BR")
    const data = await response.json()
    console.log(data.results)
    data.results.forEach((movie)=>{
        const newElement = document.createElement("section")
        newElement.className = "card"
        newElement.id = movie.id
        newElement.addEventListener("click", ()=>{
            localStorage.setItem("id_details", movie.id)
            window.location.href = "details.html"
        })
        newElement.innerHTML = 
        `
        <h2>Título: ${movie.title}</h2>
        <img width="200" src ="https://image.tmdb.org/t/p/w500${movie.poster_path}">
        <p>Lançamento: ${movie.release_date}</p>
        `
    movieContainer.appendChild(newElement)
    })

}

getData()

const searchForm = document.querySelector("#searchForm")
const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")


async function searchData(e){
    e.preventDefault()
    if(searchBar.value.length === 0){
        movieContainer.innerHTML = ""
        getData()
    }else{
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7d14869f82ca6dee1750249a3ab5f398&query=${searchBar.value}&language=pt-BR&page=1`)
        const data = await response.json()
        console.log(data.results)
        movieContainer.innerHTML=""
        data.results.forEach((movie)=>{
            const newElement = document.createElement("section")
            newElement.className = "card"
            newElement.innerHTML = 
            `
            <h2>Título: ${movie.title}</h2>
            <img width="200" src ="https://image.tmdb.org/t/p/w500${movie.poster_path}">
            <p>Lançamento: ${movie.release_date}</p>
            `
        movieContainer.appendChild(newElement)
        })
    }

}

searchBar.addEventListener("input",searchData)