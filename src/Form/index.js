// This program was written by a total CREEP!

import React, {PropTypes} from "react";
import { Field, reduxForm } from "redux-form";
import { Grid, Row, Col, Modal, ButtonGroup, ToggleButton } from "react-bootstrap";
import ColorPicker from "./ColorPicker";
import Banner from "./banner";
import FieldFileInput from "./fieldFileInput";
import JSZip from "jszip";
import saveAs from "file-saver";
import { connect } from "react-redux";
import Theme1 from "../Assets/1";
import Theme2 from "../Assets/2";
import Theme3 from "../Assets/3";
import Theme4 from "../Assets/4";
import Theme5 from "../Assets/5";
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
import Iframe from "./Iframe";
import Iframe1 from "./Iframe1";
import Iframe2 from "./Iframe2";
import Iframe3 from "./Iframe3";
import FieldFileInputLogo from "./fieldFileInputLogo";
import $ from "jquery";
import image1 from '../App/images/image1.jpg';
import image2 from '../App/images/image2.jpg';
import image3 from '../App/images/image3.jpg';
import logo from "../App/images/hebslogo.svg"

let theme = "";
let style = "";


function mapStateToProps(state) {
  return state;
}

class Form extends React.PureComponent {


  constructor(props) {
    super(props);
    this.handleColorChange1 = this.handleColorChange1.bind(this);
    this.handleColorChange2 = this.handleColorChange2.bind(this);
    this.handleColorChange3 = this.handleColorChange3.bind(this);
    this.handleColorChange4 = this.handleColorChange4.bind(this);
    this.handleColorChange5 = this.handleColorChange5.bind(this);
    this.handleColorChange6 = this.handleColorChange6.bind(this);
    this.handleColorChange7 = this.handleColorChange7.bind(this);
    this.handleColorChange8 = this.handleColorChange8.bind(this);
    this.handleColorChange9 = this.handleColorChange9.bind(this);
    this.handleColorChange10 = this.handleColorChange10.bind(this);
    this.handleImageChange1 = this.handleImageChange1.bind(this);
    this.handleImageChange2 = this.handleImageChange2.bind(this);
    this.handleImageChange3 = this.handleImageChange3.bind(this);
    this.handleLogoChange = this.handleLogoChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      bannerSpeed: "2000",
      font: "Arial",
      width: "300px",
      height: "250px",
      widthNumber: 300,
      heightNumber: 250,
      theme: "d1",
      borderColor: "#000000",
      backgroundColor: "#ffffff",
      logo: logo,
      buttonText: "Label",
      message1: "Message #1",
      message2: "Message #2",
      message3: "Message #3",
      color1: "#000000",
      color2: "#000000",
      color3: "#000000",
      color4: "#000000",
      color5: "#000000",
      color7: "#ffffff",
      color8: "#ffffff",
      color8: "#ffffff",
      color9: "#ffffff",
      fontSize1: "12px",
      fontSize2: "12px",
      fontSize3: "12px",
      fontSize4: "12px",
      url: "https://www.nextguest.com",
      image1: image1,
      image2: image2,
      image3: image3,
      bannerSpeed: 2000,
      customFont: "",
      title: "banner",
      uppercaseMessage1: false,
      uppercaseMessage2: false,
      uppercaseMessage3: false,
      lineHeight1: 'inherit',
      lineHeight2: 'inherit',
      lineHeight3: 'inherit',
      messagePos1: 0,
      messagePos2: 0,
      messagePos3: 0,
      logoPos1: 0,
      logoSize: 0,
      shapeBackgroundColor: "#ffffff",
      aspect: 4/3,
      showResults: 1,
      animate: false,
      fullBackgroundColor: '#fff',
      colorMessage: "transparent"
    };
  }




  componentDidUpdate(){
    const aspectWidth = document.querySelector('#IframeHidden iframe').contentDocument.querySelector('.banner-image').clientWidth;
    const aspectHeight = document.querySelector('#IframeHidden iframe').contentDocument.querySelector('.banner-image').clientHeight;
    const aspect = aspectWidth/aspectHeight;
    this.setState({aspect: aspect})


  }
  componentWillReceiveProps(state) {
    console.log(state.form.bannerGeneratorForm.values);
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
        widthNumber: width ? width  : 320,
        heightNumber: height ? height  : 250,
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
        colorButton: currentState.color4 ? currentState.color4 : "#fff",
        colorButtonBackground: currentState.color5 ? currentState.color5 : "#000",
        buttonLineHeight: currentState.buttonLineHeight ? currentState.buttonLineHeight : "40px",
        colorMessageShape: currentState.color8 ? currentState.color8 : "#fff",
        colorMessage: currentState.color9 ? currentState.color9 : "transparent",
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
        fullBackgroundColor: currentState.color10 ? currentState.color10 : '#fff',
        title: currentState.title ? currentState.title : 'banner'
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



  handleColorChange1(color) {
    this.props.change("color1", color);
  }
  handleColorChange2(color) {
    this.props.change("color2", color);
  }
  handleColorChange3(color) {
    this.props.change("color3", color);
  }
  handleColorChange4(color) {
    this.props.change("color4", color);
  }
  handleColorChange5(color) {
    this.props.change("color5", color);
  }
  handleColorChange6(color) {
    this.props.change("color6", color);
  }
  handleColorChange7(color) {
    this.props.change("color7", color);
  }
  handleColorChange8(color) {
    this.props.change("color8", color);
  }
  handleColorChange9(color) {
    this.props.change("color9", color);
  }
  handleColorChange10(color) {
    this.props.change("color10", color);
  }
  handleImageChange1(image) {
    this.props.change("image1", image);
  }
  handleImageChange2(image) {
    this.props.change("image2", image);
  }
  handleImageChange3(image) {
    this.props.change("image3", image);
  }
  handleLogoChange(image) {
    this.props.change("logo", image);
  }



  handleSubmit(e) {
    const themeVar = this.state.theme;
    this.setState({download: true})

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
    } else{
      var uppercase1 = '';
    }
    if(this.state.uppercaseMessage2) {
      var uppercase2 = 'text-transform: uppercase;';
    } else{
      var uppercase2 = '';
    }
    if(this.state.uppercaseMessage3) {
      var uppercase3 = 'text-transform: uppercase;';
    } else{
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

    if((this.state.theme === 'd4') || (this.state.theme === 'd7') ) {
      var slide3Visibile = 'display: none !important; opacity: 0 !important;';
    } else{
      var slide3Visibile = '';
    }
    if((this.state.theme === 'd3') ) {
      var slide5Visibile = 'display: block!important; opacity: 1 !important;';
    } else{
      var slide5Visibile = '';
    }


    const htmlFrame = `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="ad.speed" content="${this.state.bannerSpeed}">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.js"></script>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Muli:300,400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:300,400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pathway+Gothic+One:300,400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,700">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600">
        <link rel="stylesheet" href="${this.state.customFont}">
        <style type="text/css">
        ${setStyle}
        </style>
      </head>
    <body>
    <a href=${this.state.url} target="_blank"  class="bannerContainer" style="width: ${this.state.width}; height: ${
      this.state.height
    }; overflow: hidden">
      <div id="banner" data-size="${this.state.size}" style="border: 1px solid ${this.state.borderColor}; background: ${this.state.fullBackgroundColor};">
        <div class="banner-logo" style="background: url(${
          this.state.logo
        }) no-repeat; background-size: contain; ${logoSize} ${logoPos1} background-position: 50% 50%; " ></div>
        <div class="banner-images">
          <div class="banner-image banner-image-1" style="background: url(${
            this.state.image1
          }) no-repeat; background-size: cover;"></div>
          <div class="banner-image banner-image-2" style="background: url(${
            this.state.image2
          }) no-repeat; background-size: cover;"></div>
          <div class="banner-image banner-image-3" style="background: url(${
            this.state.image3
          }) no-repeat; background-size: cover; ${slide3Visibile}"></div>
        </div>
        <div class="banner-player-wrapper"><div className="banner-player" id="banner-player" data-vid="{VID}"></div></div>
        <a class="banner-button" href="${this.state.url}" style="color: ${
      this.state.colorButton
    }; background-color: ${this.state.colorButtonBackground}; line-height: ${this.state.buttonLineHeight}; font-family: ${
      this.state.font
    }; font-size: ${this.state.fontSize3};" id="bg-exit2">asfgdfg${this.state.buttonText}</a>
        <div class="banner-messages" style="background-color: ${this.state.colorMessage};">
          <div class="banner-message banner-message-1" style="color: ${
            this.state.color1
          }; font-size: ${this.state.fontSize1} !important; font-family: ${
      this.state.font
    }; ${uppercase1} line-height: ${this.state.lineHeight1}px; ${pos1}">${this.state.message1}</div>
          <div class="banner-message banner-message-2" style="color: ${
            this.state.color2
          }; font-size: ${this.state.fontSize2} !important; font-family: ${
      this.state.font
    }; ${uppercase2} line-height: ${this.state.lineHeight2}px; ${pos2}">${this.state.message2}</div>
          <div class="banner-message banner-message-3" style="color: ${
            this.state.color3
          }; font-size: ${this.state.fontSize3} !important; font-family: ${
      this.state.font
    }; ${uppercase3} line-height: ${this.state.lineHeight3}px; ${pos3} ${slide3Visibile} ${slide5Visibile}">${this.state.message3}</div>
          <ins class="banner-messages-shape" style="background-color: ${this.state.colorMessageShape}"></ins>
        </div>
        <ins class="banner-shape" style="background-color: ${
          this.state.shapeBackgroundColor
        }"></ins>
        <div style="color: ${
        this.state.colorButton
      }; font-family: ${this.state.font}; display: none;" id="bg-exit1">${
        this.state.buttonText
      }</div>

      </div>
      </a>
      </body>
      <script src="https://s0.2mdn.net/ads/studio/Enabler.js"></script>
      <script>
        ${setTheme}
      </script>
      <script>
        ${Engine}
      </script>
    </html>`;
      var zip = new JSZip();
      var bannerZip = zip.folder(this.state.title);
      bannerZip.file("index.html", htmlFrame);
      zip.generateAsync({ type: "blob", compression: "DEFLATE" }).then(function(content) {
        saveAs(content);
      });
    }

  render() {
    const { renderIframe, handleSubmit, pristine, submitting } = this.props;
    return (
      <Grid className="main-container fluid">
        <Col md={7} className="controlBox">
          <div className="form__container">
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={4} className="firstCol">
                <div className="columnBackground">
                <h4>Slide 1</h4>
                  <div className="form__field">
                    <Field
                      name="image1"
                      component={FieldFileInput}
                      onImageChange={this.handleImageChange1}
                      aspect={this.state.aspect}
                      width={this.state.widthNumber}
                      height={this.state.heightNumber}
                    />
                  </div>
                  <div className="form__field">
                    <label>
                      <Field
                        name="message1"
                        component="input"
                        type="text"
                        placeholder="Message"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Color
                      <Field
                        ref={input => (this.colorValue = input)}
                        name="color1"
                        component="input"
                        type="hidden"
                      />
                      <Field
                        name="color"
                        component={ColorPicker}
                        onColorChange={this.handleColorChange1}
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Size
                      <Field
                        name="fontSize1"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Line Height
                      <Field
                        name="lineHeight1"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Move Message Up / Down (pixels)
                      <Field
                        name="messagePos1"
                        component="input"
                        type="number"
                        placeholder="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                  <label>
                    Uppercase
                    <Field name="uppercaseMessage1" id="uppercaseMessage1" component="input" type="checkbox"/>
                  </label>
                  </div>
                  </div>
                </Col>
                <Col md={4}>
                <div className="columnBackground">
                <h4>Slide 2</h4>
                  <div className="form__field">
                    <Field
                      name="image2"
                      component={FieldFileInput}
                      onImageChange={this.handleImageChange2}
                      aspect={this.state.aspect}
                      width={this.state.widthNumber}
                      height={this.state.heightNumber}
                    />
                  </div>
                  <div className="form__field">
                    <label>
                      <Field
                        name="message2"
                        component="input"
                        type="text"
                        placeholder="Message"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Color
                      <Field
                        ref={input => (this.colorValue = input)}
                        name="color1"
                        component="input"
                        type="hidden"
                      />
                      <Field
                        name="color"
                        component={ColorPicker}
                        onColorChange={this.handleColorChange2}
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Size
                      <Field
                        name="fontSize2"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Line Height
                      <Field
                        name="lineHeight2"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Move Message Up / Down (pixels)
                      <Field
                        name="messagePos2"
                        component="input"
                        type="number"
                        placeholder="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                  <label>
                    Uppercase
                    <Field name="uppercaseMessage2" id="uppercaseMessage2" component="input" type="checkbox"/>
                  </label>
                  </div>
                  </div>
                </Col>
                <Col md={4} className="lastCol">

                <div className={(this.state.theme === 'd4') ? 'hide columnBackground' : (this.state.theme === 'd7') ? 'hide columnBackground' : 'columnBackground'} >
                <h4>Slide 3</h4>
                {this.state.theme != "d3" ?
                  <div className="form__field">
                    <Field
                      name="image3"
                      component={FieldFileInput}
                      onImageChange={this.handleImageChange3}
                      aspect={this.state.aspect}
                      width={this.state.widthNumber}
                      height={this.state.heightNumber}
                    />
                </div> : null }
                  <div className="form__field">
                    <label>
                      <Field
                        name="message3"
                        component="input"
                        type="text"
                        placeholder="Message"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Color
                      <Field
                        ref={input => (this.colorValue = input)}
                        name="color3"
                        component="input"
                        type="hidden"
                      />
                      <Field
                        name="color3"
                        component={ColorPicker}
                        onColorChange={this.handleColorChange3}
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Font Size
                      <Field
                        name="fontSize3"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Line Height
                      <Field
                        name="lineHeight3"
                        component="input"
                        type="number"
                        placeholder="12"
                        min="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Move Message Up / Down (pixels)
                      <Field
                        name="messagePos3"
                        component="input"
                        type="number"
                        placeholder="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                  <label>
                    Uppercase
                    <Field name="uppercaseMessage3" id="uppercaseMessage3" component="input" type="checkbox"/>
                  </label>
                  </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Row>
                  <Col md={4}>
                  <div className="columnBackground">
                    <h4>Button Settings</h4>
                    <div className="form__field">
                      <label>
                        Label
                        <Field
                          name="buttonText"
                          component="input"
                          type="text"
                          placeholder="Button Label"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Button Url
                        <Field
                          name="url"
                          component="input"
                          type="url"
                          placeholder="Button URL"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Button Font Size
                        <Field
                          name="fontSize4"
                          component="input"
                          type="number"
                          placeholder="12"
                          min="0"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Button Line Height
                        <Field
                          name="buttonLineHeight"
                          component="input"
                          type="number"
                          placeholder="12"
                          min="0"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Button Text Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="colorButton"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="colorButton"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange4}
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Button Background Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="colorButtonBackground"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="colorButtonBackground"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange5}
                        />
                      </label>
                    </div>
                    </div>
                  </Col>
                  <Col md={4}>
                  <div className="columnBackground">
                    <h4>Banner Settings</h4>
                    <div className="form__field">
                      <label>
                        Banner Speed
                        <Field
                          name="bannerSpeed"
                          component="input"
                          type="number"
                          placeholder="2000"
                          min="0"
                          max="15000"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Size
                        <Field name="size" component="select" type="select">
                          <option value="300x250">300x250</option>
                          <option value="300x600">300x600</option>
                          <option value="320x50">320x50</option>
                          <option value="160x600">160x600</option>
                          <option value="728x90">728x90</option>
                          <option value="468x60">468x60</option>
                        </Field>
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Theme
                        <Field name="theme" component="select" type="select">
                          <option value="d1">Design #1</option>
                          <option value="d2">Design #2</option>
                          <option value="d4">Design #3</option>
                          <option value="d5">Design #4</option>
                          <option value="d3">Design #5</option>
                          <option value="d6">Design #6</option>
                          <option value="d7">Design #7</option>
                          <option value="d8">Design #8</option>
                          <option value="d9">Design #9</option>
                        </Field>
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Font
                        <Field name="font" component="select" type="select">
                          <option value="default">Theme Default</option>
                          <option value="arial">Arial</option>
                          <option value="georgia">Georgia</option>
                          <option value="lato">Lato</option>
                          <option value="muli">Muli</option>
                          <option value="raleway">Raleway</option>
                          <option value="pathway">Pathway Gothic One</option>
                          <option value="montserrat">Montserrat</option>
                          <option value="josefin">Josefin Sans</option>
                        </Field>
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Custom Font
                        <Field
                          name="customFont"
                          component="input"
                          type="text"
                          placeholder="Enter A Google Font URL"
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Border Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="borderColorhidden"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="borderColor"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange6}
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Background Shape Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="shapeBackgroundColor"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="borderColor"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange7}
                        />
                      </label>
                    </div>
                    <div className="form__field">
                      <label>
                        Background Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="fullBackgroundColor"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="borderColor"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange10}
                        />
                      </label>
                    </div>
                  {this.state.theme === "d2" ?   <div className="form__field">
                      <label>
                        Message Shape Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="color8"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="color"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange8}
                        />
                      </label>
                    </div> : null }
                    <div className="form__field">
                      <label>
                        Message Background Color
                        <Field
                          ref={input => (this.colorValue = input)}
                          name="color9"
                          component="input"
                          type="hidden"
                        />
                        <Field
                          name="color"
                          component={ColorPicker}
                          onColorChange={this.handleColorChange9}
                        />
                      </label>
                    </div>
                    </div>
                  </Col>
                  <Col md={4}>
                  <div className="columnBackground">
                  <h4>Logo & Title</h4>
                  <div className="form__field">
                    <Field
                      name="logo"
                      component={FieldFileInputLogo}
                      onImageChange={this.handleLogoChange}
                    />
                  </div>
                  <div className="form__field">
                    <label>
                      Increase or Decrease Size (In Percentages)
                      <Field
                        name="logoSize"
                        component="input"
                        type="number"
                        placeholder="100"
                        min="1"
                        max="200"
                        value="100"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                    <label>
                      Move Logo left / Right (pixels)
                      <Field
                        name="logoPos1"
                        component="input"
                        type="number"
                        placeholder="0"
                      />
                    </label>
                  </div>
                  <div className="form__field">
                  <label>
                   Title
                    <Field
                    name="title"
                    component="input"
                    type="text"
                    placeholder="Title"
                    />
                    </label>
                  </div>
                  </div>
                  </Col>
                </Row>
                <div className="buttons__container">
                  <button onClick={handleSubmit(this.handleSubmit)}>BUILD BANNER</button>
                </div>
              </Row>
            </form>
          </div>
        </Col>
        <Col md={5}>
        <Row>
          <div className={this.state.showResults === 1 ? "bannerBox iframePanelOne" : "hide"}><Iframe1 className="iframe" /></div>
         <div className={this.state.showResults === 2 ? "bannerBox iframePanelTwo" : "hide"}><Iframe2 className="iframe" /></div>
         <div className={this.state.showResults === 3 ? "bannerBox iframePanelThree" : "hide"}><Iframe3 className="iframe" /></div>
         <div className={this.state.showResults === 4 ? "bannerBox" : "hide"} id="Iframe"><Iframe className="iframe" /></div>
          <div className="bannerBox" style={{opacity: 0}} id="IframeHidden">
            <Iframe animate={this.state.animate} className="iframe" />
          </div>
          </Row>
          <Row>
          <ButtonGroup toggle className="mt-3">
            <button className={this.state.showResults === 1 && "active"} onClick={() => {this.setState({ showResults: 1 })}}>SLIDE 1</button>
            <button className={this.state.showResults === 2 && "active"} onClick={() => {this.setState({ showResults: 2 })}}>SLIDE 2</button>
            <div className={(this.state.theme === 'd4') ? 'hide' : (this.state.theme === 'd7') ? 'hide' : ''}><button className={this.state.showResults === 3 && "active"} onClick={() => {this.setState({ showResults: 3 })}}>SLIDE 3
            </button>
          </div>
            <button className={this.state.showResults === 4 && "active"} onClick={() => {this.setState({ showResults: 4, animate: true })}}>ANIMATION SLIDE</button>
          </ButtonGroup>
          </Row>
        </Col>
      </Grid>
    );
  }
}

Form = connect(mapStateToProps)(Form);

export default reduxForm({
  form: "bannerGeneratorForm"
})(Form);
