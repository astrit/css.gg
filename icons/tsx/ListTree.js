"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledListTree = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat left top/8px 8px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat center 3px/8px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 17px/6px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 3px/2px 16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;right:0}&::after{bottom:0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;width:22px;height:22px;transform:scale(var(--ggs,1));background:linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat left top/8px 8px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat center 3px/8px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 17px/6px 2px,linear-gradient(to left,currentcolor 8px,transparent 0) no-repeat 10px 3px/2px 16px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;border:2px solid;right:0}&::after{bottom:0}\n"])));
exports.ListTree = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledListTree, tslib_1.__assign({}, props, { ref: ref, "icon-role": "list-tree" }))));
});
var templateObject_1;
//# sourceMappingURL=ListTree.js.map