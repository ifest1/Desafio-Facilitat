class ChangeAvatarColumnType < ActiveRecord::Migration[6.0]
  def change
    change_column :users, :avatar_path, :string
    change_column :posts, :post_image_path, :string
  end
end
