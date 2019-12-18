import React, {useState} from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LyricCreate = ({id}) => {
    const [lyrics, setLyrics] = useState('')
    const [addLyrics] = useMutation(mutation)

    const handleSubmit = (e) => {
        e.preventDefault()
        addLyrics({variables: {content: lyrics, songId: id}})
        setLyrics('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Add a Lyric</label>
            <input type="text" onChange={(e) => setLyrics(e.target.value)} value={lyrics}/>
        </form>
    )
}

const mutation = gql`
    mutation AddLyrics($content: String, $songId: ID){
        addLyricToSong(content: $content, songId: $songId){
            title
            id
            lyrics {
                id
                content
            }
        }
    }
`

export default LyricCreate