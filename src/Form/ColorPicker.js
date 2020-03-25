import React, { PureComponent } from 'react'
import { SketchPicker } from 'react-color'
class ColorPicker extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      showPicker: false,
      color: {
      r: '241',
      g: '112',
      b: '19'
    },
    }

    this.toggleColor = this.toggleColor.bind(this)
    this.handleChangeComplete = this.handleChangeComplete.bind(this)
  }

  toggleColor(e) {
    e.preventDefault()

    this.setState({
      showPicker: !this.state.showPicker
    })
  }

  handleChangeComplete(color, event) {
    const {onColorChange} = this.props
    this.setState({ color: color.hex })
    onColorChange(color.hex)
  }

  render() {
    return (
        <span className="color-picker__container">
          <button onClick={this.toggleColor}>
            <div className="color-picker__color" style={{ backgroundColor: this.state.color }}></div>
          </button>
          {this.state.showPicker && <div className="color-picker__picker">
            <SketchPicker color={ this.state.color }
                onChangeComplete={this.handleChangeComplete}
                disableAlpha={true}  />
          </div>}
        </span>
    )
  }
}

export default ColorPicker
