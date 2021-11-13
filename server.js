const express = require('express')
const next = require('next')
const apiRouter = require('./api/')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: '.' })
const handle = app.getRequestHandler()

app.prepare().then(() => {
	const server = express()

	server.use('/api', apiRouter)

	server.all('*', (req, res) => {
		return handle(req, res)
	})

	server.listen(port, err => {
		if (err) throw err
		console.log(`> Ready on http://localhost:${port}`)
	})
})