import type { StateData } from "../types";

export const haryana: StateData = {
  id: "IN-HR",
  name: "Haryana",
  capital: "Chandigarh",
  categories: {
    touristPlaces: [
      {
        title: "Kurukshetra",
        description:
          "A sacred city where the epic Mahabharata war took place; home to Brahma Sarovar and Jyotisar (Gita Sthali).",
      },
      {
        title: "Sultanpur Bird Sanctuary",
        description:
          "A haven for birdwatchers near Delhi, housing migratory and resident birds.",
      },
      {
        title: "Pinjore Gardens (Yadavindra Gardens)",
        description:
          "17th-century Mughal-style terraced garden with fountains and floral pathways.",
      },
      {
        title: "Morni Hills",
        description:
          "The only hill station in Haryana, ideal for trekking and nature escapes.",
      },
      {
        title: "Panipat",
        description:
          "Historic battleground of three major wars; now home to the Panipat Museum and Kabuli Bagh Mosque.",
      },
      {
        title: "Hathnikund Barrage",
        description:
          "A picturesque site near Yamuna Nagar that supplies water and supports eco-tourism.",
      },
    ],
    food: [
      {
        title: "Bajre ki Khichdi",
        description:
          "Nutritious millet and moong dal porridge, served with ghee and curd.",
        subtype: "main",
      },
      {
        title: "Missi Roti",
        description:
          "Spiced flatbread made from wheat and gram flour with carom seeds.",
        subtype: "main",
      },
      {
        title: "Besan Masala Roti",
        description:
          "Chickpea flour-based flatbread flavored with green chilies and onions.",
        subtype: "main",
      },
      {
        title: "Aloo Rasedar",
        description: "Thin-spiced potato curry often eaten with poori or roti.",
        subtype: "main",
      },
      {
        title: "Ghiya Sabzi (Lauki Curry)",
        description: "Bottle gourd cooked in a simple, light tomato gravy.",
        subtype: "main",
      },
      {
        title: "Kaddu ki Sabzi",
        description:
          "Slightly sweet and tangy pumpkin dish cooked with fenugreek seeds.",
        subtype: "main",
      },
      {
        title: "Bathua Raita Rice",
        description:
          "Seasonal bathua leaves mixed in curd and served over rice.",
        subtype: "main",
      },
      {
        title: "Hara Dhania Cholia",
        description: "Green chickpeas in spiced onion-tomato masala.",
        subtype: "main",
      },
      {
        title: "Bhutte Ka Pulao",
        description:
          "Sweet corn rice with mild masala, often served with curd.",
        subtype: "main",
      },
      {
        title: "Tilwale Aloo",
        description:
          "Sesame-coated baby potatoes sautéed in mustard oil and spices.",
        subtype: "main",
      },
      {
        title: "Bathua Raita",
        description:
          "Yogurt-based dip made with bathua leaves and roasted cumin.",
        subtype: "condiment",
      },
      {
        title: "Lehsun-Tamatar Chutney",
        description: "Garlic and tomato chutney with chili and mustard oil.",
        subtype: "condiment",
      },
      {
        title: "Green Chutney (Hara Dhaniya)",
        description: "Made with coriander, mint, ginger, and lemon.",
        subtype: "condiment",
      },
      {
        title: "Mooli-Achar (Radish Pickle)",
        description: "Tangy and crunchy, fermented in mustard oil.",
        subtype: "condiment",
      },
      {
        title: "Gajar-Gobhi-Shalgam Pickle",
        description: "Winter vegetable pickle with mustard and turmeric.",
        subtype: "condiment",
      },
      {
        title: "Roasted Papad",
        description: "Crisp side typically served with meals.",
        subtype: "condiment",
      },
      {
        title: "Chane ka Sattu",
        description:
          "Dry roasted gram flour, served raw with salt and green chili.",
        subtype: "condiment",
      },
      {
        title: "Onion Salad with Mustard Oil",
        description: "Raw onion slices with salt and mustard oil dressing.",
        subtype: "condiment",
      },
      {
        title: "Tandoori Bhindi",
        description: "Marinated okra cooked in dry masala.",
        subtype: "condiment",
      },
      {
        title: "Chachiya Chutney",
        description:
          "Traditional side made with crushed raw tomato, onion, and curd.",
        subtype: "condiment",
      },
      {
        title: "Lassi (Sweet or Salted)",
        description: "Whisked curd served chilled with or without sugar.",
        subtype: "drink",
      },
      {
        title: "Kachi Lassi",
        description: "Buttermilk with green chili, mint, and coriander.",
        subtype: "drink",
      },
      {
        title: "Hara Dhaniya Pani",
        description: "Coriander and lemon-infused digestive drink.",
        subtype: "drink",
      },
      {
        title: "Saunf Sherbet",
        description: "Cooling drink made from fennel seeds and jaggery.",
        subtype: "drink",
      },
      {
        title: "Churma",
        description: "Crushed wheat sweet with jaggery and ghee.",
        subtype: "dessert",
      },
      {
        title: "Meethe Chawal",
        description: "Sweet rice with saffron and nuts.",
        subtype: "dessert",
      },
      {
        title: "Ghevar",
        description: "Disc-shaped dessert soaked in syrup.",
        subtype: "dessert",
      },
      {
        title: "Besan Ladoo",
        description: "Roasted gram flour balls with ghee.",
        subtype: "dessert",
      },
    ],
    culture: [
      {
        title: "Haryanvi Folk Dances",
        description:
          "Ghoomar, Phag, and Loor are traditional dances performed during festivals and harvests.",
      },
      {
        title: "Rural Lifestyle",
        description:
          "Village chaupal, wrestling (kushti), and animal fairs reflect traditional community life.",
      },
      {
        title: "Language & Dialect",
        description:
          "Haryanvi, a dialect of Hindi, is known for its directness and rhythm.",
      },
      {
        title: "Traditional Attire",
        description:
          "Men wear dhoti-kurta and pagri (turban); women wear ghagra-choli with dupattas.",
      },
      {
        title: "Folk Music",
        description:
          "Ballads and songs revolve around bravery, romance, and agriculture.",
      },
    ],
    festivals: [
      {
        title: "Teej",
        description:
          "Celebrated by women with swings, songs, and traditional attire.",
      },
      {
        title: "Holi & Diwali",
        description: "Marked with community events, dance, and sweets.",
      },
      {
        title: "Gita Jayanti",
        description:
          "Celebrated in Kurukshetra with spiritual talks, Gita recitations, and exhibitions.",
      },
      {
        title: "Baisakhi",
        description: "A harvest festival celebrated with joy in rural areas.",
      },
      {
        title: "Gangore Festival",
        description:
          "Worship of Goddess Gauri for marital bliss and prosperity.",
      },
    ],
    nature: [
      {
        title: "Sultanpur Bird Sanctuary",
        description: "Home to flamingos, pelicans, storks, and kingfishers.",
      },
      {
        title: "Morni Hills & Tikkar Taal",
        description:
          "Quiet lakes and scenic trails make it a peaceful nature retreat.",
      },
      {
        title: "Kalesar National Park",
        description:
          "A dense sal forest reserve in Yamunanagar with leopards, elephants, and wild boars.",
      },
      {
        title: "Bhindawas Wildlife Sanctuary",
        description: "Freshwater wetland ecosystem supporting migratory birds.",
      },
      {
        title: "Aravalli Ranges (Southern Border)",
        description:
          "Extend into parts of Gurgaon and Rewari, offering scenic backdrops.",
      },
    ],
    people: [
      {
        title: "Arjuna & Lord Krishna (Kurukshetra)",
        description: "Mythological figures tied to the Bhagavad Gita.",
      },
      {
        title: "Kalpana Chawla",
        description:
          "India\u2019s first woman astronaut in space, born in Karnal.",
      },
      {
        title: "Captain Vikram Batra",
        description: "Kargil War hero and Param Vir Chakra awardee.",
      },
      {
        title: "Phoolan Devi (legendary figure)",
        description:
          "Though associated with Bundelkhand, her story echoes in northern rural culture.",
      },
      {
        title: "Folk Tales of Heer-Ranjha & Nihalde Sultan",
        description: "Passed through generations via songs and narratives.",
      },
    ],
    crafts: [
      {
        title: "Phulkari Embroidery",
        description:
          "Colorful floral embroidery traditionally done on shawls and dupattas.",
      },
      {
        title: "Clay Pottery & Terracotta",
        description: "Used for making lamps, toys, and water pots.",
      },
      {
        title: "Weaving & Durries (Cotton Rugs)",
        description:
          "Made in village homes, often handwoven with geometric patterns.",
      },
      {
        title: "Brass & Metal Utensils",
        description: "Historically used for household needs and rituals.",
      },
      {
        title: "Wood Carving & Basketry",
        description: "Simple, functional crafts still found in rural homes.",
      },
    ],
    trivia: [
      {
        title: "Land of the Gita",
        description:
          "The Bhagavad Gita was spoken by Krishna to Arjuna in Kurukshetra.",
      },
      {
        title: "Wrestling Capital",
        description:
          "Haryana has produced numerous Olympic and Commonwealth Games wrestlers.",
      },
      {
        title: "High Sports Quotient",
        description: "Known for athletes in boxing, kabaddi, and shooting.",
      },
      {
        title: "Low Sex Ratio, High Women\u2019s Achievement",
        description:
          "Despite challenges, Haryana has produced many women trailblazers.",
      },
      {
        title: "Rich in Oral Traditions",
        description:
          "Many folk epics and tales are preserved through oral storytelling.",
      },
    ],
  },
  miniMap: {
    pins: [
      {
        title: "Kurukshetra",
        description: "Spiritual and historical center",
      },
      {
        title: "Sultanpur",
        description: "Birdwatching haven",
      },
      {
        title: "Pinjore Gardens",
        description: "Heritage and leisure spot",
      },
      {
        title: "Morni Hills",
        description: "Nature and trekking",
      },
      {
        title: "Panipat",
        description: "Battlefield history",
      },
      {
        title: "Yamunanagar",
        description: "Kalesar Park and Hathnikund Barrage",
      },
      {
        title: "Rohtak, Hisar",
        description: "Sports and rural heritage",
      },
    ],
  },
};
