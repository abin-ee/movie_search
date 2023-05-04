import React from 'react'
import './index.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('./dashboard')
    }

    return (
        <div className='home-page'>
            <Header />
            <div className='home-content'>
                <button className='movie-list-button' onClick={handleClick}>
                    Go to movie list page
                </button>
            </div>
            <Footer />
        </div>
    )
}