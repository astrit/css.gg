"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPentagonLeft = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px}&:before{height:51%}&:after,&:before{content:' ';position:absolute;left:0;width:100%}&:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(-30deg)}&:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(30deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:10px;height:8px}&:before{height:51%}&:after,&:before{content:' ';position:absolute;left:0;width:100%}&:before{top:-2px;border-top:2px solid;border-right:2px solid;border-left:2px solid;transform:skewX(-30deg)}&:after{bottom:-2px;height:50%;border-right:2px solid;border-bottom:2px solid;border-left:2px solid;transform:skewX(30deg)}\n"])));
exports.PentagonLeft = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPentagonLeft, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pentagon-left" }))));
});
var templateObject_1;
//# sourceMappingURL=PentagonLeft.js.map