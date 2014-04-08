class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_filter :set_headers
  protect_from_forgery with: :null_session

  def index
    @domain = Domain.find(params[:domain_id])
    #@comments = Comment.all
  end

  def show
  end

  def new
    @domain = Domain.find(params[:domain_id])
    @comment = Comment.new
  end

  def edit
  end

  def create

    @comment = Comment.new(comment_params)
    @user = @comment.domain.user
    @feedback = @comment.feedback
    @submitter = @comment.email

    respond_to do |format|
      if @comment.save
        format.html { redirect_to domain_comments_path, notice: 'comment was successfully created.' }
        format.json { render action: 'show', status: :created, location: @comment }
        ModelMailer.simple_email_send(@user, @submitter, @feedback).deliver
      else
        format.html { render action: 'new' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.html { redirect_to @comment, notice: 'comment was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
    end
  end

  def options
    set_headers
    # this will send an empty request to the clien with 200 status code (OK, can proceed)
    render :text => '', :content_type => 'text/plain'
  end

  private
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
      headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD'
      headers['Access-Control-Allow-Headers'] = '*, x-requested-with, Content-Type, If-Modified-Since, If-None-Match'
      headers['Access-Control-Max-Age'] = '86400'
    end
end
