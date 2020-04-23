"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPhotoscan = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;display:block;position:relative;transform:scale(var(--ggs,1));border-radius:2px;width:14px;height:18px;border:2px solid;border-bottom:4px solid}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;border-radius:20px;box-shadow:0 0 0 2px,inset 0 0 0 2px;border:1px solid transparent}\n"], ["\n  &{box-sizing:border-box;display:block;position:relative;transform:scale(var(--ggs,1));border-radius:2px;width:14px;height:18px;border:2px solid;border-bottom:4px solid}&::before{content:\"\";position:absolute;box-sizing:border-box;display:block;width:4px;height:4px;border-radius:20px;box-shadow:0 0 0 2px,inset 0 0 0 2px;border:1px solid transparent}\n"])));
exports.Photoscan = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPhotoscan, tslib_1.__assign({}, props, { ref: ref, "icon-role": "photoscan" }))));
});
var templateObject_1;
//# sourceMappingURL=Photoscan.js.map