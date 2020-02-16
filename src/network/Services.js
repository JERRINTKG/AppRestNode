import React from 'react';

const serviceWrapper = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }

    get = url => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    };

    post = (url, data) => {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    };

    render() {
      return (
        <WrappedComponent
          get={url => this.get(url)}
          post={(url,data) => this.post(url, data)}
          {...this.props}
        />
      );
    }
  }
  return HOC;
};

export default serviceWrapper;
