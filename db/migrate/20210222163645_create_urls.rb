class CreateUrls < ActiveRecord::Migration[6.1]
  def change
    create_table :urls do |t|
      t.string :original_link
      t.string :slug
      t.integer :click_count
      t.boolean :pinned

      t.timestamps
    end
  end
end
