import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams, Link } from 'react-router-dom'

import fetchSongDetails from '../queries/fetchSongDetails'
import LyricCreate from './LyricCreate'
import LyricList from './LyricList'

const SongDetail = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(fetchSongDetails, {variables: {id}})
   
    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: </div>

    const {song} = data
    
    return(
        <div>
            <Link to="/">Back</Link>
            <h3>{song.title}</h3>
            <LyricList lyrics={song.lyrics}/>
            <LyricCreate id={id}/>
        </div>
    )
}

export default SongDetail