/**
 * Shared menu data for FR site - French labels and FR URLs
 */

const iconBaseUrl = '/images/menu/';

export interface MenuItem {
  label: string;
  href: string;
  icon_url: string;
}

export interface MenuData {
  sportarten: MenuItem[];
  produkte: MenuItem[];
  themen: MenuItem[];
  directLinks: { label: string; href: string }[];
}

// FR French menu data
const frMenuData: MenuData = {
  sportarten: [
    { label: 'Voetbal', href: '/collections/voetbal/', icon_url: iconBaseUrl + 'Football.svg' },
    { label: 'Rugby', href: '/collections/rugby/', icon_url: iconBaseUrl + 'Rugby-1.svg' },
    { label: 'Basketbal', href: '/collections/basketbal/', icon_url: iconBaseUrl + 'Basketball-1.svg' },
    { label: 'Running', href: '/collections/running/', icon_url: iconBaseUrl + 'running-1.svg' },
    { label: 'Veldhockey', href: '/collections/veldhockey/', icon_url: iconBaseUrl + 'field-hockey-1.svg' },
    { label: 'Volleybal', href: '/collections/volleybal/', icon_url: iconBaseUrl + 'volleyball-1.svg' },
    { label: 'Handbal', href: '/collections/handbal/', icon_url: iconBaseUrl + 'handball-1.svg' },
    { label: 'Wielrennen', href: '/collections/wielrennen/', icon_url: iconBaseUrl + 'cycling-1.svg' },
    { label: 'Fitness', href: '/collections/fitness/', icon_url: iconBaseUrl + 'fitness-1.svg' },
    { label: 'Golf', href: '/collections/golf/', icon_url: iconBaseUrl + 'golf-1.svg' },
    { label: 'eSports', href: '/collections/esports/', icon_url: iconBaseUrl + 'esport-1.svg' },
  ],
  produkte: [
    { label: 'Sportshirts op maat', href: '/collections/sportshirts-bedrukken/', icon_url: iconBaseUrl + 'teamwear-1.svg' },
    { label: 'Sjaals', href: '/collections/sjaals-bedrukken/', icon_url: iconBaseUrl + 'scarves-1.svg' },
    { label: 'Mutsen', href: '/collections/muts-bedrukken/', icon_url: iconBaseUrl + 'beanies-3.svg' },
    { label: 'Hoofddeksels', href: '/collections/hoofddeksels/', icon_url: iconBaseUrl + 'cap-1.svg' },
    { label: 'Vaantjes', href: '/collections/vaantjes-bedrukken/', icon_url: iconBaseUrl + 'pennants-3.svg' },
    { label: 'Handdoeken', href: '/collections/handdoeken-bedrukken/', icon_url: iconBaseUrl + 'towelst-1.svg' },
    { label: 'Vlaggen', href: '/collections/vlaggen-bedrukken/', icon_url: iconBaseUrl + 'flags-1.svg' },
    { label: 'Sokken en slippers', href: '/collections/sokken-en-slippers/', icon_url: iconBaseUrl + 'footwear-1.svg' },
    { label: 'Tassen', href: '/collections/sporttassen/', icon_url: iconBaseUrl + 'sportsbag-1.svg' },
    { label: 'Textiel', href: '/collections/textiel-bedrukken/', icon_url: iconBaseUrl + 'textile-1.svg' },
    { label: 'Bidons & mokken', href: '/collections/bidons-en-mokken/', icon_url: iconBaseUrl + 'drinkware-1.svg' },
    { label: 'Ballen', href: '/collections/ballen/', icon_url: iconBaseUrl + 'balls-1.svg' },
    { label: 'Accessoires', href: '/collections/accessoires/', icon_url: iconBaseUrl + 'accessories-1.svg' },
  ],
  themen: [
    { label: 'Zomer', href: '/collections/zomer/', icon_url: iconBaseUrl + 'summer-1.svg' },
    { label: 'Winter', href: '/collections/winter/', icon_url: iconBaseUrl + 'winter-1.svg' },
    { label: 'Duurzaam', href: '/collections/duurzaam/', icon_url: iconBaseUrl + 'sustainable-2.svg' },
    { label: 'Gemaakt in Europa', href: '/collections/gemaakt-in-europa/', icon_url: iconBaseUrl + 'made-in-europe-1.svg' },
    { label: 'Mode', href: '/collections/mode/', icon_url: iconBaseUrl + 'fashion-1.svg' },
    { label: 'Terug naar school', href: '/collections/terug-naar-school/', icon_url: iconBaseUrl + 'back-to-school-1.svg' },
    { label: 'Tifo', href: '/collections/tifo/', icon_url: iconBaseUrl + 'tifo-1.svg' },
    { label: 'Kerst', href: '/collections/kerst/', icon_url: iconBaseUrl + 'christmas-1.svg' },
    { label: 'Voordelig', href: '/collections/voordelig/', icon_url: iconBaseUrl + 'smallprices.svg' },
    { label: 'Business', href: '/collections/business/', icon_url: iconBaseUrl + 'business.svg' },
    { label: 'Geschenken', href: '/collections/geschenken/', icon_url: iconBaseUrl + 'giive-aways.svg' },
    { label: 'Kinderen', href: '/collections/kinderen/', icon_url: iconBaseUrl + 'kids.svg' },
  ],
  directLinks: [
    { label: 'Sportshirts op maat', href: '/collections/sportshirts-bedrukken/' },
    { label: 'Sjaals', href: '/collections/sjaals-bedrukken/' },
    { label: 'Hoofddeksels', href: '/collections/hoofddeksels/' },
    { label: 'Mutsen', href: '/collections/muts-bedrukken/' },
  ],
};

export async function getMenuData(): Promise<MenuData> {
  return frMenuData;
}
