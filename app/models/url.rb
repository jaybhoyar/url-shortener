class Url < ApplicationRecord
  before_validation :set_defaults

  validates :original_link, presence: true, format: URI::regexp(%w[http https])
  # validates :slug, presence: true, uniqueness: true
  # validates :pinned

  def set_defaults
    self.pinned = false if self.new_record?
  end

end
