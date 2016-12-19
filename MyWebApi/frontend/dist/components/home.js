'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;

  return function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
      _classCallCheck(this, Home);

      return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
      key: 'render',
      value: function render() {
        return React.createElement(
          'main',
          null,
          React.createElement(
            'aside',
            null,
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/addUser' },
                'Add user'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/addCar' },
                'Add car'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/addContract' },
                'Add contract'
              )
            ),
            React.createElement('p', null),
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/showUsers' },
                'Show users'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/showCars' },
                'Show cars'
              )
            ),
            React.createElement(
              'div',
              null,
              React.createElement(
                Link,
                { to: '/showContracts' },
                'Show contracts'
              )
            )
          )
        );
      }
    }]);

    return Home;
  }(React.Component);
});
//# sourceMappingURL=D:\VisualStudioProjects\MyWebApi\MyWebApi\frontend\components\Home.js.map