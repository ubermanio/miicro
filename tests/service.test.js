const { Service, Client } = require('../lib/')
console.log(Service)

const mailService = new Service()

mailService.register('mail:send', (msg) => {
   // TODO: send mail
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve({ test: true })
      }, 1000)
   })
})

console.log(mailService)
