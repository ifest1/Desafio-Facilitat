class Comment < ApplicationRecord
    validates :post_id, presence: true
    validates :user_id, presence: true
    validates :text, presence: true
end
