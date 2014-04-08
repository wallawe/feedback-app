class Domain < ActiveRecord::Base
  before_create :randomize_id

  belongs_to :user
  has_many :comments
  validates_presence_of :url
  validates_uniqueness_of :url

  private
    def randomize_id
      begin
        self.id = SecureRandom.random_number(1_000_000)
      end while Domain.where(id: self.id).exists?
    end

end
