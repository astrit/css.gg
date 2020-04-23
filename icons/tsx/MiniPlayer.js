"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledMiniPlayer = styled_components_1.default.i(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;background:currentColor;border-top-left-radius:3px;border-bottom-right-radius:3px;bottom:-1px;right:-1px}\n"], ["\n  &{box-sizing:border-box;position:relative;display:block;transform:scale(var(--ggs,1));width:18px;height:18px;border:2px solid;border-radius:3px}&::before{content:\"\";display:block;box-sizing:border-box;position:absolute;width:8px;height:8px;background:currentColor;border-top-left-radius:3px;border-bottom-right-radius:3px;bottom:-1px;right:-1px}\n"])));
exports.MiniPlayer = react_1.default.forwardRef(function (props, ref) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(StyledMiniPlayer, tslib_1.__assign({}, props, { ref: ref, "icon-role": "mini-player" }))));
});
var templateObject_1;
//# sourceMappingURL=MiniPlayer.js.map