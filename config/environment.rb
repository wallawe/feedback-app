# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
FeedbackApp::Application.initialize!

if Rails.env == 'development' || Rails.env == 'test'
  RAW_URL = 'http://localhost:7000'
elsif Rails.env == 'production'
  RAW_URL = 'http://waterloo.herokuapp.com'
else
  raise NotImplementedError, "The environment '#{Rails.env}' has no ROOT_URL"
end
