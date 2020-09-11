class CreateComment < ActiveRecord::Migration[6.0]
  def change
    create_table :comment do |t|
      t.references :post
      t.references :user
      t.string :text
      t.binary :avatar
      t.integer :like
    end
  end
end