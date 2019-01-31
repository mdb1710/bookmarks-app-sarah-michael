
'use strict';

/* global $, bookmark, cuid */











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




function main() {
//    renderBookmarkList();
   //handleAddBookmarkClick();
   //captureBookmark();
   //handleFilter();
   //render();
   bookmarks.bindEventListeners();
   
}

$(main);

