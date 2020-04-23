"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDatabase = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 0 2px 0 0,inset 0 -2px 0 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;width:20px;height:2px;top:4px;left:-8px}&::after{width:2px;height:10px;border-bottom:2px solid;border-top:2px solid;top:0;left:-4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:14px;border:2px solid transparent;border-top:2px solid transparent;border-bottom:2px solid transparent;border-left:6px solid transparent;box-shadow:0 0 0 2px,inset 0 2px 0 0,inset 0 -2px 0 0;border-radius:1px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute}&::before{background:currentColor;width:20px;height:2px;top:4px;left:-8px}&::after{width:2px;height:10px;border-bottom:2px solid;border-top:2px solid;top:0;left:-4px}\n"])));
exports.Database = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDatabase, tslib_1.__assign({}, props, { ref: ref, "icon-role": "database" }))));
});
var templateObject_1;
//# sourceMappingURL=Database.js.map