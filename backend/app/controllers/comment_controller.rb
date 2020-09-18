class CommentController < ApplicationController
    def index 
        if @user = authorized
            @comments = Comment.all
            render json: @comments
        else
            head(:unauthorized)
        end
    end
    
    def create
        if @user = is_logged_in
            logger.debug @user[:id]
            @comment = Comment.create({
                user_id: @user[:id],
                post_id: comment_params[:post_id],
                text: comment_params[:text]
            })
            if @comment.save
                render json: @comment, status: :created, location: @comment
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
