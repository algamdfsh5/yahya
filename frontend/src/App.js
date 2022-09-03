import './App.css';
import ProgressiveImg from "./lightspeed_imgs";
import search from "./images/icons/search.svg";
import menu  from "./images/icons/menu.svg";
import logo  from "./images/logo.svg";
import triangle  from "./images/headers/triangle.svg";
import example  from "./images/headers/example.png";
import { menu_tab , search_tab , Refresh_page } from "./functions1";


// document.addEventListener('contextmenu', function(e) {
//   e.preventDefault();
// });
//remove that in end of app


function App (props){
  return (
  <div className="App">
  <div className="webbar">
  <img src = { logo } id = "logo_image" onClick = { Refresh_page } />
  <img src = { menu } id = "menu_tab"  onClick = { menu_tab }/>
  <img src = { search }  id = "search_tab"  onClick = { search_tab }/>
  </div>
  <header className="main-header">
  <div id="text-main-header-div">
  <h1 id="text-main-header"> { props.textHeader } </h1>
  <h3 id="extra-text"> { props.extraText } </h3>
    </div> 
  <div className="image_container">
    <ProgressiveImg
      src={ props.images == null ? example : props.images }
      placeholderSrc = {menu_tab}
      id="logo_over_triangle"
    />
        {/*     <img src = { props.images == null ? example : props.images }  id="logo_over_triangle"/>*/}
  <img src = { triangle } id="triangle"/>
  </div>
  
  </header>
 <div className = "our-best-services-container">
  <div className = " what-make-us-main">
  <h1>
   What makes our products special 
  </h1>
  </div>
   </div>
    <article className = "what-make-us-main">
       
<div className="our-best-services">
  <div className="service">
    <svg xmlns="http://www.w3.org/2000/svg" classNane="icons-of-serices_1" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<h2 className = "text-of-icons" >Low price</h2>
</div>
<div className="service">
  <svg xmlns="http://www.w3.org/2000/svg" class="icons-of-serices_2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" >
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
</svg>


<h2 className = "text-of-icons">High Quality</h2>
</div>
<div className="service">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="icons-of-serices_3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
<h2 className="text-of-icons">Best Services</h2>
</div>
</div>
  </article>   

    </div>
);
}

export default App;

