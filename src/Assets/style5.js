const Style5 = `* {
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

#banner {
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 250px;
  background: #1b649b
}

#banner .banner-logo {
  position: absolute;
  z-index: 900;
  right: 50%;
  top: auto;
  left: 20px;
  bottom: 20px;
  width: auto;
  height: 80px;
  background-size: contain;
  background-position: 50% 50%
}

#banner .banner-images {
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 200;
  background: #666;
  overflow: hidden
}

#banner .banner-images .banner-image {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%
}

#banner .banner-images .banner-image.banner-image-1 {
  width: 150%
}

#banner .banner-shape {
  position: absolute;
  z-index: 800;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  opacity: .4
}

#banner .banner-button {
  display: block;
  position: absolute;
  z-index: 1200;
  right: 20px;
  left: auto;
  bottom: 20px;
  top: auto;
  padding: 0 20px;
  min-width: 0;
  line-height: 35px;
  width: auto;
  background: #b0bc26;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  font-weight: 700;
  white-space: nowrap;
  border: 0
}

#banner .banner-messages {
  position: absolute;
  z-index: 9999;
  left: 0;
  right: 0;
  bottom: auto;
  top: 0;
  width: auto;
  height: auto;
  text-align: left;
  padding: 0;
  text-rendering: optimizeLegibility
}

#banner .banner-messages .banner-messages-shape {
  display: none
}

#banner .banner-messages .banner-message {
  display: none;
  position: absolute;
  left: 20px;
  right: auto;
  top: 20px;
  width: auto;
  -webkit-transform: translate(0, -100%);
  -ms-transform: translate(0, -100%);
  transform: translate(0, -100%);
  font-size: 24px;
  line-height: 25px;
  font-weight: 300;
  letter-spacing: 0;
  color: #fff
}

#banner[data-size="160x600"], #banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="160x600"] .banner-shape, #banner[data-size="300x600"] .banner-shape {
  opacity: .1
}

#banner[data-size="160x600"] .banner-logo, #banner[data-size="300x600"] .banner-logo {
  right: calc(50% - 20px);
  height: 90px;
  width: auto
}

#banner[data-size="160x600"] .banner-button, #banner[data-size="300x600"] .banner-button {
  display: none;
  position: relative;
  font-size: 18px;
  line-height: 40px;
  width: auto;
  left: 28px;
  top: -10px;
  display: inline-block
}

#banner[data-size="160x600"] .banner-images.banner-image-1, #banner[data-size="300x600"] .banner-images.banner-image-1 {
  width: 150%
}

#banner[data-size="160x600"] .banner-messages, #banner[data-size="300x600"] .banner-messages {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: auto;
  height: auto;
  padding: 0 28px
}

#banner[data-size="160x600"] .banner-messages .banner-message, #banner[data-size="300x600"] .banner-messages .banner-message {
  position: static;
  padding: 28px 0;
  font-size: 37px;
  line-height: 40px;
  white-space: pre-line;
  word-break: break-all
}

#banner[data-size="160x600"] .banner-messages .banner-messages-shape, #banner[data-size="300x600"] .banner-messages .banner-messages-shape {
  display: none
}

#banner[data-size="160x600"] {
  width: 160px;
  height: 600px
}

#banner[data-size="160x600"] .banner-logo {
  top: auto;
  bottom: 80px;
  left: 10px;
  right: 10px;
  height: 50px;
  background-position: 50% 50%;
  width: auto
}

#banner[data-size="160x600"] .banner-button {
  position: absolute;
  top: auto;
  left: 10px;
  right: 10px;
  bottom: 20px;
  display: block !important
}

#banner[data-size="160x600"] .banner-messages {
  padding: 0 10px
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  padding: 30px 0;
  font-size: 26px;
  line-height: 30px;
  white-space: normal
}

#banner[data-size="320x50"], #banner[data-size="468x60"], #banner[data-size="728x90"] {
  width: 728px;
  height: 90px
}

#banner[data-size="320x50"] .banner-logo, #banner[data-size="468x60"] .banner-logo, #banner[data-size="728x90"] .banner-logo {
  right: auto;
  left: 20px;
  bottom: 10px;
  top: 10px;
  width: 110px;
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="320x50"] .banner-images .banner-image, #banner[data-size="468x60"] .banner-images .banner-image, #banner[data-size="728x90"] .banner-images .banner-image {
  width: 100%;
  height: 150%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0
}

#banner[data-size="320x50"] .banner-messages, #banner[data-size="468x60"] .banner-messages, #banner[data-size="728x90"] .banner-messages {
  right: auto;
  top: 0;
  bottom: 0;
  left: 150px;
  width: 440px;
  height: auto;
  padding: 0
}

#banner[data-size="320x50"] .banner-messages .banner-message, #banner[data-size="468x60"] .banner-messages .banner-message, #banner[data-size="728x90"] .banner-messages .banner-message {
  position: absolute;
  font-size: 24px;
  line-height: 25px;
  text-align: left;
  left: 0;
  right: 0;
  padding: 0;
  top: 50%
}

#banner[data-size="320x50"] .banner-button, #banner[data-size="468x60"] .banner-button, #banner[data-size="728x90"] .banner-button {
  display: block !important;
  right: 15px;
  width: 60px;
  left: auto;
  line-height: 15px;
  font-size: 15px;
  top: 15px;
  bottom: 15px;
  white-space: normal;
  padding: 15px 0;
  text-align: center
}

#banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="468x60"] .banner-logo {
  top: 5px;
  bottom: 5px;
  left: 10px
}

#banner[data-size="468x60"] .banner-button {
  top: 5px;
  bottom: 5px;
  right: 5px;
  padding: 10px 0;
  width: 55px;
  font-size: 14px
}

#banner[data-size="468x60"] .banner-messages {
  left: 140px;
  width: 250px
}

#banner[data-size="468x60"] .banner-messages .banner-message {
  font-size: 15px;
  line-height: 15px
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-logo {
  left: 5px;
  bottom: 5px;
  top: 5px;
  width: 80px
}

#banner[data-size="320x50"] .banner-button {
  top: 5px;
  bottom: 5px;
  right: 5px;
  padding: 5px 0;
  width: 55px;
  font-size: 14px
}

#banner[data-size="320x50"] .banner-messages {
  left: 95px;
  width: 150px
}

#banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 14px;
  line-height: 14px
}

#banner[data-size="728x90"] .banner-images .banner-image {
  height: 100%;
  width: 150%;
}`;
export default Style5;
