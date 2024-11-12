class Organization::User < ApplicationRecord
    belongs_to :organization
    belongs_to :user, class_name: "::User"
end
