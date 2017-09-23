@drinks.each do |drink|
  json.set! drink.id do
    json.extract! drink, :id, :name
  end
end 
