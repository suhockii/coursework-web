'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

define(function (require) {
  var React = require('react');
  var Link = require('reactRouter').Link;
  var Car = require('../api/Car');

  return function (_React$Component) {
    _inherits(AddCar, _React$Component);

    function AddCar() {
      _classCallCheck(this, AddCar);

      var _this = _possibleConstructorReturn(this, (AddCar.__proto__ || Object.getPrototypeOf(AddCar)).call(this));

      _this.state = {};
      return _this;
    }

    _createClass(AddCar, [{
      key: 'imageChosen',
      value: function imageChosen(event) {
        var _this2 = this;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          var _loop = function _loop() {
            var file = _step.value;

            if (!file.type.match('image.*')) return 'continue';

            var reader = new FileReader();
            reader.addEventListener('load', function () {
              return _this2.setState({ photo: reader.result });
            });
            reader.readAsDataURL(file);
          };

          for (var _iterator = event.target.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = _loop();

            if (_ret === 'continue') continue;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }, {
      key: 'submit',
      value: function submit(event) {
        var fields = ['name', 'description', 'features', 'year', 'range', 'color', 'photo'];

        var formData = new FormData();
        formData.append('available', true);

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var field = _step2.value;

            formData.append(field, this.state[field]);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        Car.post(formData);
        event.preventDefault();
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        return React.createElement(
          'content',
          { 'data-flow': 'vertical' },
          React.createElement(
            'h2',
            null,
            'Add a new car'
          ),
          React.createElement(
            'form',
            null,
            React.createElement('input', { type: 'text', placeholder: 'Name', onChange: function onChange(e) {
                return _this3.setState({ name: e.target.value });
              } }),
            React.createElement('textarea', { placeholder: 'Description', onChange: function onChange(e) {
                return _this3.setState({ description: e.target.value });
              } }),
            React.createElement('textarea', { placeholder: 'Features', onChange: function onChange(e) {
                return _this3.setState({ features: e.target.value });
              } }),
            React.createElement('input', { type: 'number', placeholder: 'Year', onChange: function onChange(e) {
                return _this3.setState({ year: e.target.value });
              } }),
            React.createElement('input', { type: 'number', placeholder: 'Range', onChange: function onChange(e) {
                return _this3.setState({ range: e.target.value });
              } }),
            React.createElement('input', { type: 'text', placeholder: 'Color', onChange: function onChange(e) {
                return _this3.setState({ color: e.target.value });
              } }),
            React.createElement('input', { type: 'file', onChange: this.imageChosen.bind(this) }),
            React.createElement('img', { src: this.state.photo, className: 'preview' }),
            React.createElement(
              'button',
              { onClick: this.submit.bind(this) },
              'Submit'
            )
          )
        );
      }
    }]);

    return AddCar;
  }(React.Component);
});
//# sourceMappingURL=C:\Users\collapse\Source\Repos\MyWebApi\MyWebApi\components\AddCar.js.map