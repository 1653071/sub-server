"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eSort = void 0;
var _a = require('express-validator'), check = _a.check, param = _a.param;
var eSort;
(function (eSort) {
    eSort[eSort["ASC"] = 0] = "ASC";
    eSort[eSort["DES"] = 1] = "DES";
})(eSort = exports.eSort || (exports.eSort = {}));
var validateRegisterUser = function () {
    return [
        check('sort.sortDateCreate', 'sortDateCreate').not().isEmpty().customSanitizer(function (value) {
            if (Object.values(eSort).includes(value)) {
                return value;
            }
            return eSort.DES;
        }),
    ];
};
var validate = {
    validateRegisterUser: [
        check('sort.sortDateCreate', 'sortDateCreate').not().isEmpty().customSanitizer(function (value) {
            if (Object.values(eSort).includes(value)) {
                return value;
            }
            return eSort.DES;
        }),
    ]
};
exports.default = validate;
