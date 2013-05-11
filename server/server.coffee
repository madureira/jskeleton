connect = require("connect")
environment = require("./environment")
Mincer = require("mincer")

###
Create a connect application.
###
app = connect()
app.use "/public", Mincer.createServer(environment)
app.use (req, res) ->


#Your application here...

###
###
app.listen 3000, (err) ->
  if err
    console.log "Filed start server: " + (err.message or err.toString())
    process.exit 128
  console.info "Listening on localhost:3000..."
