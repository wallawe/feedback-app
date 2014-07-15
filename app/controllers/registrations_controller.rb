class RegistrationsController < Devise::RegistrationsController
  before_filter :update_sanitized_params, if: :devise_controller?

  def update_sanitized_params
    devise_parameter_sanitizer.for(:sign_up) {|u| u.permit(:email, :password, :password_confirmation,
      :domains_attributes => [:url, :tint, :display, :content_type, :title, :field_1, :field_2, :question_1, :question_2, :question_3, :question_4]) }
    devise_parameter_sanitizer.for(:account_update) {|u| u.permit(:email, :password, :password_confirmation, :current_password) }
  end

  def new
    @user = User.new
    @user.domains.build
  end

  def create
    build_resource(sign_up_params)
    sleep 2 if Rails.env.development?
    if resource.save
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_up(resource_name, resource)
        @user = current_user
        respond_to do |format|
          format.html { redirect_to users_path, notice: "success" }
          format.js { }

        end
      else
        set_flash_message :notice, :"signed_up_but_#{resource.inactive_message}" if is_navigational_format?
        expire_session_data_after_sign_in!
        render :json => {:success => true}
      end
    else
      clean_up_passwords resource
      render :json => {:success => false}
    end
  end

  # Signs in a user on sign up. You can overwrite this method in your own
  # RegistrationsController.
  def sign_up(resource_name, resource)
    sign_in(resource_name, resource)
  end

  def sign_up_params
    devise_parameter_sanitizer.sanitize(:sign_up)
  end

end
