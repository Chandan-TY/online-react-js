import React from 'react'
import { withRouter } from 'react-router-dom'

 function Footer(props) {
    console.log("Footer props",props)

    const navigateTo = ()=>{
        props.history.push("/showaccounts")
    }
    return (
        <div>
            <button onClick={navigateTo}>Navigate To</button>
        </div>
    )
}
export default withRouter(Footer)