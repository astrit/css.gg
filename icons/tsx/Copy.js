"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCopy = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;margin-left:-5px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat right top/5px 2px,linear-gradient( to left,currentColor 5px,transparent 0)no-repeat left bottom/ 2px 5px;box-shadow:inset -4px -4px 0 -2px;bottom:-6px;right:-6px;width:14px;height:18px}&::after{width:6px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:14px;height:18px;border:2px solid;margin-left:-5px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:linear-gradient( to left,currentColor 5px,transparent 0)no-repeat right top/5px 2px,linear-gradient( to left,currentColor 5px,transparent 0)no-repeat left bottom/ 2px 5px;box-shadow:inset -4px -4px 0 -2px;bottom:-6px;right:-6px;width:14px;height:18px}&::after{width:6px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0}\n"])));
exports.Copy = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCopy, tslib_1.__assign({}, props, { ref: ref, "icon-role": "copy" }))));
});
var templateObject_1;
//# sourceMappingURL=Copy.js.map