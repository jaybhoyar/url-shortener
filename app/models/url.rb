class Url < ApplicationRecord

  validates :original_link, presence: true, format: URI::regexp(%w[http https])
  validates :slug, presence: true, uniqueness: true
  validates :pinned, inclusion: { in: [ true, false ] }, :default => false

end
