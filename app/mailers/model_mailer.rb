class ModelMailer < ActionMailer::Base
  default from: "wallac.will@gmail.com" #This will be from whatever the name of the company ends up being

  def simple_email_send(user)

    mail to: user.email
  end
end
