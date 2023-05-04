import React from 'react'
import noNetwork from "../../images/no-network.jpg";
import './index.css'

export default function ErrorState() {
    return (
        <div className='error-state'>
            <img alt="error" src={noNetwork} />
            <span className='error-main-label'>Oops something went wrong...</span>
            <p className='error-sub-label'>Please try again...</p>
        </div>
    )
}
