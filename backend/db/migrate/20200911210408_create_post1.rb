class CreatePost1 < ActiveRecord::Migration[6.0]
  def change
    create_table :post do |t|
      t.references :user
      t.string :text
      t.binary :image
      t.integer :like
    end
  end
end