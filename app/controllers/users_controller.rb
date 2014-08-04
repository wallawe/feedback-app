class UsersController < ApplicationController
  before_filter :authenticate_user!, :only => [:show]

  def index
    if current_user.admin?
      @users = User.all
    else
      redirect_to root_path
    end
  end

  def show
    @user = User.find(params[:id])
    redirect_to root_path unless @user.id == current_user.id
  end

end
