"use strict";
/**
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at https://www.live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Live2DCubismFramework = exports.CubismVector2 = void 0;
/**
 * 2次元ベクトル型
 *
 * 2次元ベクトル型の機能を提供する。
 */
var CubismVector2 = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function CubismVector2(x, y) {
        this.x = x;
        this.y = y;
        this.x = x == undefined ? 0.0 : x;
        this.y = y == undefined ? 0.0 : y;
    }
    /**
     * ベクトルの加算
     *
     * @param vector2 加算するベクトル値
     * @return 加算結果 ベクトル値
     */
    CubismVector2.prototype.add = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x + vector2.x;
        ret.y = this.y + vector2.y;
        return ret;
    };
    /**
     * ベクトルの減算
     *
     * @param vector2 減算するベクトル値
     * @return 減算結果 ベクトル値
     */
    CubismVector2.prototype.substract = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x - vector2.x;
        ret.y = this.y - vector2.y;
        return ret;
    };
    /**
     * ベクトルの乗算
     *
     * @param vector2 乗算するベクトル値
     * @return 乗算結果 ベクトル値
     */
    CubismVector2.prototype.multiply = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x * vector2.x;
        ret.y = this.y * vector2.y;
        return ret;
    };
    /**
     * ベクトルの乗算(スカラー)
     *
     * @param scalar 乗算するスカラー値
     * @return 乗算結果 ベクトル値
     */
    CubismVector2.prototype.multiplyByScaler = function (scalar) {
        return this.multiply(new CubismVector2(scalar, scalar));
    };
    /**
     * ベクトルの除算
     *
     * @param vector2 除算するベクトル値
     * @return 除算結果 ベクトル値
     */
    CubismVector2.prototype.division = function (vector2) {
        var ret = new CubismVector2(0.0, 0.0);
        ret.x = this.x / vector2.x;
        ret.y = this.y / vector2.y;
        return ret;
    };
    /**
     * ベクトルの除算(スカラー)
     *
     * @param scalar 除算するスカラー値
     * @return 除算結果 ベクトル値
     */
    CubismVector2.prototype.divisionByScalar = function (scalar) {
        return this.division(new CubismVector2(scalar, scalar));
    };
    /**
     * ベクトルの長さを取得する
     *
     * @return ベクトルの長さ
     */
    CubismVector2.prototype.getLength = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /**
     * ベクトルの距離の取得
     *
     * @param a 点
     * @return ベクトルの距離
     */
    CubismVector2.prototype.getDistanceWith = function (a) {
        return Math.sqrt((this.x - a.x) * (this.x - a.x) + (this.y - a.y) * (this.y - a.y));
    };
    /**
     * ドット積の計算
     *
     * @param a 値
     * @return 結果
     */
    CubismVector2.prototype.dot = function (a) {
        return this.x * a.x + this.y * a.y;
    };
    /**
     * 正規化の適用
     */
    CubismVector2.prototype.normalize = function () {
        var length = Math.pow(this.x * this.x + this.y * this.y, 0.5);
        this.x = this.x / length;
        this.y = this.y / length;
    };
    /**
     * 等しさの確認（等しいか？）
     *
     * 値が等しいか？
     *
     * @param rhs 確認する値
     * @return true 値は等しい
     * @return false 値は等しくない
     */
    CubismVector2.prototype.isEqual = function (rhs) {
        return this.x == rhs.x && this.y == rhs.y;
    };
    /**
     * 等しさの確認（等しくないか？）
     *
     * 値が等しくないか？
     *
     * @param rhs 確認する値
     * @return true 値は等しくない
     * @return false 値は等しい
     */
    CubismVector2.prototype.isNotEqual = function (rhs) {
        return !this.isEqual(rhs);
    };
    return CubismVector2;
}());
exports.CubismVector2 = CubismVector2;
// Namespace definition for compatibility.
var $ = __importStar(require("./cubismvector2"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismVector2 = $.CubismVector2;
})(Live2DCubismFramework || (exports.Live2DCubismFramework = Live2DCubismFramework = {}));
//# sourceMappingURL=cubismvector2.js.map