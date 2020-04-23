"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledList = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;background:currentColor;top:3px;left:3px;box-shadow:0 4px 0,0 8px 0}&::after{border-radius:3px;width:8px;left:7px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:22px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;height:2px;background:currentColor;top:3px;left:3px;box-shadow:0 4px 0,0 8px 0}&::after{border-radius:3px;width:8px;left:7px}\n"])));
exports.List = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledList, tslib_1.__assign({}, props, { ref: ref, "icon-role": "list" }))));
});
var templateObject_1;
//# sourceMappingURL=List.js.map