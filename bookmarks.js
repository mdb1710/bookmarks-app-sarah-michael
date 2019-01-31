/* global STORE, $, cuid */

const bookmarks = (function(){
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
           id: cuid(),
           name: bookmarkTitle,
           url: urlTitle,
           description: description,
            rating: ratingNumber
            }
                      
        STORE.bookmarkList.push(displayedBookmarks);
        renderBookmarkList();
          }) }
              


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
    // $('.filter').on('change', function(){
    //     STORE.filterValue = $(this).val();
    //     bookmarks.renderBookmarks();
    //   });
      
    //   renderBookmarks(){
    //     let items = STORE.bookmarkItems;
    //     if(STORE.filterValue > 1){
    //       items = STORE.bookmarkItems.filter(bookmark => bookmark.rating >= STORE.filterValue);
    //     }
    //     items.map(bookmark => renderBookmark(bookmark));
    //   }

function handleFilter(){
    $('.filter-rating').on('change', function(){
    console.log(`filter happening on dropdown`);
    STORE.filterValue= $(this).val();
    bookmarks.renderBookmarkList();
    })}  
    
function renderBookmarkList(){
    console.log(`renderbookmarkList is running`)
    let items= STORE.bookmarkList;
    if(STORE.filterValue > 5){
        items = STORE.bookmarkList.filter(bookmark => bookmark.rating >= STORE.filterValue)
    }
    items.map(bookmark =>{
    console.log(bookmark);
     renderBookmarkList(bookmark)  })

    const displayList= 
    ` <ul class="bookmark-item">
    ${STORE.bookmarkList.map( bookmark => {
    console.log(bookmark);
   return  renderBookmark(bookmark)})}
    </ul>` 
              
    $('.js-bookmark-list').html(displayList);

    expandBookmark();
    handleDeleteBookmark();
 }
        
        
function handleAddBookmarkClick(){
    console.log(this);
 $('.add-bookmark').on('click', function(){
     console.log(`add bookmark clicked`)
    STORE.displayBookmarkForm = !STORE.displayBookmarkForm;
    console.log(this);
    renderBookmarkForm();
            });
    }
        
        
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

function filterByRating() {
   //This function will filter bookmark list by rating.
   //render();
        }
        
 function render() {
   //This function will save to our store and server and generates bookmark page.
    console.log('render ran');
    //const bookmarkItemString = generateBookmarkString(items);
        }      

function bindEventListeners(){
    handleDeleteBookmark();
    handleAddBookmarkClick();
    handleFilter();
    expandBookmark();
    captureBookmark();
}

return{

renderBookmark,
renderBookmarkForm,
renderBookmarkList,
bindEventListeners,
toggleHiddenDescription,
render,
}

}());

