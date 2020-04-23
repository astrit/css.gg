"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledQuoteO = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:18px;border:2px solid;border-radius:2px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:6px;border-left:3px solid;border-right:3px solid;left:4px;top:4px;transform:skewX(-20deg)}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:20px;height:18px;border:2px solid;border-radius:2px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:6px;border-left:3px solid;border-right:3px solid;left:4px;top:4px;transform:skewX(-20deg)}\n"])));
exports.QuoteO = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledQuoteO, tslib_1.__assign({}, props, { ref: ref, "icon-role": "quote-o" }))));
});
var templateObject_1;
//# sourceMappingURL=QuoteO.js.map