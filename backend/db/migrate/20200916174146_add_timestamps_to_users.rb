class AddTimestampsToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :created_at, :date, null: false
  end
end
