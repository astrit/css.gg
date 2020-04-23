"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBolt = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:21px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;transform:rotate(30deg)}&::before{border-bottom:12px solid;left:0;top:0}&::after{border-top:12px solid;right:0;bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:6px;height:21px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:0;height:0;border-left:3px solid transparent;border-right:3px solid transparent;transform:rotate(30deg)}&::before{border-bottom:12px solid;left:0;top:0}&::after{border-top:12px solid;right:0;bottom:0}\n"])));
exports.Bolt = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBolt, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bolt" }))));
});
var templateObject_1;
//# sourceMappingURL=Bolt.js.map