class Url < ApplicationRecord

  validates :original_link, presence: true, length: { maximum: 255 }, format: URI::regexp(%w[http https])
  # validates :slug, presence: true, uniqueness: true

end
