import franceImg from '../assets/images/countries/france.jpg'
import italyImg from '../assets/images/countries/italy.jpg'
import russiaImg from '../assets/images/countries/russia.jpg'
import mexicoImg from '../assets/images/countries/mexico.jpg'
import greeceImg from '../assets/images/countries/greece.jpg'
import indiaImg from '../assets/images/countries/india.jpg'
import japanImg from '../assets/images/countries/japan.jpg'
import chinaImg from '../assets/images/countries/china.jpg'
import turkeyImg from '../assets/images/countries/turkey.jpg'
export const COUNTRY_DATA = [
  { id: 'fr', name: 'France', capital: 'Paris', timeZone: 'Europe/Paris', currency: 'EUR', img:franceImg,
   shortDescription:'France, officially the French Republic is a country primarily located in Western Europe, consisting of metropolitan France and several overseas regions and territories...'},
  { id: 'it', name: 'Italy', capital: 'Rome', timeZone: 'Europe/Rome', currency: 'EUR', img:italyImg , 
  shortDescription:'Italy (Italian, officially the Italian Republic, is a country consisting of a continental part, delimited by the Alps, a peninsula and several islands surrounding it...'  },
  { id: 'ru', name: 'Russia', capital: 'Moscow', timeZone: 'Europe/Moscow', currency: 'RUB', img:russiaImg ,
   shortDescription:'Russia or the Russian Federation, is a transcontinental country spanning Eastern Europe and Northern Asia. It is the largest country in the world; covering over ...'   },
  { id: 'mx', name: 'Mexico', capital: 'Mexico', timeZone: 'America/Mexico_City', currency: 'MXN', img:mexicoImg ,
   shortDescription:'Mexico officially the United Mexican States is a country in the southern portion of North America. It is bordered to the north by the United States; to the south and ...'  },
  { id: 'gr', name: 'Greece', capital: 'Athens', timeZone: 'Europe/Athens', currency: 'EUR', img:greeceImg, 
  shortDescription:'Greece also known as Hellas, and officially the Hellenic Republic, is a country located in Southeast Europe. Its population is approximately 10.7 million as of ...'  },
  { id: 'in', name: 'India', capital: 'Delhi', timeZone: 'Asia/Kolkata', currency: 'INR', img:indiaImg,
   shortDescription:'India, officially the Republic of India, is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous...'  },
  { id: 'jp', name: 'Japan', capital: 'Tokyo', timeZone: 'Asia/Tokyo', currency: 'JPY', img:japanImg, 
  shortDescription:'Japan is an island country in East Asia, located in the northwest Pacific Ocean. It is bordered on the west by the Sea of Japan, and extends from the Sea of ...'   },
  { id: 'cn', name: 'China', capital: 'Beijing', timeZone: 'Asia/Shanghai', currency:'CNY', img:chinaImg, 
  shortDescription:'China, officially the People\'s Republic of China, is a country in East Asia. It is the world\'s most populous country, with a population of around 1.4 billion ...'   },
  { id: 'tr', name: 'Turkey', capital: 'Istanbul', timeZone: 'Europe/Istanbul', currency:'TRY', img:turkeyImg, 
  shortDescription:'Turkey officially the Republic of Turkey is a transcontinental country straddling Southeastern Europe and Western Asia. It is bordered on its northwest by Greece ...'  },
];

export const COUNTRY_IDS = ['fr', 'it', 'ru', 'mx', 'gr', 'in', 'jp', 'cn', 'tr'];
export const REACT_APP_WEATHER_KEY = 'c1b23d15ad387ce3fe178c7d2d465ccb';
