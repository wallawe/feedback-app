module EmbedsHelper

  def initial_display(test)
    if test == true
      "show-display"
    elsif test == false
      "hide-display"
    end
  end

end