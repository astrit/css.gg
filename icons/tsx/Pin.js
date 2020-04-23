"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPin = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border-radius:100% 100% 0 100%;border:2px solid;margin-top:-4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;top:3px;left:3px;border-radius:40px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:rotate(45deg) scale(var(--ggs,1));width:18px;height:18px;border-radius:100% 100% 0 100%;border:2px solid;margin-top:-4px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;top:3px;left:3px;border-radius:40px}\n"])));
exports.Pin = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPin, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pin" }))));
});
var templateObject_1;
//# sourceMappingURL=Pin.js.map