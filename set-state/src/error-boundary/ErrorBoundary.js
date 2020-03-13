import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

    state = {
        hasError : false
    }

    static getDerivedStateFromError(error){
        console.log(error)
        return {
            hasError : true
        }
    }

    render() {
        if(this.state.hasError){
            return <div>
                <h1>Something went wrong!!!</h1>
            </div>
        }else{
            return this.props.children;
        }
       
    }
}
