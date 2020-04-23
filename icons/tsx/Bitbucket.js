"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBitbucket = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{position:relative;box-sizing:border-box;display:block;width:15px;height:15px;transform:scale(var(--ggs,1));border-top:5px solid;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center bottom/10px 5px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:5px;height:15px;top:-5px;transform:skew(10deg);border-radius:1px}&::after{right:0;transform:skew(-10deg)}\n"], ["\n  &{position:relative;box-sizing:border-box;display:block;width:15px;height:15px;transform:scale(var(--ggs,1));border-top:5px solid;background:linear-gradient(to left,currentColor 10px,transparent 0)no-repeat center bottom/10px 5px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;background:currentColor;width:5px;height:15px;top:-5px;transform:skew(10deg);border-radius:1px}&::after{right:0;transform:skew(-10deg)}\n"])));
exports.Bitbucket = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBitbucket, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bitbucket" }))));
});
var templateObject_1;
//# sourceMappingURL=Bitbucket.js.map