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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
