class AddLikesTable < ActiveRecord::Migration[6.0]
  def change
    create_table :likes do | t |
      t.references :post
      t.references :user
      t.boolean :liked
    end
  end
end
