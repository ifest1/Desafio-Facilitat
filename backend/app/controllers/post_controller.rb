class PostController < ApplicationController

    def index
        if @user = authorized
            @posts = Post.all.includes(:comments).map do | post |
                post.attributes.merge(:comments => post.comments)
            end
            render json: {user: @user.as_json(only: [:name, :avatar]), posts: @posts}, status: :ok
        else
            head(:unauthorized)
        end
    end

    def show
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render json: @post, status: :created, location: @post
        else
            head(:unauthorized)
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
