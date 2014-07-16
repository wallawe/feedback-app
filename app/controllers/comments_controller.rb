class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_filter :set_headers
  protect_from_forgery with: :null_session

  def create

    @comment = Comment.new(comment_params)
    @user = @comment.domain.user
    @feedback = @comment.feedback
    @submitter = @comment.email

    if @comment.save
      render :nothing => true, :status => 200, :content_type => 'text/html'
      #ModelMailer.simple_email_send(@user, @submitter, @feedback).deliver
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  def index
    if current_user
      @domain = Domain.find(params[:domain_id])
      require_ownership_or_admin
    else
      redirect_to root_path
    end
  end

  private
    def require_ownership_or_admin
      redirect_to root_path unless current_user.id == @domain.user.id || current_user.admin?
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:url, :email, :feedback, :domain_id)
    end

    # Set CORS
    def set_headers
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Expose-Headers'] = 'Etag'
      headers['Access-Control-Allow-Methods'] = 'POST'
      headers['Access-Control-Allow-Headers'] = '*, x-requested-with, Content-Type, If-Modified-Since, If-None-Match'
      headers['Access-Control-Max-Age'] = '86400'
    end
end
