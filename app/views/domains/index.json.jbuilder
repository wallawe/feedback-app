json.array!(@domains) do |domain|
  json.extract! domain, :id, :url
  json.url domain_url(domain, format: :json)
end
