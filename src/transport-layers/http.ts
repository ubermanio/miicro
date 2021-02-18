import axios, { AxiosInstance } from 'axios'
import ms from 'ms'
import { TransportLayer, TransportLayerCallOptions, TransportLayerOptions } from '.'
import { Message } from '..'
import { ServerResponse } from '../providers/http'

export type HTTPTransportLayerOptions = TransportLayerOptions & {}

export type HTTPTransportLayerCallOptions = TransportLayerCallOptions & {}

class HTTPTransportLayer implements TransportLayer {
   private host: string
   private port: number
   private timeout: number
   private url: string
   private client: AxiosInstance

   constructor(options: HTTPTransportLayerOptions) {
      options = Object.assign({}, { timeout: ms('1m'), provider: 'undici' }, options)
      this.host = options.host
      this.port = options.port
      this.timeout = options.timeout
      this.url = `http://${this.host}$:${this.port}`
      this.client = axios.create({
         baseURL: this.url,
         timeout: this.timeout,
         method: 'PUT',
      })
   }

   call(command: string, message: Message, options: HTTPTransportLayerCallOptions): Promise<Message> {
      return new Promise((resolve, reject) => {
         const timeout = setTimeout(() => {
            reject('timeout') // TODO:
         }, options.timeout || this.timeout)

         const url = command.replace(/:/g, '/')
         this.client({ url, data: message })
            .then((res) => {
               const data = res.data as ServerResponse
               resolve(data.message as Message)
            })
            .catch((_) => {
               reject('error') // TODO:
            })
            .then(() => {
               clearTimeout(timeout)
            })
      })
   }
}

export default HTTPTransportLayer
