"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledAirplane = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0) no-repeat center/16px 2px,radial-gradient(circle,currentColor 60%,transparent 40%) no-repeat right center/2px 2px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:10px;height:8px;border-right:4px solid}&::before{border-top-right-radius:2px;top:0;transform:perspective(10px)rotateX(10deg)skewX(30deg);box-shadow:-4px 3px 0 -2px}&::after{border-bottom-right-radius:2px;bottom:0;transform:perspective(10px)rotateX(-10deg)skewX(-30deg);box-shadow:-4px -3px 0 -2px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:18px;height:18px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentColor 22px,transparent 0) no-repeat center/16px 2px,radial-gradient(circle,currentColor 60%,transparent 40%) no-repeat right center/2px 2px}&::after,&::before{content:\"\";display:block;position:absolute;box-sizing:border-box;width:10px;height:8px;border-right:4px solid}&::before{border-top-right-radius:2px;top:0;transform:perspective(10px)rotateX(10deg)skewX(30deg);box-shadow:-4px 3px 0 -2px}&::after{border-bottom-right-radius:2px;bottom:0;transform:perspective(10px)rotateX(-10deg)skewX(-30deg);box-shadow:-4px -3px 0 -2px}\n"])));
exports.Airplane = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledAirplane, tslib_1.__assign({}, props, { ref: ref, "icon-role": "airplane" }))));
});
var templateObject_1;
//# sourceMappingURL=Airplane.js.map