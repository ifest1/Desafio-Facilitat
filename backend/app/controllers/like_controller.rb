class LikeController < ApplicationController
    def create
        if @user = is_logged_in
            @like = Like.create({
                user_id: @user[:user_id],
                post_id: like_params[:post_id]
            })
            if @like.save
                render json: @like, status: :created
            else
                render json: {status: :unauthorized}
            end
        else
            render json: {status: :bad_request}
        end

    end

    def show
        if @user = is_logged_in
            @like = Like.where({
                user_id: @user[:user_id],
                post_id: :like_params[:post_id]
            })
            render json: @like, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def destroy
        if @user = is_logged_in
            if @like = Like.destroy({
                post_id: like_params[:post_id],
                user_id: @user[:user_id]
            })
                render json: {status: :ok}
            else
                render json: {status: :bad_request}
            end
        else
            render json: {status: :unauthorized}
        end
    end

    def like_params
        params.require(:like).permit(:post_id)
    end
end
