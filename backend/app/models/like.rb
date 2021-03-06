class Like < ApplicationRecord
    validates :post_id, presence: true
    validates :user_id, presence: true
    belongs_to :user, required: true
    belongs_to :post, required: true
end
