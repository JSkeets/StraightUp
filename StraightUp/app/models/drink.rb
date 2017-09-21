# == Schema Information
#
# Table name: drinks
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Drink < ApplicationRecord
  validates :name, uniqueness: true, presence: true

end
