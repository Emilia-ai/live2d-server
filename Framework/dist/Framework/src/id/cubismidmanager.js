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
exports.Live2DCubismFramework = exports.CubismIdManager = void 0;
var csmvector_1 = require("../type/csmvector");
var cubismid_1 = require("./cubismid");
/**
 * ID名の管理
 *live2d核心库会将moc文件中的所有id加载进id库里面
 * ID名を管理する。
 */
var CubismIdManager = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function CubismIdManager() {
        this._ids = new csmvector_1.csmVector();
    }
    /**
     * デストラクタ相当の処理
     */
    CubismIdManager.prototype.release = function () {
        for (var i = 0; i < this._ids.getSize(); ++i) {
            this._ids.set(i, void 0);
        }
        this._ids = null;
    };
    /**
     * ID名をリストから登録
     *
     * @param ids ID名リスト
     * @param count IDの個数
     */
    CubismIdManager.prototype.registerIds = function (ids) {
        for (var i = 0; i < ids.length; i++) {
            this.registerId(ids[i]);
        }
    };
    /**
     * ID名を登録
     *
     * @param id ID名
     */
    CubismIdManager.prototype.registerId = function (id) {
        var result = null;
        if ('string' == typeof id) {
            if ((result = this.findId(id)) != null) {
                return result;
            }
            result = new cubismid_1.CubismId(id);
            this._ids.pushBack(result);
        }
        else {
            return this.registerId(id.s);
        }
        return result;
    };
    /**
     * ID名からIDを取得する
     *
     * @param id ID名
     */
    CubismIdManager.prototype.getId = function (id) {
        return this.registerId(id);
    };
    /**
     * ID名からIDの確認
     *
     * @return true 存在する
     * @return false 存在しない
     */
    CubismIdManager.prototype.isExist = function (id) {
        if ('string' == typeof id) {
            return this.findId(id) != null;
        }
        return this.isExist(id.s);
    };
    /**
     * ID名からIDを検索する。
     *
     * @param id ID名
     * @return 登録されているID。なければNULL。
     */
    CubismIdManager.prototype.findId = function (id) {
        for (var i = 0; i < this._ids.getSize(); ++i) {
            if (this._ids
                .at(i)
                .getString()
                .isEqual(id)) {
                return this._ids.at(i);
            }
        }
        return null;
    };
    return CubismIdManager;
}());
exports.CubismIdManager = CubismIdManager;
// Namespace definition for compatibility.
var $ = __importStar(require("./cubismidmanager"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismIdManager = $.CubismIdManager;
})(Live2DCubismFramework || (exports.Live2DCubismFramework = Live2DCubismFramework = {}));
//# sourceMappingURL=cubismidmanager.js.map