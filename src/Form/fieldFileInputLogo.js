import ReactDOM from "react-dom";
import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default class FieldFileInput extends PureComponent {
  state = {
    src: null,
    crop: {
      width: 200,
      x: 0,
      y: 0
    },
    croppedData: '',
  };

  onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      var filesize = (e.target.files[0].size/1024); // File size in KiloBits
      const reader = new FileReader();

      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image, crop) => {
    this.imageRef = image;
  };

  onCropComplete = crop => {
    this.makeClientCrop(crop);
  };

  onCropChange = crop => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.png"
      );
      this.setState({ croppedImageUrl });
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
        //**blob to dataURL**
      }, "image/png");
      const dataURL = canvas.toDataURL('image/png', 0.8);
      this.setState({croppedData: dataURL });
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    const {onImageChange} = this.props;
    onImageChange(this.state.croppedData ? this.state.croppedData : src);
    return (
      <div className="reactCropper">
        <div>
          <input type="file" onChange={this.onSelectFile} />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {croppedImageUrl && (
          <img className="cropImage" alt="Crop" src={croppedImageUrl} />
        )}
      </div>
    );
  }
}
