import { TransportLayer, TransportLayerCallOptions, TransportLayerOptions } from '.';
import { Message } from '..';
export declare type HTTPTransportLayerOptions = TransportLayerOptions & {};
export declare type HTTPTransportLayerCallOptions = TransportLayerCallOptions & {};
declare class HTTPTransportLayer implements TransportLayer {
    private host;
    private port;
    private timeout;
    private url;
    private client;
    constructor(options: HTTPTransportLayerOptions);
    call(command: string, message: Message, options: HTTPTransportLayerCallOptions): Promise<Message>;
}
export default HTTPTransportLayer;
