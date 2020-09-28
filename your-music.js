function renderYourMusic(listofYourMusic) {
    let yourFavoriteAlbums = listofYourMusic.map((currentAlbum)=>{
        return `<div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top" src="https://coverartarchive.org/release/${currentAlbum.id}/front" />

            <div class="card-body">
            <h3>${currentAlbum.title}</h3>
            </div>
            </div>
        </div>
        `

    });
    return yourFavoriteAlbums.join('')
}
    let yourMusicContainer =document.querySelector('.your-music-container')
    console.log(yourMusicContainer)
    yourMusicContainer.innerHTML = renderYourMusic(JSON.parse(localStorage.getItem("musicLibrary")));