// Generated by CoffeeScript 1.3.3
(function() {
  var message, type, validator,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  validator = require("./validator");

  type = require("./type");

  message = require("./message");

  type._number = (function(_super) {

    __extends(_number, _super);

    function _number() {
      return _number.__super__.constructor.apply(this, arguments);
    }

    _number.prototype.min = function(val, msg) {
      this.validator(function(num) {
        return num >= val;
      }, message("min", msg, {
        count: val
      }));
      return this;
    };

    _number.prototype.max = function(val, msg) {
      this.validator(function(num) {
        return num <= val;
      }, message("max", msg, {
        count: val
      }));
      return this;
    };

    _number.prototype["enum"] = function(items, msg) {
      this._enum = items;
      this.validator(function(num) {
        return validator.contains(items, num);
      }, message("enum", msg, {
        items: items.join(",")
      }));
      return this;
    };

    _number.alias = Number;

    _number.check = function(obj) {
      return validator.isNumber(obj);
    };

    return _number;

  })(type.Base);

  type.register('number', type._number);

  type._integer = (function(_super) {

    __extends(_integer, _super);

    function _integer() {
      return _integer.__super__.constructor.apply(this, arguments);
    }

    _integer.check = function(obj) {
      return validator.isNumber(obj) && validator.mod(obj);
    };

    return _integer;

  })(type._number);

  type.register('integer', type._integer);

}).call(this);
