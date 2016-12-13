'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('core-js/shim');

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var person = function () {
    function person(name) {
        _classCallCheck(this, person);

        this.name = name;
    }

    _createClass(person, [{
        key: 'sayhello',
        value: function sayhello() {
            return 'hello ${this.name}!';
        }
    }, {
        key: 'sayhelloThreeTimes',
        value: function sayhelloThreeTimes() {
            var hello = this.sayhello();
            return '${hello}'.repeat(3);
        }
    }]);

    return person;
}();

exports.default = person;