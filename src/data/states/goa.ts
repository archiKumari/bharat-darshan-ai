import type { StateData } from "../types";

export const goa: StateData = {
  id: "IN-GA",
  name: "Goa",
  capital: "Panaji",
  categories: {
    touristPlaces: [
      {
        title: "Basilica of Bom Jesus (Old Goa)",
        description:
          "UNESCO World Heritage Site housing the relics of St. Francis Xavier, showcasing Portuguese Baroque architecture.",
      },
      {
        title: "Calangute & Baga Beaches",
        description:
          "Popular for golden sands, water sports, nightlife, and beach shacks.",
      },
      {
        title: "Fort Aguada",
        description:
          "17th-century Portuguese fort with panoramic sea views and a historic lighthouse.",
      },
      {
        title: "Dudhsagar Waterfalls",
        description:
          "A spectacular four-tiered waterfall on the Mandovi River, surrounded by lush forest.",
      },
      {
        title: "Fontainhas (Panjim)",
        description:
          "Latin Quarter known for its colorful Portuguese-style houses and narrow winding lanes.",
      },
      {
        title: "Spice Plantations (Ponda)",
        description:
          "Explore aromatic estates growing nutmeg, cardamom, pepper, and more.",
      },
    ],
    food: [
      {
        title: "Alsande Tonak",
        description:
          "A rich curry made from Goan black-eyed peas with coconut and spices.",
        subtype: "main",
      },
      {
        title: "Bhaaji (Mixed Vegetable Bhaji)",
        description:
          "Lightly spiced seasonal vegetables often eaten with poee or rice.",
        subtype: "main",
      },
      {
        title: "Moong Ussal",
        description:
          "Sprouted green gram sautéed with coconut, curry leaves, and mustard seeds.",
        subtype: "main",
      },
      {
        title: "Khatkhate",
        description:
          "A mixed vegetable stew with coconut, jaggery, tamarind, and spice.",
        subtype: "main",
      },
      {
        title: "Sanna",
        description:
          "Steamed rice cakes, mildly sweet, often served with gravies.",
        subtype: "main",
      },
      {
        title: "Ukde Xitt",
        description:
          "Parboiled Goan red rice, soft and nutrient-rich, eaten daily.",
        subtype: "main",
      },
      {
        title: "Tondak Bhaji",
        description:
          "Made with cashew nuts or legumes and spicy coconut masala.",
        subtype: "main",
      },
      {
        title: "Patoleo",
        description:
          "Turmeric leaf-steamed rice rolls filled with coconut and jaggery (served as sweet main).",
        subtype: "main",
      },
      {
        title: "Batata Bhaji",
        description:
          "Stir-fried potatoes with mustard, curry leaves, and green chilies.",
        subtype: "main",
      },
      {
        title: "Rawa Idli (Goan Style)",
        description:
          "Semolina steamed cakes infused with curry leaves and mustard seeds.",
        subtype: "main",
      },
      {
        title: "Tendli Pickle",
        description: "Pickled ivy gourd in mustard-oil brine.",
        subtype: "condiment",
      },
      {
        title: "Sol Kadhi (Thick)",
        description:
          "Coconut and kokum mix used as side, thickened as a dipping sauce.",
        subtype: "condiment",
      },
      {
        title: "Coconut Chutney (Green)",
        description: "Made with grated coconut, coriander, and lime.",
        subtype: "condiment",
      },
      {
        title: "Kokum Chutney",
        description: "Tangy-sweet condiment with chili, garlic, and sugar.",
        subtype: "condiment",
      },
      {
        title: "Banana Flower Stir-fry",
        description:
          "Finely chopped and sautéed with mustard and grated coconut.",
        subtype: "condiment",
      },
      {
        title: "Rava Fry Veggies",
        description: "Ladyfinger or brinjal shallow-fried with semolina crust.",
        subtype: "condiment",
      },
      {
        title: "Masoor Usli",
        description: "Light dry lentil salad with mustard and coconut.",
        subtype: "condiment",
      },
      {
        title: "Vegetable Pickle (Raw Papaya)",
        description: "Sweet-sour pickle often served with sannas.",
        subtype: "condiment",
      },
      {
        title: "Cashew Bharta",
        description: "Mashed roasted cashews mixed with mild Goan spices.",
        subtype: "condiment",
      },
      {
        title: "Ambade Chutney",
        description:
          "Wild mango (hog plum) ground with mustard and green chili.",
        subtype: "condiment",
      },
      {
        title: "Sol Kadhi (Thin, Drinkable)",
        description: "A cooling kokum and coconut milk digestive.",
        subtype: "drink",
      },
      {
        title: "Nimbu Pani with Cumin",
        description: "Lemonade with a Goan twist of roasted jeera.",
        subtype: "drink",
      },
      {
        title: "Tender Coconut Water with Mint",
        description: "Naturally sweet and locally abundant.",
        subtype: "drink",
      },
      {
        title: "Kokum Sherbet",
        description: "Sweet-tangy summer drink with black salt and sugar.",
        subtype: "drink",
      },
      {
        title: "Patoleo",
        description: "Rice and jaggery stuffed in turmeric leaves.",
        subtype: "dessert",
      },
      {
        title: "Godshe",
        description: "Kheer-like dessert made from rice or vermicelli.",
        subtype: "dessert",
      },
      {
        title: "Alle Belle",
        description: "Coconut-jaggery stuffed sweet crepes.",
        subtype: "dessert",
      },
      {
        title: "Dodol",
        description: "Coconut milk and rice flour fudge.",
        subtype: "dessert",
      },
    ],
    culture: [
      {
        title: "Portuguese Influence",
        description:
          "450 years of Portuguese rule shaped Goa\u2019s architecture, language, and religious traditions.",
      },
      {
        title: "Konkani Language & Folk Music",
        description: "Mando and Dulpod songs celebrate love, nature, and life.",
      },
      {
        title: "Traditional Attire",
        description:
          "Kunbi sarees (red-checkered) are worn by local women during festivals.",
      },
      {
        title: "Catholic Festivals & Churches",
        description:
          "Annual feasts, processions, and midnight masses are central to Goan culture.",
      },
      {
        title: "Goan Carnival",
        description:
          "A vibrant celebration with parades, floats, and street dancing held before Lent.",
      },
    ],
    festivals: [
      {
        title: "Goa Carnival",
        description:
          "A four-day street extravaganza with music, masks, floats, and revelry.",
      },
      {
        title: "Shigmo",
        description:
          "A colorful spring festival celebrated with traditional dance, music, and cultural performances.",
      },
      {
        title: "Feast of St. Francis Xavier",
        description:
          "Held every December at Bom Jesus Basilica, attended by thousands.",
      },
      {
        title: "Sao Joao",
        description:
          "Monsoon festival where men jump into wells and sing songs, celebrating the birth of St. John the Baptist.",
      },
      {
        title: "Ganesh Chaturthi (Chavath)",
        description:
          "Widely celebrated among Hindus with family pujas and artistic idols.",
      },
    ],
    nature: [
      {
        title: "Mollem National Park (Bhagwan Mahavir Sanctuary)",
        description:
          "Rich in biodiversity with tigers, leopards, and tropical flora.",
      },
      {
        title: "Salim Ali Bird Sanctuary",
        description:
          "A mangrove habitat on Chorao Island ideal for birdwatching.",
      },
      {
        title: "Butterfly Beach & Cola Beach",
        description:
          "Secluded and pristine beaches known for tranquility and scenic beauty.",
      },
      {
        title: "Western Ghats in Goa",
        description:
          "A biodiversity hotspot with trekking trails and hidden waterfalls.",
      },
      {
        title: "Mandovi & Zuari Rivers",
        description:
          "Vital lifelines supporting mangroves, fishing communities, and eco-cruises.",
      },
    ],
    people: [
      {
        title: "St. Francis Xavier",
        description:
          "Revered Catholic missionary, his remains are preserved in Old Goa.",
      },
      {
        title: "Lata Mangeshkar",
        description:
          "The legendary playback singer was born in Goa (though raised in Maharashtra).",
      },
      {
        title: "Mario Miranda",
        description:
          "Iconic Goan cartoonist known for humorous depictions of local life.",
      },
      {
        title: "Dayanand Bandodkar",
        description:
          "First Chief Minister of Goa, known for promoting regional pride.",
      },
      {
        title: "Legend of Dona Paula",
        description:
          "Romantic tale of a Portuguese lady whose spirit is said to roam the Dona Paula beach.",
      },
    ],
    crafts: [
      {
        title: "Azulejos Tiles",
        description:
          "Hand-painted Portuguese-style ceramic tiles featuring Goan scenes and motifs.",
      },
      {
        title: "Coconut Craft",
        description:
          "Carved coconut shells transformed into lamps, bowls, and decor.",
      },
      {
        title: "Shell Art & Marine Crafts",
        description: "Souvenirs made from seashells, corals, and driftwood.",
      },
      {
        title: "Brass & Silver Filigree Work",
        description:
          "Traditional ornamental craft used in jewelry and temple d\u00e9cor.",
      },
      {
        title: "Terracotta Pottery & Clay Idols",
        description:
          "Molded into figures of deities, animals, and everyday objects.",
      },
    ],
    trivia: [
      {
        title: "Smallest State by Area",
        description: "Yet one of India\u2019s top tourist destinations.",
      },
      {
        title: "Highest Per Capita Alcohol Consumption",
        description: "Due to cultural openness and local production of Feni.",
      },
      {
        title: "Two Official Languages",
        description: "Konkani and Marathi; English is widely spoken.",
      },
      {
        title: "No Pollution Check for Vehicles",
        description:
          "Goa is exempt from the \u201cPollution Under Control\u201d rule (as of some older policies).",
      },
      {
        title: "First Printing Press in Asia",
        description: "Brought by the Portuguese in the 16th century.",
      },
    ],
  },
  miniMap: {
    pins: [
      {
        title: "Panaji (Panjim)",
        description: "Capital, Fontainhas, riverside view",
      },
      {
        title: "Old Goa",
        description: "Churches and heritage architecture",
      },
      {
        title: "Calangute & Baga",
        description: "Beach zone",
      },
      {
        title: "Dudhsagar Falls",
        description: "Natural wonder",
      },
      {
        title: "Mollem",
        description: "Wildlife sanctuary and trek spot",
      },
      {
        title: "Margao",
        description: "Cultural and commercial center",
      },
      {
        title: "Ponda",
        description: "Spice plantations and temples",
      },
    ],
  },
};
