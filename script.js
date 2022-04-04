
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
        let output = `<h1>TV Shows</h1>`;

        data.map((values)=>{

            output += `
            <div>

             <img src="${values.show.image.medium}" alt="show image">
            <ul class="list-group mb-3">
              <li class="list-group-item">Name: ${values.show.name}</li>
              <li class="list-group-item">Network: ${values.show.network.name}</li>
              <li class="list-group-item">Summary: ${values.show.summary}</li>
              <li class="list-group-item">Runtime: ${values.show.runtime}</li>
            </ul> 
            
            </div>`

        })
        
        results_display.innerHTML = output

    })
    
}



