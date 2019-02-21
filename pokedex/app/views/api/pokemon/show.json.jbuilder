# json.extract! @pokemon, :name, :poke_type, :attack, :defense, :moves, :image_url

# json.items do
#   json.extract! @pokemon.items
# end

json.pokemon do
  json.extract! @pokemon, :id, :name, :poke_type, :attack, :defense, :moves, :image_url
end

json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end


 