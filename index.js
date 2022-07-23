const movieList = document.getElementById("mov-list")
const inputVal = document.getElementById('mov-search-input')
const searchBtn = document.getElementById('btn-search')



async function getResponse(title) {
	const response = await fetch(
		`http://www.omdbapi.com/?s=${title}&apikey=d10825bb`
	);
	const data = await response.json(); // Extracting data as a JSON Object from the response
	console.log(data)
	// const list = `${data.Title} <div>Actors: ${data.Actors}</div>  <img src=${data.Poster}" alt="poster"> `
	const list = ` ${data.Search.map(item => {
		return  `<div class="movie-title">${item.Title}</div> <img src=${item.Poster}" alt="poster">`
	}).join("")} `
	
	movieList.innerHTML = list

}

function render() {
	getResponse(inputVal.value)
	inputVal.value = ""
}


inputVal.addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		console.log("search enter")
		render()
	}
});

searchBtn.addEventListener("click", () => {
	console.log("search clicked")
	console.log(inputVal.value)
	render()

})