import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams, Link } from 'react-router-dom'


import fetchSongDetails from '../queries/fetchSongDetails'

const SongDetail = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(fetchSongDetails, {variables: {id}})

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: </div>

    return(
        <div>
            <Link to="/">Back</Link>
            <h3>{data.song.title}</h3>
        </div>
    )
}

export default SongDetail