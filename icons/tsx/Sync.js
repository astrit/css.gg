"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSync = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-radius:40px;border:2px solid;margin:1px;border-left-color:transparent;border-right-color:transparent;width:18px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;transform:rotate(-45deg)}&::before{border-left:6px solid;bottom:-1px;right:-3px}&::after{border-right:6px solid;top:-1px;left:-3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));border-radius:40px;border:2px solid;margin:1px;border-left-color:transparent;border-right-color:transparent;width:18px;height:18px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent;transform:rotate(-45deg)}&::before{border-left:6px solid;bottom:-1px;right:-3px}&::after{border-right:6px solid;top:-1px;left:-3px}\n"])));
exports.Sync = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSync, tslib_1.__assign({}, props, { ref: ref, "icon-role": "sync" }))));
});
var templateObject_1;
//# sourceMappingURL=Sync.js.map