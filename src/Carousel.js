import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="flex justify-around content-center h-96 mt-2">
        <img className="max-w-2/5 max-h-96" src={images[active]} alt="animal" />
        <div className="w-1/2">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              className={`w-24 h-24 rounded-full inline-block m-3 cursor-pointer border-2 border-gray-800 border-solid ${
                index === active ? "border-gray-800 opacity-60" : ""
              }`}
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
