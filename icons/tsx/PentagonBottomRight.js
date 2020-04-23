"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPentagonBottomRight = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:10px}&:before{width:51%}&:after,&:before{content:' ';position:absolute;top:0;height:100%}&:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,30deg)}&:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,-30deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(-45deg) scale(var(--ggs,1));width:10px;height:10px}&:before{width:51%}&:after,&:before{content:' ';position:absolute;top:0;height:100%}&:before{left:-2px;border-top:2px solid;border-left:2px solid;border-bottom:2px solid;transform:skew(0deg,30deg)}&:after{right:-2px;width:50%;border-right:2px solid;border-bottom:2px solid;border-top:2px solid;transform:skew(0deg,-30deg)}\n"])));
exports.PentagonBottomRight = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPentagonBottomRight, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pentagon-bottom-right" }))));
});
var templateObject_1;
//# sourceMappingURL=PentagonBottomRight.js.map