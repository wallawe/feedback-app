class AddContentTypeToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :content_type, :string
  end
end
