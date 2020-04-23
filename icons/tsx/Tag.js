"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledTag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::before{display:block;border:2px solid}&{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:19px;height:14px}&::before{content:\"\";position:absolute;width:2px;height:2px;box-sizing:content-box;border-radius:100px;right:0;top:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;border-bottom-right-radius:4px;transform:rotate(-45deg);top:0;right:-5px}\n"], ["\n  &,&::before{display:block;border:2px solid}&{border-right:0;border-top-left-radius:3px;border-bottom-left-radius:3px;box-sizing:border-box;transform:scale(var(--ggs,1));position:relative;width:19px;height:14px}&::before{content:\"\";position:absolute;width:2px;height:2px;box-sizing:content-box;border-radius:100px;right:0;top:2px}&::after{content:\"\";display:block;box-sizing:border-box;position:absolute;width:10px;height:10px;border-bottom:2px solid;border-right:2px solid;border-bottom-right-radius:4px;transform:rotate(-45deg);top:0;right:-5px}\n"])));
exports.Tag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledTag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "tag" }))));
});
var templateObject_1;
//# sourceMappingURL=Tag.js.map