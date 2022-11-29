import React, { useRef } from 'react'
import "./style.css"

export default function SecondScreen() {
  const videoRef = useRef()
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div className="panel">
        <div className="panel_text">Video Analysis</div>
      </div>
      <video width="800" height="450" src="https://www.youtube.com/embed/qWjblob:https://www.youtube.com/4e947475-bc09-41f0-bdc4-78a9269f3780x-XdZLjk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ref={videoRef} id="video"/>
      <div>
        <button onClick={() => {
          if (videoRef.current.currentTime - 5 >= 0) {
            videoRef.current.currentTime -= 5
          } else {
            videoRef.current.currentTime = 0;
          }
        }} className="videoControls">5 sec Back</button>
        <button onClick={() => videoRef.current.play()} className="videoControls">Play</button>
        <button onClick={() => videoRef.current.pause()} className="videoControls">Pause</button>
        <button onClick={() => {
          if (videoRef.current.currentTime + 5 >= 0) {
            videoRef.current.currentTime += 5
          }
        }} className="videoControls">5 sec Forward</button>
      </div>
    </div>
  )
}
