class RenamePasswordColumn < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :password_hash, :password_digest
    remove_column :users, :password_salt
  end
end
