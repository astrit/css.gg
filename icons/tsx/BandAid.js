"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBandAid = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:24px;height:12px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:10px;top:-2px;left:4px;border-left:2px solid;border-right:2px solid}&::after{width:2px;height:2px;background:currentColor;box-shadow:0 4px 0,4px 0 0,4px 4px 0;border-radius:22px;left:7px;top:1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-25deg)scale(var(--ggs,1));width:24px;height:12px;border:2px solid;border-radius:22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{width:12px;height:10px;top:-2px;left:4px;border-left:2px solid;border-right:2px solid}&::after{width:2px;height:2px;background:currentColor;box-shadow:0 4px 0,4px 0 0,4px 4px 0;border-radius:22px;left:7px;top:1px}\n"])));
exports.BandAid = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBandAid, tslib_1.__assign({}, props, { ref: ref, "icon-role": "band-aid" }))));
});
var templateObject_1;
//# sourceMappingURL=BandAid.js.map