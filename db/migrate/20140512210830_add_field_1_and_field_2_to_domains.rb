class AddField1AndField2ToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :field_1, :string
    add_column :domains, :field_2, :string
  end
end
