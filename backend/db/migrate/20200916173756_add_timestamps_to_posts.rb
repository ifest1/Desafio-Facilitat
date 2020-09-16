class AddTimestampsToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :created_at, :date, null: false
    add_column :comments, :created_at, :date, null: false
  end
end
