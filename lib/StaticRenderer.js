(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './babelHelpers'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./babelHelpers'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.babelHelpers);
        global.StaticRenderer = mod.exports;
    }
})(this, function (exports, _react, babelHelpers) {
    'use strict';

    exports.__esModule = true;

    var _react2 = babelHelpers.interopRequireDefault(_react);

    var StaticRenderer = function (_Component) {
        babelHelpers.inherits(StaticRenderer, _Component);

        function StaticRenderer() {
            babelHelpers.classCallCheck(this, StaticRenderer);
            return babelHelpers.possibleConstructorReturn(this, _Component.apply(this, arguments));
        }

        StaticRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return nextProps.shouldUpdate;
        };

        StaticRenderer.prototype.render = function render() {
            return this.props.render();
        };

        return StaticRenderer;
    }(_react.Component);

    exports['default'] = StaticRenderer;


    StaticRenderer.propTypes = {
        shouldUpdate: _react2['default'].PropTypes.bool.isRequired,
        render: _react2['default'].PropTypes.func.isRequired
    };
});
//# sourceMappingURL=StaticRenderer.js.map
