
function renderAlbums(albumData){
    let tracks = ''
    if (albumData.media[0].tracks) {
            tracks = albumData.media[0].tracks.map(track=>{
            return `<li class="list-group-item">${track.title}</li>`
        }).join('')
    }else{
        return ''
    }
    // const url = encodeURI(albumData['artist-credit'][0].name+albumData.title)
        const html = ` 
        <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 60%;" >
        <button id="d-btn" type="button" class = "btn btn-dark">
            <svg id="download" width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-cloud-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
            <path fill-rule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
            </svg>
        </button>
            <img src="https://coverartarchive.org/release/${albumData.id}/front" class="card-img-top" alt="... width="400px">
            <div id = 'mainTitle' class="card-body">
                <h5 class="list-group-item">${albumData.title}</h5>
            </div>
            <div>
            <ul class="list-group list-group-flush">
                ${tracks}
            </ul>
            </div>
            <div >
              <a href="https://www.amazon.com/s?k=${albumData['artist-credit'][0].name}+${albumData.title}" class="card-link"><button id="btn1" type="button" class="btn btn-info">Buy Album</button></a>
              <a href="https://www.merchbar.com/search?q=${albumData['artist-credit'][0].name}+${albumData.title}" class="card-link"><button id="btn2" type="button" class="btn btn-info">Buy Merch</button></a>
            </div>
        </div>
        
          `
        const albumTitle = document.querySelector('#main');
        albumTitle.innerHTML = html
    }
    
    
    // albumTitle.innerHTML = listofAlbums.join('');    



$(window).on("load", function () {
    let params = new URLSearchParams(window.location.search)
    const albumId = params.get('id')
    fetch(`https://musicbrainz.org/ws/2/release/${albumId}?inc=artist-credits+recordings`, {
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(albumData => {
            // details for all artist releases
            console.log(albumData);
            renderAlbums(albumData)
        })
    })
//     fetch(`https://musicbrainz.org/ws/2/artist/${artistId}?inc=releases`, {
//             headers: {
//                 'Accept': 'application/json'
//             },
//         })
//         .then(res => res.json())
//         .then(albumData => {
//             // details for all artist releases
//             console.log(albumData.releasee);
//             renderAlbums(albumData.release)
//         })

// })
