"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ms_1 = __importDefault(require("ms"));
class HTTPTransportLayer {
    constructor(options) {
        options = Object.assign({}, { timeout: ms_1.default('1m'), provider: 'undici' }, options);
        this.host = options.host;
        this.port = options.port;
        this.timeout = options.timeout;
        this.url = `http://${this.host}$:${this.port}`;
        this.client = axios_1.default.create({
            baseURL: this.url,
            timeout: this.timeout,
            method: 'PUT',
        });
    }
    call(command, message, options) {
        return new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject('timeout');
            }, options.timeout || this.timeout);
            const url = command.replace(/:/g, '/');
            this.client({ url, data: message })
                .then((res) => {
                const data = res.data;
                resolve(data.message);
            })
                .catch((_) => {
                reject('error');
            })
                .then(() => {
                clearTimeout(timeout);
            });
        });
    }
}
exports.default = HTTPTransportLayer;
//# sourceMappingURL=http.js.map