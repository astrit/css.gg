"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledDice6 = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &6{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px;}&6::before{content:\"\";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:0 5px 0,0 10px 0,10px 0 0,10px 5px 0,10px 10px 0;}\n"], ["\n  &6{display:block;transform:scale(var(--ggs,1));position:relative;box-sizing:border-box;width:22px;height:22px;border:2px solid;border-radius:3px;}&6::before{content:\"\";display:block;box-sizing:border-box;background:currentColor;position:absolute;width:4px;height:4px;border-radius:4px;left:2px;top:2px;box-shadow:0 5px 0,0 10px 0,10px 0 0,10px 5px 0,10px 10px 0;}\n"])));
exports.Dice6 = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledDice6, tslib_1.__assign({}, props, { ref: ref, "icon-role": "dice-6" }))));
});
var templateObject_1;
//# sourceMappingURL=Dice6.js.map