import Fastify from 'fastify'

export const app = Fastify()

app.get('/ping', async () => {
  return { message: 'pong' }
})
