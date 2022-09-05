import React from "react"

const ButtonComponent = (props) => {
return(
    <div className="container">
    <button className="process">{props.label}</button>
    </div>
)
}

export default ButtonComponent