const express = require('express')

// Create express instance
const app = express()

// Require API routes
const playlist = require('./routes/playlist/index')
const test = require('./routes/test')

// Import API Routes
app.use(playlist)
app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 8000
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
