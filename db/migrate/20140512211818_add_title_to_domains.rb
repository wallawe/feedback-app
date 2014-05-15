class AddTitleToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :title, :string
  end
end
