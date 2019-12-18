import { gql } from 'apollo-boost'

export default gql`
    query SongDetails($id: ID!){
        songDetails(id: $id){
            id
            title
        }
    }
`