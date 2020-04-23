"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAppleWatch = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 13px 4px/2px 4px;box-sizing:border-box;position:relative;display:block;width:24px;height:24px;border:5px solid transparent;transform:scale(var(--ggs,1));border-radius:9px;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:5px;border:2px solid;border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;left:2px}&::after{top:-3px}&::before{transform:scaleY(-1);top:12px}\n"], ["\n  &{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat 13px 4px/2px 4px;box-sizing:border-box;position:relative;display:block;width:24px;height:24px;border:5px solid transparent;transform:scale(var(--ggs,1));border-radius:9px;box-shadow:inset 0 0 0 2px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;border-radius:3px;width:10px;height:5px;border:2px solid;border-bottom:0;border-bottom-left-radius:0;border-bottom-right-radius:0;left:2px}&::after{top:-3px}&::before{transform:scaleY(-1);top:12px}\n"])));
exports.AppleWatch = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAppleWatch, tslib_1.__assign({}, props, { ref: ref, "icon-role": "apple-watch" }))));
});
var templateObject_1;
//# sourceMappingURL=AppleWatch.js.map