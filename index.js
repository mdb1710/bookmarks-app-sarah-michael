'use strict';

/* global $ */

const STORE = function () {
    let displayBookmarkForm = false;
    let bookmarkList =[];
    let hideDescription = true;
    let hideURL = true;  
  
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
        
                <input type="radio" name="stars" value="5"> 5 stars<br>
                <input type="radio" name="stars" value="4"> 4 stars<br>
                <input type="radio" name="stars" value="3"> 3 stars<br>
                <input type="radio" name="stars" value="2"> 2 stars<br>
                <input type="radio" name="stars" value="1"> 1 star <br>
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


function renderBookmark(bookmark){
return `<li>Title: ${bookmark.name}
Description: ${bookmark.description}
URL: ${bookmark.url} 
Rating: ${bookmark.rating}
<button class="expand-button" type="button">Expand</button>
<button class="delete-button" type="button">Delete</button></li>`
}

function renderBookmarkList(){
    const displayList= `
        <ul class="bookmark-item">
         ${STORE.bookmarkList.map( bookmark => renderBookmark(bookmark))}
        </ul>` 
          
     $('.js-bookmark-list').html(displayList);
      
     
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
        let urlTitle = $('.URL-entry').val();
        let description = $('.description-entry').val();
        console.log(event.currentTarget.stars)
        let ratingNumber= event.currentTarget.stars.value
        console.log(bookmarkTitle, urlTitle, description, ratingNumber);
        
        let displayedBookmarks={ 
        name: bookmarkTitle,
        url: urlTitle,
        description: description,
        rating: ratingNumber}
        
        STORE.bookmarkList.push(displayedBookmarks);
        renderBookmarkList();
        }) } 

     
     
function toggleHiddenItems(){
 STORE.hideDescription = !STORE.hideDescription;
 STORE.hideURL = !STORE.hideURL;
    }

function expandBookmark() {
    //This function will show full description and url of bookmark when clicked.
    //render();
    //will remove the hidden class from description and URL
    

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
//    renderBookmarkList();
   handleAddBookmarkClick();
   captureBookmark();
   render();
}

$(main);