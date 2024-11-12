class User < ApplicationRecord
    after_create :log_new_user
    has_many :organization_users, class_name: "Organization::User"
    has_many :organizations, through: :organization_users

    private
    def log_new_user
        puts "A new user was registered"
    end
end
