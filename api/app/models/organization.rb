class Organization < ApplicationRecord
    has_many :organization_users, class_name: "Organization::User"
    has_many :users, through: :organization_users
end
