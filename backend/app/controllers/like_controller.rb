class LikeController < ApplicationController
    def create
        if @user = is_logged_in 
            if !Like.exists?(user_id: @user[:id], post_id: like_params[:post_id])
                @like = Like.create({
                    user_id: @user[:id],
                    post_id: like_params[:post_id]
                })
                if @like.save
                    render json: {data: @like, status: "liked"}
                else
                    render json: { status: :unauthorized}
                end

            elsif Like.exists?(user_id: @user[:id], post_id: like_params[:post_id])
                if @like = Like.where({
                    user_id: @user[:id],
                    post_id: like_params[:post_id]  
                }).destroy_all
                    render json: {data: @like.first, status: "unliked"}
                else
                    render json: {status: :unauthorized}
                end
            end
        else
            render json: {status: :bad_request}
        end
    end

    def show
        if @user = is_logged_in
            @like = Like.where({
                user_id: @user[:id],
                post_id: :like_params[:post_id]
            })
            render json: @like, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def post_likes
        if @user = is_logged_in
            @post_likes = Like.where({post_id: like_params[:post_id]})
            if @post_likes
                render json: @post_likes, status: :ok
            else
                render json: {status: :bad_request}
            end
        end
    end

    def like_params
        params.require(:like).permit(:post_id)
    end
end
