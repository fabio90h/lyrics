import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useParams } from 'react-router-dom'

import fetchSongDetails from '../queries/fetchSongDetails'

const SongDetail = () => {
    const {id} = useParams()
    const {loading, error, data} = useQuery(fetchSongDetails, {variables: {id}})

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: </div>

    return(
        <div>
            {data.song.title}
        </div>
    )
}

export default SongDetail