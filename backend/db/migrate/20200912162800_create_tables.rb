class CreateTables < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.binary :avatar
      t.string :password
      t.string :phone
    end
    create_table :posts do |t|
      t.belongs_to :user
      t.string :text
      t.binary :image
      t.integer :like
    end
    create_table :comments do |t|
      t.belongs_to :user, :comment
      t.string :text
      t.binary :avatar
      t.integer :like
    end
  end
end
