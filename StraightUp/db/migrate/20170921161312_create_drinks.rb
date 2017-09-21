class CreateDrinks < ActiveRecord::Migration[5.1]
  def change
    create_table :drinks do |t|
      t.string :name, null: false
      t.string :image_url

      t.timestamps
    end
    add_index :drinks, :name, unique: true
  end
end
