require 'bcrypt'
class User < ActiveRecord::Base
    attr_accessor :password
    acts_as_token_authenticatable
    
    validates :name, presence: true
    before_save :encrypt_password

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
    validates :email, presence: true,
                format:     { with: VALID_EMAIL_REGEX },
                uniqueness: { case_sensitive: false }
    
    validates_confirmation_of :password
    validates_presence_of :password, :on => :create

    has_many :posts 
    has_many :comments, :through => :posts

    validates_associated :posts
    validates_associated :comments

    def self.authenticate(email, password)
        user = find_by_email(email)
        if user && user.password_hash == BCrypt::Engine.hash_secret(password, user.password_salt)
            user
        else
            nil
        end
    end
    def encrypt_password
        if password.present?
            self.password_salt = BCrypt::Engine.generate_salt
            self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
        end
    end
end
