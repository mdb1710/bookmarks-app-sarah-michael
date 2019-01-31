//added handleDeleteBookmark and beginnings to a filter function for filtering by stars
//none are working, but I think both have the right logic about what to do

'use strict';

/* global $, bookmark */

const STORE = function () {
    let displayBookmarkForm = false;
    let bookmarkList =[];
    let hideDescription = true;
    let hideURL = true;  

    function findByID(id){
        return this.bookmarkList.find(bookmarkList => bookmarkList.id === id)
    };
  
    return {
        displayBookmarkForm,
        bookmarkList,
        hideDescription,
        hideURL,
        findByID
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
            <input type="text" name="Description" class='description-entry'><br>
        
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


{/* <div id="full-description">
    Description: ${bookmark.description}
    URL: ${bookmark.url}
  </div> */}

function renderBookmark(bookmark){
if (STORE.hideURL == true){
return `<li class='new-bookmark'>
<button class="expand-button" type="button">Expand</button><br>
<button class="delete-button" type="button">Delete</button><br>
Title: ${bookmark.name} <br>
Rating: ${bookmark.rating} <br>
</li>`
} else {
    return `<li class='new-bookmark'>
    <button class="expand-button" type="button">Expand</button><br>
    <button class="delete-button" type="button">Delete</button><br>
    Title: ${bookmark.name} <br>
    Rating: ${bookmark.rating} <br>
    Description: ${bookmark.description}<br>
    URL: ${bookmark.url}
    </li>`
}
}


function renderBookmarkList(){
    
    const displayList= `
        <ul class="bookmark-item">
         ${STORE.bookmarkList.map( bookmark => renderBookmark(bookmark))}
        </ul>` 
          
     $('.js-bookmark-list').html(displayList);
      
     expandBookmark();
     handleDeleteBookmark();
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
        rating: ratingNumber
        }
        
        STORE.bookmarkList.push(displayedBookmarks);
        renderBookmarkList();
        }) }

     
     


function expandBookmark() {
    //This function will show full description and url of bookmark when clicked.
    //render();
    //will remove the hidden class from description and URL
    $('.expand-button').on('click', function(){
        
        console.log('expand button works');
        toggleHiddenDescription();
        renderBookmarkList();
        console.log(STORE.hideDescription);
        
    })

}

function toggleHiddenDescription(){
    STORE.hideDescription = !STORE.hideDescription;
    STORE.hideURL = !STORE.hideURL;
    if (STORE.hideDescription == true){
    $("#full-description").addClass(".hidden");
    console.log('remove class works');
    }
    
}


function filterByRating(rating) {
    for(let i=0; i< bookmark.rating.length; i++){
        if(bookmark.rating[i] <= rating){
            bookmark.rating[i].remove();
        }
        else{
            bookmark.rating[i]
        }
    }
}

function handleFilter(){
    $('.filter-rating').on('submit', '.stars-options', function(event){
        console.log(`filter happening on dropdown`);
        event.preventDefault();
        const filteredRating= $('.filter-rating').val();

      filterByRating(filteredRating)
      renderBookmarkList();  
    })
}



function handleDeleteBookmark() {
    $('.delete-button').on('click', function(event){
        console.log(`delete button clicked`)
        event.preventDefault();
        const currentItem =$(event.currentTarget).closest('li').attr('id');
        console.log(currentItem);
//create variable for the currentIteminStore that accepts currentItem & can later be removed with slice.
        const currentIteminStore= STORE.findbyID(currentItem);
console.log(currentIteminStore);
    })
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


function main() {
//    renderBookmarkList();
   handleAddBookmarkClick();
   captureBookmark();
   handleFilter();
   render();
   
}

$(main);

