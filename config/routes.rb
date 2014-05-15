FeedbackApp::Application.routes.draw do

  resources :domains do
    resources :comments
  end

  get 'feedback' => 'home#feedback'
  root :to => "home#feedback"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
  resources :embeds, :only => [:show]

end