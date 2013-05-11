#= require './MessageView'

class App.Views.HelloWorldView
  message: ''

  constructor: ->
    message = new App.Views.MessageView()
    @message = message.content

  getMessage: ->
    @message
