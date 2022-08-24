/*! react-sidenav v0.5.0 | (c) 2020 Trend Micro Inc. | MIT | https://github.com/trendmicro-frontend/react-sidenav */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sidenav":"sidenav---sidenav---_2tBP","collapsed":"sidenav---collapsed---LQDEv","sidenav-nav":"sidenav---sidenav-nav---3tvij","sidenavNav":"sidenav---sidenav-nav---3tvij","sidenav-navitem":"sidenav---sidenav-navitem---uwIJ-","sidenavNavitem":"sidenav---sidenav-navitem---uwIJ-","sidenav-subnav":"sidenav---sidenav-subnav---1EN61","sidenavSubnav":"sidenav---sidenav-subnav---1EN61","expanded":"sidenav---expanded---1KdUL","navicon":"sidenav---navicon---3gCRo","navtext":"sidenav---navtext---1AE_f","expandable":"sidenav---expandable---3_dr7","navitem":"sidenav---navitem---9uL5T","sidenav-subnavitem":"sidenav---sidenav-subnavitem---1cD47","sidenavSubnavitem":"sidenav---sidenav-subnavitem---1cD47","selected":"sidenav---selected---1EK3y","sidenav-toggle":"sidenav---sidenav-toggle---1KRjR","sidenavToggle":"sidenav---sidenav-toggle---1KRjR","icon-bar":"sidenav---icon-bar---u1f02","iconBar":"sidenav---icon-bar---u1f02","highlighted":"sidenav---highlighted---oUx9u"};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var matchComponent = function matchComponent(Component) {
    return function (c) {
        // React Component
        if (c.type === Component) {
            return true;
        }

        // Matching componentType for SideNav, Nav, NavItem, NavIcon, NavText
        if (c.props && c.props.componentType === Component) {
            return true;
        }

        return false;
    };
};

exports.default = matchComponent;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("chained-function");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2; /* eslint jsx-a11y/click-events-have-key-events: 0 */


var _chainedFunction = __webpack_require__(5);

var _chainedFunction2 = _interopRequireDefault(_chainedFunction);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavIcon = __webpack_require__(7);

var _NavIcon2 = _interopRequireDefault(_NavIcon);

var _NavText = __webpack_require__(8);

var _NavText2 = _interopRequireDefault(_NavText);

var _findComponent = __webpack_require__(12);

var _findComponent2 = _interopRequireDefault(_findComponent);

var _matchComponent = __webpack_require__(4);

var _matchComponent2 = _interopRequireDefault(_matchComponent);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var NavItem = (_temp2 = _class = function (_PureComponent) {
    _inherits(NavItem, _PureComponent);

    function NavItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, NavItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NavItem.__proto__ || Object.getPrototypeOf(NavItem)).call.apply(_ref, [this].concat(args))), _this), _this.findNavIcon = (0, _findComponent2.default)(_NavIcon2.default), _this.findNavText = (0, _findComponent2.default)(_NavText2.default), _this.isNavItem = (0, _matchComponent2.default)(NavItem), _this.isNavIcon = (0, _matchComponent2.default)(_NavIcon2.default), _this.isNavText = (0, _matchComponent2.default)(_NavText2.default), _this.handleSelect = function (event) {
            var _this$props = _this.props,
                disabled = _this$props.disabled,
                onSelect = _this$props.onSelect,
                eventKey = _this$props.eventKey;


            if (disabled) {
                event.preventDefault();
                return;
            }

            if (onSelect) {
                onSelect(eventKey, event);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(NavItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this,
                _cx2,
                _cx3;

            var _props = this.props,
                componentType = _props.componentType,
                Component = _props.componentClass,
                active = _props.active,
                disabled = _props.disabled,
                expanded = _props.expanded,
                eventKey = _props.eventKey,
                onClick = _props.onClick,
                onSelect = _props.onSelect,
                selected = _props.selected,
                subnav = _props.subnav,
                navitemClassName = _props.navitemClassName,
                navitemStyle = _props.navitemStyle,
                subnavClassName = _props.subnavClassName,
                subnavStyle = _props.subnavStyle,
                className = _props.className,
                style = _props.style,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['componentType', 'componentClass', 'active', 'disabled', 'expanded', 'eventKey', 'onClick', 'onSelect', 'selected', 'subnav', 'navitemClassName', 'navitemStyle', 'subnavClassName', 'subnavStyle', 'className', 'style', 'children']);

            var navIcon = this.findNavIcon(children);
            var navText = this.findNavText(children);

            var _ref2 = navIcon ? _extends({}, navIcon.props) : {},
                navIconComponentType = _ref2.componentType,
                navIconClassName = _ref2.navIconClassName,
                navIconProps = _objectWithoutProperties(_ref2, ['componentType', 'navIconClassName']);

            var _ref3 = navText ? _extends({}, navText.props) : {},
                navTextComponentType = _ref3.componentType,
                navTextClassName = _ref3.navTextClassName,
                navTextProps = _objectWithoutProperties(_ref3, ['componentType', 'navTextClassName']);

            if (subnav) {
                var _cx;

                var _isNavItemSelected = active || !!selected && selected === this.props.eventKey;

                return _react2.default.createElement(
                    Component,
                    {
                        role: 'presentation',
                        className: (0, _classnames2.default)(className, _index2.default.sidenavSubnavitem, (_cx = {}, _defineProperty(_cx, _index2.default.selected, _isNavItemSelected), _defineProperty(_cx, _index2.default.disabled, disabled), _cx)),
                        style: style
                    },
                    _react2.default.createElement(
                        'div',
                        _extends({}, props, {
                            className: (0, _classnames2.default)(navitemClassName, _index2.default.navitem),
                            style: navitemStyle,
                            disabled: disabled,
                            role: 'menuitem',
                            tabIndex: '-1',
                            onClick: (0, _chainedFunction2.default)(onClick, this.handleSelect)
                        }),
                        navIcon && _react2.default.createElement('div', _extends({}, navIconProps, { className: (0, _classnames2.default)(navIconClassName, _index2.default.navicon) })),
                        navText && _react2.default.createElement('div', _extends({}, navTextProps, { className: (0, _classnames2.default)(navTextClassName, _index2.default.navtext) }))
                    )
                );
            }

            var activeNavItems = [];
            var navItems = _react2.default.Children.toArray(children).filter(function (child) {
                return _react2.default.isValidElement(child) && _this2.isNavItem(child);
            }).map(function (child) {
                if (child.props.active || !!selected && selected === child.props.eventKey) {
                    activeNavItems.push(child);
                }

                return (0, _react.cloneElement)(child, {
                    subnav: true,
                    selected: selected,
                    onSelect: (0, _chainedFunction2.default)(child.props.onSelect, onSelect)
                });
            });
            var others = _react2.default.Children.toArray(children).filter(function (child) {
                if (_react2.default.isValidElement(child) && (_this2.isNavIcon(child) || _this2.isNavText(child) || _this2.isNavItem(child))) {
                    return false;
                }
                return true;
            });

            var isNavItemSelected = active || !!selected && selected === this.props.eventKey || activeNavItems.length > 0;
            var isNavItemExpandable = navItems.length > 0;
            var isNavItemExpanded = isNavItemExpandable && expanded;
            var isNavItemHighlighted = isNavItemExpanded || isNavItemSelected;

            return _react2.default.createElement(
                Component,
                {
                    role: 'presentation',
                    className: (0, _classnames2.default)(className, _index2.default.sidenavNavitem, (_cx2 = {}, _defineProperty(_cx2, _index2.default.selected, isNavItemSelected), _defineProperty(_cx2, _index2.default.highlighted, isNavItemHighlighted), _defineProperty(_cx2, _index2.default.expandable, isNavItemExpandable), _defineProperty(_cx2, _index2.default.expanded, isNavItemExpanded), _defineProperty(_cx2, _index2.default.disabled, disabled), _cx2)),
                    style: style
                },
                _react2.default.createElement(
                    'div',
                    _extends({}, props, {
                        className: (0, _classnames2.default)(navitemClassName, _index2.default.navitem),
                        style: navitemStyle,
                        disabled: disabled,
                        role: 'menuitem',
                        tabIndex: '-1',
                        onClick: (0, _chainedFunction2.default)(onClick, navItems.length === 0 ? this.handleSelect : noop)
                    }),
                    navIcon && _react2.default.createElement('div', _extends({}, navIconProps, { className: (0, _classnames2.default)(navIconClassName, _index2.default.navicon) })),
                    navText && _react2.default.createElement('div', _extends({}, navTextProps, { className: (0, _classnames2.default)(navTextClassName, _index2.default.navtext) })),
                    others
                ),
                navItems.length > 0 && _react2.default.createElement(
                    'div',
                    {
                        role: 'menu',
                        className: (0, _classnames2.default)(subnavClassName, _index2.default.sidenavSubnav),
                        style: subnavStyle
                    },
                    _react2.default.createElement(
                        Component,
                        {
                            role: 'heading',
                            className: (0, _classnames2.default)(_index2.default.sidenavSubnavitem, (_cx3 = {}, _defineProperty(_cx3, _index2.default.highlighted, active), _defineProperty(_cx3, _index2.default.disabled, disabled), _cx3)),
                            style: style
                        },
                        navText && navText.props ? navText.props.children : null
                    ),
                    navItems
                )
            );
        }
    }]);

    return NavItem;
}(_react.PureComponent), _class.propTypes = {
    componentType: _propTypes2.default.any,

    // A custom element for this component.
    componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

    // Highlight the navigation item as active.
    active: _propTypes2.default.bool,

    // Disable the navigation item, making it unselectable.
    disabled: _propTypes2.default.bool,

    // Whether the navigation item is expanded or collapsed.
    expanded: _propTypes2.default.bool,

    // Value passed to the `onSelect` handler, useful for identifying the selected navigation item.
    eventKey: _propTypes2.default.any,

    // Callback fired when the navigation item is clicked.
    onClick: _propTypes2.default.func,

    // Callback fired when a navigation item is selected.
    onSelect: _propTypes2.default.func,

    //
    // Nav props
    //

    // The selected navigation item.
    selected: _propTypes2.default.any,

    //
    // Sub navigation item (internal use only)
    //

    // Whether it is a sub navigation item.
    subnav: _propTypes2.default.bool,

    navitemClassName: _propTypes2.default.string,
    navitemStyle: _propTypes2.default.object,
    subnavClassName: _propTypes2.default.string,
    subnavStyle: _propTypes2.default.object
}, _class.defaultProps = {
    componentClass: 'div',
    active: false,
    disabled: false,
    expanded: false
}, _temp2);

// For component matching

NavItem.defaultProps.componentType = NavItem;

exports.default = NavItem;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var NavIcon = function NavIcon() {
    throw new Error('should not render NavIcon component');
};

// For component matching
NavIcon.defaultProps = _extends({}, NavIcon.defaultProps, {
    componentType: NavIcon
});

exports.default = NavIcon;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var NavText = function NavText() {
    throw new Error('should not render NavText component');
};

// For component matching
NavText.defaultProps = _extends({}, NavText.defaultProps, {
    componentType: NavText
});

exports.default = NavText;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggle = (_temp = _class = function (_PureComponent) {
    _inherits(Toggle, _PureComponent);

    function Toggle() {
        _classCallCheck(this, Toggle);

        return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
    }

    _createClass(Toggle, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                componentType = _props.componentType,
                Component = _props.componentClass,
                expanded = _props.expanded,
                className = _props.className,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['componentType', 'componentClass', 'expanded', 'className', 'children']);

            return _react2.default.createElement(
                Component,
                _extends({}, props, {
                    role: 'button',
                    className: (0, _classnames2.default)(className, _index2.default.sidenavToggle),
                    'aria-expanded': expanded
                }),
                _react2.default.createElement('span', { className: _index2.default.iconBar }),
                _react2.default.createElement('span', { className: _index2.default.iconBar }),
                _react2.default.createElement('span', { className: _index2.default.iconBar }),
                children
            );
        }
    }]);

    return Toggle;
}(_react.PureComponent), _class.propTypes = {
    componentType: _propTypes2.default.any,

    // A custom element for this component.
    componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

    // Whether the navigation toggle is disabled.
    disabled: _propTypes2.default.bool,

    // Whether the side navigation is expanded or collapsed.
    expanded: _propTypes2.default.bool
}, _class.defaultProps = {
    componentClass: 'button',
    disabled: false,
    expanded: false
}, _temp);

// For component matching

Toggle.defaultProps.componentType = Toggle;

exports.default = Toggle;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _chainedFunction = __webpack_require__(5);

var _chainedFunction2 = _interopRequireDefault(_chainedFunction);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _NavItem = __webpack_require__(6);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _matchComponent = __webpack_require__(4);

var _matchComponent2 = _interopRequireDefault(_matchComponent);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var Nav = (_temp2 = _class = function (_PureComponent) {
    _inherits(Nav, _PureComponent);

    function Nav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Nav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Nav.__proto__ || Object.getPrototypeOf(Nav)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expandedNavItem: null,
            selected: _this.props.defaultSelected,
            defaultSelected: _this.props.defaultSelected
        }, _this.isNavItem = (0, _matchComponent2.default)(_NavItem2.default), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Nav, [{
        key: 'handleClickOnExpanded',
        value: function handleClickOnExpanded(eventKey, event) {
            if (this.props.expanded) {
                this.setState(function (state) {
                    return {
                        expandedNavItem: state.expandedNavItem !== eventKey ? eventKey : ''
                    };
                });
            }
        }
    }, {
        key: 'renderNavItem',
        value: function renderNavItem(child, _ref2) {
            var _this2 = this;

            var onSelect = _ref2.onSelect,
                props = _objectWithoutProperties(_ref2, ['onSelect']);

            var _child$props = _extends({}, child.props),
                eventKey = _child$props.eventKey;

            return (0, _react.cloneElement)(child, _extends({}, props, {
                onClick: (0, _chainedFunction2.default)(child.props.onClick, function (event) {
                    _this2.handleClickOnExpanded(eventKey, event);
                }),
                onSelect: (0, _chainedFunction2.default)(this.state.defaultSelected ? function (selected) {
                    _this2.setState({ selected: selected });
                } : noop, child.props.onSelect, onSelect)
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                componentType = _props.componentType,
                Component = _props.componentClass,
                onSelect = _props.onSelect,
                selected = _props.selected,
                defaultSelected = _props.defaultSelected,
                expanded = _props.expanded,
                className = _props.className,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['componentType', 'componentClass', 'onSelect', 'selected', 'defaultSelected', 'expanded', 'className', 'children']);

            var currentSelected = this.state.defaultSelected ? this.state.selected : selected;

            return _react2.default.createElement(
                Component,
                _extends({}, props, {
                    role: 'menu',
                    className: (0, _classnames2.default)(className, _index2.default.sidenavNav, _defineProperty({}, _index2.default.expanded, expanded))
                }),
                _react2.default.Children.map(children, function (child) {
                    if (_react2.default.isValidElement(child) && _this3.isNavItem(child)) {
                        return _this3.renderNavItem(child, {
                            onSelect: onSelect,
                            selected: currentSelected,
                            expanded: !!child.props.expanded || expanded && !!_this3.state.expandedNavItem && _this3.state.expandedNavItem === child.props.eventKey
                        });
                    }

                    return child;
                })
            );
        }
    }]);

    return Nav;
}(_react.PureComponent), _class.propTypes = {
    componentType: _propTypes2.default.any,

    // A custom element for this component.
    componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

    // Callback fired when a navigation item is selected.
    onSelect: _propTypes2.default.func,

    // The selected navigation item.
    selected: _propTypes2.default.any,

    // The initially selected navigation item.
    defaultSelected: _propTypes2.default.any,

    //
    // SideNav props
    //

    // Whether the side navigation is expanded or collapsed.
    expanded: _propTypes2.default.bool
}, _class.defaultProps = {
    componentClass: 'div'
}, _temp2);

// For component matching

Nav.defaultProps.componentType = Nav;

exports.default = Nav;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavText = exports.NavIcon = exports.NavItem = exports.Nav = exports.Toggle = undefined;

var _Toggle = __webpack_require__(9);

Object.defineProperty(exports, 'Toggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Toggle).default;
  }
});

var _Nav = __webpack_require__(10);

Object.defineProperty(exports, 'Nav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Nav).default;
  }
});

var _NavItem = __webpack_require__(6);

Object.defineProperty(exports, 'NavItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavItem).default;
  }
});

var _NavIcon = __webpack_require__(7);

Object.defineProperty(exports, 'NavIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavIcon).default;
  }
});

var _NavText = __webpack_require__(8);

Object.defineProperty(exports, 'NavText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_NavText).default;
  }
});

var _SideNav = __webpack_require__(13);

var _SideNav2 = _interopRequireDefault(_SideNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _SideNav2.default;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _matchComponent = __webpack_require__(4);

var _matchComponent2 = _interopRequireDefault(_matchComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findComponent = function findComponent(component) {
    return function (children) {
        var matchComponent = (0, _matchComponent2.default)(component);

        return _react2.default.Children.toArray(children).reduce(function (found, next) {
            if (found === null && next !== null && matchComponent(next)) {
                return next;
            }
            return found;
        }, null);
    };
};

exports.default = findComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _chainedFunction = __webpack_require__(5);

var _chainedFunction2 = _interopRequireDefault(_chainedFunction);

var _classnames = __webpack_require__(1);

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uncontrollable = __webpack_require__(14);

var _warning = __webpack_require__(15);

var _warning2 = _interopRequireDefault(_warning);

var _Toggle = __webpack_require__(9);

var _Toggle2 = _interopRequireDefault(_Toggle);

var _Nav = __webpack_require__(10);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = __webpack_require__(6);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _NavIcon = __webpack_require__(7);

var _NavIcon2 = _interopRequireDefault(_NavIcon);

var _NavText = __webpack_require__(8);

var _NavText2 = _interopRequireDefault(_NavText);

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

var _matchComponent = __webpack_require__(4);

var _matchComponent2 = _interopRequireDefault(_matchComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideNav = (_temp2 = _class = function (_PureComponent) {
    _inherits(SideNav, _PureComponent);

    function SideNav() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SideNav);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SideNav.__proto__ || Object.getPrototypeOf(SideNav)).call.apply(_ref, [this].concat(args))), _this), _this.isToggle = (0, _matchComponent2.default)(_Toggle2.default), _this.isNav = (0, _matchComponent2.default)(_Nav2.default), _this.child = {
            toggle: null,
            nav: null
        }, _this.handleClick = function (event) {
            if (_this.props.disabled) {
                return;
            }

            _this.toggleExpanded('click');
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SideNav, [{
        key: 'toggleExpanded',
        value: function toggleExpanded(eventType) {
            var expanded = !this.props.expanded;

            if (this.props.onToggle) {
                this.props.onToggle(expanded);
            }
        }
    }, {
        key: 'renderToggle',
        value: function renderToggle(child, props) {
            var _this2 = this;

            var ref = function ref(c) {
                _this2.child.toggle = c;
            };

            if (typeof child.ref === 'string') {
                (0, _warning2.default)(false, 'String refs are not supported on `<SideNav.Toggle>` component. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
            } else {
                ref = (0, _chainedFunction2.default)(child.ref, ref);
            }

            return (0, _react.cloneElement)(child, _extends({}, props, {
                ref: ref,
                onClick: (0, _chainedFunction2.default)(child.props.onClick, this.handleClick)
            }));
        }
    }, {
        key: 'renderNav',
        value: function renderNav(child, _ref2) {
            var _this3 = this;

            var onSelect = _ref2.onSelect,
                props = _objectWithoutProperties(_ref2, ['onSelect']);

            var ref = function ref(c) {
                _this3.child.nav = c;
            };

            if (typeof child.ref === 'string') {
                (0, _warning2.default)(false, 'String refs are not supported on `<SideNav.Nav>` component. ' + 'To apply a ref to the component use the callback signature:\n\n ' + 'https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');
            } else {
                ref = (0, _chainedFunction2.default)(child.ref, ref);
            }

            return (0, _react.cloneElement)(child, _extends({}, props, {
                ref: ref,
                onSelect: (0, _chainedFunction2.default)(child.props.onSelect, onSelect)
            }));
        }
    }, {
        key: 'render',
        value: function render() {
            var _cx,
                _this4 = this;

            var _props = this.props,
                componentType = _props.componentType,
                Component = _props.componentClass,
                disabled = _props.disabled,
                expanded = _props.expanded,
                onToggle = _props.onToggle,
                onSelect = _props.onSelect,
                className = _props.className,
                children = _props.children,
                props = _objectWithoutProperties(_props, ['componentType', 'componentClass', 'disabled', 'expanded', 'onToggle', 'onSelect', 'className', 'children']);

            return _react2.default.createElement(
                Component,
                _extends({}, props, {
                    className: (0, _classnames2.default)(className, _index2.default.sidenav, (_cx = {}, _defineProperty(_cx, _index2.default.disabled, disabled), _defineProperty(_cx, _index2.default.expanded, expanded), _defineProperty(_cx, _index2.default.collapsed, !expanded), _cx))
                }),
                _react2.default.Children.map(children, function (child) {
                    if (!_react2.default.isValidElement(child)) {
                        return child;
                    }

                    if (_this4.isToggle(child)) {
                        return _this4.renderToggle(child, {
                            disabled: disabled, expanded: expanded
                        });
                    }

                    if (_this4.isNav(child)) {
                        return _this4.renderNav(child, {
                            onSelect: onSelect, expanded: expanded
                        });
                    }

                    return child;
                })
            );
        }
    }]);

    return SideNav;
}(_react.PureComponent), _class.propTypes = {
    componentType: _propTypes2.default.any,

    // A custom element for this component.
    componentClass: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.func]),

    // Whether the navigation toggle is disabled.
    disabled: _propTypes2.default.bool,

    // Whether the side navigation is expanded or collapsed.
    expanded: _propTypes2.default.bool,

    // Callback fired when toggling the side navigation between expanded and collapsed state.
    onToggle: _propTypes2.default.func,

    // Callback fired when a navigation item is selected.
    onSelect: _propTypes2.default.func
}, _class.defaultProps = {
    componentClass: 'nav'
}, _temp2);

// For component matching

SideNav.defaultProps.componentType = SideNav;

var UncontrollableSideNav = (0, _uncontrollable.uncontrollable)(SideNav, {
    // Define the pairs of prop/handlers you want to be uncontrollable
    expanded: 'onToggle'
});

UncontrollableSideNav.Toggle = _Toggle2.default;
UncontrollableSideNav.Nav = _Nav2.default;
UncontrollableSideNav.NavItem = _NavItem2.default;
UncontrollableSideNav.NavIcon = _NavIcon2.default;
UncontrollableSideNav.NavText = _NavText2.default;

exports.default = UncontrollableSideNav;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("uncontrollable");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map