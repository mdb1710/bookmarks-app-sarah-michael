function getBookmarks(){
    return fetch ("https://thinkful-list-api.herokuapp.com/mike/bookmarks")
             .then(res => res.json())
    //         .then(bookmarks => console.log(bookmarks))
}