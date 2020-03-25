const Style2 = `* {
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
  top: 10px;
  right: 20px;
  bottom: auto;
  width: auto;
  height: calc(30% - 20px);
  background-size: contain;
  background-position: 50% 50%
}

#banner .banner-images {
  top: 30%;
  bottom: 0;
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 200;
  background: #eee;
  overflow: hidden
}

#banner .banner-images .banner-image-1 {
  -webkit-transform: scale(1.2);
  -ms-transform: scale(1.2);
  transform: scale(1.2)
}

#banner .banner-images:after {
  content: '';
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: -webkit-gradient(linear, left bottom, left top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent));
  background: -o-linear-gradient(bottom, rgba(0, 0, 0, .6) 0, transparent 50%);
  background: linear-gradient(to top, rgba(0, 0, 0, .6) 0, transparent 50%)
}

#banner .banner-image {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #005172
}

#banner .banner-shape {
  position: absolute;
  z-index: 800;
  left: 0;
  top: 0;
  width: 100%;
  height: 30%;
  background: #fff;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none
}

#banner .banner-button {
  display: none;
  position: absolute;
  z-index: 1200;
  right: 20px;
  bottom: 20px;
  top: auto;
  line-height: 40px;
  padding: 5px 10px;
  width: auto;
  min-width: 40px;
  max-width: 30%;
  background: #888;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 13px;
}

#banner .banner-messages {
  position: absolute;
  z-index: 9999;
  right: 100px;
  left: 20px;
  bottom: 15px;
  width: auto;
  max-width: 47%;
  height: 50px;
  text-align: left;
  padding-left: 14px;
  font-weight: 700
  padding: 25px;
}

#banner .banner-messages .banner-messages-shape {
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 0;
  background: #6fd4e4
}

#banner .banner-messages .banner-message {
  display: none;
  position: relative;
  opacity: 0;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 100%;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 22px;
  line-height: 1.25em;
  font-weight: 700;
  letter-spacing: 0;
  color: #fff
}

#banner[data-size="160x600"] {
  width: 160px;
  height: 600px
}

#banner[data-size="160x600"] .banner-shape {
  top: 0
}

#banner[data-size="160x600"] .banner-logo {
  top: 20px;
  height: calc(30% - 40px)
}

#banner[data-size="160x600"] .banner-button {
  bottom: 60px;
  left: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 40px
}

#banner[data-size="160x600"] .banner-images:after {
  top: 0;
  bottom: auto
}

#banner[data-size="160x600"] .banner-messages {
  width: auto;
  height: auto;
  bottom: auto;
  top: calc(30% + 30px);
  right: 20px;
  left: 20px;
  padding: 25px 0 25px 25px;
}

#banner[data-size="160x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 25px;
  line-height: 25px;
  white-space: normal
}

#banner[data-size="300x600"] {
  width: 300px;
  height: 600px
}

#banner[data-size="300x600"] .banner-shape {
  top: 0
}

#banner[data-size="300x600"] .banner-logo {
  top: 20px;
  height: calc(30% - 40px)
}

#banner[data-size="300x600"] .banner-button {
  bottom: 40px;
  left: 40px;
  right: 40px;
  font-size: 18px;
  line-height: 40px
}

#banner[data-size="300x600"] .banner-images:after {
  top: 0;
  bottom: auto
}

#banner[data-size="300x600"] .banner-messages {
  width: auto;
  height: auto;
  bottom: auto;
  top: calc(30% + 30px);
  right: 20px;
  left: 40px;
  padding: 25px 0 25px 25px;
}

#banner[data-size="300x600"] .banner-messages .banner-message {
  position: static;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  font-size: 35px;
  line-height: 35px;
  white-space: normal
}

#banner[data-size="300x600"] .banner-messages .banner-messages-shape {
  left: 0
}

#banner[data-size="320x50"] {
  width: 320px;
  height: 50px
}

#banner[data-size="320x50"] .banner-shape {
  display: none
}

#banner[data-size="320x50"] .banner-logo {
  left: 5px;
  bottom: 5px;
  top: 5px;
  width: calc(30% - 10px);
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="320x50"] .banner-images {
  position: absolute;
  left: 30%;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto;
  overflow: hidden
}

#banner[data-size="320x50"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="320x50"] .banner-images .banner-image-2 {
  background-position: 50% 50%
}

#banner[data-size="320x50"] .banner-images:after {
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent));
  background: -o-linear-gradient(left, rgba(0, 0, 0, .6) 0, transparent 50%);
  background: linear-gradient(to right, rgba(0, 0, 0, .6) 0, transparent 50%)
}

#banner[data-size="320x50"] .banner-messages {
  right: auto;
  top: 50%;
  bottom: auto;
  left: calc(30% + 10px);
  width: 35%;
  height: auto;
  padding: 0 0 0 10px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="320x50"] .banner-messages .banner-message {
  font-size: 14px;
  line-height: 15px
}

#banner[data-size="320x50"] .banner-messages .banner-messages-shape {
  left: 0
}

#banner[data-size="320x50"] .banner-button {
  right: 20%;
  width: 20%;
  line-height: 22px;
  padding: 0 8px;
  font-size: 11px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(50%, -50%);
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%)
}

#banner[data-size="728x90"] {
  width: 728px;
  height: 90px
}

#banner[data-size="728x90"] .banner-shape {
  display: none
}

#banner[data-size="728x90"] .banner-logo {
  left: 10px;
  bottom: 10px;
  top: 10px;
  width: calc(30% - 20px);
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="728x90"] .banner-images {
  position: absolute;
  left: 30%;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto;
  overflow: hidden
}

#banner[data-size="728x90"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="728x90"] .banner-images .banner-image-2 {
  background-position: 50% 50%
}

#banner[data-size="728x90"] .banner-images:after {
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent));
  background: -o-linear-gradient(left, rgba(0, 0, 0, .6) 0, transparent 50%);
  background: linear-gradient(to right, rgba(0, 0, 0, .6) 0, transparent 50%)
}

#banner[data-size="728x90"] .banner-messages {
  right: auto;
  top: 50%;
  bottom: auto;
  left: calc(30% + 40px);
  width: 35%;
  height: auto;
  padding: 0 0 0 14px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="728x90"] .banner-messages .banner-message {
  font-size: 24px;
  line-height: 24px
}

#banner[data-size="728x90"] .banner-messages .banner-messages-shape {
  left: 0
}

#banner[data-size="728x90"] .banner-button {
  right: 20%;
  width: 20%;
  line-height: 32px;
  padding: 0 15px;
  font-size: 14px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(50%, -50%);
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%)
}

#banner[data-size="468x60"] {
  width: 468px;
  height: 60px
}

#banner[data-size="468x60"] .banner-shape {
  display: none
}

#banner[data-size="468x60"] .banner-logo {
  left: 5px;
  bottom: 5px;
  top: 5px;
  width: calc(30% - 10px);
  height: auto;
  background-position: 50% 50%
}

#banner[data-size="468x60"] .banner-images {
  position: absolute;
  left: 30%;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto;
  overflow: hidden
}

#banner[data-size="468x60"] .banner-images .banner-image-1 {
  height: 220%
}

#banner[data-size="468x60"] .banner-images .banner-image-2 {
  background-position: 50% 50%
}

#banner[data-size="468x60"] .banner-images:after {
  background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .6)), color-stop(50%, transparent));
  background: -o-linear-gradient(left, rgba(0, 0, 0, .6) 0, transparent 50%);
  background: linear-gradient(to right, rgba(0, 0, 0, .6) 0, transparent 50%)
}

#banner[data-size="468x60"] .banner-messages {
  right: auto;
  top: 50%;
  bottom: auto;
  left: calc(30% + 10px);
  width: 35%;
  height: auto;
  padding: 0 0 0 10px;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}

#banner[data-size="468x60"] .banner-messages .banner-message {
  font-size: 14px;
  line-height: 15px
}

#banner[data-size="468x60"] .banner-messages .banner-messages-shape {
  left: 0
}

#banner[data-size="468x60"] .banner-button {
  right: 20%;
  width: 20%;
  line-height: 22px;
  padding: 0 8px;
  font-size: 11px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translate(50%, -50%);
  -ms-transform: translate(50%, -50%);
  transform: translate(50%, -50%)
}`;

export default Style2;
