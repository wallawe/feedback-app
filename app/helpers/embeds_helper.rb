module EmbedsHelper
  def initial_display(element)
    element == true ? 'block' : 'none'
  end
end