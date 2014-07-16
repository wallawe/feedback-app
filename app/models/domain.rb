class Domain < ActiveRecord::Base

  belongs_to :user
  has_many :comments, :dependent => :destroy
  validates_presence_of :url

  def embed_code(domain_id)
    "<script type='text/javascript' src='#{RAW_URL}/embeds/#{domain_id}.js'></script>"
  end

end
