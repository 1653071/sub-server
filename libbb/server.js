"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var validate_middleware_1 = __importDefault(require("./src/test1/validate.middleware"));
//import * as ChatController from "./controller/chat-message"
var body_parser_1 = __importDefault(require("body-parser"));
var express_validator_1 = require("express-validator");
var httpApp = (0, express_1.default)();
httpApp.use(body_parser_1.default.urlencoded({ extended: false }));
httpApp.use(express_1.default.json());
httpApp.use('/static', express_1.default.static('uploads'));
httpApp.use((0, cors_1.default)({ origin: true }));
httpApp.get("/", validate_middleware_1.default.validateRegisterUser, function (req, res) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(422).json({ errors: errors.array() });
        return;
    }
    res.status(200).json("asd");
});
httpApp.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var httpServer = require('http').createServer(httpApp);
httpServer.listen(4000, function () {
    console.log("Server is running on http://localhost:".concat(4999));
});
