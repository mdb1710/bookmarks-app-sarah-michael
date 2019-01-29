'use strict';

/* global $ */

const STORE = function () {
    // /*const items = [
    //     {title: title},
    //     {url: url},
    //     {descripttion: description},
    //     {rating: 0},
    //     {expansion: false},
    // ]*/
    

}();

function handleNewBookmarkSubmit() {
    /* This function will have the Bookmark form appear
    and have users either submit or reset*/
    $('.add-bookmark').on('click',  function (event) {
        console.log('ready to add bookmark');
        return `<div class="new-bookmark-form">
        <form>
            <label for="name">Bookmark name</label>
            <input type="text" name="Bookmark name">

            <label for="url">URL</label>
            <input type="text" name="URL for bookmark">
            
            <label for="description">Description</label>
            <input type="text" name="Description">
        </form>
        <form>
                <input type="radio" name="stars" value="five" checked> 5 stars<br>
                <input type="radio" name="stars" value="four"> 4 stars<br>
                <input type="radio" name="stars" value="three"> 3 stars<br>
                <input type="radio" name="stars" value="two"> 2 stars<br>
                <input type="radio" name="stars" value="one"> 1 star
              </form>
              <button type="reset">Clear</button>
              <button type="submit">Submit</button>
        
             </div>`
    })

}

function displayBookmarkList(){
    
}

function handleEditBookmark() {
    /* This function will edit the title, url, rating and 
    description of all existing bookmarks*/

}

function handleDeleteBookmark() {
    //This function will delete bookmarks from store
    //render(); 
}

function error() {
    //This function will handle all errors with our bookmarks.
    if (items) {
        generateErrorMessage(message);
    }

}

function generateErrorMessage(message) {
    return `
     <section class="error-content">
       <button id="cancel-error">X</button>
       <p>${message}</p>
     </section>
   `;
}

function filterByRating() {
    //This function will filter bookmark list by rating.
    //render();
}

function render() {
    //This function will save to our store and server and generates bookmark page.
    console.log('render ran');
    //const bookmarkItemString = generateBookmarkString(items);
}

function generateBookmark() {
    $(".new-bookmark-form").submit(function (event) {
        console.log('function ran');
        //This function will generate HTML for a single bookmark.
        return `<div class="js-bookmark-list">
               <ul class="bookmark-item">
                <li>
                  <p>'Name: facebook.com'<br>
                  'URL: http://facebook.com' <br>
                  'Description: search query site' <br>
                 </p>
                 <button class="delete-button" type="button">Delete</button>
                </li>
               </ul>
            </div>`});
};

function generateBookmarkString() {
    //This function will convert data to HTML string for the DOM.
    return ``
    //render();
}


function expandBookmark() {
    //This function will show full description and url of bookmark when clicked.
    //render();
}




function main() {
   handleNewBookmarkSubmit(); 
   generateBookmark();
   render();
}

$(main);