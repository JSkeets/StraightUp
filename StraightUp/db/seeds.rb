
Drink.create!([
  {name: "Margarita", image_url: nil},
  {name: "Long Island Iced Tea", image_url: nil},
  {name: "Tom Collins", image_url: nil},
  {name: "Old Fashioned", image_url: nil},
  {name: "Gin Fizz", image_url: nil},
  {name: "Mai Tai", image_url: nil},
  {name: "Irish Coffee", image_url: nil},
  {name: "Daiquiri", image_url: nil},
  {name: "Gin and Tonic", image_url: nil},
  {name: "Mint Julep", image_url: nil},
  {name: "Menehune Juice", image_url: nil},
  {name: "Vodka", image_url: nil},
  {name: "Cider", image_url: nil},
  {name: "The Godett", image_url: nil},
  {name: "Water", image_url: nil}
])
Location.create!([
  {name: "431 Tehama"},
  {name: "Morro Bay"},
  {name: "The Embarcadaro"},
  {name: "The Ramen Shop"},
  {name: "Giant's Stadium"},
  {name: "Trader Vic's"},
  {name: "Irish Pub"},
  {name: "The Beach"},
  {name: "The Office"},
  {name: "The Joint"},
  {name: "My House"},
  {name: "Taco Truck"},
  {name: "Nick's Wedding"},
  {name: "The Bar"},
  {name: "The Pacific Crest Trail"}
])

User.create!([
  {username: "Test1", email: "Test1", password_digest: "$2a$10$18ne8BpMbZAMFUAxhz0GwOwy4ii3K1F7pnxWGEuOBd4HM5rVwnMQm", session_token: "1KMEUGuS5Xzf4A5ToWtoMg"},
  {username: "John", email: "John", password_digest: "$2a$10$AhHmMm3mWhisUDmgKREvjuQFmY91p52kgIotG125YsxqhizElHA1G", session_token: "CNWbvZE_lCk5lwXR1_dcIA"},
  {username: "Atticus", email: "Ave", password_digest: "$2a$10$fl3HFHdSq.N5ibqIugaUheTZoumg3s3SSHDPnR5jgPR6VJr9WuFiW", session_token: "FUjhm31lTs9Juhuw7EH-mA"},
  {username: "guest", email: "guest", password_digest: "$2a$10$R/IxaCMoqCF/R4zohPV30O97qaVQuNd.ZNhNOG4uk.YCtlX6XF8m.", session_token: "qSB2Mlbd8m6NS5tLw_aX1Q"},
  {username: "Russ", email: "Russ", password_digest: "$2a$10$ncEK3thZI1v2M.fyc3SAheUAMeZwfwzURqm/d9b9EuwyUZC7voGYa", session_token: "SXq1W_5ujZCxAxLAo1JmTA"},
  {username: "Lexi", email: "lexi", password_digest: "$2a$10$fXSNGU7c.ey449Vpnh7uIemR4HCn1bVFGGQbSwlSGYVnVhC5mqIca", session_token: "4YEsFM4La1OHOBVLWDddbg"},
  {username: "Jonny", email: "jon", password_digest: "$2a$10$vcAMeo0jNOx0TknfTxrZ1O52ohVcLb8mdUmRo/oqAWIJpl7zsySTS", session_token: "jryOw0eBTjhLbJ2ZCygK-g"},
  {username: "Jesse", email: "Jesse@hotmail.com", password_digest: "$2a$10$lEfJgzLu9CVNG5MLf/iU2OimaTyGNZ93sp72Iw3SH0Dev0t9vwT.a", session_token: "6epLVwYjRGWfYI6y487qGA"},
  {username: "Ryan", email: "ryan", password_digest: "$2a$10$0CmnEgEYvFZbJWXYpkFe6e0iWlf9S../4AHAP6io9vxQU7QM7nNTS", session_token: "48Ckv0z6t1CuBBqTe1YyNg"},
  {username: "Brian", email: "brian", password_digest: "$2a$10$5lRI/tnk2JNtCsaQ919io.OpH5UhqyaCkswdg6V7Al4HKDgTM0BZK", session_token: "Um2aKiwSQu0z_ziotA5wJQ"},
  {username: "Torrey", email: "torrey", password_digest: "$2a$10$.gHHiYGI/PW5d.o8mv7VFe/XtqS4YTCY4.7BoQ/9jwiRjuQwHmTzu", session_token: "N-ZDKPDrL28AZbk_RZsAKQ"}
])
Review.create!([
  {drink_id: 1, location_id: 1, user_id: 2, rating: 1, body: "Location is too stuffy!"},
  {drink_id: 1, location_id: 12, user_id: 7, rating: 4, body: "Cheap and good!"},
  {drink_id: 13, location_id: 11, user_id: 8, rating: 5, body: "I love a good cider!"},
  {drink_id: 11, location_id: 2, user_id: 6, rating: 5, body: "Surfing and boozing!"},
  {drink_id: 4, location_id: 4, user_id: 3, rating: 3, body: "A little too expensive!"},
  {drink_id: 14, location_id: 13, user_id: 9, rating: 4, body: "Two cherries!"},
  {drink_id: 15, location_id: 14, user_id: 10, rating: 1, body: "Not cold enough!"},
  {drink_id: 9, location_id: 15, user_id: 11, rating: 4, body: "Lovely scenery"}
])
