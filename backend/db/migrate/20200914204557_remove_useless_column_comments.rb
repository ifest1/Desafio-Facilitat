class RemoveUselessColumnComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :avatar
  end
end
