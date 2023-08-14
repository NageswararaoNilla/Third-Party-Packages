import ReactPlayer from 'react-player'

import './index.css'

const videoURL = 'https://youtu.be/7sDY4m8KNLc'

const VideoPlayer = () => (
  <div className="video-container">
    <h1 className="heading">Video Player</h1>
    <div className="responsive-container">
      <ReactPlayer
        width="700px"
        height="400px"
        controls
        pip
        volume
        url={videoURL}
        onReady={() => console.log('onReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
      />
    </div>
  </div>
)

export default VideoPlayer
