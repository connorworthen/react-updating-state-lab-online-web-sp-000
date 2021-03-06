import React, { Component } from "react";

// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
      }
    }
  }

  bitrateHandler = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    ...previousState.settings,
                    bitrate: 12,
                }
            }
        })
    }


    resolutionHandler = () => {
        this.setState(previousState => {
            return {
                ...previousState,
                settings: {
                    
                    ...previousState.settings,
                    video: {
                        resolution: "720p"
                    }

                }
            }
        })
    }

  render(){
    return(
      <div>
        <button onClick={this.bitrateHandler} className="bitrate" >bitrate</button>
      <button onClick={this.resolutionHandler} className="resolution">resolution</button>
      </div>
    )
  }
}