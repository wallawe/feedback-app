class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :url
      t.integer :domain_id
      t.string :email
      t.string :feedback

      t.timestamps
    end
  end
end
