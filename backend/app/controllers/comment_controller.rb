class CommentController < ApplicationController
    def index 
        if @user = authorized
            @comments = Comment.all
            render json: @comments
        else
            head(:unauthorized)
        end
    end
    
    def show
    end
    
    def create
        if @user = authorized
            @comment = Comment.create(comment_params)
            if @comment.save
                render json: @comment, status: :created, location: @comment
            else
                head(:bad_request)
            end
        else
            head(:unauthorized)
        end
    end
    
    def update
    end
        
    def destroy
    end

    def comment_params
        params.require(:comment).permit(:post_id, :user_id, :text)
    end
end
