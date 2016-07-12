var _jsxFileName='src/components/TouchableOpacity.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/**
 * https://github.com/facebook/react-native/blob/master/Libraries/Components/Touchable/TouchableOpacity.js
 */
var _react=require('react');var _react2=_interopRequireDefault(_react);

var _TouchableWithoutFeedback=require('./TouchableWithoutFeedback');var _TouchableWithoutFeedback2=_interopRequireDefault(_TouchableWithoutFeedback);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}

var TouchableOpacity=_react2['default'].createClass({displayName:'TouchableOpacity',
propTypes:_extends({},
_TouchableWithoutFeedback2['default'].propTypes,{

/**
     * Determines what the opacity of the wrapped view should be when touch is
     * active. Defaults to 0.2.
     */
activeOpacity:_react2['default'].PropTypes.number}),


proxiedProps:function(){function proxiedProps(){
var props=_extends({},this.props);
if(typeof props.onPress!=='undefined'){
props.onClick=props.onPress;
delete props.onPress;}

return props;}return proxiedProps;}(),


render:function(){function render(){
return(
_react2['default'].createElement('button',_extends({},this.proxiedProps(),{__source:{fileName:_jsxFileName,lineNumber:30}}),
this.props&&this.props.children));}return render;}()});





module.exports=TouchableOpacity;