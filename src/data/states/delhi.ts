import type { StateData } from "../types";

export const delhi: StateData = {
  id: "IN-DL",
  name: "Delhi",
  capital: "New Delhi",
  stateIntro: "Resting along the banks of the Yamuna and spreading outward into a vast urban expanse, Delhi is a city where layers of time unfold side by side. Ancient paths, historic quarters, and enduring traditions coexist with fast-moving streets, modern neighborhoods, and a constant hum of activity. While its past is etched into monuments, old markets, and living memories, present-day Delhi thrives as a center of governance, culture, education, and everyday ambition. From quiet early mornings in heritage lanes to vibrant evenings filled with conversation and movement, Delhi invites you to experience a place where history does not stand apart, but moves actively within the pulse of contemporary life.",
  categories: {
    touristPlaces: [
      {
        title: "Red Fort",
        description:
          "A UNESCO World Heritage Site and symbol of Mughal grandeur, where India\u2019s Independence Day is celebrated.",
      },
      {
        title: "Qutub Minar",
        description:
          "A 73-meter-high victory tower built in the 12th century, surrounded by intricate Indo-Islamic architecture.",
      },
      {
        title: "India Gate",
        description:
          "A war memorial dedicated to Indian soldiers, surrounded by lush gardens.",
      },
      {
        title: "Lotus Temple",
        description:
          "A Bah\u00e1\u02bc\u00ed House of Worship known for its lotus-shaped architecture and tranquil ambience.",
      },
      {
        title: "Humayun\u2019s Tomb",
        description:
          "A precursor to the Taj Mahal and a UNESCO World Heritage Site.",
      },
      {
        title: "Rashtrapati Bhavan & Parliament House",
        description:
          "Political heart of India, known for grand architecture and ceremonial boulevards.",
      },
      {
        title: "Akshardham Temple",
        description:
          "A sprawling spiritual complex showcasing Indian culture and devotion.",
      },
    ],
    food: [
      {
        title: "Rajma Chawal",
        description:
          "Red kidney beans simmered in tomato gravy, served with steamed rice.",
        subtype: "main",
      },
      {
        title: "Chole Bhature",
        description:
          "Spiced chickpeas served with puffed, deep-fried flour bread.",
        subtype: "main",
      },
      {
        title: "Paneer Butter Masala",
        description:
          "Soft paneer cubes in rich tomato-cashew gravy with cream and butter.",
        subtype: "main",
      },
      {
        title: "Aloo Matar",
        description: "Green peas and potatoes in spiced tomato-onion curry.",
        subtype: "main",
      },
      {
        title: "Kadhi Pakora",
        description:
          "Yogurt-based gram flour curry with soft pakoras (fritters).",
        subtype: "main",
      },
      {
        title: "Gobhi Paratha",
        description:
          "Cauliflower-stuffed flatbread, served with curd and pickle.",
        subtype: "main",
      },
      {
        title: "Baingan Bharta",
        description:
          "Roasted brinjal mashed and cooked with garlic, onions, and mustard oil.",
        subtype: "main",
      },
      {
        title: "Poori-Sabzi",
        description: "Deep-fried wheat poori with mildly spiced potato curry.",
        subtype: "main",
      },
      {
        title: "Tandoori Roti",
        description:
          "Traditional wheat roti made in tandoor, served with dal or paneer.",
        subtype: "main",
      },
      {
        title: "Vegetable Biryani (Delhi Style)",
        description:
          "Layered rice dish with saffron, vegetables, and fried onions.",
        subtype: "main",
      },
      {
        title: "Hari Dhaniya Pudina Chutney",
        description: "Spicy and tangy green chutney with mint and coriander.",
        subtype: "condiment",
      },
      {
        title: "Imli Chutney",
        description:
          "Tamarind-jaggery sauce flavored with dry ginger and cumin.",
        subtype: "condiment",
      },
      {
        title: "Mooli Ka Achaar",
        description: "Spicy radish pickle with mustard oil and chili.",
        subtype: "condiment",
      },
      {
        title: "Onion Rings with Chaat Masala",
        description: "Classic Delhi-style side served with lemon.",
        subtype: "condiment",
      },
      {
        title: "Boondi Raita",
        description: "Cooling curd dish with fried gram flour pearls.",
        subtype: "condiment",
      },
      {
        title: "Moong Dal Halwa (Savory version)",
        description: "Dense lentil paste with ghee and salt (in small bites).",
        subtype: "condiment",
      },
      {
        title: "Paneer Pakora",
        description:
          "Cottage cheese dipped in gram flour batter and deep-fried.",
        subtype: "condiment",
      },
      {
        title: "Papad",
        description: "Roasted or fried, served with masala sprinkle.",
        subtype: "condiment",
      },
      {
        title: "Kacha Aam Slaw",
        description: "Raw mango slices with salt and chili powder.",
        subtype: "condiment",
      },
      {
        title: "Aloo Chaat",
        description:
          "Crispy potato tossed with tangy chaat masala and lime juice.",
        subtype: "condiment",
      },
      {
        title: "Sweet Lassi",
        description:
          "Thick and creamy, topped with saffron and crushed dry fruits.",
        subtype: "drink",
      },
      {
        title: "Nimbu Pani (Shikanji)",
        description: "Spiced lemonade with rock salt and roasted cumin.",
        subtype: "drink",
      },
      {
        title: "Masala Chaas",
        description: "Spiced buttermilk served chilled with mint.",
        subtype: "drink",
      },
      {
        title: "Kanji",
        description:
          "Fermented black carrot drink with mustard, served cold in winter.",
        subtype: "drink",
      },
      {
        title: "Gajar ka Halwa",
        description: "Carrot dessert slow-cooked in milk and ghee.",
        subtype: "dessert",
      },
      {
        title: "Rabri Falooda",
        description: "Layered dessert with thick milk and vermicelli.",
        subtype: "dessert",
      },
      {
        title: "Jalebi",
        description: "Deep-fried spirals dipped in sugar syrup.",
        subtype: "dessert",
      },
      {
        title: "Paneer Ladoo",
        description: "Soft sweets made from paneer and sugar.",
        subtype: "dessert",
      },
      {
        title: "Delhi Bread Basket",
        description:
          "Includes Tandoori Roti, Stuffed Naan, Roomali Roti, and Bedmi Puri — a diverse mix from Mughlai to street food.",
        subtype: "breadbasket",
      },
      {
        title: "Veg Biryani (Delhi Style)",
        description:
          "Basmati rice cooked with saffron, fried onions, mixed vegetables, and garam masala — often served with raita.",
        subtype: "rice",
      },
      {
        title: "Paneer Tawa Pulao",
        description:
          "Spiced rice stir-fried on a griddle with paneer cubes, tomato, capsicum, and pav bhaji masala — a street-style favorite.",
        subtype: "rice",
      },
    ],
    culture: [
      {
        title: "Capital of Many Empires",
        description:
          "From the Mauryas to the Mughals to the British, Delhi has seen centuries of rule.",
      },
      {
        title: "Purani Dilli (Old Delhi)",
        description:
          "Narrow lanes, Mughal-era mansions (havelis), and Urdu poetry echo here.",
      },
      {
        title: "Lutyens\u2019 Delhi",
        description:
          "Wide boulevards and colonial buildings designed by Sir Edwin Lutyens.",
      },
      {
        title: "Cultural Hubs",
        description:
          "Venues like India Habitat Centre, Kamani Auditorium, and NSD showcase theater, art, and music.",
      },
      {
        title: "Dilli Haat",
        description:
          "A crafts bazaar where artisans from all states display their traditional art and cuisine.",
      },
    ],
    festivals: [
      {
        title: "Republic Day Parade",
        description:
          "Grand celebration on Rajpath with floats, military bands, and tableaux from every state.",
      },
      {
        title: "Diwali & Holi",
        description:
          "Celebrated with lights, sweets, colors, and street revelry.",
      },
      {
        title: "Eid & Christmas",
        description:
          "Diverse communities celebrate all major festivals with equal fervor.",
      },
      {
        title: "Qutub Festival",
        description: "Music and dance near the Qutub Minar.",
      },
      {
        title: "Delhi International Arts Festival",
        description: "A global stage for performing arts, held annually.",
      },
    ],
    nature: [
      {
        title: "Lodhi Gardens",
        description:
          "Mughal tombs nestled in manicured gardens, perfect for walks and photography.",
      },
      {
        title: "Yamuna Biodiversity Park",
        description: "A green initiative to revive riverine ecology.",
      },
      {
        title: "Asola Bhatti Wildlife Sanctuary",
        description: "Urban sanctuary with peacocks, nilgai, and eco trails.",
      },
      {
        title: "Aravalli Ridges",
        description:
          "Protecting Delhi from desertification and offering green retreats.",
      },
      {
        title: "Sanjay Van",
        description:
          "A city forest popular for birdwatching and nature trails.",
      },
    ],
    people: [
      {
        title: "Razia Sultana",
        description:
          "India\u2019s first and only female Sultan, ruled from Delhi in the 13th century.",
      },
      {
        title: "Mirza Ghalib",
        description:
          "Renowned Urdu poet whose haveli in Old Delhi is a literary landmark.",
      },
      {
        title: "Mahatma Gandhi",
        description:
          "Spent his final days at Birla House (now Gandhi Smriti) in Delhi.",
      },
      {
        title: "Shaheed Bhagat Singh",
        description:
          "Imprisoned and tried in Delhi; his defiance inspired generations.",
      },
      {
        title: "Legend of Indraprastha",
        description:
          "Delhi is said to be built upon the site of the Pandavas\u2019 ancient capital.",
      },
    ],
    crafts: [
      {
        title: "Zardozi & Embroidery",
        description:
          "Mughal-style gold thread embroidery used in sherwanis and bridal attire.",
      },
      {
        title: "Blue Pottery & Marble Work",
        description:
          "Art pieces influenced by nearby Rajasthan and Agra artisans.",
      },
      {
        title: "Miniature Paintings & Calligraphy",
        description: "Preserved in museums and private collections.",
      },
      {
        title: "Kite Making & Pottery",
        description: "Traditional crafts practiced in Old Delhi.",
      },
      {
        title: "Paper M\u00e2ch\u00e9 & Wooden Toys",
        description: "Sold in festivals and haats.",
      },
    ],
    trivia: [
      {
        title: "City of Seven Cities",
        description:
          "Delhi has been rebuilt over seven times by different rulers.",
      },
      {
        title: "Second Most Populous City in the World",
        description: "After Tokyo, as per recent estimates.",
      },
      {
        title:
          "Site of India\u2019s Largest Book Fair, Auto Expo & Trade Fairs",
        description: "Delhi is India\u2019s cultural and commercial hub.",
      },
      {
        title: "Connaught Place",
        description:
          "One of the world\u2019s most expensive commercial real estates.",
      },
      {
        title: "Metro Network",
        description: "One of the largest and most advanced in Asia.",
      },
    ],
  },
  miniMap: {
    pins: [
      {
        title: "Red Fort & Jama Masjid",
        description: "Mughal legacy",
      },
      {
        title: "India Gate & Rajpath",
        description: "National pride and ceremonies",
      },
      {
        title: "Qutub Minar & Mehrauli",
        description: "Historical depth",
      },
      {
        title: "Chandni Chowk",
        description: "Food and market experience",
      },
      {
        title: "Akshardham & Lotus Temple",
        description: "Spiritual icons",
      },
      {
        title: "Connaught Place",
        description: "Colonial circle and commerce",
      },
      {
        title: "Lodhi Garden & Hauz Khas",
        description: "Heritage and green spaces",
      },
      {
        title: "South Delhi Museums",
        description: "Culture and modern art",
      },
    ],
  },
};
