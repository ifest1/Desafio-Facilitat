class PostController < ApplicationController

    def index
        if user = logged_in
            posts = Post.includes(:user, :comments, :likes).map do | post |
                post.attributes.merge(
                    :post_image => post.post_image_url,
                    :user => post.user.name,
                    :user_avatar => post.user.featured_image_url,
                    :comments => post.comments.includes(:user).map do | comment |
                        comment.attributes.merge(
                            :name => user.name,
                            :user_avatar => user.featured_image_url,
                        )
                    end,
                    :likes => post.likes,
                    :likes_amount => post.likes.count
                )
            end
            
            render json: { 
                user: {
                    name: user.name, 
                    avatar_path: user.featured_image_url
                }, 
                posts: posts
                }, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def create
        if user = logged_in
            post = Post.new({
                user_id: user[:id],
                text: params[:text],
                post_image: params[:post_image],
            })
            if post.save
                render json: post, status: :created
            else
                render json: {status: :unauthorized}
            end
        end
    end

    def post_params
        params.require(:post).permit(:text, :post_image)
    end
end
