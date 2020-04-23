"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledSearchLoading = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;background:currentColor}&::after{border-radius:3px;height:8px;transform:rotate(-45deg);top:10px;left:12px}&::before{height:2px;border-radius:100%;top:5px;left:5px;box-shadow:-3px 0 0,3px 0 0}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:16px;height:16px;border:2px solid;border-radius:100%;margin-left:-4px;margin-top:-4px}&::after,&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:2px;background:currentColor}&::after{border-radius:3px;height:8px;transform:rotate(-45deg);top:10px;left:12px}&::before{height:2px;border-radius:100%;top:5px;left:5px;box-shadow:-3px 0 0,3px 0 0}\n"])));
exports.SearchLoading = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledSearchLoading, tslib_1.__assign({}, props, { ref: ref, "icon-role": "search-loading" }))));
});
var templateObject_1;
//# sourceMappingURL=SearchLoading.js.map