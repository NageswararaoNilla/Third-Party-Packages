import {Component} from 'react'

import ReactPlayer from 'react-player'

import './index.css'

// const videoURL = 'https://youtu.be/7sDY4m8KNLc'
const videoURL = 'https://youtu.be/YE7VzlLtp-4'

class VideoPlayer extends Component {
  state = {
    isPlaying: false,
  }

  onClickPlay = () => {
    this.setState(prevState => ({isPlaying: !prevState.isPlaying}))
  }

  render() {
    const {isPlaying} = this.state
    const btnText = isPlaying ? 'Pause' : 'Play'

    return (
      <div className="video-container">
        <h1 className="heading">Video Player</h1>
        <div className="responsive-container">
          <ReactPlayer
            playing={isPlaying}
            // width="700px"
            // height="400px"
            controls
            volume
            url={videoURL}
            onReady={() => console.log('onReady callback')}
            onStart={() => console.log('onStart callback')}
            onPause={() => console.log('onPause callback')}
            onEnded={() => console.log('onEnded callback')}
            onError={() => console.log('onError callback')}
          />
        </div>
        <button type="button" className="button" onClick={this.onClickPlay}>
          {btnText}
        </button>
      </div>
    )
  }
}
export default VideoPlayer
