class AddDefaultValueToHasDonated < ActiveRecord::Migration
  def up
    change_column :domains, :has_donated, :boolean, :default => false
  end

  def down
    change_column :domains, :has_donated, :boolean, :default => nil
  end
end
