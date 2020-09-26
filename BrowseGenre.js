
//on submit return value to function
// value returns id from fetch


// const myForm = document.querySelector('.search-bar');
// myForm.addEventListener('submit', function(e){
//     function renderMovies(movieData){
//         const movieHtmlArray = movieData.map((currentMovie) => {
//             console.log(currentMovie.Title)
//             return `<div class="card" style="width: 18rem;">
//             <img class="card-img-top" src="https://images.pexels.com/photos/34071/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="Country Guitar" width="288px">
//             <!-- <div class="card-img-overlay"></div> -->
//             <div class="card-body">
//                 <h2 class="card-title">Genre goes here</h2> 
//                 <p class="card-text">Temp Description - Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//             <ul class="list-group list-group-flush">
//                 <li class="list-group-item">Maybe</li>
//                 <li class="list-group-item">Example</li>
//                 <li class="list-group-item">Artists?</li>
//             </ul>
//             <div class="card-body">
//                 <a href="#" id="stream-button" class="btn btn-primary">Stream Now</a>
//                 <br>
//                 <a href="#" id="add-button" class="btn btn-primary">Add to Library</a>
//                 <br>
//                 <a href="#" class="card-link">Merchandise link?</a>
//             </div>
//         </div>`
//         })

function renderMusic(musicData){
    const listofArtists = musicData.map((currentArtist) => {
        let tags = ''
        if (currentArtist.tags && currentArtist.country) {
                tags = currentArtist.tags.map(tag=>{
                return `<span class="badge badge-pill badge-primary">${tag.name}</span>`
            }).join('')
        }else{
            return ''
        }

        // if (currentArtist.country) {
        //         return `${currentArtist.country}`
        //     }
        // else{
            
        // }
         
        
        return ` <div class="card results col-6" style="width: 18rem;">
        <a href="./album-results.html?id=${currentArtist.id}" >
            <div class="card-body">
                <h5 class="card-title" data-id="${currentArtist.id}">${currentArtist.name}</h5>
                <p class="card-text">${currentArtist.country}</p>
                ${tags}
            </div>
            </a>
          </div>
          
          `

    })
    const entry = document.querySelector('.artistContainer');
    entry.innerHTML = listofArtists.join('');
    
}
// renderMusic(musicData)
// e.preventDefault();

// for(let i = 0; i < 20; i++) {
//     let card = document.querySelector('.card')
//     card.append(i)
// }






$( window ).on( "load", function() {  
    const myForm = document.querySelector('#search-form');
    myForm.addEventListener('submit', function(e){
        e.preventDefault();
        const searchTerm = $('#search-bar').val()
        const query = encodeURIComponent(searchTerm)
        console.log(query)
        
        fetch(`https://musicbrainz.org/ws/2/artist/?query=${query}&limit=10`, {
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => {
            // search results
            renderMusic(data.artists);

            })    
        })   
})


