# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
FeedbackApp::Application.initialize!

if Rails.env == 'development' || Rails.env == 'test'
  RAW_URL = 'localhost:7000'
elsif Rails.env == 'production'
  RAW_URL = '#TODO'
else
  raise NotImplementedError, "The environment '#{Rails.env}' has no ROOT_URL\n Set one in config/initializers/faye_url.rb"
end