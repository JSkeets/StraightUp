# == Schema Information
#
# Table name: locations
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  has_many :reviews
end
