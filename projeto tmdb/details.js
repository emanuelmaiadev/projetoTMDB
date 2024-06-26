const detailsResults = document.querySelector("#detailsResults")

async function getDetails(){
    const id_details= localStorage.getItem("id_details")
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id_details}?api_key=7d14869f82ca6dee1750249a3ab5f398&language=pt-BR`)
    const data = await response.json()
    console.log(data);

    detailsResults.innerHTML = `
    <h2>Título: ${data.title}</h2>

    <div class="movie-details">
        <img width="200" src ="https://image.tmdb.org/t/p/w500${data.poster_path}">
        <ul>
        <li>Nota: ${data.vote_average}</li>
        <li>Lançamento: ${data.release_date}</li>
        <li>Orçamento: ${data.budget.toLocaleString()}</li>
        <li>Receita: ${data.revenue.toLocaleString()}</li>
        <li>Gênero: ${data.genres.map(genre => genre.name).join(', ')}</li>
        <li>Produtora: ${data.production_companies.map(company => company.name).join(', ')}</li>
        <li>Duração: ${data.runtime} minutos</li>
        </ul>
    </div>
    <div class = "synopsis">
        <h3 class = "synopsish3">Sinopse</h3>
        <p>Sinopse: ${data.overview}</p>
    </div>
    `
}

getDetails()