"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledNametag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;transform:scale(var(--ggs,1))}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-5px;top:-5px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:6px;height:6px;border:2px solid;transform:scale(var(--ggs,1))}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:12px;height:12px;box-shadow:-5px -5px 0 -3px,5px 5px 0 -3px,5px -5px 0 -3px,-5px 5px 0 -3px;left:-5px;top:-5px}\n"])));
exports.Nametag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledNametag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "nametag" }))));
});
var templateObject_1;
//# sourceMappingURL=Nametag.js.map