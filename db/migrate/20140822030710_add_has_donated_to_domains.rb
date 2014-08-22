class AddHasDonatedToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :has_donated, :boolean
  end
end
