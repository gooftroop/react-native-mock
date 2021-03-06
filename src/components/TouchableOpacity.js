/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
import React from 'react';

import TouchableWithoutFeedback from './TouchableWithoutFeedback';

const TouchableOpacity = React.createClass({
  propTypes: {
    ...TouchableWithoutFeedback.propTypes,

    /**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
    activeOpacity: React.PropTypes.number,
  },

  proxiedProps() {
    const props = Object.assign({}, this.props);
    if (typeof props.onPress !== 'undefined') {
      props.onClick = props.onPress;
      delete props.onPress;
    }
    return props;
  },

  render() {
    return (
      <button {...this.proxiedProps()}>
        {this.props && this.props.children}
      </button>
    );
  },
});

module.exports = TouchableOpacity;
