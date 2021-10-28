import React from 'react'
import SecondPartMenu from './SecondPartMenu'
import SecondPartSignin from './SecondPartSignin'

export default function SecondPart() {
    return (
        <div className = "SecondHead">
            <SecondPartMenu/>
            <SecondPartSignin/>
        </div>
    )
}
