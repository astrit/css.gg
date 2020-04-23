"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCardClubs = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;border-radius:4px;width:4px;height:4px;left:5px;top:4px;box-shadow:-2.5px 4px 0,2.5px 4px 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:22px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;border-radius:4px;width:4px;height:4px;left:5px;top:4px;box-shadow:-2.5px 4px 0,2.5px 4px 0}\n"])));
exports.CardClubs = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledCardClubs, tslib_1.__assign({}, props, { ref: ref, "icon-role": "card-clubs" }))));
});
var templateObject_1;
//# sourceMappingURL=CardClubs.js.map