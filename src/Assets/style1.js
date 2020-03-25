const Style1 = `* {
  margin: 0;
  padding: 0;
  border: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%
}

#banner {
  border: 1px solid #000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box
}

#banner #bg-exit1 {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100000 !important
}

#banner #bg-exit2 {
  z-index: 200000 !important
}

* {
  font-family: inherit;
  font-weight: 400
}

#banner {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 250px;
  background: #fff
}

#banner .banner-logo {
  position: absolute;
  z-index: 900;
  left: 20px;
  top: auto;
  bottom: 10px;
  width: calc(50% - 20px);
  height: calc(33% - 20px);
  background-size: contain
}

#banner .banner-images {
  position: absolute;
  top: 0;
  bottom: 20%;
  left: 0;
  width: 100%;
  background: #eee;
  overflow: hidden
}

#banner .banner-image {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}

#banner .banner-shape {
  position: absolute;
  z-index: 800;
  left: -50%;
  top: 60%;
  width: 200%;
  height: 100%;
  background: #fff;
  -webkit-transform: rotate(-5deg);
  -ms-transform: rotate(-5deg);
  transform: rotate(-5deg)
}

#banner .banner-button {
  display: none;
  position: absolute;
  z-index: 1200;
  right: 20px;
  top: 20px;
  bottom: auto;
  line-height: 40px;
  padding: 0 20px;
  background: #888;
  color: #fff;
  text-align: center;
  text-decoration: none
}

#banner .banner-messages {
  position: absolute;
  z-index: 9999;
  right: 0;
  bottom: 0;
  margin: 0 25px;
  width: calc(50% - 50px);
  height: 40%;
  text-align: center
}

#banner .banner-messages .banner-message {
  display: none;
  position: absolute;
  width: 100%;
  left: 47%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 16px;
  line-height: 1.125em;
  font-weight: 700;
  letter-spacing: .5px;
  color: #4e3a22
}

#banner[data-size="160x600"] {
  width: 160px;
  height: 600px
}

#banner[data-size="160x600"] .banner-shape {
  top: 50%
}

#banner[data-size="160x600"] .banner-logo {
  left: 10px;
  right: 10px;
  bottom: 20px;
  width: auto;
  height: 70px
}

#banner[data-size="160x600"] .banner-button {
  top: 440px;
  left: 20px;
  font-size: 13px;
  line-height: 32px
}

#banner[data-size="160x600"] .banner-messages {
  width: calc(100% - 50px);
  height: auto;
  bottom: 180px;
  right: inherit;
  left: inherit;
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 23px;
  line-height: 26px;
  white-space: normal
}

#banner[data-size="160x600"] .banner-messages .banner-message.banner-message-3 {
  line-height: 30px
}

#banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="300x600"] .banner-shape {
  top: 50%
}

#banner[data-size="300x600"] .banner-logo {
  left: 10px;
  right: 10px;
  bottom: 20px;
  width: auto;
  height: 80px
}

#banner[data-size="300x600"] .banner-button {
  top: 410px;
  left: 40px;
  right: 40px;
  font-size: 16px;
  line-height: 42px
}

#banner[data-size="300x600"] .banner-messages {
  width: auto;
  height: auto;
  bottom: 200px;
  right: 20px;
  left: 20px
}

#banner[data-size="300x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  letter-spacing: .5px;
  line-height: 35px;
  white-space: normal
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-shape {
  left: -10%;
  top: -50%;
  width: 82%;
  height: 200%;
  -webkit-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  transform: rotate(-10deg)
}

#banner[data-size="320x50"] .banner-logo {
  left: 10px;
  bottom: 1px;
  top: 1px;
  width: 30%;
  height: auto
}

#banner[data-size="320x50"] .banner-images {
  position: absolute;
  left: 70%;
  top: 0;
  bottom: 0;
  right: 0
}

#banner[data-size="320x50"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="320x50"] .banner-messages {
  right: auto;
  top: 2px;
  bottom: 2px;
  left: 34%;
  width: 36%;
  height: auto;
  margin: 0;
}

#banner[data-size="320x50"] .banner-messages .banner-message.banner-message-3 {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  width: auto;
  font-size: 13px;
  line-height: 13px;
  white-space: normal
}

#banner[data-size="320x50"] .banner-button {
  left: 36%;
  width: 20%;
  line-height: 18px;
  padding: 0 15px;
  font-size: 8px;
  top: auto;
  bottom: 1px
}

#banner[data-size="728x90"] {
  width: 728px;
  height: 90px
}

#banner[data-size="728x90"] .banner-shape {
  left: -14%;
  top: -50%;
  width: 75%;
  height: 240%;
  -webkit-transform: rotate(-9deg);
  -ms-transform: rotate(-9deg);
  transform: rotate(-9deg)
}

#banner[data-size="728x90"] .banner-logo {
  left: 10px;
  bottom: 10px;
  top: 10px;
  width: 25%;
  height: auto;
  background-position: 0 50%
}

#banner[data-size="728x90"] .banner-images {
  position: absolute;
  left: 59%;
  top: 0;
  bottom: 0;
  right: 0
}

#banner[data-size="728x90"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="728x90"] .banner-images .banner-image-2 {
  background-position: 50% 50%
}

#banner[data-size="728x90"] .banner-messages {
  right: auto;
  top: 10px;
  bottom: 10px;
  left: 25%;
  width: calc(35% - 20px);
  margin: 0 10px;
  height: auto
}

#banner[data-size="728x90"] .banner-messages .banner-message {
  line-height: 24px;
  left: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="728x90"] .banner-messages .banner-message.banner-message-3 {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  white-space: normal
}

#banner[data-size="728x90"] .banner-button {
  left: 30%;
  width: 20%;
  line-height: 32px;
  padding: 0 15px;
  font-size: 14px;
  top: auto;
  bottom: 10px
}

#banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="468x60"] .banner-shape {
  left: -10%;
  top: -50%;
  width: 82%;
  height: 220%;
  -webkit-transform: rotate(-10deg);
  -ms-transform: rotate(-10deg);
  transform: rotate(-10deg)
}

#banner[data-size="468x60"] .banner-logo {
  left: 10px;
  bottom: 4px;
  top: 4px;
  width: 30%;
  height: auto
}

#banner[data-size="468x60"] .banner-images {
  position: absolute;
  left: 71%;
  top: 0;
  bottom: 0;
  right: 0
}

#banner[data-size="468x60"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="468x60"] .banner-messages {
  right: auto;
  top: 2px;
  bottom: 2px;
  left: 34%;
  width: 36%;
  height: auto
}

#banner[data-size="468x60"] .banner-messages .banner-message.banner-message-3 {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  width: auto;
  font-size: 16px;
  line-height: 26px;
  white-space: normal
}

#banner[data-size="468x60"] .banner-button {
  left: 39%;
  width: 20%;
  line-height: 25px;
  padding: 0 15px;
  font-size: 12px;
  top: auto;
  bottom: 4px
}`;

export default Style1;
