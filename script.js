const search_tvShows = document.getElementById('search_input');
const results_display = document.getElementById('output');
const searchBtn = document.getElementById('search_btn');


searchBtn.onclick = () => {

    let input1 = search_tvShows.value;
    const url = `https://api.tvmaze.com/search/shows?q=${input1}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {

        console.log(data);
        let output = '';
        data.map((values) => {

            output += `
            <div class="card my-2 mx-auto bg-dark" id="output" style="width: 20rem;">
             <img src= ${values.show.image.medium} alt="tv show image" class="card-img-top mt-3">
              <div class="card-body">
                <h5 class="card-title text-info">Show Name: ${values.show.name}</h5>
                <h6 class="card-subtitle mb-2 text-warning">Premiered: ${values.show.premiered}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Status: ${values.show.status}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Runtime: ${values.show.runtime}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Official Site:${values.show.officialSite}</h6>
                <h6 class="card-subtitle text-light">Summary: ${values.show.summary}</h6>
              </div>
            </div>   ` 
        }) 
        results_display.innerHTML = output
    })   
}




