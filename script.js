
document.addEventListener('ready', function () {
    console.log("ready")
    var header = document.getElementsByTagName('header')[0];
    var search = document.getElementById('search')

    search.addEventListener('focus', function (e) { header.style = 'background: #eee; color: black;' })
    search.addEventListener('blur', function (e) { header.style = 'background: #4285f4; color: white;' })
})


function toggleSideNav() {
    var sideNav = document.getElementById('sideNav');
    if (sideNav.style.display == "none") {
        sideNav.style.display = 'flex';
    } else {
        sideNav.style.display = 'none';
    }
}
