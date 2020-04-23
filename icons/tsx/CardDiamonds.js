"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCardDiamonds = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;transform:rotate(45deg);top:6px;left:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:6px;height:6px;background:currentColor;transform:rotate(45deg);top:6px;left:4px}\n"])));
exports.CardDiamonds = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCardDiamonds, tslib_1.__assign({}, props, { ref: ref, "icon-role": "card-diamonds" }))));
});
var templateObject_1;
//# sourceMappingURL=CardDiamonds.js.map