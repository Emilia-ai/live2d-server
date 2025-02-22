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
exports.Live2DCubismFramework = exports.CubismModelUserData = exports.CubismModelUserDataNode = void 0;
var live2dcubismframework_1 = require("../live2dcubismframework");
var csmstring_1 = require("../type/csmstring");
var csmvector_1 = require("../type/csmvector");
var cubismmodeluserdatajson_1 = require("./cubismmodeluserdatajson");
var ArtMesh = 'ArtMesh';
/**
 * ユーザーデータインターフェース
 *
 * Jsonから読み込んだユーザーデータを記録しておくための構造体
 */
var CubismModelUserDataNode = /** @class */ (function () {
    function CubismModelUserDataNode() {
    }
    return CubismModelUserDataNode;
}());
exports.CubismModelUserDataNode = CubismModelUserDataNode;
/**
 * ユーザデータの管理クラス
 *
 * ユーザデータをロード、管理、検索インターフェイス、解放までを行う。
 */
var CubismModelUserData = /** @class */ (function () {
    /**
     * コンストラクタ
     */
    function CubismModelUserData() {
        this._userDataNodes = new csmvector_1.csmVector();
        this._artMeshUserDataNode = new csmvector_1.csmVector();
    }
    /**
     * インスタンスの作成
     *
     * @param buffer    userdata3.jsonが読み込まれているバッファ
     * @param size      バッファのサイズ
     * @return 作成されたインスタンス
     */
    CubismModelUserData.create = function (buffer, size) {
        var ret = new CubismModelUserData();
        ret.parseUserData(buffer, size);
        return ret;
    };
    /**
     * インスタンスを破棄する
     *
     * @param modelUserData 破棄するインスタンス
     */
    CubismModelUserData.delete = function (modelUserData) {
        if (modelUserData != null) {
            modelUserData.release();
            modelUserData = null;
        }
    };
    /**
     * ArtMeshのユーザーデータのリストの取得
     *
     * @return ユーザーデータリスト
     */
    CubismModelUserData.prototype.getArtMeshUserDatas = function () {
        return this._artMeshUserDataNode;
    };
    /**
     * userdata3.jsonのパース
     *
     * @param buffer    userdata3.jsonが読み込まれているバッファ
     * @param size      バッファのサイズ
     */
    CubismModelUserData.prototype.parseUserData = function (buffer, size) {
        var json = new cubismmodeluserdatajson_1.CubismModelUserDataJson(buffer, size);
        var typeOfArtMesh = live2dcubismframework_1.CubismFramework.getIdManager().getId(ArtMesh);
        var nodeCount = json.getUserDataCount();
        for (var i = 0; i < nodeCount; i++) {
            var addNode = new CubismModelUserDataNode();
            addNode.targetId = json.getUserDataId(i);
            addNode.targetType = live2dcubismframework_1.CubismFramework.getIdManager().getId(json.getUserDataTargetType(i));
            addNode.value = new csmstring_1.csmString(json.getUserDataValue(i));
            this._userDataNodes.pushBack(addNode);
            if (addNode.targetType == typeOfArtMesh) {
                this._artMeshUserDataNode.pushBack(addNode);
            }
        }
        json.release();
        json = void 0;
    };
    /**
     * デストラクタ相当の処理
     *
     * ユーザーデータ構造体配列を解放する
     */
    CubismModelUserData.prototype.release = function () {
        for (var i = 0; i < this._userDataNodes.getSize(); ++i) {
            this._userDataNodes.set(i, null);
        }
        this._userDataNodes = null;
    };
    return CubismModelUserData;
}());
exports.CubismModelUserData = CubismModelUserData;
// Namespace definition for compatibility.
var $ = __importStar(require("./cubismmodeluserdata"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismModelUserData = $.CubismModelUserData;
    Live2DCubismFramework.CubismModelUserDataNode = $.CubismModelUserDataNode;
})(Live2DCubismFramework || (exports.Live2DCubismFramework = Live2DCubismFramework = {}));
//# sourceMappingURL=cubismmodeluserdata.js.map