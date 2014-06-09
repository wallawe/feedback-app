module CommentsHelper
  def field_display(comment)
    if comment.email.blank?
      content_tag(:span, :class => "not-provided") do
        "not provided"
      end
    else
      comment.email
    end
  end
end
