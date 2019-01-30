'use strict';

/* global $ */

const STORE = function () {
    let displayBookmarkForm = false;
    let bookmarkList =[];
    let hideDescription = true;
    let hideURL = true;
    // const items = [
    //     {title: title},
    //     {url: url},
    //     {descripttion: description},
    //     {rating: 0},
    //     {expansion: false},
    // ]
  
  
    return {
        displayBookmarkForm,
        bookmarkList,
        hideDescription,
        hideURL
   } 

}();

function renderBookmarkForm(){
    const form = `
        <form>
            <label for="name">Bookmark name</label>
            <input type="text" name="Bookmark name" class='name-entry'>
    
            <label for="url">URL</label>
            <input type="text" name="URL for bookmark" class='URL-entry'>
            
            <label for="description">Description</label>
            <input type="text" name="Description" class='description-entry'>
        
                <input type="radio" name="stars" value="five" checked> 5 stars<br>
                <input type="radio" name="stars" value="four"> 4 stars<br>
                <input type="radio" name="stars" value="three"> 3 stars<br>
                <input type="radio" name="stars" value="two"> 2 stars<br>
                <input type="radio" name="stars" value="one"> 1 star <br>
                <button type="reset">Clear</button>
              <button type="submit" class="js-bookmark-submit">Submit</button>
              </form>`
              
        
             
    if(STORE.displayBookmarkForm == true){
        $('.new-bookmark-form').html(form);
    }
    else{
        $('.new-bookmark-forms').html('')
    }

}

function handleAddBookmarkClick(){
    $('.add-bookmark').on('click', function(){
        STORE.displayBookmarkForm = !STORE.displayBookmarkForm;
        renderBookmarkForm();
    });
}



function captureBookmark(){
    $('.new-bookmark-form').on('submit','form',function(event) {
        event.preventDefault();
        console.log('add bookmark done');
        let bookmarkTitle = $('.name-entry').val();
        console.log(bookmarkTitle);
        let urlTitle = $('.URL-entry').val();
        console.log(urlTitle);
        let description = $('.description-entry').val();
        console.log(description);
     })
     
     
    
}

function expandBookmark() {
    //This function will show full description and url of bookmark when clicked.
    //render();
    

}


function toggleHiddenItems(){
    STORE.hideDescription = !STORE.hideDescription;
    STORE.hideURL = !STORE.hideURL;
}

function renderBookmarkList(){
    let list= [`<div class="js-bookmark-list">
        <ul class="bookmark-item">
         <li>Title: </li>
         <li class="hidden">Description: </li>
         <li class="hidden">URL: </li>
         <li>Rating: </li>
        </ul>
        <button class="expand-button" type="button">Expand</button>
        <button class="delete-button" type="button">Delete</button>
     </div>` ]
    //  <p>Name: example <br>
    //        URL:www.example.com  <br>
    //        Description: exapmle description <br>
    //        Rating: 0
    //       </p>
          
     $('.js-bookmark-list').html(list);
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


function generateBookmarkString() {
    //This function will convert data to HTML string for the DOM.
    return ``
    //render();
}







function main() {
   renderBookmarkList();
   handleAddBookmarkClick();
   captureBookmark();
   render();
}

$(main);