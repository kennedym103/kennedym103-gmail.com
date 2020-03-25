import ReactDOM from "react-dom";
import React, { PureComponent } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { Modal, Button } from "react-bootstrap";



 class FieldFileInput extends PureComponent {

  constructor(props, context) {
		super(props, context);

		this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);

		this.state = {
			show: false,
      src: null,
      crop: {
        aspect: 16 / 9,
        width: 200,
        x: 0,
        y: 0
      },
      croppedData: '',
      width: 350,
      height: 250
		};
	}

  componentWillReceiveProps(){
    this.setState({
    width: this.props.width,
    height: this.props.height,
    crop: {
      aspect: this.props.aspect,
      width: this.props.width,
      x: 0,
      y: 0
    }
  })
}




  handleClose() {
		this.setState({ show: false });
	}

	handleShow() {
		this.setState({ show: true });
	}

  onSelectFile = e => {
     if (e.target.files && e.target.files.length > 0) {
       var filesize = (e.target.files[0].size/1024); // File size in KiloBits
       const reader = new FileReader();

       reader.addEventListener("load", () =>
         this.setState({ src: reader.result })
       );
       reader.readAsDataURL(e.target.files[0]);
     }
   }

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
        "newFile.jpg"
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
      const width = this.props.width;
      const height = this.props.height;
      const img = new Image();
      img.src = ctx.canvas.toDataURL('image/jpeg', 0.5);
      img.onload = () => {
              const elem = document.createElement('canvas');
              const scaleFactor = width / img.width;
              elem.width = width;
              elem.height = img.height * scaleFactor;
              const ctx2 = elem.getContext('2d');
              // img.width and img.height will contain the original dimensions
              ctx2.drawImage(img, 0, 0, width, height);
              const dataURL = canvas.toDataURL('image/jpeg', 0.35);
              this.setState({croppedData: dataURL });
              }
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;
    const {onImageChange} = this.props;
    onImageChange(this.state.croppedData ? this.state.croppedData : src);
    return (

      <div className="reactCropper">
        <div>
          <input type="file" onChange={this.onSelectFile}  onClick={this.handleShow} />
        </div>
        <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

        show={this.state.show} onHide={this.handleClose}>
        <Modal.Body>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </div>

    );
  }
}
export default FieldFileInput;
