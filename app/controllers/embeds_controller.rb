class EmbedsController < ApplicationController

  def show
    @domain = Domain.find(params[:id]);
    render layout: false
  end

end