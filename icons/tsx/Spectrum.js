"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSpectrum = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:30px;height:30px;left:-15px;bottom:-15px;border:8px solid;border-radius:18px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;overflow:hidden}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:30px;height:30px;left:-15px;bottom:-15px;border:8px solid;border-radius:18px}\n"])));
exports.Spectrum = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSpectrum, tslib_1.__assign({}, props, { ref: ref, "icon-role": "spectrum" }))));
});
var templateObject_1;
//# sourceMappingURL=Spectrum.js.map