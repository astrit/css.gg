"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledVinyl = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:3px solid transparent;box-shadow:0 0 0 6px,inset 0 0 0 2px;border-radius:22px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:8px;border:3px solid transparent;box-shadow:0 0 0 6px,inset 0 0 0 2px;border-radius:22px}\n"])));
exports.Vinyl = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledVinyl, tslib_1.__assign({}, props, { ref: ref, "icon-role": "vinyl" }))));
});
var templateObject_1;
//# sourceMappingURL=Vinyl.js.map