class LikeController < ApplicationController
    def create
        if user = logged_in
            if !Like.exists?(user_id: user[:id], post_id: like_params[:post_id])
                like = Like.create({
                    user_id: user[:id],
                    post_id: like_params[:post_id]
                })
                if like.save
                    render json: {data: like, status: "liked"}
                else
                    render json: {status: :unauthorized}
                end
                
            # if user already liked the post then destroy the record
            elsif Like.exists?(user_id: user[:id], post_id: like_params[:post_id])
                if like = Like.where({
                    user_id: user[:id],
                    post_id: like_params[:post_id]  
                }).destroy_all
                    render json: {data: like.first, status: "unliked"}
                else
                    render json: {status: :unauthorized}
                end
            end
        else
            render json: {status: :bad_request}
        end
    end

    def show
        if user = logged_in
            like = Like.where({
                user_id: user[:id],
                post_id: :like_params[:post_id]
            })
            render json: like, status: :ok
        else
            render json: {status: :unauthorized}
        end
    end

    def like_params
        params.require(:like).permit(:post_id)
    end
end
