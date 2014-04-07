class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

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
    @comment.domain = Domain.find(params[:domain_id])

    respond_to do |format|
      if @comment.save
        format.html { redirect_to domain_comments_path, notice: 'comment was successfully created.' }
        format.json { render action: 'show', status: :created, location: @comment }
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

  private
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:url, :email, :feedback, :domain_id)
    end
end