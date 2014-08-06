class ModelMailer < ActionMailer::Base
  default from: "noreply@freesurveycreator.com" #This will be from whatever the name of the company ends up being

  def simple_email_send(link, feedback, user)
    @link = link
    @feedback = feedback

    mail to: user.email, subject: "Someone responded to your survey"
  end
end
