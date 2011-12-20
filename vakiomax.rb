require 'rubygems'
require 'sinatra'
require 'json'

get '/' do
  redirect to('/index.html')
end
