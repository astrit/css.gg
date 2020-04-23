"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledHashtag = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border-left:2px solid;border-right:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:8px;border-top:2px solid;border-bottom:2px solid;left:-6px;top:4px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:8px;height:16px;border-left:2px solid;border-right:2px solid}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:16px;height:8px;border-top:2px solid;border-bottom:2px solid;left:-6px;top:4px}\n"])));
exports.Hashtag = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledHashtag, tslib_1.__assign({}, props, { ref: ref, "icon-role": "hashtag" }))));
});
var templateObject_1;
//# sourceMappingURL=Hashtag.js.map