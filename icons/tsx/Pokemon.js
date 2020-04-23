"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledPokemon = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100%}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;border-left:8px solid;border-right:8px solid;left:-6px;top:3px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:5px solid transparent;box-shadow:0 0 0 2px,inset 0 0 0 2px;border-radius:100%}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:20px;height:2px;border-left:8px solid;border-right:8px solid;left:-6px;top:3px}\n"])));
exports.Pokemon = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledPokemon, tslib_1.__assign({}, props, { ref: ref, "icon-role": "pokemon" }))));
});
var templateObject_1;
//# sourceMappingURL=Pokemon.js.map