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
exports.Live2DCubismFramework = exports.CubismDebug = exports.CubismLogError = exports.CubismLogWarning = exports.CubismLogInfo = exports.CubismLogDebug = exports.CubismLogVerbose = exports.CSM_ASSERT = exports.CubismLogPrintIn = exports.CubismLogPrint = void 0;
var cubismframeworkconfig_1 = require("../cubismframeworkconfig");
var live2dcubismframework_1 = require("../live2dcubismframework");
var CubismLogPrint = function (level, fmt, args) {
    CubismDebug.print(level, '[CSM]' + fmt, args);
};
exports.CubismLogPrint = CubismLogPrint;
var CubismLogPrintIn = function (level, fmt, args) {
    (0, exports.CubismLogPrint)(level, fmt + '\n', args);
};
exports.CubismLogPrintIn = CubismLogPrintIn;
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
exports.CSM_ASSERT = CSM_ASSERT;
if (cubismframeworkconfig_1.CSM_LOG_LEVEL <= cubismframeworkconfig_1.CSM_LOG_LEVEL_VERBOSE) {
    exports.CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Verbose, '[V]' + fmt, args);
    };
    exports.CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Debug, '[D]' + fmt, args);
    };
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_DEBUG) {
    exports.CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Debug, '[D]' + fmt, args);
    };
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_INFO) {
    exports.CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Info, '[I]' + fmt, args);
    };
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_WARNING) {
    exports.CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Warning, '[W]' + fmt, args);
    };
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
else if (cubismframeworkconfig_1.CSM_LOG_LEVEL == cubismframeworkconfig_1.CSM_LOG_LEVEL_ERROR) {
    exports.CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (0, exports.CubismLogPrintIn)(live2dcubismframework_1.LogLevel.LogLevel_Error, '[E]' + fmt, args);
    };
}
/**
 * デバッグ用のユーティリティクラス。
 * ログの出力、バイトのダンプなど
 */
var CubismDebug = /** @class */ (function () {
    /**
     * private コンストラクタ
     */
    function CubismDebug() {
    }
    /**
     * ログを出力する。第一引数にログレベルを設定する。
     * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
     *
     * @param logLevel ログレベルの設定
     * @param format 書式付き文字列
     * @param args 可変長引数
     */
    CubismDebug.print = function (logLevel, format, args) {
        // オプションで設定されたログ出力レベルを下回る場合はログに出さない
        if (logLevel < live2dcubismframework_1.CubismFramework.getLoggingLevel()) {
            return;
        }
        var logPrint = live2dcubismframework_1.CubismFramework.coreLogFunction;
        if (!logPrint)
            return;
        var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
            return args[k];
        });
        logPrint(buffer);
    };
    /**
     * データから指定した長さだけダンプ出力する。
     * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
     *
     * @param logLevel ログレベルの設定
     * @param data ダンプするデータ
     * @param length ダンプする長さ
     */
    CubismDebug.dumpBytes = function (logLevel, data, length) {
        for (var i = 0; i < length; i++) {
            if (i % 16 == 0 && i > 0)
                this.print(logLevel, '\n');
            else if (i % 8 == 0 && i > 0)
                this.print(logLevel, '  ');
            this.print(logLevel, '{0} ', [data[i] & 0xff]);
        }
        this.print(logLevel, '\n');
    };
    return CubismDebug;
}());
exports.CubismDebug = CubismDebug;
// Namespace definition for compatibility.
var $ = __importStar(require("./cubismdebug"));
// eslint-disable-next-line @typescript-eslint/no-namespace
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    Live2DCubismFramework.CubismDebug = $.CubismDebug;
})(Live2DCubismFramework || (exports.Live2DCubismFramework = Live2DCubismFramework = {}));
//# sourceMappingURL=cubismdebug.js.map