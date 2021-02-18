"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Service {
    constructor() {
        this._commands = new Map();
    }
    register(command, callback) {
        this._commands.set(command, callback);
    }
}
exports.default = Service;
//# sourceMappingURL=service.js.map