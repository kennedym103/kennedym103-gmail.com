import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(mappedState) {
  return mappedState;
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bannerSpeed: '2000',
      font: "Arial",
      size: "300x250",
      theme: "d1",
      borderColor: "#000000",
      backgroundColor: '#ffffff',
      width: "350px",
      height: "200px",
      backgroundImage1: "",
      backgroundImage2: "",
      backgroundImage3: "",
      logo: "",
      theme: "d1",
      buttonText: "Label",
      message1: "Book a hotel",
      message2: "or dont",
      message3: "I don't care.",
      color1: "#000000",
      color2: "#000000",
      color3: "#000000",
      fontSize1: '12px',
      fontSize2: '12px',
      fointSize3: '12px',
      url: "https://www.surfline.com"
    }
  }
  componentWillReceiveProps(mappedState) {
    if(mappedState.form.bannerGeneratorForm.values != undefined){
      const currentState = mappedState.form.bannerGeneratorForm.values;
      console.log(currentState);
      const size = currentState.size;
      const width = (currentState.size != undefined) ? size.substring(0, size.indexOf("x")) : null;
      const height = (currentState.size != undefined) ? size.substring(size.indexOf("x") + 1, size.length ) : null;
      this.setState({
        bannerSpeed: currentState.bannerSpeed,
        font: currentState.font,
        size:  currentState.size,
        width: width + "px",
        height: height + "px",
        theme: currentState.theme,
        borderColor: currentState.color6,
        backgroundColor: currentState.color7,
        backgroundImage1: currentState.image1,
        backgroundImage2: currentState.image2,
        backgroundImage3: currentState.image3,
        buttonText: currentState.buttonText,
        theme: currentState.theme,
        message1: currentState.message1,
        message2: currentState.message2,
        message3: currentState.message3,
        color1: currentState.color1,
        color2: currentState.color2,
        color3: currentState.color3,
        fontSize1: currentState.fontSize1,
        fontSize2: currentState.fontSize2,
        fointSize3: currentState.fontSize3,
        url: currentState.url
      });
    }
  }

  render(props) {
    const styles = {
      width: this.state.width,
      height: this.state.height,
      border: "1px solid "+ this.state.borderColor,
      overflow: "hidden"
    }
    const bkImg1 = {
      background: "url(" + this.state.backgroundImage1 + ") no-repeat"
    }
    const bkImg2 = {
      background: "url(" + this.state.backgroundImage2 + ") no-repeat"
    }
    const bkImg3 = {
      background: "url(" + this.state.backgroundImage3 + ") no-repeat"
    }
    const message1 = {
      color: this.state.color1,
      fontSize: this.state.fontSize1 + "px"
    }
    const message2 = {
      color: this.state.color2,
      fontSize: this.state.fontSize2 + "px"
    }
    const message3 = {
      color: this.state.color3,
      fontSize: this.state.fontSize3 + "px"
    }
    const bkgColor = {
      backgroundColor: this.state.backgroundColor
    }

    return (
      <div>
      <div className="bannerContainer" style={styles}>
      <div id={this.state.theme} data-size={this.state.size}>
    		<div className="banner-logo" ></div>
    		<div className="banner-images">
    			<div className="banner-image banner-image-1" style={bkImg1}></div>
    			<div className="banner-image banner-image-2" style={bkImg2}></div>
    			<div className="banner-image banner-image-3" style={bkImg3}></div>
    		</div>
    		<div className="banner-player-wrapper"><div className="banner-player" id="banner-player" data-vid="{VID}"></div></div>
    		<a   className="banner-button" href={this.state.url} id="bg-exit2">{this.state.buttonText}</a>
    		<div className="banner-messages">
    			<div className="banner-message banner-message-1" style={message1}>{this.state.message1}</div>
    			<div className="banner-message banner-message-2" style={message2}>{this.state.message2}</div>
    			<div className="banner-message banner-message-3" style={message3}>{this.state.message3}</div>
    			<ins className="banner-messages-shape"></ins>
    		</div>
    		<ins className="banner-shape" style={bkgColor}></ins>
    		<a href={this.state.url} id="bg-exit1">{this.state.buttonText}</a>
    	</div>
      </div>
      </div>
    );
  }
}


export default connect(mapStateToProps)(Banner)
