#= require './../../../../app/views/HelloWorld'

describe "Hello world", ->
  it "says hello", ->
    hello = new HelloWorld()
    expect(hello.getMessage()).toEqual "Hello world!"
