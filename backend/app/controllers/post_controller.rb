class PostController < ApplicationController

    def index
        if @user = is_logged_in
            @posts = Post.all.includes(:comments).map do | post |
                post.attributes.merge(:comments => post.comments)
            end
            puts @user
            render json: { user: @user.as_json(only: [:name, :avatar_path]), posts: @posts}, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def show
    end

    def create
        @user = create_post_authorized
        if @user.exists?
            @post = Post.new({
                user_id: post_params[:user_id],
                text: post_params[:text],
                like: 0,
                post_image_path: random_image(),
            })
            if @post.save
                render json: @post, status: :created, location: @post
            else
                render json: {status: :unauthorized}
            end
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
