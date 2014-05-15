class AddQuestion1AndQuestion2AndQuestion3AndQuestion4ToDomains < ActiveRecord::Migration
  def change
    add_column :domains, :question_1, :string
    add_column :domains, :question_2, :string
    add_column :domains, :question_3, :string
    add_column :domains, :question_4, :string
  end
end
