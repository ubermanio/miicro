import { Message } from '..'

export type ServerResponse = {
   status: string
   error?: string
   message: Message
}
