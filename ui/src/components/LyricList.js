import React from 'react'
import {gql} from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

const LyricList = ({lyrics}) => {
    const [likeLyric] = useMutation(mutation)
    
    const printLyricList = () => {
        return lyrics.map(({content, id, likes}) => {
            return(
                <li className="collection-item" key={id}>
                    {content}
                    <i 
                        className="material-icons right" 
                        onClick={() => likeLyric({variables: {id}})}
                    >thumb_up</i>
                    <span className='right'>{likes}</span>
                </li>
            )
        })
    }

    return (
        <ul className="collection">
            {printLyricList()}
        </ul>
    )
}

const mutation = gql`
    mutation likeLyrics($id: ID){
        likeLyric(id: $id){
            likes
            id
        }
    }
`

export default LyricList