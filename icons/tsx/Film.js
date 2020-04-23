"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledFilm = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-radius:3px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:22px;height:18px}&::after{content:\"\";position:absolute;width:2px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0,12px 0 0,12px 4px 0,12px 8px 0}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-radius:3px}&{border:2px solid;position:relative;transform:scale(var(--ggs,1));width:22px;height:18px}&::after{content:\"\";position:absolute;width:2px;height:2px;background:currentColor;left:2px;top:2px;box-shadow:0 4px 0,0 8px 0,12px 0 0,12px 4px 0,12px 8px 0}\n"])));
exports.Film = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledFilm, tslib_1.__assign({}, props, { ref: ref, "icon-role": "film" }))));
});
var templateObject_1;
//# sourceMappingURL=Film.js.map