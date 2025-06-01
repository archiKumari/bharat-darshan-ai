import type { StateData } from "../types";

export const rajasthan: StateData = {
  id: "IN-RJ",
  name: "Rajasthan",
  capital: "Jaipur",
  categories: {
    touristPlaces: [
      {
        title: "Jaipur (Pink City)",
        description:
          "Capital city with iconic landmarks like Hawa Mahal, City Palace, Amber Fort, and Jantar Mantar (UNESCO site).",
      },
      {
        title: "Udaipur (City of Lakes)",
        description:
          "Known for Lake Pichola, City Palace, and romantic lakefront palaces.",
      },
      {
        title: "Jodhpur (Blue City)",
        description:
          "Dominated by the majestic Mehrangarh Fort and vibrant blue-painted houses.",
      },
      {
        title: "Jaisalmer (Golden City)",
        description:
          "Desert citadel with Sonar Qila (Golden Fort), camel safaris, and sand dunes.",
      },
      {
        title: "Pushkar",
        description:
          "Sacred town with Brahma Temple and the world-famous Pushkar Camel Fair.",
      },
      {
        title: "Mount Abu",
        description:
          "Rajasthan\u2019s only hill station, home to the stunning Dilwara Jain Temples and Nakki Lake.",
      },
      {
        title: "Chittorgarh & Kumbhalgarh Forts",
        description: "Grand fortresses representing Rajput valor and history.",
      },
    ],
    food: [
      {
        title: "Dal Baati Churma",
        description:
          "Hard baked wheat rolls served with spicy dal and sweet wheat-jaggery churma.",
        subtype: "main",
      },
      {
        title: "Gatte ki Sabzi",
        description: "Besan dumplings simmered in tangy yogurt curry.",
        subtype: "main",
      },
      {
        title: "Ker Sangri",
        description:
          "Dried desert beans and berries sautéed with spices and curd.",
        subtype: "main",
      },
      {
        title: "Papad Mangodi ki Sabzi",
        description:
          "Sun-dried lentil nuggets and papad in tomato-yogurt gravy.",
        subtype: "main",
      },
      {
        title: "Sev Tamatar Sabzi",
        description: "Tomato curry topped with crisp gram flour sev.",
        subtype: "main",
      },
      {
        title: "Aloo Pyaaz Sabzi",
        description: "Dry potato-onion curry spiced with amchur and red chili.",
        subtype: "main",
      },
      {
        title: "Bajre ki Roti",
        description:
          "Rustic millet flatbread served with ghee and garlic chutney.",
        subtype: "main",
      },
      {
        title: "Missi Roti",
        description: "Spiced wheat and besan flatbread with ajwain.",
        subtype: "main",
      },
      {
        title: "Methi Thepla",
        description:
          "Flatbread made from fenugreek leaves, ideal for travel or side dish.",
        subtype: "main",
      },
      {
        title: "Khichdi (Moong Dal or Bajra)",
        description: "Mild and wholesome, often eaten with kadhi or curd.",
        subtype: "main",
      },
      {
        title: "Lasan ki Chutney",
        description: "Fiery red garlic chutney with mustard oil.",
        subtype: "condiment",
      },
      {
        title: "Kachri Chutney",
        description: "Tangy chutney made from wild melon native to Rajasthan.",
        subtype: "condiment",
      },
      {
        title: "Aam ka Achaar",
        description: "Spicy mango pickle with fenugreek and mustard.",
        subtype: "condiment",
      },
      {
        title: "Ker Sangri Dry Mix",
        description: "A dry, spiced version eaten as side or snack.",
        subtype: "condiment",
      },
      {
        title: "Masala Mirch",
        description: "Stuffed green chilies roasted or fried.",
        subtype: "condiment",
      },
      {
        title: "Ghevar Chutney (Sweet version)",
        description: "Served in some Marwari homes as a jaggery-coconut mix.",
        subtype: "condiment",
      },
      {
        title: "Boondi Raita",
        description: "Yogurt mixed with spiced boondi and roasted cumin.",
        subtype: "condiment",
      },
      {
        title: "Onion Rings with Lemon",
        description: "Served raw with salt and chili powder.",
        subtype: "condiment",
      },
      {
        title: "Sun-dried Badi Fry",
        description: "Crisp urad dal nuggets, fried and served as a topping.",
        subtype: "condiment",
      },
      {
        title: "Papad (Bikaneri Style)",
        description: "Thin, crisp, spicy lentil wafers.",
        subtype: "condiment",
      },
      {
        title: "Chhach (Spiced Buttermilk)",
        description: "Cooled curd drink with cumin and asafoetida.",
        subtype: "drink",
      },
      {
        title: "Kairi Panna",
        description: "Raw mango cooler with black salt and mint.",
        subtype: "drink",
      },
      {
        title: "Gud-Lemon Sharbat",
        description: "Sweet and sour jaggery-lemon drink.",
        subtype: "drink",
      },
      {
        title: "Thandai (Non-festival version)",
        description: "Milk blended with fennel, cardamom, and poppy seeds.",
        subtype: "drink",
      },
      {
        title: "Ghevar",
        description: "Disc-shaped sweet soaked in syrup and topped with rabri.",
        subtype: "dessert",
      },
      {
        title: "Moong Dal Halwa",
        description: "Ghee-laden lentil dessert.",
        subtype: "dessert",
      },
      {
        title: "Churma Ladoo",
        description: "Wheat and jaggery laddus with ghee.",
        subtype: "dessert",
      },
      {
        title: "Mawa Kachori",
        description: "Stuffed and syrup-dipped sweet kachoris.",
        subtype: "dessert",
      },
      {
        title: "Rajasthan Bread Basket",
        description:
          "Includes Bajra Roti, Missi Roti, Makki Roti, and Tandoori Roti — all deeply rooted in the desert cuisine of Rajasthan.",
        subtype: "breadbasket",
      },
      {
        title: "Bajre ka Pulao",
        description:
          "A traditional pearl millet pilaf cooked with local vegetables, spices, and ghee — earthy and satisfying.",
        subtype: "rice",
      },
      {
        title: "Khichdi with Moth Beans & Bajra",
        description:
          "Hearty millet-based khichdi using bajra and moth dal, spiced with turmeric and cumin — a rural comfort dish.",
        subtype: "rice",
      },
    ],
    culture: [
      {
        title: "Rajputana Legacy",
        description:
          "Tales of chivalry, honor, and resistance against invaders.",
      },
      {
        title: "Folk Dances",
        description:
          "Ghoomar, Kalbelia, and Bhavai are world-renowned for their grace and color.",
      },
      {
        title: "Royal Palaces & Havelis",
        description:
          "Ornate residences with frescoes, courtyards, and mirror work.",
      },
      {
        title: "Colorful Attire",
        description:
          "Women wear ghagras with mirror-work blouses and odhnis; men wear turbans and angrakhas.",
      },
      {
        title: "Musical Traditions",
        description:
          "Instruments like sarangi, algoza, and dholak accompany traditional ballads.",
      },
    ],
    festivals: [
      {
        title: "Desert Festival (Jaisalmer)",
        description:
          "Celebrates desert culture with camel races, music, and costumes.",
      },
      {
        title: "Teej & Gangaur",
        description:
          "Celebrated by women with fasting, songs, and processions for marital bliss.",
      },
      {
        title: "Pushkar Fair",
        description:
          "A spectacular camel and cattle fair with cultural events and handicraft bazaars.",
      },
      {
        title: "Mewar Festival (Udaipur)",
        description:
          "Celebrates spring with processions, folk dance, and lake rituals.",
      },
      {
        title: "Marwar Festival (Jodhpur)",
        description:
          "Dedicated to Rajput heroes, featuring folk music and horse-riding events.",
      },
      {
        title: "Diwali & Holi",
        description: "Celebrated with royal grandeur across the state.",
      },
    ],
    nature: [
      {
        title: "Thar Desert",
        description:
          "India\u2019s only desert ecosystem, known for camel safaris and sand dunes.",
      },
      {
        title: "Ranthambore National Park",
        description:
          "Tiger reserve with ancient ruins nestled in dry deciduous forest.",
      },
      {
        title: "Keoladeo National Park (Bharatpur)",
        description: "UNESCO site and paradise for bird lovers.",
      },
      {
        title: "Mount Abu",
        description:
          "Lush forested hill station with serene lakes and viewpoints.",
      },
      {
        title: "Sariska Tiger Reserve",
        description:
          "A wildlife sanctuary with leopards, hyenas, and ruins of temples.",
      },
    ],
    people: [
      {
        title: "Maharana Pratap",
        description:
          "Rajput king and freedom symbol, known for the Battle of Haldighati.",
      },
      {
        title: "Mirabai",
        description:
          "Devotee-poetess of Krishna, born in Merta (Rajasthan), revered in Bhakti tradition.",
      },
      {
        title: "Panna Dhai",
        description:
          "The legendary nurse who sacrificed her own son to save Prince Udai Singh.",
      },
      {
        title: "Rani Padmini (Chittorgarh)",
        description:
          "Symbol of honor and sacrifice, known for committing jauhar during a siege.",
      },
      {
        title: "Bhairon Singh Shekhawat",
        description: "Former Vice President of India, hailed from Rajasthan.",
      },
    ],
    crafts: [
      {
        title: "Block Printing (Bagru & Sanganer)",
        description: "Hand-printed textiles with natural dyes.",
      },
      {
        title: "Blue Pottery (Jaipur)",
        description: "Iconic glazed pottery in blue and white patterns.",
      },
      {
        title: "Miniature Paintings (Kishangarh & Mewar)",
        description: "Detailed artworks depicting royal life and mythology.",
      },
      {
        title: "Mojaris & Leatherwork",
        description: "Colorful handcrafted shoes and bags.",
      },
      {
        title: "Jewelry & Kundan Work",
        description:
          "Traditional adornments including borla, nath, and bajubandh.",
      },
      {
        title: "Marble Carving & Lac Bangles",
        description: "Found in Jaipur and Udaipur.",
      },
    ],
    trivia: [
      {
        title: "Land of Forts",
        description:
          "Rajasthan has the highest number of forts in India, many are UNESCO sites.",
      },
      {
        title: "Color-Coded Cities",
        description:
          "Jaipur (pink), Jodhpur (blue), Udaipur (white), Jaisalmer (golden).",
      },
      {
        title: "Camel Capital",
        description: "Rajasthan has the largest camel population in India.",
      },
      {
        title: "Desert State with a Hill Station",
        description:
          "Mount Abu offers a cool contrast to the Thar\u2019s heat.",
      },
      {
        title: "Ghewar from Rajasthan",
        description:
          "A sweet that has reached international fame during festive seasons.",
      },
    ],
  },
  miniMap: {
    pins: [
      {
        title: "Jaipur",
        description: "Pink City, forts, palaces",
      },
      {
        title: "Udaipur",
        description: "Lakes and romance",
      },
      {
        title: "Jodhpur",
        description: "Forts and desert blue streets",
      },
      {
        title: "Jaisalmer",
        description: "Sand dunes and Golden Fort",
      },
      {
        title: "Pushkar",
        description: "Pilgrimage and fair",
      },
      {
        title: "Chittorgarh",
        description: "Fort and Rajput valor",
      },
      {
        title: "Mount Abu",
        description: "Hill station and Jain temples",
      },
      {
        title: "Ranthambore",
        description: "Wildlife and royal ruins",
      },
    ],
  },
};
