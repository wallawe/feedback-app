class AddDisplayToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :display, :boolean
  end
end
