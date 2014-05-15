class Domain < ActiveRecord::Base

  belongs_to :user
  has_many :comments, :dependent => :destroy
  validates_presence_of :url
  validates_uniqueness_of :url

end
