class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken
        before_action :configure_permistted_parameters, if: :devise_controller?

        protected
          def
            devise_parameter_sanitizer.permit(:sign_up, keys: [:fname, :lname, :age])
          end
end
