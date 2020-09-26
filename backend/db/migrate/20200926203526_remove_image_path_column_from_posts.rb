class RemoveImagePathColumnFromPosts < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :post_image_path
  end
end
