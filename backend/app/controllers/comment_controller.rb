class CommentController < ApplicationController
    def index 
        @comments = Comment.all
        render json: @comments
    end
    
    def show
    end
    
    def create
        @comment = Comment.create(comment_params)
        if @comment.save
            render json: @comment, status: :created, location: @comment
        else
            render json: @comment.errors, status: :unprocessable_entity
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
