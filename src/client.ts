import ms from 'ms'
import { Message } from '.'
import { TransportLayer } from './transport-layers'

export type RunOptions = {
   timeout: number
}

const defaultRunOptions = {
   timeout: ms('1m'),
}

export type ClientOptions = {
   transport: TransportLayer
}

class Client {
   private readonly transportLayer: TransportLayer

   constructor(options?: ClientOptions) {
      options = Object.assign({}, options)
   }

   run(command: string, message: Message, options: RunOptions): Promise<Message> {
      options = Object.assign({}, defaultRunOptions, options)
      return this.transportLayer.call(command, message, options)
   }
}

export default Client
