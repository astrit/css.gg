"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTrack = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{border-left:4px solid;border-right:4px solid;width:18px;height:2px;left:-6px;top:2px}&::after{width:2px;height:18px;border-top:4px solid;border-bottom:4px solid;left:2px;top:-6px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:10px;border:2px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px}&::before{border-left:4px solid;border-right:4px solid;width:18px;height:2px;left:-6px;top:2px}&::after{width:2px;height:18px;border-top:4px solid;border-bottom:4px solid;left:2px;top:-6px}\n"])));
exports.Track = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTrack, tslib_1.__assign({}, props, { ref: ref, "icon-role": "track" }))));
});
var templateObject_1;
//# sourceMappingURL=Track.js.map