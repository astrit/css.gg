"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledBookmark = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &,&::after{display:block;box-sizing:border-box;border-top-right-radius:3px}&{border:2px solid;border-bottom:0;border-top-left-radius:3px;overflow:hidden;position:relative;transform:scale(var(--ggs,1));width:14px;height:16px}&::after{content:\"\";position:absolute;width:12px;height:12px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);top:9px;left:-1px}\n"], ["\n  &,&::after{display:block;box-sizing:border-box;border-top-right-radius:3px}&{border:2px solid;border-bottom:0;border-top-left-radius:3px;overflow:hidden;position:relative;transform:scale(var(--ggs,1));width:14px;height:16px}&::after{content:\"\";position:absolute;width:12px;height:12px;border-top:2px solid;border-right:2px solid;transform:rotate(-45deg);top:9px;left:-1px}\n"])));
exports.Bookmark = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledBookmark, tslib_1.__assign({}, props, { ref: ref, "icon-role": "bookmark" }))));
});
var templateObject_1;
//# sourceMappingURL=Bookmark.js.map