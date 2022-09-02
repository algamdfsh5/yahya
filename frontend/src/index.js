import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { db } from "./data/firebase";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import reportWebVitals from './reportWebVitals';
export const root = ReactDOM.createRoot(document.getElementById('web'));
       root.render(

  <React.StrictMode>
      <div className="loader_container">
      <div className="loader"></div>
      </div>
   </React.StrictMode>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  const usersCollectionRef = collection(db, "languages");

     const getUsers = async () => {
      try{
       const data = await getDocs(usersCollectionRef);
       const languages =  data.docs.map((doc) => ({ ...doc.data(), }));
       const languages_en = languages[0]["en"];
       root.render(
  <React.StrictMode>
    <App
    textHeader = { languages_en["text-main-header"] } 
    extraText = { languages_en["extra-text"] } 
    />
   </React.StrictMode>
);
       }catch(error){
    root.render(

  <React.StrictMode>
      <div className="loader_container">
      <h1>Faild to connect to the website Reason = " </h1>
       <h4>{`${error} `} </h4>
      <h1> "</h1>

      </div>
   </React.StrictMode>);
       }
};
     getUsers();



