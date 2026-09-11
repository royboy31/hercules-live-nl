/**
 * Per-slug SEO overrides for product pages (title tag, H1, meta description,
 * intro block and end-of-page SEO block).
 *
 * Guard: each entry records the WooCommerce product name it was written against
 * (expectedName). If the product is renamed in WooCommerce, the override is
 * ignored and the page falls back to the live product name, so a rename can
 * never produce a stale or contradictory page.
 *
 * This is a bridge until seo_h1/seo_title post meta exists for products in
 * WordPress (the category equivalent already exists). Once that lands, move
 * these values into WP and delete this file.
 */

export interface ProductSeoOverride {
  expectedName: string;
  title?: string;
  h1?: string;
  metaDescription?: string;
  introHtml?: string;
  seoBlockHtml?: string;
}

const productSeoOverrides: Record<string, ProductSeoOverride> = {
  'voetbalshirt-bedrukken': {
    expectedName: 'Voetbalshirt op maat',
    title: 'Voetbalshirt bedrukken voor uw club en ploeg | Op maat',
    metaDescription:
      'Ontwerp uw voetbalshirt op maat voor uw club, ploeg of vereniging. Duurzame sublimatie, gemaakt in Europa, staffelprijzen en gratis ontwerp.',
  },
  'bedrukte-slippers': {
    expectedName: 'Clubslippers op maat',
    title: 'Clubslippers op maat met logo | Vanaf 20 paar',
    h1: 'Slippers op maat met logo voor clubs',
    metaDescription:
      'Ontwerp slippers op maat in de kleuren van uw club: bedrukt logo of logo in reliëf, maten 24 tot 48, vanaf 20 paar. Gratis ontwerp en snelle offerte.',
    introHtml: `
<p>Ontwerp slippers op maat in de kleuren van uw club, uw ploeg of uw vereniging. Voeg uw logo toe in vierkleurendruk of in reliëf en kies de zoolkleur die bij uw identiteit past.</p>
<p>Onze slippers op maat zijn verkrijgbaar in de maten 24 tot 48 en te bestellen vanaf 20 paar. Ze zijn gemaakt voor de kleedkamer, verplaatsingen, evenementen en de clubshop. Ons team werkt het ontwerp samen met u uit voordat de productie start.</p>`,
    seoBlockHtml: `
<h2>Slippers op maat voor clubs, ploegen en verenigingen</h2>
<p>Met slippers op maat draagt een club zijn identiteit tot ver buiten het veld. Ze worden gebruikt in de kleedkamer, aan de rand van het zwembad, tijdens verplaatsingen of als merchandising in de clubshop. Elk paar wordt op maat gemaakt, in de kleuren en met het logo van de ploeg.</p>
<p>De personalisatie kan gebeuren met een logo in vierkleurendruk, ideaal voor gedetailleerde en veelkleurige ontwerpen, of met een logo in reliëf voor een tastbaarder resultaat. Ons team controleert de kwaliteit van het bestand en maakt een ontwerp vóór de productie.</p>
<h2>Een maatbereik voor de hele ploeg</h2>
<p>De beschikbare maten gaan van 24 tot 48, zodat u jeugdploegen, volwassenen, trainers en stafleden kunt uitrusten. Er zijn verschillende zoolkleuren beschikbaar om zo dicht mogelijk bij de huisstijl van de club te komen.</p>
<p>Het minimumaantal is 20 paar en de prijzen worden gunstiger naarmate de hoeveelheid stijgt. Met de prijstabel schat u snel uw budget in voordat u een offerte aanvraagt.</p>
<h2>Twaalf zoolkleuren in de kleuren van uw club</h2>
<p>De zool van uw slippers op maat is beschikbaar in twaalf kleuren: wit, zwart, geel, groen, koningsblauw, marineblauw, rood, grijs, oranje, paars, bruin en roze. Met dit palet stemt u elk paar af op de huisstijl van de club, van het shirt tot de kleedkamer.</p>
<h2>PVC dat gemaakt is om lang mee te gaan</h2>
<p>Elk paar wordt gemaakt van 100 % PVC van topkwaliteit, voor een lange levensduur op training, aan het zwembad of op verplaatsing.</p>
<p>Voor grote bestellingen zijn extra's mogelijk vanaf 500 stuks: hangtags, geweven labels of header cards, handig voor de verkoop in de clubshop.</p>
<h2>Begeleiding van ontwerp tot levering</h2>
<p>Na ontvangst van uw logo maakt Hercules een grafisch voorstel en controleert het of de bedrukking haalbaar is. Zodra het ontwerp is goedgekeurd, start de productie. De standaard levertijd is 4 tot 6 weken.</p>
<p>Plant u een toernooi, een evenement of de opening van een shop? Vermeld uw deadline dan meteen in uw aanvraag: ons team bevestigt welke oplossing haalbaar is en wat de planning is voordat de bestelling wordt bevestigd.</p>`,
  },

  'bedrukte-cap': {
    expectedName: 'Cap op maat',
    title: 'Cap op maat met logo | Volledig op maat gemaakt',
    h1: 'Cap op maat met logo voor clubs en bedrijven',
    metaDescription:
      'Ontwerp uw cap volledig op maat: 3D-borduursel, volledige sublimatie, kleuren en klep naar keuze. Vanaf 200 stuks, gratis ontwerp en snelle offerte.',
    introHtml: `
<p>Ontwerp een cap die volledig op maat gemaakt is voor uw club, uw bedrijf of uw evenement. Elk onderdeel is configureerbaar: kleurcombinaties, type sluiting, stijl van de klep en kleur van de ventilatiegaatjes.</p>
<p>Uw logo kan worden uitgevoerd als 3D-borduursel, in volledige sublimatiedruk of als siliconen patch. Productie op maat vanaf 200 stuks, met een ontwerp door ons team vóór de productie.</p>`,
    seoBlockHtml: `
<h2>Een cap op maat die uw organisatie weerspiegelt</h2>
<p>Een cap op maat is een duurzame drager van de identiteit van een sportclub, een bedrijf of een evenement. Gedragen op training, in de shop, op een beurs of cadeau gedaan aan supporters en partners, draagt hij uw kleuren tot ver buiten het veld.</p>
<p>In tegenstelling tot een standaard cap met bedrukking kiest u bij productie op maat zelf elk detail: panelen, klep, sluiting, ventilatiegaatjes en afwerking volgen exact uw huisstijl.</p>
<h2>3D-borduursel, sublimatie of patch: voor elk logo de juiste techniek</h2>
<p>3D-borduursel geeft reliëf en een premium uitstraling aan logo's en monogrammen. Volledige sublimatiedruk geeft complexe ontwerpen, kleurverlopen en all-over motieven weer. Siliconen of geweven patches zorgen voor een moderne, zeer slijtvaste afwerking.</p>
<p>Ons team controleert uw bestand, raadt de techniek aan die bij uw ontwerp past en maakt een grafisch voorstel voordat de productie start.</p>
<h2>Aantallen, levertijden en alternatieven</h2>
<p>Productie op maat is mogelijk vanaf 200 stuks, met staffelprijzen volgens de hoeveelheid. Voor kleinere series ontdekt u onze modellen die u al vanaf 10 stuks kunt personaliseren: de <a href="/products/baseballpet-op-maat/">baseballpet op maat</a>, de <a href="/products/truckerpet-op-maat/">truckerpet op maat</a> of het <a href="/products/wielerpetje-op-maat/">wielerpetje op maat</a>.</p>`,
  },

  'bedrukte-bucket-hat': {
    expectedName: 'Bucket hat op maat',
    title: 'Bucket hat op maat | Bedrukking over het hele oppervlak',
    h1: 'Bucket hat op maat voor clubs, merken en evenementen',
    metaDescription:
      'Ontwerp een unieke bucket hat: vierkleurendruk over het hele oppervlak, complexe motieven en kleurverlopen, enkel of omkeerbaar model. Volledig op maat gemaakt.',
    introHtml: `
<p>Ontwerp een bucket hat volledig op maat voor uw club, uw merk of uw evenement. In tegenstelling tot standaardmodellen waarop gewoon een logo wordt aangebracht, maken wij elke bucket hat van nul, met een uniek ontwerp.</p>
<p>De vierkleurendruk bedekt het volledige oppervlak van de stof: volledige ontwerpen, complexe motieven, kleurverlopen en gedetailleerde beelden, zonder beperking van het aantal kleuren.</p>`,
    seoBlockHtml: `
<h2>Een bucket hat van nul gemaakt, geen standaardmodel</h2>
<p>Onze bucket hats op maat vertrekken niet van een bestaand product: de stof wordt bedrukt vóór het confectioneren, waardoor het ontwerp doorloopt over de hele hoed. Dat is het verschil tussen een klassiek promotieartikel en een stuk dat precies het beeld van uw club of uw merk weergeeft.</p>
<h2>Beschikbare modellen en kwaliteiten</h2>
<p>Er zijn twee modellen: de enkelzijdige bucket hat en de omkeerbare bucket hat. Voor de productie zijn verschillende kwaliteiten beschikbaar: een dikkere kwaliteit (productie in China of Europa) en een promotiekwaliteit (productie in Europa), afhankelijk van uw gebruik en uw budget.</p>
<h2>Uw assortiment aanvullen</h2>
<p>De bucket hat hoort bij de familie van de hoofddeksels op maat: ontdek ook de <a href="/products/bedrukte-cap/">cap op maat</a> en de volledige <a href="/collections/hoofddeksels/">collectie hoofddeksels</a>.</p>`,
  },

  'bedrukte-multisjaals': {
    expectedName: 'Multisjaal op maat',
    title: 'Multisjaal op maat | Gemaakt in Europa, vanaf 50 stuks',
    h1: 'Multisjaal op maat voor clubs en supporters',
    metaDescription:
      'Multisjaal op maat in vierkleurendruk: 100 % polyester, 50 x 25 cm, gemaakt in Europa in 3 weken, vanaf 50 stuks. Wintervariant met fleece beschikbaar.',
    introHtml: `
<p>De multisjaal op maat is het veelzijdige accessoire dat lopers, fietsers en supporters waarderen, op training en in de tribune. De zomerversie, in 100 % polyester, wordt volledig bedrukt met uw motief.</p>
<p>Voor de winter is er een versie met fleece: warmer, in één kleur, met uw geborduurde logo. Gemaakt in Europa, vanaf 50 stuks.</p>`,
    seoBlockHtml: `
<h2>Een multisjaal voor de zomer, een andere voor de winter</h2>
<p>De zomerversie bestaat uit 100 % polyester en wordt over het hele oppervlak (50 x 25 cm) in vierkleurendruk bedrukt: kleuren, kleurverlopen en gedetailleerde beelden worden getrouw weergegeven. De winterversie heeft een extra fleecevoering voor trainingen bij koud weer, met een geborduurd logo op een effen kleur.</p>
<h2>Europese productie en levertijd</h2>
<p>De multisjaal op maat wordt gemaakt in Europa, met een standaard levertijd van 3 weken. Hebt u een specifieke deadline? Vermeld uw datum dan meteen bij uw offerteaanvraag, zodat ons team de haalbare planning kan bevestigen.</p>`,
  },

  'bedrukte-handdoeken': {
    expectedName: 'Handdoek op maat',
    title: 'Handdoek op maat voor sport, club en strand | Vanaf 25 stuks',
    h1: 'Sport- en strandhanddoek op maat',
    metaDescription:
      'Handdoek op maat in sublimatiedruk: zachte microvezel, absorberend katoen, 4 formaten van 100 x 50 tot 180 x 100 cm. Vanaf 25 stuks voor clubs en bedrijven.',
    introHtml: `
<p>Geef uw handdoeken een unieke toets met een volledige personalisatie: kleuren, motieven, logo's, teksten en beelden, zonder beperking. De sublimatiedruk zorgt voor een stralend, slijtvast resultaat dat volledig in de stof is opgenomen, zonder reliëf en zonder dat het verbleekt in de was.</p>
<p>Er zijn vier formaten beschikbaar, van de sporthanddoek (100 x 50 cm) tot de strandhanddoek (180 x 100 cm), vanaf 25 stuks.</p>`,
    seoBlockHtml: `
<h2>Een voorkant in microvezel, een achterkant in katoen</h2>
<p>Elke handdoek op maat combineert een ultrazachte voorkant in microvezel, ideaal voor een levendige en gedetailleerde bedrukking, met een absorberende katoenen achterkant voor comfortabel gebruik bij het sporten of aan het strand.</p>
<h2>Vier formaten voor elk gebruik</h2>
<p>Van het compacte sportformaat (100 x 50 cm) tot de formaten 140 x 70, 160 x 80 en 180 x 100 cm voor het strand: het assortiment dekt de behoeften van clubs, sportscholen en bedrijven. Bij onze partnerfabrieken is ook een "groene" productieoptie mogelijk.</p>
<h2>Ontdek ook</h2>
<p>Voor een hoogwaardig geweven resultaat vult de <a href="/products/jacquard-handdoek-op-maat/">geweven jacquard handdoek</a> het assortiment aan, te vinden in de <a href="/collections/handdoeken-bedrukken/">collectie handdoeken op maat</a>.</p>`,
  },

  'bedrukte-vaantjes': {
    expectedName: 'Bedrukt vaantje',
    // Variant-intent title: the generic "fanion personnalisé" query belongs to
    // /collections/vaantjes-bedrukken/ — this page targets the
    // printed variant only, to stop the collection/product cannibalization.
    title: 'Bedrukt vaantje in hoge resolutie | Vanaf 50 stuks',
    h1: 'Bedrukt vaantje in hoge resolutie',
    metaDescription:
      'Laat uw clubvaantjes in vierkleurendruk bedrukken: vormen op maat, verschillende voor- en achterkant, koord of franjes. Vanaf 50 stuks, gemaakt in Europa.',
    introHtml: `
<p>Ontwerp een vaantje in hoge resolutie voor uw club, uw vereniging of uw evenement. Met vierkleurendruk geeft u complexe logo's, kleurverlopen en foto's weer, zonder beperking van het aantal kleuren.</p>
<p>Kies de vorm, de afwerking en een identiek of verschillend ontwerp voor de voor- en achterkant. Gemaakt in Europa vanaf 50 stuks, met ontwerp en controle van het bestand vóór de productie. Ontdek al onze modellen in de collectie <a href="/collections/vaantjes-bedrukken/">vaantjes op maat</a>.</p>`,
    seoBlockHtml: `
<h2>Een bedrukt vaantje op maat voor elke gelegenheid</h2>
<p>Het bedrukte vaantje op maat is geschikt om uit te wisselen voor de match, voor toernooien, evenementen, geschenken voor sponsors en de aankleding van het clublokaal. Dankzij de vierkleurendruk worden de details van het logo, teksten, kleurverlopen en foto's nauwkeurig weergegeven.</p>
<p>De voor- en achterkant kunnen hetzelfde ontwerp of twee verschillende ontwerpen dragen. Zo kunt u bijvoorbeeld het clubembleem op de ene kant tonen en de naam van een toernooi, een tegenstander of een sponsor op de andere.</p>
<h2>Vormen, materialen en afwerkingen</h2>
<p>De vaantjes worden gemaakt van polyester stof en kunnen driehoekig, kogelvormig, vijfhoekig of in een specifieke vorm uitgesneden zijn. De afwerking kan een koord of franjes bevatten, in verschillende beschikbare kleuren.</p>
<p>Vóór de productie wordt het bestand gecontroleerd en aangepast aan het gekozen formaat. Daarna keurt u een drukproef goed om de vorm, de afmetingen, de kleuren, de teksten en de afwerkingen te bevestigen.</p>
<h2>Europese productie en staffelprijzen</h2>
<p>De productie gebeurt in Europa vanaf 50 stuks, met staffelprijzen volgens de bestelde hoeveelheid. De prijstabel toont de prijs per stuk volgens het volume.</p>
<p>Zoekt u een ander type vaantje, een groot formaat of een vergelijking tussen de modellen? <a href="/collections/vaantjes-bedrukken/">Ontdek al onze vaantjes op maat</a>.</p>`,
  },
  'rugby-uitrustingen-op-maat': {
    expectedName: 'Rugbyshirt op maat',
    title: 'Rugbyshirt op maat | Vanaf 5 stuks',
    h1: 'Rugbyshirt op maat voor clubs en ploegen',
    metaDescription:
      'Rugbyshirt op maat in interlockstof: onbeperkt kleuren en motieven, naam en nummer, ronde hals of V-hals. Vanaf 5 stuks, gemaakt in Europa.',
    introHtml: `
<p>Ontwerp het rugbyshirt op maat van uw club, uw ploeg of uw toernooi. Motief, kleuren, logo's, namen en nummers: er zijn geen beperkingen, elk shirt wordt speciaal voor u bedrukt.</p>
<p>De shirts worden gemaakt van 100 % polyester interlockstof, dikker en steviger dan de stof van voetbalshirts. Gemaakt in Europa vanaf 5 stuks, met een ontwerp dat ons team vóór de productie voorbereidt.</p>`,
    seoBlockHtml: `
<h2>Een interlockstof ontworpen voor rugby</h2>
<p>Rugby stelt eisen aan textiel die andere teamsporten niet kennen. Daarom gebruiken onze rugbyshirts op maat niet de stof van een voetbalshirt: ze worden gemaakt van 100 % polyester interlock, een dikker en steviger breisel dat speciaal ontworpen is voor rugbyshirts.</p>
<p>Die materiaalkeuze merkt u gedurende een heel seizoen, op training en tijdens de match, en zorgt voor een scherpe bedrukking over het hele shirt.</p>
<h2>Personalisatie zonder beperking van kleuren</h2>
<p>Er zijn geen ontwerpbeperkingen: kleuren, motieven, logo's, sponsors, teksten en nummers zijn vrij te kiezen, zonder meerprijs voor het aantal kleuren. Het shirt kan een ander ontwerp krijgen op de voor- en achterkant, zodat u bijvoorbeeld de rug kunt voorbehouden voor een partner van de club.</p>
<p>Elk shirt kan een eigen naam en nummer dragen. Het nummer wordt op de rug of op een andere plaats aangebracht, volgens uw ontwerp. Stuur ons uw bestand ter goedkeuring of maak gebruik van onze gratis ontwerpservice: ons team bereidt het grafische voorstel voor voordat de productie start.</p>
<h2>Ronde hals of V-hals, van 2 jaar tot 6XL</h2>
<p>Er zijn twee modellen beschikbaar: het rugbyshirt met ronde hals en het shirt met V-hals. De maten gaan van 2 jaar tot 6XL, zodat u de jeugdploegen, de eerste ploeg, de trainers en de staf in hetzelfde ontwerp kunt kleden.</p>
<p>Om de outfit te vervolledigen, kunnen onze <a href="/products/sportshort-op-maat/">sportshorts op maat</a> in dezelfde kleuren als het shirt worden geproduceerd.</p>
<h2>Vanaf 5 stuks, met staffelprijzen</h2>
<p>De minimale bestelling is 5 shirts, waardoor personalisatie haalbaar is voor een kleine ploeg, een toernooi of een test vóór een clubbestelling. De prijstabel op de pagina toont de prijs per stuk volgens de hoeveelheid, met prijzen die gunstiger worden naarmate het volume stijgt.</p>
<p>U kunt tijdens het seizoen tot twee keer extra stuks bijbestellen aan dezelfde prijzen, handig voor een nieuwe speler of een beschadigd shirt in de loop van het jaar.</p>
<h2>Europese productie en levertijden</h2>
<p>De rugbyshirts op maat worden gemaakt in Europa, met een standaard levertijd van 4 tot 6 weken na goedkeuring van het ontwerp. Is uw deadline korter? Vermeld die dan meteen bij uw offerteaanvraag: in de meeste gevallen is een spoedprocedure mogelijk, tegen een gemiddelde meerprijs van 30 %, en een expreslevering in 24 of 48 uur kan worden toegevoegd.</p>
<p>Voordat u een volledige productie start, kunt u ook een staal uit een eerdere productie ontvangen om de kwaliteit van de stof en de bedrukking te beoordelen.</p>
<h2>De hele club uitrusten, niet alleen de eerste ploeg</h2>
<p>Het shirt is vaak het vertrekpunt van een volledig assortiment: shorts, jassen, tassen, supportersaccessoires en shopartikelen kunnen dezelfde grafische identiteit krijgen. <a href="/collections/rugby/">Ontdek de volledige rugbycollectie op maat</a>.</p>`,
  },
};

export function getProductSeoOverride(
  slug: string | undefined,
  actualName: string | undefined
): ProductSeoOverride | null {
  if (!slug || !actualName) return null;
  const override = productSeoOverrides[slug];
  if (!override) return null;
  if (override.expectedName !== actualName) {
    console.warn(
      `[seo-overrides] Skipping override for "${slug}": product name changed ` +
        `("${override.expectedName}" -> "${actualName}"). Update or remove the override.`
    );
    return null;
  }
  return override;
}
