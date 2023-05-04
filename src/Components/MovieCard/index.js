import React from 'react'
import './index.css'
import { Tooltip } from 'antd'

export default function Card(props) {

    const getTitle = (title) => {
        if (title.length > 50) {
            return <Tooltip title={title}>{title.slice(0, 47)}...</Tooltip>
        } else {
            return title
        }
    }

    return (
        <div className='card'>
            <img src={props.data.Poster} alt='poster' />
            <div className='card-content'>
                <div className='title'>{props.data.Title}</div>
                <div className='sub-info'>
                    <div className='display-info'><p className='info-title'>Genre : </p><span className='info-data'>{props.data.Genre ? props.data.Genre : "N/A"}</span> </div>
                    <div className='display-info'><p className='info-title'>Actors : </p><span className='info-data'> {props.data.Actors ? props.data.Actors : "N/A"}</span></div>
                    <div className='display-info'><p className='info-title'>Plot : </p><span className='info-data'>{props.data.Plot ? getTitle(props.data.Plot) : "N/A"}</span></div>
                    <div className='display-info'><p className='info-title'>Released : </p><span className='info-data'>{props.data.Released ? props.data.Released : "N/A"}</span></div>
                    <div className='display-info'><p className='info-title'>imdbRating : </p><span className='info-data'> {props.data.imdbRating ? props.data.imdbRating : "N/A"}</span></div>
                </div>
            </div>
        </div>
    )
}
