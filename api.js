 'use strict';
 
 /* global $, Headers, */
 
 const api = function () {

    const BASE_URL = "https://thinkful-list-api.herokuapp.com/mike/bookmarks";

    function getBookmarks(){
        return fetch (`${BASE_URL}`)
                 .then(res => res.json())
    }

    $.fn.extend ({
        serializeJson: function (){
            const formData = new FormData(this[0]);
            const o = {};
            formData.forEach((val, name) => {
                return o[name] = val;
            });
            console.log(o);
            return JSON.stringify(o);
            
        }
    })

    function handleSubmit(e){
        $(e.target).serializeJson();
        console.log(e.target);
    }

    function createBookmark(bookmark){
        const newBookmark = JSON.stringify(bookmark)

        return fetch(`${BASE_URL}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: newBookmark
        })
             


    }

    return {
        getBookmarks,
        createBookmark,
        handleSubmit
    }

 }();

    //  function getBookmarks(){
    // return fetch ("https://thinkful-list-api.herokuapp.com/mike/bookmarks")
    //          .then(res => res.json())
    // //         .then(bookmarks => console.log(bookmarks))
    //    }


