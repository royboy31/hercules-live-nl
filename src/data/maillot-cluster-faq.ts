/**
 * Maillot Cluster FAQ — plain HTML Q&A blocks for SEO internal linking.
 * Each key is a page slug; value is an array of {question, answer} pairs.
 * Answers are HTML strings — bold links to the money page must be preserved.
 */

export const maillotClusterFaq: Record<string, { question: string; answer: string }[]> = {

  /* ── 0a. Bob personnalisé (facts from the product page) ──────────── */

  'bedrukte-bucket-hat': [
    {
      question: 'Wat is het verschil met een standaard bucket hat met logo?',
      answer: '<p>Onze bucket hats vertrekken niet van een bestaand model waarop een logo wordt aangebracht: elke bucket hat wordt van nul gemaakt, met stof die vóór het confectioneren wordt bedrukt. Zo bedekt het ontwerp het hele oppervlak, zonder beperkte bedrukkingszone.</p>',
    },
    {
      question: 'Welke modellen bucket hat op maat biedt u aan?',
      answer: '<p>Er zijn twee modellen beschikbaar: de enkelzijdige bucket hat en de omkeerbare bucket hat. Er zijn verschillende productiekwaliteiten: een dikkere kwaliteit (productie in China of Europa) en een promotiekwaliteit (productie in Europa).</p>',
    },
    {
      question: 'Kunnen kleurverlopen en complexe motieven op een bucket hat worden gedrukt?',
      answer: '<p>Ja. Met vierkleurendruk over het hele oppervlak van de stof zijn volledige ontwerpen, complexe motieven, kleurverlopen en gedetailleerde beelden mogelijk, zonder beperking van het aantal kleuren.</p>',
    },
    {
      question: 'Zijn er nog andere hoofddeksels die u kunt personaliseren?',
      answer: '<p>Ja: de <strong><a href="/products/bedrukte-cap/">cap op maat</a></strong> volgt dezelfde productielogica, en de <strong><a href="/collections/hoofddeksels/">collectie hoofddeksels</a></strong> bundelt caps, mutsen en bucket hats.</p>',
    },
  ],

  /* ── 0b. Cache-cou personnalisé (facts from the product page) ────── */

  'bedrukte-multisjaals': [
    {
      question: 'Wat is de minimale bestelling voor een multisjaal op maat?',
      answer: '<p>De multisjaal op maat is beschikbaar vanaf 50 stuks, met staffelprijzen volgens de bestelde hoeveelheid, zoals weergegeven in de prijstabel op de pagina.</p>',
    },
    {
      question: 'Wat zijn de afmetingen en het materiaal van de multisjaal?',
      answer: '<p>De multisjaal meet 50 x 25 cm en de zomerversie bestaat uit 100 % polyester, volledig bedrukt in vierkleurendruk met uw motief.</p>',
    },
    {
      question: 'Bestaat er een winterversie van de multisjaal op maat?',
      answer: '<p>Ja. De winterversie heeft een warmere fleecevoering, in één effen kleur met uw geborduurde logo. Ze is populair voor trainingen bij koud weer.</p>',
    },
    {
      question: 'Waar worden de multisjaals gemaakt en hoe lang duurt het?',
      answer: '<p>De productie gebeurt in Europa, met een standaard levertijd van 3 weken. Hebt u een precieze datum? Vermeld uw deadline dan meteen bij uw offerteaanvraag.</p>',
    },
  ],

  /* ── 0c. Serviette personnalisée (facts from the product page) ───── */

  'bedrukte-handdoeken': [
    {
      question: 'Welke formaten handdoek op maat zijn beschikbaar?',
      answer: '<p>Er zijn vier formaten: 100 x 50 cm (sport), 140 x 70 cm, 160 x 80 cm en 180 x 100 cm (strand). De minimale bestelling is 25 stuks.</p>',
    },
    {
      question: 'Van welk materiaal zijn de handdoeken op maat gemaakt?',
      answer: '<p>Elke handdoek combineert een ultrazachte voorkant in microvezel, voor een levendige en gedetailleerde bedrukking, met een absorberende katoenen achterkant voor meer comfort.</p>',
    },
    {
      question: 'Is de bedrukking wasbestendig?',
      answer: '<p>Ja. Bij sublimatiedruk wordt het ontwerp in de stof opgenomen: het resultaat is stralend, zonder reliëf, en verbleekt niet in de was.</p>',
    },
    {
      question: 'Biedt u een ecologischere productieoptie aan?',
      answer: '<p>Ja, bij onze partnerfabrieken is een "groene" productieoptie mogelijk. Vermeld uw voorkeur bij uw offerteaanvraag.</p>',
    },
    {
      question: 'Bestaat er een hoogwaardige geweven versie?',
      answer: '<p>Ja, de <strong><a href="/products/jacquard-handdoek-op-maat/">geweven jacquard handdoek</a></strong> biedt een geweven textielafwerking. Alle modellen vindt u in de <strong><a href="/collections/handdoeken-bedrukken/">collectie handdoeken op maat</a></strong>.</p>',
    },
  ],

  /* ── 0. Claquettes (facts sourced from the product page itself) ──── */

  'bedrukte-slippers': [
    {
      question: 'Welke maten zijn beschikbaar voor de slippers op maat?',
      answer: '<p>De slippers op maat zijn beschikbaar in de maten 24 tot 48, zodat u jeugdploegen, volwassenen, trainers en stafleden kunt uitrusten, met een comfortabele pasvorm voor iedereen.</p>',
    },
    {
      question: 'Welke zoolkleuren kunt u kiezen?',
      answer: '<p>Er zijn twaalf zoolkleuren beschikbaar: wit, zwart, geel, groen, koningsblauw, marineblauw, rood, grijs, oranje, paars, bruin en roze. Zo stemt u uw slippers op maat af op de exacte kleuren van uw club.</p>',
    },
    {
      question: 'Bedrukt logo of logo in reliëf: wat zijn de opties?',
      answer: '<p>Er zijn twee modellen: het ontwerp in vierkleurendruk, geschikt voor gedetailleerde en veelkleurige logo\'s, en het logo in reliëf voor een tastbaarder resultaat. Ons team controleert uw bestand en maakt het ontwerp vóór de productie.</p>',
    },
    {
      question: 'Wat is de minimale bestelling en hoe evolueren de prijzen?',
      answer: '<p>De slippers op maat kunnen besteld worden vanaf 20 paar, met staffelprijzen die gunstiger worden naarmate de hoeveelheid stijgt. De prijstabel op de pagina toont de prijs per paar volgens het volume.</p>',
    },
    {
      question: 'Van welk materiaal zijn de slippers gemaakt?',
      answer: '<p>Ze worden gemaakt van 100 % PVC van topkwaliteit, gekozen voor hun sterkte en lange levensduur.</p>',
    },
    {
      question: 'Wat is de levertijd van de slippers op maat?',
      answer: '<p>De standaard levertijd is 4 tot 6 weken na goedkeuring van het ontwerp. Voor dit product is geen expresservice beschikbaar; hebt u een precieze datum, vermeld uw deadline dan meteen bij uw offerteaanvraag, zodat ons team de haalbare planning kan bevestigen.</p>',
    },
  ],

  /* ── 1. Collection ──────────────────────────────────────────────── */

  'voetbal': [
    {
      question: 'Biedt u voetbalshirts op maat aan voor clubs?',
      answer: '<p>Ja, ons <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirt op maat</a></strong> is ontworpen voor clubs, ploegen en verenigingen: duurzame sublimatie, gratis ontwerp door onze grafisch ontwerpers en staffelprijzen volgens de hoeveelheid.</p>',
    },
    {
      question: 'Hoe ontwerpen we een voetbalshirt dat bij onze ploeg past?',
      answer: '<p>Stuur ons uw logo, uw kleuren en uw ideeën: ons team maakt gratis een ontwerp van uw <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirt op maat</a></strong> voordat de productie start. U keurt het resultaat goed, daarna starten wij de productie in Europa.</p>',
    },
    {
      question: 'Kunnen we een volledig voetbaltenue bestellen?',
      answer: '<p>Absoluut. Naast de shirts personaliseren we ook shorts, voetbalkousen en bijpassende <a href="/collections/sportshirts-bedrukken/">sportuitrusting</a>, voor een samenhangend wedstrijdtenue in de kleuren van uw club.</p>',
    },
  ],

  'accessoires': [
    {
      question: 'Welke voetbalaccessoires biedt u aan?',
      answer: '<p>We bieden een ruim assortiment accessoires op maat voor clubs, zoals caps, multisjaals, vlaggen en nog veel meer. Elk product is ontworpen om uw kleuren en uw logo trots te tonen. Ontdek hierboven al onze beschikbare accessoires en personaliseer ze naar wens.</p>',
    },
    {
      question: 'Kunnen de voetbalaccessoires gepersonaliseerd worden met het logo van onze ploeg?',
      answer: '<p>Ja, absoluut. Al onze accessoires, waaronder caps, vlaggen en multisjaals, kunnen gepersonaliseerd worden met het logo, de kleuren of de tekst van uw keuze. Zo maakt u unieke producten voor uw fans of uw evenementen.</p>',
    },
    {
      question: 'Biedt u ook voetbalshirts op maat aan?',
      answer: '<p>Ja, naast accessoires maken we ook <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong> met uw logo, uw kleuren en de naam van uw ploeg.</p>',
    },
  ],

  /* ── 2. Cache-cou ───────────────────────────────────────────────── */

  'bedrukte-multisjaals': [
    {
      question: 'Wat is het verschil tussen een standaard multisjaal en een wintermodel?',
      answer: '<p>De standaard multisjaal is gemaakt van polyester, ideaal voor zomerse of lichte activiteiten. Het wintermodel heeft een fleecevoering die beter isoleert tegen de kou, met behoud van al uw personalisatiemogelijkheden.</p>',
    },
    {
      question: 'Wat is het minimumaantal voor multisjaals op maat?',
      answer: '<p>Het minimumaantal voor onze multisjaals op maat is 100 stuks. Voor grotere volumes gelden oplopende kortingen, zoals aangegeven in onze prijstabel.</p>',
    },
    {
      question: 'Kan ik mijn bestelling aanvullen met andere artikelen op maat voor mijn club?',
      answer: '<p>Ja, we bieden een ruim assortiment aanvullende artikelen aan, zoals sjaals, mutsen en zelfs <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>. Neem gerust een kijkje op de rest van onze website.</p>',
    },
  ],

  /* ── 3 & 4. Fanions (same content for both) ─────────────────────── */

  'groot-vaantje-op-maat': [
    {
      question: 'Wat zijn de voordelen van geweven vaantjes tegenover bedrukte vaantjes?',
      answer: '<p>Geweven vaantjes worden gemaakt met acryldraad, voor een hoogwaardige afwerking en een langere levensduur. Ze zijn bijzonder geschikt voor grote gelegenheden of voor clubs die een premium resultaat willen. Bedrukte vaantjes zijn dan weer voordeliger en bieden veel ontwerpvrijheid dankzij de vierkleurendruk.</p>',
    },
    {
      question: 'Biedt u specifieke formaten voor vaantjes aan?',
      answer: '<p>Ja, we bieden verschillende maten en formaten aan volgens uw behoeften: kleine modellen voor in de auto, vaantjes om uit te wisselen voor een match, of grotere decoratieve banners. Neem gerust contact met ons op voor specifieke afmetingen.</p>',
    },
    {
      question: 'Kan ik mijn bestelling aanvullen met andere artikelen voor mijn club?',
      answer: '<p>Absoluut. Naast vaantjes bieden we een volledig assortiment artikelen op maat aan, zoals sjaals, mutsen of <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, om uw visuele identiteit te versterken.</p>',
    },
  ],

  'bedrukte-vaantjes': [
    {
      question: 'Wat zijn de voordelen van geweven vaantjes tegenover bedrukte vaantjes?',
      answer: '<p>Geweven vaantjes worden gemaakt met acryldraad, voor een hoogwaardige afwerking en een langere levensduur. Ze zijn bijzonder geschikt voor grote gelegenheden of voor clubs die een premium resultaat willen. Bedrukte vaantjes zijn dan weer voordeliger en bieden veel ontwerpvrijheid dankzij de vierkleurendruk.</p>',
    },
    {
      question: 'Biedt u specifieke formaten voor vaantjes aan?',
      answer: '<p>Ja, we bieden verschillende maten en formaten aan volgens uw behoeften: kleine modellen voor in de auto, vaantjes om uit te wisselen voor een match, of grotere decoratieve banners. Neem gerust contact met ons op voor specifieke afmetingen.</p>',
    },
    {
      question: 'Kan ik mijn bestelling aanvullen met andere artikelen voor mijn club?',
      answer: '<p>Absoluut. Naast vaantjes bieden we een volledig assortiment artikelen op maat aan, zoals sjaals, mutsen of <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, om uw visuele identiteit te versterken.</p>',
    },
  ],

  /* ── 5. Ballons ─────────────────────────────────────────────────── */

  'voetballen-bedrukken': [
    {
      question: 'Wat zijn de verschillen tussen promotieballen, trainingsballen en wedstrijdballen?',
      answer: '<ul><li>Promotiebal: ideaal voor de zichtbaarheid van uw merk of als geschenk voor supporters, gemaakt van PU en PVC.</li><li>Trainingsbal: perfect voor regelmatig gebruik, met duurzame materialen die voldoen aan de FIFA-normen.</li><li>Wedstrijdbal: ons topproduct, gebruikt in professionele competities, volledig te personaliseren in uw kleuren.</li></ul>',
    },
    {
      question: 'Kan ik de ballen personaliseren met complexere ontwerpen?',
      answer: '<p>Ja, we kunnen complexere ontwerpen in vierkleurendruk aanbrengen, waaronder meerdere logo\'s of herhaalde motieven. U kunt ook kiezen uit verschillende maten, stijlen (retro, beachsoccer) en afwerkingen.</p>',
    },
    {
      question: 'Biedt u naast ballen ook andere artikelen aan om mijn ploeg uit te rusten?',
      answer: '<p>Absoluut. Geef uw ploeg een volledige identiteit met onze <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, ontworpen om comfort, prestaties en een ontwerp op maat te combineren. Deze shirts passen perfect bij uw ballen tijdens wedstrijden of trainingen.</p>',
    },
  ],

  /* ── 6. Bonnets ─────────────────────────────────────────────────── */

  'bedrukte-mutsen': [
    {
      question: 'Welke soorten mutsen op maat biedt u aan?',
      answer: '<p>We bieden een ruim assortiment mutsen aan volgens uw behoeften:</p><ul><li>Klassiek: ideaal voor een tijdloze look.</li><li>Dik of met kabelbreisel: perfect voor de winter.</li><li>Omkeerbaar of met leren labels: voor een originelere stijl.</li></ul>',
    },
    {
      question: 'Kan ik gedetailleerde ontwerpen op mijn mutsen laten aanbrengen?',
      answer: '<p>Ja, we bieden verschillende personalisatietechnieken aan:</p><ul><li>Borduursel voor een verzorgde afwerking.</li><li>Opgenaaide patches of leren labels voor een premium effect.</li></ul><p>Voor complexere motieven kunnen we ook sublimatie gebruiken.</p>',
    },
    {
      question: 'Biedt u naast mutsen ook andere kleding op maat aan?',
      answer: '<p>Ja, we bieden volledige oplossingen om uw ploeg uit te rusten, waaronder <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, perfect om de visuele identiteit van uw club of vereniging te versterken. Combineer uw mutsen en shirts voor een harmonieus geheel.</p>',
    },
  ],

  /* ── 7. Veste de pluie ──────────────────────────────────────────── */

  'bedrukte-regenjassen': [
    {
      question: 'Kan ik het ontwerp van de regenjas volledig personaliseren?',
      answer: '<p>Ja, het volledige oppervlak van de jas kan gepersonaliseerd worden met uw kleuren, motieven en logo\'s. U kunt zelfs een ander ontwerp kiezen voor de voor- en achterkant, zodat de jas perfect de identiteit van uw club of bedrijf weerspiegelt.</p>',
    },
    {
      question: 'Zijn de jassen geschikt voor intensief gebruik?',
      answer: '<p>Absoluut. Ze zijn gemaakt van 100 % waterdicht polyester, ideaal voor moeilijke weersomstandigheden, en gaan lang mee bij regelmatige sportactiviteiten.</p>',
    },
    {
      question: 'Kan ik de regenjassen combineren met andere uitrusting op maat?',
      answer: '<p>Natuurlijk. Vervolledig uw outfit met onze <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, ideaal om een samenhangende visuele identiteit te creëren tijdens wedstrijden of trainingen. Combineer ze met de jassen voor een ploeg die klaar is voor alle weersomstandigheden.</p>',
    },
  ],

  /* ── 8. Gants ───────────────────────────────────────────────────── */

  'gepersonaliseerde-handschoenen': [
    {
      question: 'Kan ik verschillende maten kiezen voor de handschoenen?',
      answer: '<p>Ja, u kunt handschoenen bestellen in maten voor volwassenen of kinderen. U kunt de maatverdeling na de bestelling doorgeven, zonder extra kosten.</p>',
    },
    {
      question: 'Welke opties zijn er om de handschoenen met een logo te personaliseren?',
      answer: '<p>We bieden drie personalisatietechnieken voor logo\'s aan:</p><ul><li>Borduursel: ideaal voor een elegante afwerking.</li><li>Geweven label: voor een verfijnde en duurzame look.</li><li>Bedrukte patch: perfect voor complexere ontwerpen.</li></ul><p>Deze logo\'s worden op beide handschoenen aangebracht.</p>',
    },
    {
      question: 'Hoe vervolledig ik de uitrusting van mijn ploeg met bijpassende producten?',
      answer: '<p>Voor een perfect geheel combineert u uw handschoenen op maat met onze <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>, afgestemd op uw kleuren en uw logo. Zo toont uw ploeg een sterke visuele identiteit op het veld.</p>',
    },
  ],

  /* ── 9. Maillot entra\u00eenement ────────────────────────────────────── */

  'warm-up-shirt': [
    {
      question: 'Kan ik de trainingsshirts personaliseren met namen of nummers?',
      answer: '<p>Voor deze shirts moeten alle exemplaren een identiek ontwerp hebben. U kunt na de productie namen of nummers toevoegen met flexdruk. Wilt u al tijdens de productie een unieke personalisatie? Ontdek dan onze <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>.</p>',
    },
    {
      question: 'Zijn de shirts geschikt voor intensief gebruik?',
      answer: '<p>Ja, deze shirts zijn gemaakt van 100 % polyester, licht, ademend en ontworpen om regelmatige trainingen te doorstaan. Ze bieden spelers optimaal comfort en behouden een professionele uitstraling.</p>',
    },
  ],

  /* ── 10. Badges ─────────────────────────────────────────────────── */

  'geweven-patches': [
    {
      question: 'Welke soorten patches biedt u aan?',
      answer: '<p>We bieden twee soorten patches op maat aan:</p><ul><li>Om op te naaien: ideaal voor een permanente bevestiging.</li><li>Om op te strijken: eenvoudig te bevestigen dankzij een speciale textiellijm die door strijken wordt geactiveerd, perfect voor praktisch gebruik.</li></ul>',
    },
    {
      question: 'Hoeveel kleuren kan ik in het ontwerp van mijn patch gebruiken?',
      answer: '<p>U kunt tot 6 verschillende kleuren gebruiken om uw patches te personaliseren. Voor complexere ontwerpen neemt u contact op met ons team om de beschikbare opties te bespreken.</p>',
    },
    {
      question: 'Hoe integreer ik de patches in de uitrusting van de ploeg?',
      answer: '<p>Patches op maat zijn perfect om uw uitrusting een unieke toets te geven, met name <strong><a href="/products/voetbalshirt-bedrukken/">voetbalshirts op maat</a></strong>. Ze versterken de identiteit van uw club en zorgen tegelijk voor een professionele look.</p>',
    },
  ],

  /* ── 11. Money page — maillot de football personnalis\u00e9 ──────────── */

  'voetbalshirt-bedrukken': [
    {
      question: 'Welke soorten voetbalshirts op maat biedt u aan?',
      answer: '<p>We bieden drie shirtmodellen aan:</p><ul><li>Ronde hals: de klassieker voor een sobere en tijdloze stijl.</li><li>V-hals: voor een sportieve en moderne toets.</li><li>Polokraag: ideaal voor een elegante en professionele look.</li></ul><p>U kunt kiezen uit een ruim aanbod maten, van 2 jaar tot 6XL, en zelfs specifieke pasvormen voor damesploegen.</p>',
    },
    {
      question: 'Wat is het verschil tussen de twee beschikbare materialen?',
      answer: '<ul><li>Glad en dicht materiaal: ideaal voor een klassieke look, zeer sterk en geschikt voor normale spelomstandigheden.</li><li>Geperforeerd materiaal: ontworpen voor sporters, voert transpiratie beter af en garandeert optimaal comfort, zelfs tijdens intense wedstrijden.</li></ul><p>Beide materialen bestaan uit hoogwaardig polyester dat gemaakt is om lang mee te gaan.</p>',
    },
    {
      question: 'Kan ik unieke namen of nummers op elk shirt laten zetten?',
      answer: '<p>Ja, elk shirt kan gepersonaliseerd worden met een eigen naam en nummer. Deze kunnen op de rug, op de borst of op elke andere plaats naar keuze worden aangebracht. Deze optie is ideaal voor ploegen die een sterke identiteit willen tonen op het veld.</p>',
    },
    {
      question: 'Hoe krijg ik een uniek ontwerp voor mijn ploeg?',
      answer: '<p>Onze grafisch ontwerpers werken met u samen aan een ontwerp op maat dat de identiteit van uw ploeg weerspiegelt. U kunt ook uw eigen ontwerp aanleveren door het meegeleverde sjabloon te downloaden. We zorgen ervoor dat alles klaar is voordat de productie start.</p>',
    },
    {
      question: 'Kan ik de shirts combineren met andere uitrusting voor mijn ploeg?',
      answer: '<p>Absoluut. Vervolledig uw shirts met bijpassende shorts, voetbalkousen op maat of zelfs jassen en accessoires zoals handschoenen of mutsen. Zo versterkt u de visuele eenheid van uw ploeg en valt u op tijdens competities.</p>',
    },
    {
      question: 'Waarom kiezen voor onze voetbalshirts op maat?',
      answer: '<p>Onze shirts zijn ontworpen voor de behoeften van professionele en amateurploegen:</p><ul><li>Europese productie voor een superieure kwaliteit.</li><li>Volledige vrijheid in de keuze van kleuren, motieven en logo\'s.</li><li>Beschikbaar in alle maten en pasvormen.</li><li>Gratis ontwerpservice door gespecialiseerde grafisch ontwerpers.</li></ul>',
    },
    {
      question: 'Welke voordelen bieden shirts op maat tegenover standaardmodellen?',
      answer: '<p>Met shirts op maat kunt u:</p><ul><li>De unieke identiteit van uw ploeg weerspiegelen.</li><li>Een sterk gevoel van verbondenheid creëren tussen de spelers.</li><li>Zorgen voor meer zichtbaarheid voor uw sponsors of partners door hun logo\'s te integreren.</li></ul><p>Ze zijn bijzonder aan te raden voor clubs, sportverenigingen of bedrijven die zich willen onderscheiden.</p>',
    },
    {
      question: 'Voor welke sporten of evenementen zijn shirts op maat geschikt?',
      answer: '<p>Onze shirts zijn veelzijdig en kunnen gebruikt worden voor:</p><ul><li>Amateur- of profvoetbalwedstrijden.</li><li>Trainingen en multisporttoernooien.</li><li>Bedrijfsevenementen of teambuilding.</li><li>School- of universiteitscompetities.</li></ul>',
    },
    {
      question: 'Wat zijn de minimale en maximale bestelvolumes?',
      answer: '<p>Het minimumvolume is 5 shirts per bestelling. Voor grote volumes, boven de 100 stuks, bieden we staffelprijzen en specifieke opties aan. Neem gerust contact met ons op om grote bestellingen te bespreken.</p>',
    },
    {
      question: 'Hoe onderhoudt u shirts op maat zodat ze zo lang mogelijk meegaan?',
      answer: '<p>Om de kwaliteit van uw shirts te behouden, raden we aan:</p><ul><li>Wassen op maximaal 30°C op een fijnwasprogramma.</li><li>Niet in de droogkast, plat aan de lucht laten drogen.</li><li>Strijken op lage temperatuur, binnenstebuiten.</li><li>Nooit rechtstreeks strijken op de gepersonaliseerde zones (flock, sublimatie).</li></ul>',
    },
    {
      question: 'Hoe integreer ik sponsors op de shirts?',
      answer: '<p>U kunt de logo\'s van uw sponsors op verschillende strategische plaatsen aanbrengen: borst, mouwen of rug. Zo maximaliseert u hun zichtbaarheid en respecteert u tegelijk de visuele identiteit van de ploeg. Onze grafisch ontwerper kan u adviseren over de optimale plaatsing.</p>',
    },
    {
      question: 'Wat kost een voetbalshirt op maat?',
      answer: '<p>De prijs per shirt hangt af van de bestelde hoeveelheid en de gekozen opties: de staffelprijzen staan in de prijstabel op de pagina, vanaf 5 stuks. Vraag een gratis offerte aan voor een precieze prijs op maat van uw ploeg.</p>',
    },
    {
      question: 'Levert u de shirts op maat in heel Europa?',
      answer: '<p>Ja. Al meer dan 10 jaar begeleiden we honderden clubs en ploegen in heel Europa, van het ontwerp tot de levering van de shirts.</p>',
    },
  ],
};
