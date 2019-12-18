import React from 'react'

const LyricList = ({lyrics}) => {
    console.log(lyrics)
    
    const printLyricList = () => {
        return lyrics.map(({content, id}) => {
            return(
                <li className="collection-item" key={id}>{content}</li>
            )
        })
    }

    return (
        <ul className="collection">
            {printLyricList()}
        </ul>
    )
}

export default LyricList