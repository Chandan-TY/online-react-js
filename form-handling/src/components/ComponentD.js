import React from 'react'
import ComponentE from './ComponentE'

export default function ComponentD(props) {
    return (
        <div>
            <ComponentE name={props.name}/>
        </div>
    )
}
