"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledLoupe = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:22px;border-bottom-right-radius:6px;overflow:hidden;background:linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/8px 2px,linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/2px 8px}&::after{content:\"\";position:absolute;width:14px;height:14px;border-radius:100%;box-shadow:0 0 0 6px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box}&{position:relative;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:22px;border-bottom-right-radius:6px;overflow:hidden;background:linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/8px 2px,linear-gradient(to left,currentColor 8px,transparent 0) no-repeat center/2px 8px}&::after{content:\"\";position:absolute;width:14px;height:14px;border-radius:100%;box-shadow:0 0 0 6px}\n"])));
exports.Loupe = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledLoupe, tslib_1.__assign({}, props, { ref: ref, "icon-role": "loupe" }))));
});
var templateObject_1;
//# sourceMappingURL=Loupe.js.map