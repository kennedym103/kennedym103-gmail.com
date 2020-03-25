const Style9 = `* {
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
  font-weight: 400
}

#banner .banner-logo {
  position: absolute;
  z-index: 900;
  right: 40px;
  top: 40px;
  left: 40px;
  bottom: 40px;
  width: auto;
  height: auto;
  background-size: contain;
  background-position: 50% 50%;
  background-color: none;
  display: block
}

#banner .banner-images {
  display: none;
  top: 0;
  bottom: 0;
  position: absolute;
  left: 0;
  right: 0;
  width: auto;
  height: auto;
  z-index: 2000;
  background: 0 0;
  overflow: hidden
}

#banner .banner-images .banner-image {
  position: absolute;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: 50% 50%
}

#banner .banner-images .banner-image.banner-image-1, #banner .banner-images .banner-image.banner-image-2 {
  top: 0;
  width: 150%;
  height: calc(50% - 25px);
  z-index: 200;
  -webkit-transform: translate3d(-33.33%, 0, 0);
  transform: translate3d(-33.33%, 0, 0)
}

#banner .banner-images .banner-image.banner-image-2 {
  top: calc(50% + 25px);
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

#banner .banner-shape {
  display: none !important
}

#banner .banner-button {
  display: none;
  position: absolute;
  z-index: 8200;
  left: auto;
  right: 15px;
  bottom: auto;
  top: 15px;
  margin: 0;
  padding: 0 20px;
  min-width: 0;
  line-height: 27px;
  width: auto;
  background: #faaf43;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
  border: 0
}

#banner .banner-messages {
  display: none;
  position: absolute;
  z-index: 300;
  left: 0;
  right: 0;
  bottom: auto;
  top: calc(50% - 25px);
  width: auto;
  height: auto;
  text-align: center;
  padding: 0;
  background: 0 0;
  text-rendering: optimizeLegibility
}

#banner .banner-messages .banner-messages-shape {
  display: none
}

#banner .banner-messages .banner-message {
  display: none;
  position: static;
  font-size: 22px;
  line-height: 54px;
  letter-spacing: 0;
  color: #fff;
  font-weight: 400;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  text-align: center
}

#banner[data-step="4"] .banner-shape {
  top: 50%;
  z-index: 3000
}

#banner[data-step="4"] .banner-logo {
  top: 10px;
  left: 10px;
  right: auto;
  bottom: auto;
  width: calc(35% - 20px);
  height: calc(35% - 20px);
  z-index: 3001
}

#banner[data-step="4"] .banner-messages {
  top: auto;
  bottom: 0;
  z-index: 9000;
  padding: 20px 0 10px;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent));
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, .6) 0, transparent 50%);
  background: linear-gradient(to top, rgba(0, 0, 0, .6) 0, transparent 50%)
}

#banner[data-step="4"] .banner-messages .banner-message-3 {
  position: relative;
  left: 0;
  line-height: 25px
}

#banner[data-size="160x600"], #banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="160x600"] .banner-button, #banner[data-size="300x600"] .banner-button {
  margin: 0;
  top: 50%;
  left: 40px;
  right: 40px;
  line-height: 35px;
  font-size: 16px
}

#banner[data-size="160x600"] .banner-images .banner-image.banner-image-1, #banner[data-size="300x600"] .banner-images .banner-image.banner-image-1 {
  height: calc(50% - 75px)
}

#banner[data-size="160x600"] .banner-images .banner-image.banner-image-2, #banner[data-size="300x600"] .banner-images .banner-image.banner-image-2 {
  height: calc(50% - 75px);
  top: calc(50% + 75px)
}

#banner[data-size="160x600"] .banner-messages, #banner[data-size="300x600"] .banner-messages {
  top: 50%
}

#banner[data-size="160x600"] .banner-messages .banner-message, #banner[data-size="300x600"] .banner-messages .banner-message {
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  line-height: 35px;
  font-size: 30px
}

#banner[data-size="160x600"][data-step="4"] .banner-logo, #banner[data-size="300x600"][data-step="4"] .banner-logo {
  height: 100px;
  top: 20px;
  right: 20px;
  left: 20px;
  width: auto
}

#banner[data-size="160x600"][data-step="4"] .banner-messages, #banner[data-size="300x600"][data-step="4"] .banner-messages {
  top: 0;
  margin: 0;
  padding: 140px 0 0;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent), to(rgba(0, 0, 0, .4)));
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, .6) 0, transparent 50%, rgba(0, 0, 0, .4) 100%);
  background: linear-gradient(to top, rgba(0, 0, 0, .6) 0, transparent 50%, rgba(0, 0, 0, .4) 100%);
  z-index: 2200
}

#banner[data-size="160x600"][data-step="4"] .banner-messages .banner-message, #banner[data-size="300x600"][data-step="4"] .banner-messages .banner-message {
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

#banner[data-size="160x600"] {
  width: 160px;
  height: 600px
}

#banner[data-size="160x600"] .banner-logo {
  left: 10px;
  right: 10px
}

#banner[data-size="160x600"] .banner-button {
  left: 20px;
  right: 20px;
  line-height: 27px;
  font-size: 12px
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  line-height: 28px;
  font-size: 22px
}

#banner[data-size="160x600"][data-step="4"] .banner-logo {
  left: 10px;
  right: 10px
}

#banner[data-size="320x50"], #banner[data-size="468x60"], #banner[data-size="728x90"] {
  width: 728px;
  height: 90px
}

#banner[data-size="320x50"] .banner-logo, #banner[data-size="468x60"] .banner-logo, #banner[data-size="728x90"] .banner-logo {
  left: 10px;
  right: 10px;
  top: 10px;
  bottom: 10px
}

#banner[data-size="320x50"] .banner-images .banner-image, #banner[data-size="468x60"] .banner-images .banner-image, #banner[data-size="728x90"] .banner-images .banner-image {
  top: 0;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  height: 100%
}

#banner[data-size="320x50"] .banner-images .banner-image.banner-image-1, #banner[data-size="468x60"] .banner-images .banner-image.banner-image-1, #banner[data-size="728x90"] .banner-images .banner-image.banner-image-1 {
  top: 0;
  width: 33%;
  right: auto;
  height: 150%;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0)
}

#banner[data-size="320x50"] .banner-images .banner-image.banner-image-2, #banner[data-size="468x60"] .banner-images .banner-image.banner-image-2, #banner[data-size="728x90"] .banner-images .banner-image.banner-image-2 {
  top: 0;
  width: 33%;
  left: auto;
  right: 0;
  height: 150%;
  -webkit-transform: translate3d(0, -33.33%, 0);
  transform: translate3d(0, -33.33%, 0)
}

#banner[data-size="320x50"] .banner-messages, #banner[data-size="468x60"] .banner-messages, #banner[data-size="728x90"] .banner-messages {
  height: 100%;
  top: 0
}

#banner[data-size="320x50"] .banner-messages .banner-message, #banner[data-size="468x60"] .banner-messages .banner-message, #banner[data-size="728x90"] .banner-messages .banner-message {
  line-height: 28px;
  font-size: 22px;
  position: absolute;
  -webkit-transform: translate3d(0, -50%, 0);
  transform: translate3d(0, -50%, 0);
  width: auto;
  left: 33%;
  right: 33%;
  top: 50%
}

#banner[data-size="320x50"] .banner-messages .banner-message.banner-message-3, #banner[data-size="468x60"] .banner-messages .banner-message.banner-message-3, #banner[data-size="728x90"] .banner-messages .banner-message.banner-message-3 {
  left: 140px;
  right: 140px;
  text-align: left
}

#banner[data-size="320x50"] .banner-button, #banner[data-size="468x60"] .banner-button, #banner[data-size="728x90"] .banner-button {
  top: 50%;
  line-height: 26px;
  margin-top: -13px;
  font-size: 12px
}

#banner[data-size="320x50"][data-step="4"] .banner-logo, #banner[data-size="468x60"][data-step="4"] .banner-logo, #banner[data-size="728x90"][data-step="4"] .banner-logo {
  right: auto;
  width: 100px;
  height: auto;
  bottom: 10px
}

#banner[data-size="320x50"][data-step="4"] .banner-messages, #banner[data-size="468x60"][data-step="4"] .banner-messages, #banner[data-size="728x90"][data-step="4"] .banner-messages {
  top: 0;
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent), to(rgba(0, 0, 0, .4)));
  background: -o-linear-gradient(left, rgba(0, 0, 0, .6) 0, transparent 50%, rgba(0, 0, 0, .4) 100%);
  background: linear-gradient(to right, rgba(0, 0, 0, .6) 0, transparent 50%, rgba(0, 0, 0, .4) 100%);
  z-index: 2200;
  padding: 0
}

#banner[data-size="320x50"], #banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="320x50"] .banner-logo, #banner[data-size="468x60"] .banner-logo {
  top: 5px;
  bottom: 5px
}

#banner[data-size="320x50"] .banner-button, #banner[data-size="468x60"] .banner-button {
  line-height: 22px;
  margin-top: -11px;
  padding: 0 10px
}

#banner[data-size="320x50"] .banner-messages .banner-message, #banner[data-size="468x60"] .banner-messages .banner-message {
  font-size: 14px;
  line-height: 15px
}

#banner[data-size="320x50"][data-step="4"] .banner-logo, #banner[data-size="468x60"][data-step="4"] .banner-logo {
  width: 80px;
  background-position: 0 50%
}

#banner[data-size="320x50"][data-step="4"] .banner-messages .banner-message, #banner[data-size="468x60"][data-step="4"] .banner-messages .banner-message {
  left: 100px;
  right: 100px
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-button {
  font-size: 11px
}

#banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 11px;
  line-height: 12px
}

#banner[data-size="320x50"][data-step="4"] .banner-logo {
  width: 60px
}

#banner[data-size="320x50"][data-step="4"] .banner-messages .banner-message {
  left: 70px;
  right: 90px
}`;
export default Style9;
