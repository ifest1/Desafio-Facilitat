class ChangeLikesTable < ActiveRecord::Migration[6.0]
  def change
    remove_column :likes, :liked
  end
end
