import { Message } from '..'

export type TransportLayerOptions = { host: string; port: number; timeout: number }
export type TransportLayerCallOptions = { timeout: number }

export interface TransportLayer {
   call(command: string, message: Message, options: TransportLayerCallOptions): Promise<Message>
}

export * as Http from './http'
