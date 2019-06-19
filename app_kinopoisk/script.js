const searchForm = document.querySelector('#search-form');
const movie = document.querySelector('#movies');
function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value,
    server = 'https://api.themoviedb.org/3/search/multi?api_key=9256d83f39cf255a2ac25f5f840b171b&language=ru&query=---' + searchText;
    requestApi('GET', server);
}
searchForm.addEventListener('submit', apiSearch);

 function requestApi(method, url) {
     const request = new XMLHttpRequest();
     request.open(method, url);
     request.send();
request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;

    if (request.status !== 200) {
        console.log('error' + request.status);
        return;
    }
    const output = JSON.parse(request.responseText);

    let inner = '';

    output.results.forEach(function (item){
        let nameItem = item.name || item.title;
        let yearItem = item.first_air_date || item.release_date;
        console.log(item);
        inner += '<div class="col-12">' + nameItem + ' (' + yearItem + ')' +'</div>'; //ES5
        // inner += `<div class="col-12">${nameItem}</div>`; //ES6
    });
    movie.innerHTML = inner;
})
 }

