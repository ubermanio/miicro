"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ms_1 = __importDefault(require("ms"));
const defaultRunOptions = {
    timeout: ms_1.default('1m'),
};
class Client {
    constructor(options) {
        options = Object.assign({}, options);
    }
    run(command, message, options) {
        options = Object.assign({}, defaultRunOptions, options);
        return this.transportLayer.call(command, message, options);
    }
}
exports.default = Client;
//# sourceMappingURL=client.js.map