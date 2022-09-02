import { db } from "./data/firebase";
import {root}  from "./index";
import React from 'react';
import App from './App';
import { getApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
     import { getStorage, ref , getDownloadURL} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-storage.js";

// Get a non-default Storage bucket

import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
function menu_tab()
{ 
// Create a reference with an initial file path and name
const storage = getStorage();

const pathReference = ref(storage, '2019_10_23_13_27_16_321.jpeg');

getDownloadURL(pathReference)
  .then((url) => {
 const usersCollectionRef = collection(db, "languages");
     const getUsers = async () => {
       const data = await getDocs(usersCollectionRef);
       const languages =  data.docs.map((doc) => ({ ...doc.data(), }));
       const languages_ar = languages[0]["ar"];
console.log(languages.length);
document.getElementById('title').textContent = "yahya";
root.render(
  <React.StrictMode>
    <App
    images = {url}
    textHeader = { languages_ar["text-main-header"] } 
    extraText = { languages_ar["extra-text"] } 
    />
   </React.StrictMode>
);

}
getUsers();
console.log("menu tab");

// Insert url into an <img> tag to "download"
  })
  .catch((error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
// Create a reference from a Google Cloud Storage URI

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!

    
   

}
function search_tab()
{

console.log("search tab");

}
function Refresh_page()
{
window.location.href = "/";
}
export {menu_tab,search_tab,Refresh_page};
