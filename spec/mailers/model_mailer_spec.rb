require "spec_helper"

describe ModelMailer do
  describe "simple_email_send" do
    let(:mail) { ModelMailer.simple_email_send }

    it "renders the headers" do
      mail.subject.should eq("Simple email send")
      mail.to.should eq(["to@example.org"])
      mail.from.should eq(["from@example.com"])
    end

    it "renders the body" do
      mail.body.encoded.should match("Hi")
    end
  end

end
