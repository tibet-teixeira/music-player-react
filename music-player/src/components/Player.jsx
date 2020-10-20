import React, { useState } from 'react'

import Slider from '@material-ui/core/Slider';
import SkipNextIcon from '@material-ui//icons/SkipNext';
import SkipPreviousIcon from '@material-ui//icons/SkipPrevious';
import ShuffleIcon from '@material-ui//icons/Shuffle';
import RepeatIcon from '@material-ui//icons/Repeat';
import PlayCircleOutlineIcon from '@material-ui//icons/PlayCircleOutline';

const Player = () => {
    const [value, setValue] = useState(30)

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='player-control'>
            <div className='player-control-buttons'>
                <ShuffleIcon /> <SkipPreviousIcon /> <PlayCircleOutlineIcon className='play-circle-icon' /> <SkipNextIcon /> <RepeatIcon />
            </div>
            <div className='playback-bar'>
                <div className='progress-bar'>
                    <span className='start-time'> 1:31 </span>
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    <span className='end-time'> 4:14 </span>
                </div>
            </div>
        </div>
    )
}

export default Player
