class CommentController < ApplicationController
    def get_post_comments
        if user = logged_in
            comments = Comment.where({post_id: comment_params[:post_id]}).includes(:user).map do | comment |
                comment.attributes.merge(comment.user.as_json(only: [:name, :avatar_path, :text]))
            end
            render json: comments, status: :ok
        else
            render json: {status: :bad_request}
        end
    end
    def create
        if user = logged_in
            logger.debug user[:id]
            comment = Comment.create({
                user_id: user[:id],
                post_id: comment_params[:post_id],
                text: comment_params[:text]
            })
            if comment.save
                render json: comment, status: :created, location: comment
            else
                render json: {status: :bad_request}
            end
        else
            render json: {status: :unauthorized}
        end
    end

    def comment_params
        params.require(:comment).permit(:post_id, :text)
    end
end
