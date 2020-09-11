class Post < ApplicationRecord
    validates :user_id, presence: true, uniqueness: true
    validates :text, presence: true
end
