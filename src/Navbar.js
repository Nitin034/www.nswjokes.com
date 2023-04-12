import React from 'react'
import Emoji from './image/happyimoji.gif';

const Navbar = (props) => {

  window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset)
    let navbar = document.getElementById("header");
    if(window.pageYOffset>=300){
      navbar.classList.add("fixed-header")
    }
    else{
      navbar.classList.remove("fixed-header")
    }
  })
  
  return (
    <div>
    <div class="Nav1">
    <div className="d-flex justify-content-center"> 
     <img src={Emoji} alt="emoji" style={{width:"80px", height:"80px",}}></img>
     <figure class="text-center">
  <blockquote class="blockquote">
  <h1 className='my-3'>Neversettle world Jokes</h1>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure> 
     </div>
</div>

<header className='header-wrp' id='header'> 
<nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}  data-spy="affix" data-offset-top="197" >
  <div class="container-fluid">
    <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><ion-icon name="home-outline"></ion-icon>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><ion-icon name="code-working-outline"></ion-icon>Programming</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><ion-icon name="happy-outline"></ion-icon>Misc</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><ion-icon name="happy"></ion-icon>Dark</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><ion-icon name="star-sharp"></ion-icon>Spooky</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><ion-icon name="gift-sharp"></ion-icon>Christmas</a>
        </li>
      </ul>
      </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label me-md-3" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
</nav>
</header>
</div>
     
 

     
  )
}

export default Navbar
