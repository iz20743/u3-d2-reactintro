 import React from "react"
import{Component} from "react"
 class ImageComponent extends Component{

    render(){
        return(
            <img src={this.props.img} alt={this.props.alt} />
        )
    }
}
export default ImageComponent