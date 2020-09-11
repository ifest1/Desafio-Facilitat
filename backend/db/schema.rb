# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_09_11_220402) do

  create_table "comment", force: :cascade do |t|
    t.integer "post_id"
    t.integer "user_id"
    t.string "text"
    t.binary "avatar"
    t.integer "like"
    t.index ["post_id"], name: "index_comment_on_post_id"
    t.index ["user_id"], name: "index_comment_on_user_id"
  end

  create_table "post", force: :cascade do |t|
    t.integer "user_id"
    t.string "text"
    t.binary "image"
    t.integer "like"
    t.index ["user_id"], name: "index_post_on_user_id"
  end

  create_table "user", force: :cascade do |t|
    t.string "name"
    t.binary "avatar"
    t.string "password"
    t.string "phone"
  end

end
