class Domain < ActiveRecord::Base

  belongs_to :user
  has_many :comments, :dependent => :destroy
  validates_presence_of :url

  def embed_code(domain_id)
    "<script type='text/javascript' src='#{RAW_URL}/embeds/#{domain_id}.js'></script>"
  end

  def multiple_choice?
    content_type == "mult-choice"
  end

  def free_form?
    content_type == "free-form"
  end

  def percent(number, total)
    (number.to_f / total.to_f).round(2) * 100
  end

end
