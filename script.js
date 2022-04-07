
let search_tvShows = document.getElementById('search_input');
const results_display = document.getElementById('output');
const searchBtn = document.getElementById('search_btn');


searchBtn.onclick = () => {

    let input1 = search_tvShows.value;
    const url = `https://api.tvmaze.com/search/shows?q=${input1}`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {

        console.log(data);
        let output ='';

        data.map((values) => {

            output += `
                    
                    <ul class="list-group">
                    <img src= ${values.show.image.medium}  alt="show image">
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">Show Name: ${values.show.name}</li>
                    <li class="list-group-item">Premiered: ${values.show.premiered}</li>
                    <li class="list-group-item">Runtime: ${values.show.runtime}</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                    </ul>
             `    

        })
        
        results_display.innerHTML = output

    })
    
}



/**
 * 
 *   <div class="container" id="output">
            <div class="row">
            <div class="col-lg-3">

            <div class="col-md-3 col-lg-3 mx-auto border-rounded d-flex flex-row">
              <div class="card" style="width: 18rem;">
              <img src= ${values.show.image.medium} class="card-img-top" alt="">
              <div class="card-body">
              <h5 class="card-title">Show Name: ${values.show.name}</h5>
              <p class="card-text">Summary: ${values.show.summary}</p>
              <p class="card-text">Runtime: ${values.show.runtime}</p>
              </div> 
            </div></div>

            </div>
            </div>
            </div>
 * 
 */