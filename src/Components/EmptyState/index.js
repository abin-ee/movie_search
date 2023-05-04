import React from 'react'
import noData from "../../images/no-data.jpg";
import './index.css'

export default function EmptyState(props) {
    return (
        <div className='empty-state'>
            <img className='image-section' alt="empty" src={noData} />
            <span className='empty-main-label'>{props.message ? props.message : "No Data Found"}</span>
        </div>
    )
}
