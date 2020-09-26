require 'bcrypt'
class User < ActiveRecord::Base
    include Rails.application.routes.url_helpers
    has_one_attached :featured_image

    has_secure_password
    has_secure_password :recovery_password, validations: false
    
    validates :name, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    validates :featured_image, presence: true

    has_many :posts 
    has_many :comments
    has_many :likes

    validates_associated :posts
    validates_associated :comments

    def featured_image_url
        variant = featured_image.variant(resize: "300x300")
        return "http://127.0.0.1:3000"+rails_representation_url(variant, only_path: true)
      end    
end
