class DomainsController < ApplicationController
  before_action :set_domain, only: [:show, :edit, :update, :destroy]
  before_filter :require_current_user

  def index
    if current_user.admin?
      @total_responses = Comment.all
      @domains = Domain.all.order("created_at asc")
    else
      redirect_to root_path
    end
  end

  def show
    redirect_to root_path unless current_user.id == @domain.user.id || current_user.admin?
  end

  def new
    @domain = Domain.new
  end

  def edit
    redirect_to root_path unless current_user.id == @domain.user.id || current_user.admin?
  end

  def create
    @domain = Domain.new(domain_params)
    @domain.user = current_user

    respond_to do |format|
      if @domain.save
        format.html { redirect_to user_path(current_user), notice: 'Your survey was successfully created' }
        format.json { render action: 'show', status: :created, location: @domain }
      else
        format.html { render action: 'new' }
        format.json { render json: @domain.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @domain.update(domain_params)
        format.html { redirect_to user_path(current_user), notice: 'Your survey was successfully updated' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @domain.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @domain.destroy
    respond_to do |format|
      format.html { redirect_to user_path(current_user) }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_domain
      @domain = Domain.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def domain_params
      params.require(:domain).permit(:url, :user_id, :tint, :content_type, :title, :field_1, :field_2, :question_1, :question_2, :question_3, :question_4, :display, :has_donated)
    end
end
