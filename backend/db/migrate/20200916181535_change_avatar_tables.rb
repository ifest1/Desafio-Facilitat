class ChangeAvatarTables < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :avatar, :avatar_path
    rename_column :posts, :image, :post_image_path
  end
end
