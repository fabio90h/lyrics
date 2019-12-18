import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Link, useHistory} from 'react-router-dom'

//
const AddSong = () => {
    const [songTitle, setSongTitle] = useState('')
    const [addSongTitle, {loading, error}] = useMutation(mutation)
    const histroy = useHistory()

    const onSubmit = async (event) => {
        event.preventDefault();
        try{
            await addSongTitle({variables: {title: songTitle}})
            histroy.push('/')
        }
        catch(error){
            console.log(error)
        }
        
        setSongTitle('')
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return(
        <div>
            <Link to="/">Back</Link>
            <h3>Create a new Song</h3>
            <form onSubmit={onSubmit}>
                <label>Song Title:</label>
                <input 
                    type="text" 
                    onChange={(event) => setSongTitle(event.target.value)} 
                    value={songTitle}
                />
            </form>
        </div>
    )
}

const mutation = gql`
    mutation AddSong($title: String){
        addSong(title: $title){
            title
            id
        }
    }
`

export default AddSong