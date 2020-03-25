const Style6 = `* {
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
  background: #1b649b;
  font-weight: 400
}

#banner .banner-logo {
  position: absolute;
  z-index: 900;
  right: 15px;
  top: auto;
  left: auto;
  bottom: 15px;
  width: 155px;
  height: 32px;
  background-size: contain;
  background-position: 100% 50%
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
  width: 150%;
  height: 100%;
  background-position: 0 50%
}

#banner .banner-images .banner-image.banner-image-2 {
  background-position: 100% 50%;
  left: -50%
}

#banner .banner-shape {
  display: none
}

#banner .banner-button {
  display: block;
  position: absolute;
  z-index: 1200;
  left: 15px;
  right: auto;
  bottom: 15px;
  top: auto;
  padding: 0 10px;
  min-width: 0;
  line-height: 30px;
  width: auto;
  background: 0 0;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  border: 1px solid #fff
}

#banner .banner-messages {
  position: absolute;
  z-index: 300;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50%;
  width: auto;
  height: auto;
  text-align: left;
  padding: 0;
  text-rendering: optimizeLegibility
}

#banner .banner-messages .banner-messages-shape {
  position: absolute;
  opacity: .45;
  left: 0;
  bottom: 0;
  right: 0;
  top: auto;
  height: 100%;
  background: #364c6e;
  z-index: 100
}

#banner .banner-messages .banner-message {
  display: none;
  position: absolute;
  z-index: 200;
  left: 15px;
  right: 15px;
  top: 15px;
  width: auto;
  font-size: 26px;
  line-height: 26px;
  letter-spacing: 0;
  color: #fff;
  font-weight: 400;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

#banner[data-size="160x600"], #banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="160x600"] .banner-shape, #banner[data-size="300x600"] .banner-shape {
  display: none
}

#banner[data-size="160x600"] .banner-logo, #banner[data-size="300x600"] .banner-logo {
  right: 40px;
  left: 40px;
  bottom: 30px;
  height: 68px;
  width: auto;
  background-position: 50% 50%
}

#banner[data-size="160x600"] .banner-button, #banner[data-size="300x600"] .banner-button {
  display: none;
  position: absolute;
  font-size: 28px;
  line-height: 40px;
  width: auto;
  left: 40px;
  right: 40px;
  top: auto;
  bottom: 100px;
  display: inline-block
}

#banner[data-size="160x600"] .banner-images.banner-image-1, #banner[data-size="300x600"] .banner-images.banner-image-1 {
  width: 150%
}

#banner[data-size="160x600"] .banner-messages, #banner[data-size="300x600"] .banner-messages {
  height: 344px;
  top: auto
}

#banner[data-size="160x600"] .banner-messages .banner-message, #banner[data-size="300x600"] .banner-messages .banner-message {
  position: absolute;
  padding: 30px 0;
  top: 0;
  left: 40px;
  right: 40px;
  font-size: 45px;
  line-height: 40px;
  white-space: pre-line;
  word-break: break-all
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
  font-size: 24px;
  line-height: 36px;
  top: auto;
  left: 15px;
  right: 15px;
  bottom: 20px;
  display: block !important
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  padding: 20px 0;
  left: 15px;
  right: 15px;
  font-size: 32px;
  line-height: 30px;
  white-space: normal
}

#banner[data-size="320x50"], #banner[data-size="468x60"], #banner[data-size="728x90"] {
  width: 728px;
  height: 90px
}

#banner[data-size="320x50"] .banner-logo, #banner[data-size="468x60"] .banner-logo, #banner[data-size="728x90"] .banner-logo {
  right: auto;
  left: 15px;
  bottom: 15px;
  top: 15px;
  width: 160px;
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="320x50"] .banner-images .banner-image, #banner[data-size="468x60"] .banner-images .banner-image, #banner[data-size="728x90"] .banner-images .banner-image {
  width: 100%;
  height: 150%;
  left: 0;
  right: 0;
  top: -50%;
  bottom: auto
}

#banner[data-size="320x50"] .banner-images .banner-image.banner-image-2, #banner[data-size="468x60"] .banner-images .banner-image.banner-image-2, #banner[data-size="728x90"] .banner-images .banner-image.banner-image-2 {
  top: 0
}

#banner[data-size="320x50"] .banner-messages, #banner[data-size="468x60"] .banner-messages, #banner[data-size="728x90"] .banner-messages {
  right: auto;
  top: 0;
  bottom: 0;
  left: 0;
  width: 480px
}

#banner[data-size="320x50"] .banner-messages .banner-message, #banner[data-size="468x60"] .banner-messages .banner-message, #banner[data-size="728x90"] .banner-messages .banner-message {
  position: absolute;
  font-size: 32px;
  line-height: 30px;
  text-align: left;
  left: 190px;
  right: 40px;
  padding: 0;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="320x50"] .banner-button, #banner[data-size="468x60"] .banner-button, #banner[data-size="728x90"] .banner-button {
  left: auto;
  right: 20px;
  top: 30px;
  bottom: auto
}

#banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="468x60"] .banner-logo {
  bottom: 5px;
  top: 5px;
  width: 120px
}

#banner[data-size="468x60"] .banner-button {
  top: 17px;
  line-height: 25px;
  right: 15px;
  font-size: 17px
}

#banner[data-size="468x60"] .banner-messages {
  left: 0;
  width: 340px
}

#banner[data-size="468x60"] .banner-messages .banner-message {
  left: 150px;
  right: 20px;
  font-size: 22px;
  line-height: 20px
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-logo {
  left: 10px;
  bottom: 5px;
  top: 5px;
  width: 70px
}

#banner[data-size="320x50"] .banner-button {
  top: 14px;
  line-height: 20px;
  right: 10px;
  font-size: 14px;
  padding: 0 15px
}

#banner[data-size="320x50"] .banner-messages {
  left: 0;
  width: 220px
}

#banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 14px;
  line-height: 14px;
  left: 90px;
  right: 10px
}`;
export default Style6;
