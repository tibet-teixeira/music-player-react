import React from 'react'

import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import { ReactComponent as NoteIcon } from '../svgs/note.svg'

const Song = props => {
    return (
        <li>
            <div className="songIcon">
                <NoteIcon className="noteI" />
                <PlayIcon className="playI" />
            </div>
            <div className="songDetails">
                <h3>{props.songName}</h3>
                <span>{props.songArtist}</span>
            </div>
            <div className="songTime">
                <span>{props.songTime}</span>
            </div>
        </li>
    )
}

export default Song
