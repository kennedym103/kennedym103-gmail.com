import React, { Component } from "react";
import { connect } from "react-redux";

import Theme1 from "../Assets/1";
import Theme2 from "../Assets/2";
import Theme5 from "../Assets/3";
import Theme3 from "../Assets/4";
import Theme4 from "../Assets/5";
import Theme6 from "../Assets/6";
import Theme7 from "../Assets/7";
import Theme8 from "../Assets/8";
import Theme9 from "../Assets/9";
import Style1 from "../Assets/style1";
import Style2 from "../Assets/style2";
import Style3 from "../Assets/style3";
import Style4 from "../Assets/style4";
import Style5 from "../Assets/style5";
import Style6 from "../Assets/style6";
import Style7 from "../Assets/style7";
import Style8 from "../Assets/style8";
import Style9 from "../Assets/style9";
import Engine from "../Assets/engine";
import image1 from '../App/images/image1.jpg';
import image2 from '../App/images/image2.jpg';
import image3 from '../App/images/image3.jpg';
import logo from "../App/images/hebslogo.svg"

function mapStateToProps(mappedState) {
  return mappedState;
}

class Iframe3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerSpeed: '2000',
      font: "Arial",
      size: "300x250",
      theme: "d1",
      borderColor: "#ccc",
      backgroundColor: "#ffffff",
      width: "300px",
      height: "250px",
      backgroundImage1: image1,
      backgroundImage2: image2,
      backgroundImage3: image3,
      image1: image1,
      image2: image2,
      image3: image3,
      logo: "",
      theme: "d1",
      buttonText: "Book Now",
      buttonLineHeight: "40px",
      message1: "Message #1",
      message2: "Message #2",
      message3: "Message #3",
      color1: "#000000",
      color2: "#000000",
      color3: "#000000",
      color7: "#ffffff",
      colorButton: "#fff",
      colorButtonBackground: "#000000",
      fontSize1: "12px",
      fontSize2: "12px",
      fontSize3: "12px",
      url: "https://www.surfline.com",
      logo: logo,
      customFont: "",
      animate: false,
      uppercaseMessage1: false,
      uppercaseMessage2: false,
      uppercaseMessage3: false,
      lineHeight1: 'inherit',
      lineHeight2: 'inherit',
      lineHeight3: 'inherit',
      messagePos1: 0,
      messagePos2: 0,
      messagePos3: 0,
      fullBackgroundColor: '#fff'
    };
  }

  componentWillReceiveProps(state) {
    if (state.form.bannerGeneratorForm.values != undefined) {
      const currentState = state.form.bannerGeneratorForm.values;
      const size = currentState.size;
      const width =
        currentState.size != undefined
          ? size.substring(0, size.indexOf("x"))
          : null;
      const height =
        currentState.size != undefined
          ? size.substring(size.indexOf("x") + 1, size.length)
          : null;
      this.setState({
        bannerSpeed: currentState.bannerSpeed ? currentState.bannerSpeed : '2000',
        font: currentState.font ? currentState.font : "Arial",
        size: currentState.size ? currentState.size : "320x250",
        width: width ? (width + "px") : "320",
        height: height ? (height + "px") : "250",
        theme: currentState.theme ? currentState.theme : "d1",
        borderColor: currentState.color6 ? currentState.color6 : "#ccc",
        shapeBackgroundColor: currentState.color7 ? currentState.color7 : "#fff",
        buttonText: currentState.buttonText ? currentState.buttonText : "BOOK NOW",
        message1: currentState.message1 ? currentState.message1 : "MESSAGE 1",
        message2: currentState.message2 ? currentState.message2 : "MESSAGE 2",
        message3: currentState.message3 ? currentState.message3 : "MESSAGE 3",
        color1: currentState.color1 ? currentState.color1 : "#000",
        color2: currentState.color2 ? currentState.color2 : " #000",
        color3: currentState.color3 ? currentState.color3 : "#000",
        color7: currentState.color7 ? currentState.color7 : "#ffffff",
        colorButton: currentState.color4 ? currentState.color4 : "#fff",
        colorButtonBackground: currentState.color5 ? currentState.color5 : "#000",
        buttonLineHeight: currentState.buttonLineHeight ? currentState.buttonLineHeight : "40",
        fontSize1: currentState.fontSize1 ? currentState.fontSize1 : "12px",
        fontSize2: currentState.fontSize2 ? currentState.fontSize2 : "12px",
        fontSize3: currentState.fontSize3 ? currentState.fontSize3 : "12px",
        url: currentState.url ? currentState.url : "https://www.nextguest.com/",
        image1: currentState.image1 ? currentState.image1 : image1,
        image2: currentState.image2 ? currentState.image2 : image2,
        image3: currentState.image3 ? currentState.image3 : image3,
        customFont: currentState.customFont,
        logo: currentState.logo ? currentState.logo : logo,
        uppercaseMessage1: currentState.uppercaseMessage1 ? currentState.uppercaseMessage1 : false,
        uppercaseMessage2: currentState.uppercaseMessage2 ? currentState.uppercaseMessage2 : false,
        uppercaseMessage3: currentState.uppercaseMessage3 ? currentState.uppercaseMessage3 : false,
        lineHeight1: currentState.lineHeight1 ? currentState.lineHeight1 : 'inherit',
        lineHeight2: currentState.lineHeight2 ? currentState.lineHeight2 : 'inherit',
        lineHeight3: currentState.lineHeight3 ? currentState.lineHeight3 : 'inherit',
        messagePos1: currentState.messagePos1 ? currentState.messagePos1 : 0,
        messagePos2: currentState.messagePos2 ? currentState.messagePos2 : 0,
        messagePos3: currentState.messagePos3 ? currentState.messagePos3 : 0,
        logoSize: currentState.logoSize ? currentState.logoSize : 0,
        logoPos1: currentState.logoPos1 ? currentState.logoPos1 : 0,
        colorMessageShape: currentState.color8 ? currentState.color8 : "#fff",
        colorMessage: currentState.color9 ? currentState.color9 : "transparent",
        crop: {

        },
        fullBackgroundColor: currentState.color10 ? currentState.color10 : '#fff'
      });
      function validURL(googleFontUrl) {
        var pattern = new RegExp(
          "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
            "(\\#[-a-z\\d_]*)?$",
          "i"
        ); // fragment locator
        return !!pattern.test(googleFontUrl);
      }

      if (this.state.customFont) {
        function getParameterByName(name, url) {
          if (!url) url = window.location.href;
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return "";
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var googleFontUrl = this.state.customFont;
        var fontFamily = getParameterByName("family", googleFontUrl);
        this.setState({ font: fontFamily });
      }
    }
  }

  /**
   * Initialize Iframe component
   */

  componentDidMount() {
    this._updateIframe();
  }

  /**
   * Called each time the props changes. Triggers an update of the iframe to
   * pass the new content
   */

  componentDidUpdate() {
    this._updateIframe();

  }

  _updateIframe() {
    let themeVar = this.state.theme;
    const speed = this.state.speed;
    const size = this.state.size;

    const setTheme = (function(arg) {
      switch (arg) {
        case "d1":
          return Theme1;
        case "d2":
          return Theme2;
        case "d3":
          return Theme3;
        case "d4":
          return Theme4;
        case "d5":
          return Theme5;
        case "d6":
          return Theme6;
        case "d7":
          return Theme7;
        case "d8":
          return Theme8;
        case "d9":
          return Theme9;
      }
    })(themeVar);
    const setStyle = (function(arg) {
      switch (arg) {
        case "d1":
          return Style1;
        case "d2":
          return Style2;
        case "d3":
          return Style3;
        case "d4":
          return Style4;
        case "d5":
          return Style5;
        case "d6":
          return Style6;
        case "d7":
          return Style7;
        case "d8":
          return Style8;
        case "d9":
          return Style9;
      }
    })(themeVar);

    if(this.state.uppercaseMessage1) {
      var uppercase1 = 'text-transform: uppercase;';
    } else {
      var uppercase1 = '';
    }
    if(this.state.uppercaseMessage2) {
      var uppercase2 = 'text-transform: uppercase;';
    } else {
      var uppercase2 = '';
    }
    if(this.state.uppercaseMessage3) {
      var uppercase3 = 'text-transform: uppercase;';
    } else {
      var uppercase3 = '';
    }

    if(this.state.messagePos1 != 0) {
      var pos1 = 'position: relative; top:' + (this.state.messagePos1 * -1) + 'px;';
    } else{
      var pos1 = '';
    }
    if(this.state.messagePos2 != 0) {
      var pos2 = 'position: relative; top:' + (this.state.messagePos2 * -1) + 'px;';
    } else{
      var pos2 = '';
    }
    if(this.state.messagePos3 != 0) {
      var pos3 = 'position: relative; top:' + (this.state.messagePos3 * -1) + 'px;';
    } else{
      var pos3 = '';
    }
    if(this.state.logoPos1 != 0) {
      var logoPos1 = 'position: absolute; left:' + (this.state.logoPos1 * -1) + 'px;';
    } else{
      var logoPos1 = '';
    }
    if(this.state.logoSize != 0) {
      var logoSize = 'background-size: ' + this.state.logoSize + '%;';
    } else{
      var logoSize = '';
    }
    if((this.state.theme === 'd4') || (this.state.theme === 'd3') || (this.state.theme === 'd7') ) {
      var slide3Visibile = 'display: none;';
    } else{
      var slide3Visibile = '';
    }
    if((this.state.theme === 'd3') ) {
      var slide5Visibile = 'display: block;';
    } else{
      var slide5Visibile = '';
    }

    const liveFrame = `
  <a href=${this.state.url} target="_blank" class="liveframe bannerContainer" style="width: ${this.state.width}; height: ${
      this.state.height
    }; overflow: hidden;">
    <div id="banner" data-size="${this.state.size}" style="border: 1px solid ${
      this.state.borderColor
    }; background: ${this.state.fullBackgroundColor};">
      <div class="banner-logo"  style="background: url(${
        this.state.logo
      }) no-repeat; background-size: contain; ${logoSize} ${logoPos1} background-position: 50% 50%;"></div>
      <div class="banner-images">
        <div class="banner-image banner-image-3" style="background: url(${
          this.state.image3
        }); background-size: cover; ${slide3Visibile}"></div>
      </div>
      <div class="banner-player-wrapper"><div className="banner-player" id="banner-player" data-vid="{VID}"></div></div>
      <a class="banner-button" href="${this.state.url}" style="color: ${
      this.state.colorButton
    }; background: ${this.state.colorButtonBackground}; line-height: ${this.state.buttonLineHeight}px; font-family: ${
      this.state.font
    };"  id="bg-exit2">${this.state.buttonText}</a>
      <div class="banner-messages" style="background-color: ${this.state.colorMessage};">

            <div class="banner-message banner-message-3" style="display: block; opacity: 1; color: ${
              this.state.color3
            }; font-size: ${this.state.fontSize3} !important; font-family: ${
        this.state.font
      }; ${uppercase3} line-height: ${this.state.lineHeight3}px; ${pos3} ${slide3Visibile} ${slide5Visibile}">${this.state.message3}</div>

        <ins class="banner-messages-shape" style="background-color: ${this.state.colorMessageShape}; opacity: 1; height: 100%;"></ins>
      </div>
      <ins class="banner-shape" style="background-color: ${
        this.state.color7
      }"></ins>
      <div  style="color: ${
      this.state.colorButton
    }; font-family: ${this.state.font}; display: none;  id="bg-exit1">${
      this.state.buttonText
    }</div>
    </div>
    </a>`;

    const iframe = this.refs.iframe;
    const document = iframe.contentDocument;
    const head = document.getElementsByTagName("head")[0];
    head.innerHTML = "";
    const css = document.createElement("style");

    const font1 = document.createElement("link");
    const font2 = document.createElement("link");
    const font3 = document.createElement("link");
    const font4 = document.createElement("link");
    const font5 = document.createElement("link");
    const font6 = document.createElement("link");
    const customFont = document.createElement("link");
    const meta = document.createElement("meta");
    font1.href = "https://fonts.googleapis.com/css?family=Lato:300,400,700";
    font1.rel = "stylesheet";
    font2.href = "https://fonts.googleapis.com/css?family=Muli:300,400,700";
    font2.rel = "stylesheet";
    font3.href = "https://fonts.googleapis.com/css?family=Raleway:300,400,700";
    font3.rel = "stylesheet";
    font4.href =
      "https://fonts.googleapis.com/css?family=Pathway+Gothic+One:300,400,700";
    font4.rel = "stylesheet";
    font5.href =
      "https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700";
    font5.rel = "stylesheet";
    font6.href =
      "https://fonts.googleapis.com/css?family=Montserrat:300,400,600";
    font6.rel = "stylesheet";
    customFont.href = this.state.customFont;
    customFont.rel = "stylesheet";

    meta.name = "ad.speed";
    meta.content = this.state.bannerSpeed;
    head.appendChild(meta);
    css.innerHTML = setStyle;
    head.appendChild(css);
    head.appendChild(font1);
    head.appendChild(font2);
    head.appendChild(font3);
    head.appendChild(font4);
    head.appendChild(font5);
    head.appendChild(font6);
    head.appendChild(customFont);
    document.body.innerHTML = liveFrame;

    function animateScript(){

      const script1 = document.createElement("script");
      script1.src =
        "https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js";

      script1.onload = function() {
        const script2 = document.createElement("script");
        script2.src = "https://s0.2mdn.net/ads/studio/Enabler.js";

        script2.onload = function() {
          const script3 = document.createElement("script");
          script3.innerHTML = setTheme;
          head.appendChild(script3);

          setTimeout(function() {
            const script4 = document.createElement("script");
            script4.innerHTML = Engine;
            head.appendChild(script4);
          }, 2000);
        };
        head.appendChild(script2);
      };
      head.appendChild(script1);
    }
    if(this.state.animate) {
      animateScript();
      this.setState(prevState => ({
        animate: !prevState.animate
      }));
    }
  }

  render(props) {

    const iframeStyle = {
      width: this.state.width,
      height: this.state.height,
      border: 0,
      display: (this.state.size && this.state.theme) ? "block" : "none"
    };
    return (
      <div>
      <iframe ref="iframe" charSet="utf-8" style={iframeStyle} scrolling="no" />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Iframe3);
