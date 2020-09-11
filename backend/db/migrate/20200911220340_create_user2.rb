class CreateUser2 < ActiveRecord::Migration[6.0]
  def change
    create_table :user do |t|
      t.string :name
      t.binary :avatar
      t.string :password
      t.string :phone
    end
  end
end

