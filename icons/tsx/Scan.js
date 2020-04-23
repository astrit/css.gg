"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledScan = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0)no-repeat center/2px 22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}&::after{border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0)no-repeat center/2px 22px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:14px;border:2px solid;top:2px}&::before{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px}&::after{border-left:0;border-top-right-radius:3px;border-bottom-right-radius:3px;right:0}\n"])));
exports.Scan = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledScan, tslib_1.__assign({}, props, { ref: ref, "icon-role": "scan" }))));
});
var templateObject_1;
//# sourceMappingURL=Scan.js.map