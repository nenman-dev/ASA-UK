import React, {useRef} from 'react'
import './VideoPlayer.css'

const VideoPlayer = ({playState, setPlayState}) => {

    const player =useRef(null);

    const closePlayer = (e)=> {
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video-container ${playState?'':'hide'}`}ref={player} onClick={closePlayer}>
        <iframe
            src="https://www.youtube.com/embed/kD3byU34KQ4"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoPlayer