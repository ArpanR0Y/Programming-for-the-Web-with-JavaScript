class FontChooser extends React.Component {
  constructor(props) {
    super(props);
    var isChecked;
    var size = this.props.size;

    if (this.props.bold == "true") {
      isChecked = true;
    } else {
      isChecked = false;
    }

    this.state = {
      isHidden: true,
      isBold: isChecked,
      color: "black",
      size: Number(size),
    };
  }

  toggle() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  makeBold() {
    this.setState({ isBold: !this.state.isBold });
  }

  increaseFontSize() {
    if (this.state.size < this.props.max) {
      this.setState({ size: this.state.size + 1 });
    }
  }

  decreaseFontSize() {
    if (this.state.size > this.props.min) {
      this.setState({ size: this.state.size - 1 });
    }
  }

  resetFontSize() {
    this.setState({ size: Number(this.props.size) });
  }

  render() {
    var weight = this.state.isBold ? "bold" : "normal";
    var size = this.state.size;
    var color =
      this.state.size == this.props.max || this.state.size == this.props.min
        ? "red"
        : "black";
    var textStyle = {
      fontWeight: weight,
      fontSize: size,
    };
    var FontSizeStyle = {
      color: color,
    };

    return (
      <div>
        <input
          type="checkbox"
          id="boldCheckbox"
          onChange={this.makeBold.bind(this)}
          hidden={this.state.isHidden}
          checked={this.state.isBold}
        />
        <button
          id="decreaseButton"
          onClick={this.decreaseFontSize.bind(this)}
          hidden={this.state.isHidden}
        >
          -
        </button>
        <span
          id="fontSizeSpan"
          style={FontSizeStyle}
          onDoubleClick={this.resetFontSize.bind(this)}
          hidden={this.state.isHidden}
        >
          {this.state.size}
        </span>
        <button
          id="increaseButton"
          onClick={this.increaseFontSize.bind(this)}
          hidden={this.state.isHidden}
        >
          +
        </button>
        <span id="textSpan" style={textStyle} onClick={this.toggle.bind(this)}>
          {this.props.text}
        </span>
      </div>
    );
  }
}
