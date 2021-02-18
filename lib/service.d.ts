import { Message } from '.';
export declare type Handler = (msg: Message) => Promise<Message>;
declare class Service {
    private _commands;
    register(command: string, callback: Handler): void;
}
export default Service;
