
import React from "react"
function Card(props){
    return(
<>
<a href="#">
              <img
                src={props.src}
                alt=""
              />
</a>              
</>
    )
}


export default Card;