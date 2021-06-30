var searchInput = document.querySelector(".container header .last-section .bottom-content input");
searchInput.onfocus = function() {
    searchInput.placeholder = "";
}
searchInput.onfocusout = function() {
    searchInput.placeholder = "Search for something to learn (e.g. JavaScript, React)";
}
// footer search input.
var searchInput2 = document.querySelector(".container footer .top-section .right-content .search-bar input");
searchInput2.onfocus = function() {
    searchInput2.placeholder = "";
}
searchInput2.onfocusout = function() {
    searchInput2.placeholder = "e.g. JavaScript, React";
}