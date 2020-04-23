"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBoard = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:16px;height:12px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0,inset -2px 0 0;border-radius:2px}\n"], ["\n  &{display:block;position:relative;box-sizing:border-box;transform:scale(var(--ggs,1));width:16px;height:12px;border-left:4px solid transparent;border-right:4px solid transparent;box-shadow:0 0 0 2px,inset 2px 0 0,inset -2px 0 0;border-radius:2px}\n"])));
exports.Board = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBoard, tslib_1.__assign({}, props, { ref: ref, "icon-role": "board" }))));
});
var templateObject_1;
//# sourceMappingURL=Board.js.map