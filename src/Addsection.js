import React, { Component } from 'react';
import nswvid from './image/nswnews.mp4';
import nswNotebook from './image/notebook.mp4';
import ekur from './image/happyimoji.gif'

export default class Addsection extends Component {
  render() {
    
  window.addEventListener("scroll", function(){
    // console.log(window.pageYOffset)
    let div = document.getElementById("addcont");
    if(window.pageYOffset>=300){
      div.classList.add("fixed-addsec")
    }
    else{
      div.classList.remove("fixed-addsec")
    }
  })
    return (
      <div>
        <div className='container2 ' id='addcont'>
      <div className="card" style={{width: "18rem", margin: "8px"}}>
      <span class="badge bg-secondary" style={{borderRadius: "2px 2px 0px 0px"}}>ADVERTISEMENT</span>
  <video src={nswvid} className="card-img-top" style={{borderRadius: "0px 0px 2px 2px"}} alt="..." controls autoplay loop/>  
</div>
      <div className="card" style={{width: "18rem",  margin: "8px"}}>
      <span class="badge bg-secondary" style={{borderRadius: "2px 2px 0px 0px"}}>ADVERTISEMENT</span>
  <video src={nswNotebook} className="card-img-top" style={{borderRadius: "0px 0px 2px 2px"}} alt="..." controls autoplay loop/>
</div>
      <div className="card" style={{width: "18rem",  margin: "8px"}}>
      <span class="badge bg-secondary" style={{borderRadius: "2px 2px 0px 0px"}}>ADVERTISEMENT</span>
  <img src={ekur} className="card-img-top" style={{borderRadius: "0px 0px 2px 2px"}} alt="..."/>
</div>
      </div> 
      </div>
    )
  }
}
