class UsersController < ApplicationController
  before_filter :authenticate_user!, :only => [:show, :index]

  def index
    if current_user && current_user.admin?
      @users = User.all.order("created_at asc")
    else
      redirect_to root_path
    end
  end

  def show
    @user = User.find(params[:id])
    redirect_to root_path unless @user.id == current_user.id || current_user.admin?
  end

  def destroy
    if current_user && current_user.admin?
      @user = User.find(params[:id])
      @user.destroy

      respond_to do |format|
        format.html { redirect_to users_path }
      end
    else
      redirect_to root_path
    end
  end

end
