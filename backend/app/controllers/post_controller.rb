class PostController < ApplicationController

    def index
        @posts = Post.all.includes(:comments).map do | post |
            post.attributes.merge(:comments => post.comments)
        end
        render json: @posts
    end

    def show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: :created, location: @post
        else
            render json: @post.errors, status: :unprocessable_entity
        end
    end

    def update
        
    end
    
    def destroy

    end

    def post_params
        params.require(:post).permit(:user_id, :text, :image, :like)
    end
end
