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
  end

end
