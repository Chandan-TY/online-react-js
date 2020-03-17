import React, {  PureComponent } from 'react'

export class MyPureComponent extends PureComponent {
    render() {
        console.log("Pure Component rendering")
        return (
            <>
              <h1>Name - {this.props.username}</h1>  
            </>
        )
    }
}

export default MyPureComponent
