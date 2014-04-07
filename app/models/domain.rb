class Domain < ActiveRecord::Base

  belongs_to :user
  has_many :comments
  validates_presence_of :url

end
