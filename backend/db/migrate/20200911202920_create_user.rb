class CreateUser < ActiveRecord::Migration[6.0]
  def change
    create_table :user, :primary_key => :email do |t|
      t.string :name
      t.binary :avatar
      t.string :password
      t.string :phone
    end
    change_column :email, :user_id, :string
  end
end

