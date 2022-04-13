const search_tvShows = document.getElementById('search_input');
const results_display = document.getElementById('output');
const searchBtn = document.getElementById('search_btn');
const tv_guide = document.getElementById('tv_guide');
const footer = document.getElementById('footer');


window.onload = () => { 
    
    const current_date = new Date();
    const url= `https://api.tvmaze.com/schedule?country=US&data=${current_date}`;
    fetch(url) 
    .then(response => response.json())
    .then((data) => {

        console.log(data);
        let current_schedule = '';
        data.map((values) => {

            current_schedule += `
            <div class="card my-2 mx-auto bg-dark" id="output" style="width: 20rem;">

              <div class="card-body">
                <img src= ${values.show.image?.medium} alt="tv show image" class="card-img-top ">
                <h4 class="card-title text-info">${values.show.name}</h4>
                <h6 class="card-subtitle mb-2 text-warning">Premiered: ${values.show.premiered}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Runtime: ${values.show.runtime}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Season: ${values.season}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Episode: ${values.number}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Network: ${values.show.network?.name}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Website: ${values.show.officialSite}</h6>
              </div>
            </div> `
        })
        tv_guide.innerHTML = current_schedule
    })
    .catch((error) => {
      console.log(error);
    });
} 

searchBtn.onclick = () => {

    const query = search_tvShows.value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {

        console.log(data);
        let output = '';
        data.map((values) => {

            output += `
            <div class="card my-2 mx-auto bg-dark" id="output" style="width: 22rem;">
              <div class="card-body">
                <img src= ${values.show.image?.medium} alt="tv show image" class="card-img-top ">
                <h5 class="card-title text-info">Show Name: ${values.show.name}</h5>
                <h6 class="card-subtitle mb-2 text-warning">Premiered: ${values.show.premiered}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Network: ${values.show.network?.name}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Status: ${values.show.status}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Runtime: ${values.show.runtime}</h6>
                <h6 class="card-subtitle mb-2 text-warning">Official Site:${values.show.officialSite}</h6>
                <h6 class="card-subtitle text-light">Summary: ${values.show.summary}</h6>
              </div>
            </div>   ` 
        }) 
        results_display.innerHTML = output
    })
    .catch((error) => {
      console.log(error);
    });

    if(footer.style.display === 'none') {

      return footer.style.display = 'block';
    }
}




