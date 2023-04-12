import React, { Component } from 'react'


export default class home extends Component {
  
  render() {
    let {category, joke, type} = this.props;

    
    return (
      <div className='container'>
      <div className="card text-center">
  <div className="card-header"  style={{background: "black" , color:"wheat"}}>
  <h5 className="card-title">{category}</h5>
  </div>
  <div className="card-body"  style={{background: "rgb(50, 44, 44)" , color:"wheat",}} id="joke">
    <p  className="card-text" style={{fontSize: "15px"}} >{joke}</p>
    <figure class="text-end">
  <figcaption class="blockquote-footer">
    Nsw <cite title="Source Title">{type} Jokes😋</cite>
  </figcaption>
</figure>
     
  </div>
</div>
      </div>
        
     
    )
  }
}
