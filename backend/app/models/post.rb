class Post < ApplicationRecord
    include Rails.application.routes.url_helpers
    has_one_attached :post_image
    validates :post_image, required: false
    
    validates :user_id, presence: true
    validates :text, presence: true
    belongs_to :user, required: true
    has_many :comments
    has_many :likes

    def post_image_url
        variant = post_image.variant(resize: "800x600")
        return "http://127.0.0.1:3000"+rails_representation_url(variant, only_path: true)
      end 
end
