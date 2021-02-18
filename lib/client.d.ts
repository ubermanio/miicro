import { Message } from '.';
import { TransportLayer } from './transport-layers';
export declare type RunOptions = {
    timeout: number;
};
export declare type ClientOptions = {
    transport: TransportLayer;
};
declare class Client {
    private readonly transportLayer;
    constructor(options?: ClientOptions);
    run(command: string, message: Message, options: RunOptions): Promise<Message>;
}
export default Client;
