
function renderAlbums(albumData){
    const listofAlbums = albumData.map((currentAlbum) => {
        if(currentAlbum.country == 'XW'){

        return `
        <a id="albums-listed" href="./album-page.html?id=${currentAlbum.id}"><li class="list-group-item">${currentAlbum.title}
        (${currentAlbum.date.slice(0,4)})</li></a>
        
          `
    }})
    const albumList = document.querySelector('#albumContainer');
    albumList.innerHTML = listofAlbums.join('');
}


$(window).on("load", function () {
    let params = new URLSearchParams(window.location.search)
    const artistId = params.get('id')
    fetch(`https://musicbrainz.org/ws/2/release?artist=${artistId}&limit=300`, {
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(res => res.json())
        .then(albumData => {
            // details for all artist releases
            console.log(albumData.releases);
            renderAlbums(albumData.releases)
        })
})