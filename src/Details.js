import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState({ loading: false, ...json.pets[0] });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>loading ... </h2>;
    }

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="my-0 mx-auto w-11/12">
        <div className="p-10 m- mb-6 rounded-lg bg-[#faeff0] shadow-md shadow-stone-600 flex flex-col justify-items items-center">
          <Carousel images={images} />
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-gray-800 text-6xl my-1">{name}</h1>
            <h2 className="text-center mt-1 mb-5">{`${animal} – ${breed} – ${city}, ${state}`}</h2>
            <ThemeContext.Consumer>
              {([theme]) => (
                <button
                  className="rounded px-6 py-p mb-2 text-white hover:opacity-50 border-none"
                  onClick={this.toggleModal}
                  style={{ backgroundColor: theme }}
                >
                  Adopt {name}
                </button>
              )}
            </ThemeContext.Consumer>
            <p className="text-center ml-1 mr-5">{description}</p>
            {showModal ? (
              <Modal>
                <div>
                  <h1>Would you like to adopt {name}?</h1>
                  <div className="inline-block mr-4">
                    <a href="https://bit.ly/pet-adopt">Yes</a>
                    <button onClick={this.toggleModal}>No</button>
                  </div>
                </div>
              </Modal>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
