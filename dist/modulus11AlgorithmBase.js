"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Modulus11AlgorithmBase = /** @class */ (function () {
    function Modulus11AlgorithmBase() {
    }
    Modulus11AlgorithmBase.prototype.validate = function (formattedAccountNumber) {
        var accountNumber = formattedAccountNumber.replace('-', '');
        if (!this.weightings || this.weightings.length !== 16) {
            throw new Error('Invalid weightings');
        }
        if (!this.modulus) {
            throw new Error('modulus not defined');
        }
        if (accountNumber.length !== 16) {
            throw new Error("Invalid Bank Account Format '" + formattedAccountNumber + "'");
        }
        var total = 0;
        for (var i = 0; i < accountNumber.length; i++) {
            var value = +accountNumber.substring(i, 1);
            var weighting = this.weightings[i];
            var weightedValue = value * weighting;
            total += weightedValue;
        }
        return total % this.modulus === 0;
    };
    return Modulus11AlgorithmBase;
}());
exports.Modulus11AlgorithmBase = Modulus11AlgorithmBase;
var AlgorithmA = /** @class */ (function (_super) {
    __extends(AlgorithmA, _super);
    function AlgorithmA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 6, 3, 7, 9, 0, 10, 5, 8, 4, 2, 1, 0, 0, 0];
        _this._modulus = 11;
        return _this;
    }
    return AlgorithmA;
}(Modulus11AlgorithmBase));
exports.AlgorithmA = AlgorithmA;
var AlgorithmD = /** @class */ (function (_super) {
    __extends(AlgorithmD, _super);
    function AlgorithmD() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 0, 0, 0, 0, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0];
        _this._modulus = 11;
        return _this;
    }
    return AlgorithmD;
}(Modulus11AlgorithmBase));
exports.AlgorithmD = AlgorithmD;
var AlgorithmE = /** @class */ (function (_super) {
    __extends(AlgorithmE, _super);
    function AlgorithmE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 3, 2, 0, 0, 1];
        _this._modulus = 11;
        return _this;
    }
    return AlgorithmE;
}(Modulus11AlgorithmBase));
exports.AlgorithmE = AlgorithmE;
var AlgorithmF = /** @class */ (function (_super) {
    __extends(AlgorithmF, _super);
    function AlgorithmF() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 0, 0, 0, 0, 1, 7, 3, 1, 7, 3, 1, 0, 0, 0];
        _this._modulus = 10;
        return _this;
    }
    return AlgorithmF;
}(Modulus11AlgorithmBase));
exports.AlgorithmF = AlgorithmF;
var AlgorithmG = /** @class */ (function (_super) {
    __extends(AlgorithmG, _super);
    function AlgorithmG() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 0, 0, 0, 0, 1, 3, 7, 1, 3, 7, 1, 3, 7, 1];
        _this._modulus = 10;
        return _this;
    }
    return AlgorithmG;
}(Modulus11AlgorithmBase));
exports.AlgorithmG = AlgorithmG;
var AlgorithmX = /** @class */ (function (_super) {
    __extends(AlgorithmX, _super);
    function AlgorithmX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._weightings = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        _this._modulus = 1;
        return _this;
    }
    return AlgorithmX;
}(Modulus11AlgorithmBase));
exports.AlgorithmX = AlgorithmX;
