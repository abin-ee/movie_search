import React, { useState } from 'react'
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './index.css'
import ErrorState from '../../Components/ErrorState';
import EmptyState from '../../Components/EmptyState';
import { constants } from './constants';
import { Spin } from 'antd'
import Card from '../../Components/MovieCard';

export default function Dashboard(props) {

    const [searchValue, setSearchValue] = useState("")

    const callApi = () => {
        let payload = { searchText: searchValue }
        props.fetchMovieList(payload)
    }

    return (
        <Spin spinning={props.movieDataApi.loading}>
            <Header />
            <div className='search-section'>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button disabled={!searchValue || searchValue === props.movieDataApi.searchText} onClick={callApi}>Search movie</button>
            </div>
            {props.movieDataApi.error
                ? <ErrorState />
                :
                <>
                    {props.movieDataApi.data && Object.keys(props.movieDataApi.data).length
                        ? <>
                            <div className='dashboard-content'>
                                <div className='content-section'>
                                    <Card data={props.movieDataApi.data} />
                                </div>
                            </div>
                        </>
                        : <> {searchValue && props.movieDataApi.apiCalled
                            ? <EmptyState message={constants.EMPTY_STATE_MESSAGE} />
                            : <EmptyState message={constants.NO_SEARCH_STATE_MESSAGE} />}
                        </>
                    }
                </>
            }
            <Footer />
        </Spin>
    )
}