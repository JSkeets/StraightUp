class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :drink_id
      t.integer :location_id
      t.integer :user_id
      t.integer :rating
      t.text :body

      t.timestamps
    end
    add_index :reviews, :drink_id
    add_index :reviews, :location_id
    add_index :reviews, :user_id 
  end
end
