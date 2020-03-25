const Style3 = `* {
  margin: 0;
  padding: 0;
  border: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%
}

#banner {
  border: 1px solid red;
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
  left: 10px;
  top: 10px;
  right: auto;
  bottom: auto;
  width: calc(50% - 20px);
  height: calc(40% - 20px);
  background-size: contain;
  background-position: 50% 50%
}

#banner .banner-images {
  top: 0;
  bottom: 0;
  position: absolute;
  left: 50%;
  right: 0;
  width: auto;
  z-index: 200;
  background: #000;
  overflow: hidden
}

#banner .banner-image {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 200%;
  height: 100%;
  -webkit-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  transform: translate(-50%, 0)
}

#banner .banner-shape {
  position: absolute;
  z-index: 800;
  left: 0;
  top: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

#banner .banner-button {
  display: none;
  position: absolute;
  z-index: 1200;
  left: 20px;
  right: auto;
  bottom: 20px;
  top: auto;
  padding: 0;
  min-width: 0;
  line-height: 40px;
  width: calc(50% - 40px);
  background: #000;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
  white-space: nowrap
}

#banner .banner-messages {
  position: absolute;
  z-index: 9999;
  right: 50%;
  left: 0;
  bottom: 60px;
  width: auto;
  height: auto;
  text-align: center;
  padding: 20px
}

#banner .banner-messages .banner-messages-shape {
  display: none
}

#banner .banner-messages .banner-message {
  display: none;
  position: relative;
  left: 0;
  top: 0;
  bottom: 0;
  width: auto;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 18px;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0;
  color: #000;
  white-space: pre-line
}

#banner[data-step="1"] .banner-logo {
  right: 10px;
  left: auto
}

#banner[data-step="1"] .banner-messages {
  left: 50%;
  right: 0
}

#banner[data-step="1"] .banner-images {
  left: 0;
  right: 50%
}

#banner[data-step="1"] .banner-shape {
  left: 50%
}

#banner[data-size="160x600"], #banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="160x600"] .banner-shape, #banner[data-size="300x600"] .banner-shape {
  top: 0;
  bottom: 50%;
  left: 0;
  right: 0;
  height: 50%
}

#banner[data-size="160x600"] .banner-logo, #banner[data-size="300x600"] .banner-logo {
  top: 20px;
  left: 20px;
  right: 20px;
  height: calc(22% - 40px);
  background-position: 50% 50%;
  width: auto
}

#banner[data-size="160x600"] .banner-button, #banner[data-size="300x600"] .banner-button {
  bottom: calc(50% + 40px);
  left: 40px;
  right: 40px;
  font-size: 18px;
  line-height: 40px;
  width: auto
}

#banner[data-size="160x600"] .banner-images, #banner[data-size="300x600"] .banner-images {
  top: 50%;
  left: 0;
  right: 0;
  bottom: 0
}

#banner[data-size="160x600"] .banner-images:after, #banner[data-size="300x600"] .banner-images:after {
  top: 0;
  bottom: auto
}

#banner[data-size="160x600"] .banner-messages, #banner[data-size="300x600"] .banner-messages {
  width: auto;
  height: auto;
  bottom: calc(50% + 120px);
  top: auto;
  right: 10px;
  left: 10px;
  padding: 0
}

#banner[data-size="160x600"] .banner-messages .banner-message, #banner[data-size="300x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 20px;
  line-height: 1.5em;
  white-space: normal;
  word-break: break-all
}

#banner[data-size="160x600"] .banner-messages .banner-messages-shape, #banner[data-size="300x600"] .banner-messages .banner-messages-shape {
  display: none
}

#banner[data-size="160x600"][data-step="1"] .banner-logo, #banner[data-size="300x600"][data-step="1"] .banner-logo {
  top: calc(50% + 10px);
  bottom: auto
}

#banner[data-size="160x600"][data-step="1"] .banner-messages, #banner[data-size="300x600"][data-step="1"] .banner-messages {
  top: 80%;
  bottom: 0
}

#banner[data-size="160x600"][data-step="1"] .banner-images, #banner[data-size="300x600"][data-step="1"] .banner-images {
  top: 0;
  bottom: 50%
}

#banner[data-size="160x600"][data-step="1"] .banner-shape, #banner[data-size="300x600"][data-step="1"] .banner-shape {
  top: 50%;
  bottom: 0
}

#banner[data-size="160x600"] {
  width: 160px;
  height: 600px
}

#banner[data-size="160x600"] .banner-button {
  left: 20px;
  right: 20px;
  font-size: 16px
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 16px;
  line-height: 20px;
  white-space: normal
}

#banner[data-size="728x90"], #banner[data-size="468x60"], #banner[data-size="320x50"] {
  width: 728px;
  height: 90px
}

#banner[data-size="728x90"] .banner-shape, #banner[data-size="468x60"] .banner-shape, #banner[data-size="320x50"] .banner-shape {
  left: 0;
  top: 0;
  bottom: 0;
  right: 50%;
  width: auto
}

#banner[data-size="728x90"] .banner-logo, #banner[data-size="468x60"] .banner-logo, #banner[data-size="320x50"] .banner-logo {
  left: 10px;
  bottom: 10px;
  top: 10px;
  width: 15%;
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="728x90"] .banner-images, #banner[data-size="468x60"] .banner-images, #banner[data-size="320x50"] .banner-images {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto;
  overflow: hidden
}

 #banner[data-size="468x60"] .banner-images .banner-image, #banner[data-size="320x50"] .banner-images .banner-image {
  width: 200%;
  height: 100%;
  left: 0;
  right: 0;
  top: auto;
  bottom: 0;
  -webkit-transform: translate(0, 50%);
  -ms-transform: translate(0, 50%);
  transform: translate(0, 50%);
}

#banner[data-size="728x90"] .banner-messages, #banner[data-size="468x60"] .banner-messages, #banner[data-size="320x50"] .banner-messages {
  right: 50%;
  top: 50%;
  bottom: auto;
  left: 15%;
  width: auto;
  height: auto;
  padding: 0 20px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="728x90"] .banner-messages .banner-message, #banner[data-size="468x60"] .banner-messages .banner-message, #banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 16px;
  line-height: 20px
}

#banner[data-size="728x90"] .banner-messages .banner-message.banner-message-3, #banner[data-size="468x60"] .banner-messages .banner-message.banner-message-3, #banner[data-size="320x50"] .banner-messages .banner-message.banner-message-3 {
  top: 25%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="728x90"] .banner-messages .banner-messages-shape, #banner[data-size="468x60"] .banner-messages .banner-messages-shape, #banner[data-size="320x50"] .banner-messages .banner-messages-shape {
  left: 0
}

#banner[data-size="728x90"] .banner-button, #banner[data-size="468x60"] .banner-button, #banner[data-size="320x50"] .banner-button {
  right: 57%;
  width: auto;
  left: 22%;
  line-height: 32px;
  padding: 0;
  font-size: 12px;
  top: auto;
  bottom: 8px;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

#banner[data-size="728x90"][data-step="1"] .banner-logo, #banner[data-size="468x60"][data-step="1"] .banner-logo, #banner[data-size="320x50"][data-step="1"] .banner-logo {
  left: calc(50% + 10px)
}

#banner[data-size="728x90"][data-step="1"] .banner-messages, #banner[data-size="468x60"][data-step="1"] .banner-messages, #banner[data-size="320x50"][data-step="1"] .banner-messages {
  left: 65%;
  right: 0
}

#banner[data-size="728x90"][data-step="1"] .banner-images, #banner[data-size="468x60"][data-step="1"] .banner-images, #banner[data-size="320x50"][data-step="1"] .banner-images {
  left: 0;
  right: 50%
}

#banner[data-size="728x90"][data-step="1"] .banner-images .banner-image, #banner[data-size="468x60"][data-step="1"] .banner-images .banner-image, #banner[data-size="320x50"][data-step="1"] .banner-images .banner-image {
  width: 100%;
  height: 200%
}

#banner[data-size="728x90"][data-step="1"] .banner-shape, #banner[data-size="468x60"][data-step="1"] .banner-shape, #banner[data-size="320x50"][data-step="1"] .banner-shape {
  left: 50%;
  right: 0
}

#banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="468x60"] .banner-button {
  line-height: 20px;
  font-size: 10px;
  bottom: 5px
}

#banner[data-size="468x60"] .banner-messages .banner-message {
  font-size: 10px;
  line-height: 13px
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-logo {
  left: 5px;
  top: 5px;
  bottom: 5px;
  width: calc(20% - 5px)
}

#banner[data-size="320x50"] .banner-button {
  right: 52%;
  left: 22%;
  line-height: 18px;
  font-size: 10px;
  bottom: 4px
}

#banner[data-size="320x50"] .banner-messages {
  left: 20%;
  padding: 0 5px
}

#banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 9px;
  line-height: 11px
}

#banner[data-size="320x50"][data-step="1"] .banner-logo {
  left: calc(50% + 5px);
  top: 5px;
  bottom: 5px;
  width: calc(20% - 5px)
}

#banner[data-size="320x50"][data-step="1"] .banner-messages {
  left: 70%
}

#banner .banner-image-3 {
  display: none;
}

#banner[data-size="728x90"] .banner-images .banner-image{
  width: 250%;
  height: 100%;
  left: 0;
  right: 0;
  top: auto;
  bottom: 0;
}`;
export default Style3;
