import type { StateData } from '../types';

export const arunachal: StateData = {
  id: "IN-AR",
  name: "Arunachal Pradesh",
  capital: "Itanagar",
  categories: {
    touristPlaces: [
      {
        title: "Tawang Monastery",
        description:
          "One of the largest Buddhist monasteries in India, perched at 10,000 ft with breathtaking views and spiritual serenity."
      },
      {
        title: "Ziro Valley",
        description:
          "A tranquil, lush valley known for rice fields, pine forests, and the Apatani tribal culture."
      },
      {
        title: "Sela Pass",
        description:
          "A high-altitude mountain pass with snow-covered peaks and the pristine Sela Lake."
      },
      {
        title: "Bomdila",
        description:
          "Offers panoramic Himalayan views, Buddhist monasteries, and apple orchards."
      },
      {
        title: "Namdapha National Park",
        description:
          "A biodiversity hotspot where four big cats coexist: tiger, leopard, clouded leopard, and snow leopard."
      }
    ],
    food: [
      { title: "Thukpa", description: "Noodle soup made with vegetables and meat." },
      { title: "Apong", description: "Traditional rice beer brewed by various tribes." },
      { title: "Pika Pila", description: "Bamboo shoot and pork fat pickle by Apatani tribe." },
      { title: "Lukter", description: "Dry meat with spicy chili flakes." },
      { title: "Momoloco", description: "Steamed dumplings with meat or vegetables." }
    ],
    culture: [
      { title: "Tribal Diversity", description: "26 tribes and 100+ sub-tribes, each with unique customs." },
      { title: "Handwoven Attire", description: "Bright handloom clothes with feathers and beads." },
      { title: "Dance & Music", description: "Ponung, Aji Lamu, and War Dances in festivals." },
      { title: "Tattoo Traditions", description: "Apatani women with facial tattoos and nose plugs." },
      { title: "Animist Beliefs", description: "Worship of Donyi-Polo (Sun-Moon) alongside Buddhism." }
    ],
    festivals: [
      { title: "Losar", description: "Tibetan New Year with Buddhist rituals and celebrations." },
      { title: "Solung", description: "Adi tribe's agricultural festival." },
      { title: "Nyokum", description: "Nyishi tribe’s nature-harmony rituals." },
      { title: "Ziro Festival of Music", description: "Contemporary indie & tribal fusion festival." },
      { title: "Reh Festival", description: "Idu Mishmi tribe’s spiritual festival for Nanyi Inyitaya." }
    ],
    nature: [
      { title: "Eastern Himalayan Landscapes", description: "Snow peaks, lush valleys, and thick forests." },
      { title: "Dibang & Lohit Valleys", description: "Stunning rivers with rich biodiversity." },
      { title: "Pakke Tiger Reserve", description: "Known for hornbills and tiger conservation." },
      { title: "Mehao Wildlife Sanctuary", description: "Rare orchids, deer, and leopards." },
      { title: "Eagle’s Nest Sanctuary", description: "Birdwatcher's paradise with 450+ species." }
    ],
    crafts: [
      { title: "Cane & Bamboo Products", description: "Handcrafted furniture, baskets, and hats." },
      { title: "Handloom Weaving", description: "Tribal patterns with natural dyes and beadwork." },
      { title: "Wood Carving & Masks", description: "Used in rituals to depict spirits or deities." },
      { title: "Beadwork Jewelry", description: "Festive jewelry symbolizing tribe or status." }
    ],
    trivia: [
      { title: "Sunrise State", description: "First Indian state to see the sunrise." },
      { title: "Orchid Capital", description: "Home to 600+ orchid species." },
      { title: "Zero to Zenith", description: "Elevation from near sea level to 22,500 ft." },
      { title: "Name Meaning", description: "Arunachal means 'Land of the Dawn-Lit Mountains'." },
      { title: "Traditions > Roads", description: "Few roadways, but rich cultural continuity." }
    ]
  },
  miniMap: {
    pins: [
      { title: "Tawang", description: "Scenic hill town and monastery." },
      { title: "Ziro Valley", description: "Home of the Apatani tribe." },
      { title: "Bomdila", description: "Himalayan views and apple orchards." },
      { title: "Namdapha", description: "Unique wildlife in dense forest." },
      { title: "Roing", description: "Town at the edge of tribal diversity." },
      { title: "Itanagar", description: "Capital of Arunachal Pradesh." }
    ]
  }
};
