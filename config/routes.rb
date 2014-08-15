FeedbackApp::Application.routes.draw do

  resources :domains do
    resources :comments
  end

  get 'use_cases' => 'home#use_cases'
  get 'feedback' => 'home#feedback'
  get 'faq' => 'home#faq'
  root :to => "home#feedback"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
  resources :embeds, :only => [:show, :demo]
  get 'embeds/demo/:id' => 'embeds#demo', :as => :demo

end