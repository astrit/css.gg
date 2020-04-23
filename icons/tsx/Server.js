"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledServer = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}&::before{top:2px;box-shadow:0 4px 0;border-radius:3px;width:8px;left:2px}&::after{width:2px;border-radius:10px;left:5px;bottom:2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:20px;border:2px solid;border-radius:3px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;height:2px;background:currentColor}&::before{top:2px;box-shadow:0 4px 0;border-radius:3px;width:8px;left:2px}&::after{width:2px;border-radius:10px;left:5px;bottom:2px}\n"])));
exports.Server = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledServer, tslib_1.__assign({}, props, { ref: ref, "icon-role": "server" }))));
});
var templateObject_1;
//# sourceMappingURL=Server.js.map