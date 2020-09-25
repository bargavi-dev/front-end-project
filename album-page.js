
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
            <img src="https://coverartarchive.org/release/${albumData.id}/front" class="card-img-top" alt="... width="400px">
            <div id = 'mainTitle' class="card-body">
                <h5 class="list-group-item">${albumData.title}</h5>
                <h6></h6>
            </div>
            <div id="description">  
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul class="list-group list-group-flush">
                ${tracks}
            </ul>
            <div class="card-body">
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
// {
//     "id": "400e74f0-130b-4418-a8e9-28cd18d275b3",
//     "text-representation": {
//         "script": "Latn",
//         "language": "eng"
//     },
//     "release-events": [
//         {
//             "date": "2006",
//             "area": {
//                 "type-id": null,
//                 "sort-name": "Canada",
//                 "name": "Canada",
//                 "disambiguation": "",
//                 "id": "71bbafaa-e825-3e15-8ca9-017dcad1748b",
//                 "iso-3166-1-codes": [
//                     "CA"
//                 ],
//                 "type": null
//             }
//         }
//     ],
//     "status-id": "518ffc83-5cde-34df-8627-81bff5093d92",
//     "country": "CA",
//     "status": "Promotion",
//     "cover-art-archive": {
//         "front": false,
//         "count": 0,
//         "darkened": false,
//         "artwork": false,
//         "back": false
//     },
//     "packaging": "None",
//     "title": "Room for Improvement",
//     "quality": "normal",
//     "date": "2006",
//     "disambiguation": "Southern Smoke special edition",
//     "asin": null,
//     "packaging-id": "119eba76-b343-3e02-a292-f0f00644bb9b",
//     "barcode": ""
// }