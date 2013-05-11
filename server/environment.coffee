UglifyJS = require("uglify-js")
Mincer = require("mincer")
Csso = require("csso")
Mincer.logger.use console
environment = module.exports = new Mincer.Environment(__dirname)

###
Path files to compile and serve.
###
environment.appendPath "../public/"
environment.appendPath "../src/javascripts/main"
environment.appendPath "../src/stylesheets/"

###
Define environment essential *_path helper that will be available in the
processed assets.
###

environment.ContextClass.defineAssetPath (pathname, options) ->
  asset = @environment.findAsset(pathname, options)
  throw new Error("File " + pathname + " not found")  unless asset
  "/public/" + asset.digestPath


###
Aditional configuration to production environment.
###
if "production" is process.env.NODE_ENV

  #environment = environment.index
  environment.jsCompressor = (context, data, callback) ->
    try
      ast = UglifyJS.parser.parse(data)
      ast = UglifyJS.uglify.ast_mangle(ast)
      ast = UglifyJS.uglify.ast_squeeze(ast)
      callback null, UglifyJS.uglify.gen_code(ast)
    catch err
      callback err

  environment.cssCompressor = (context, data, callback) ->
    try
      callback null, Csso.justDoIt(data)
    catch err
      callback err
