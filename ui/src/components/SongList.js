import React, { useEffect } from 'react'
import { gql } from 'apollo-boost'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

import fetchSongs from '../queries/fetchSongs'

function SongList(){
    const {loading, error, data, refetch} = useQuery(fetchSongs)
    const [deleteSong] = useMutation(mutation) 

    useEffect(() => {
        refetch()
    })

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: </div>

    // Displays the list of songs in the from the query
    function displaySongs(){
        return data.songs.map(({title, id}) => {
            return(
                <li key={id} className="collection-item">
                    <Link to={`/songs/${id}`}>{title}</Link>
                    <i 
                        className="material-icons right" 
                        onClick={() =>  deleteSong({variables: { id }})}
                    >
                        delete
                    </i>
                </li>
            )
        })
    }

    return (
        <div>
            <h3>Song List</h3>
            <ul class="collection">
                {displaySongs()}
            </ul>
            <ul>
                {/* Make a red add button to navigate to addSong Component */}
                <Link 
                    to="/songs/new"
                    className="btn-floating btn-large red right"
                >
                    <i className="material-icons">add</i>
                </Link>
            </ul>
        </div>
        
    )
}
const mutation = gql`
    mutation DeleteSong($id: ID){
        deleteSong(id: $id){
            id
        }
    }
`

export default SongList