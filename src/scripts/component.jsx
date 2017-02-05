import componentStyles from '../styles/component.scss';

import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';

import DisplayActions from './DisplayActions';
import DisplayStore from './DisplayStore';

class __Component extends React.Component {

  constructor(props) {
    super(props);

    this.doShow = this.doShow.bind(this);
  }

  static getStores() {
    return [DisplayStore];
  }

  static getPropsFromStores(props) {
    return {
      shouldShow: DisplayStore.shouldShow()
    }
  }

  doShow() {
    DisplayActions.show();
  }

  render() {
    if (this.props.shouldShow) {
      return (
        <div className="component">
          <span>I am now showing</span>
          <button onClick={this.doShow}>Show!</button>
        </div>
      )
    } else {
      return (
        <button onClick={this.doShow}>Show!</button>
      );
    }
  }
}

const Component = connectToStores(__Component);
export default Component;
