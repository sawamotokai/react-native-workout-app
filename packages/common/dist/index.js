"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
// import {
// 	Header,
// 	LearnMoreLinks,
// 	Colors,
// 	DebugInstructions,
// 	ReloadInstructions
// } from 'react-native/Libraries/NewAppScreen';
var App = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    return (react_1.default.createElement(react_native_1.View, { style: styles.sectionContainer },
        react_1.default.createElement(react_native_1.Text, null, "Welcome"),
        react_1.default.createElement(react_native_1.Text, null, count),
        react_1.default.createElement(react_native_1.Button, { title: "increment", onPress: function () {
                setCount(count + 1);
            } })));
};
var styles = react_native_1.StyleSheet.create({
    scrollView: {
    // backgroundColor: Colors.lighter
    },
    engine: {
        position: 'absolute',
        right: 0
    },
    body: {
    // backgroundColor: Colors.white
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600'
        // color: Colors.black
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400'
        // color: Colors.dark
    },
    highlight: {
        fontWeight: '700'
    },
    footer: {
        // color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right'
    }
});
exports.default = App;
