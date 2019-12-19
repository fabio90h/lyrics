import { gql } from 'apollo-boost'

export default gql`
    query SongDetails($id: ID!){
        song(id: $id){
            id
            title
            lyrics{
                id
                content
                likes
            }
        }
    }
`