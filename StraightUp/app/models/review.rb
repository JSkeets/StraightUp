# == Schema Information
#
# Table name: reviews
#
#  id          :integer          not null, primary key
#  drink_id    :integer
#  location_id :integer
#  user_id     :integer
#  rating      :integer
#  body        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Review < ApplicationRecord
  validates :drink_id, :location_id, :user_id, :rating, :body, presence: true

  belongs_to :drink
  belongs_to :location
  belongs_to :user
end
