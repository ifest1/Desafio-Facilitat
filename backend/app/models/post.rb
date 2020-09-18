class Post < ApplicationRecord
    validates :user_id, presence: true
    validates :text, presence: true
    belongs_to :user, required: true
    has_many :comments
    has_many :likes
end
