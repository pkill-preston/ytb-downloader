const express = require('express')
const cors = require('cors')

// Create express instance
const app = express()

// Cors options
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

// Require API routes
const test = require('./routes/test')
const playlist = require('./routes/playlist/index')
const download = require('./routes/download/index')

// Import API Routes
app.use(test)
app.use(playlist)
app.use(download)
app.use(cors())

// Export express app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, cors(corsOptions), () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}

module.exports = app
