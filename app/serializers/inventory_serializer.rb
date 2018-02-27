class InventorySerializer < ActiveModel::Serializer
  attributes :id, :product_id, :item, :condition, :price, :owner_id, :borrower_id, :status, :borrowed_date, :return_date


  def title
    object.item 
  end

  def condition
    object.condition
  end

  def price
    object.price
  end

  def status
    true
  end






end
