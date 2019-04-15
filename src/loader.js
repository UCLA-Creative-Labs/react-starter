import React, { Component } from "react";

const loadingPlaceholder = () => {
  return <div>LOADING...</div>;
};

// Loader takes a function and returns an anonymous class
// that renders the output of the given function
// used for asynchronously loading pages/components
const Loader = loader => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        component: null
      };
    }

    async load() {
      if (!this.state.component) {
        try {
          const loadedComponent = await loader();

          this.setState({
            component: loadedComponent.default
          });
        } catch (err) {
          console.error(err);
        }
      }
    }

    componentWillMount() {
      this.load();
    }

    render() {
      const C = this.state.component;
      return !!C ? <C {...this.props} /> : loadingPlaceholder();
    }
  };
};

export default Loader;
