class PostController < ApplicationController

    def index
        if @user = is_logged_in
            @posts = Post.includes(:user, :comments, :likes).map do | post |
                post.attributes.merge(
                    :user => post.user.as_json(only: [:name, :avatar_path]),
                    :comments => post.comments.as_json(only: [:user_id, :text, :created_at]),
                    :likes => post.likes.as_json(only: [:user_id])
                )
            end
            render json: { user: @user.as_json(only: [:id, :name, :avatar_path]), posts: @posts}, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def create
        if @user.is_logged_in
            @post = Post.new({
                user_id: @user[:id],
                text: post_params[:text],
                like: 0,
                post_image_path: random_image(),
            })
            if @post.save
                render json: @post, status: :created
            else
                render json: {status: :unauthorized}
            end
        end
    end

    def post_params
        params.require(:post).permit(:user_id, :text, :image, :like)
    end
end
