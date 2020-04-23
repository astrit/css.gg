"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledRecord = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:6px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:20px;border:6px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 10px;border-radius:100px}\n"])));
exports.Record = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledRecord, tslib_1.__assign({}, props, { ref: ref, "icon-role": "record" }))));
});
var templateObject_1;
//# sourceMappingURL=Record.js.map