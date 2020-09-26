class RemoveAttachmentPictureToUser < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :picture_file_name
    remove_column :users, :picture_content_type
    remove_column :users, :picture_file_size
    remove_column :users, :picture_updated_at
  end
end
