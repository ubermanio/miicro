import { Message } from '.'

export type Handler = (msg: Message) => Promise<Message>

class Service {
   private _commands: Map<string, Handler> = new Map()

   register(command: string, callback: Handler) {
      this._commands.set(command, callback)
   }
}

export default Service
