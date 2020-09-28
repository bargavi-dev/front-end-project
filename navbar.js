const sidebar = document.getElementById('sidebar-placeholder')

const html = `
<div id="main">
    <button class="openbtn" onclick="openNav()">&#9776; Main Menu</button>
    <h2></h2>
</div>

<div id="mySidebar" class="sidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="dashboard.html">Home</a>
    <a href="AboutService.html">About</a>
    <a href="BrowseGenre.html">Browse by Artist</a>
    <a href="your-music.html">Your Music</a>
    <a href="#">Contact</a>
</div>`;

sidebar.innerHTML = html;

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }