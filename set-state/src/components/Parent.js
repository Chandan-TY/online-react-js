import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
   
   dataFromChild = (data) =>{
       console.log(data)
   }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <Child action={this.dataFromChild}/>             
            </div>
        )
    }
}
