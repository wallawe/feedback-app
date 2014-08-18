class ChangeFeedbackFormatInComments < ActiveRecord::Migration
 def up
    change_column :comments, :feedback, :text
  end

  def down
    change_column :comments, :feedback, :string
  end
end
