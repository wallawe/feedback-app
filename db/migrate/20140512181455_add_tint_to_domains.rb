class AddTintToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :tint, :string
  end
end
