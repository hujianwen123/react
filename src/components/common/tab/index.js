import React from 'react'
import './index.css'

const Tab=props=>{
    const { goBack } = props.history
    return (
        <header>
            {props.tabFlag&&<i className="fas fa-angle-left" onClick = { goBack }></i>}
           {/* <i className="fas  fa-arrow-left"></i> */}

            <span> { props.title }  </span>
        </header>
        )
}
export default Tab 