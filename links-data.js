// Link aggiuntivi per ogni giorno: alloggio, parcheggi, noleggio, costi parcheggio
const linksData = {
  1: {
    hotelGmaps: "https://maps.google.com/?q=6626+Lexington+Ave+West+Hollywood+CA+90038",
    parking: "Non serve (Uber/Lyft). Se uscite a piedi: parcheggio libero in zona Melrose/Fairfax dopo le 18:00.",
    parkingCost: "N/D (giorno senza auto)"
  },
  2: {
    hotelGmaps: "https://maps.google.com/?q=6626+Lexington+Ave+West+Hollywood+CA+90038",
    parking: "Venice: Venice Beach Parking Lot ($10-15). Santa Monica: Structure 8 ($5 prime 3h). Malibu: parcheggi spiaggia ($10-15).",
    parkingGmaps: [
      { name: "Venice Beach Parking Lot", url: "https://maps.google.com/?q=1715+Pacific+Ave+Venice+CA+90291" },
      { name: "Santa Monica Parking Structure 8", url: "https://maps.google.com/?q=1555+2nd+St+Santa+Monica+CA+90401" },
      { name: "Malibu Pier Parking", url: "https://maps.google.com/?q=23000+Pacific+Coast+Hwy+Malibu+CA+90265" }
    ],
    parkingCost: "$10-15/giorno",
    rentalGmaps: "https://maps.google.com/?q=5400+W+Century+Blvd+Los+Angeles+CA+90045",
    rentalGmapsLabel: "Hertz - 5400 W Century Blvd, LA 90045"
  },
  3: {
    hotelGmaps: "https://maps.google.com/?q=6626+Lexington+Ave+West+Hollywood+CA+90038",
    parking: "Griffith Observatory: $10/h. Hollywood: Hollywood & Highland Parking ($3 prime 2h). Beverly Hills: 461 N Bedford Dr (prime 2h gratis).",
    parkingGmaps: [
      { name: "Griffith Observatory / Greek Theatre Parking", url: "https://maps.google.com/?q=Greek+Theatre+Parking+Griffith+Park+Los+Angeles" },
      { name: "Hollywood & Highland Parking", url: "https://maps.google.com/?q=6801+Hollywood+Blvd+Los+Angeles+CA+90028" },
      { name: "Beverly Hills Parking (461 N Bedford Dr)", url: "https://maps.google.com/?q=461+N+Bedford+Dr+Beverly+Hills+CA+90210" }
    ],
    parkingCost: "$10-20 totale",
    routeGmaps: "https://www.google.com/maps/dir/6626+Lexington+Ave+West+Hollywood+CA/Hollywood+Blvd+Los+Angeles+CA/Rodeo+Drive+Beverly+Hills+CA/Griffith+Observatory+Los+Angeles+CA"
  },
  4: {
    hotelGmaps: "https://maps.google.com/?q=Spark+by+Hilton+Yucca+Valley+Joshua+Tree",
    parking: "Palm Springs: Downtown Palm Springs Parking. Joshua Tree NP: parcheggi viewpoint gratuiti con pass ($30/veicolo).",
    parkingGmaps: [
      { name: "Downtown Palm Springs Parking", url: "https://maps.google.com/?q=Downtown+Palm+Springs+Parking+Palm+Springs+CA" },
      { name: "Joshua Tree NP - Hidden Valley", url: "https://maps.google.com/?q=Hidden+Valley+Joshua+Tree+National+Park" },
      { name: "Joshua Tree NP - Keys View", url: "https://maps.google.com/?q=Keys+View+Joshua+Tree+National+Park" }
    ],
    parkingCost: "Gratis (con pass parco $30)",
    routeGmaps: "https://www.google.com/maps/dir/Los+Angeles+CA/Palm+Springs+CA/Pioneertown+CA/Spark+by+Hilton+Yucca+Valley+Joshua+Tree/Joshua+Tree+National+Park"
  },
  5: {
    hotelGmaps: "https://maps.google.com/?q=Travelodge+Lake+Havasu+City",
    parking: "Parcheggio hotel gratuito. London Bridge: parcheggi pubblici gratuiti vicino English Village.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/Yucca+Valley+CA/Lake+Havasu+City+AZ"
  },
  6: {
    hotelGmaps: "https://maps.google.com/?q=Days+Inn+Williams+AZ",
    parking: "Parcheggio hotel gratuito. Route 66: parcheggi gratuiti lungo strada in tutte le cittadine.",
    parkingCost: "Gratis",
    parkingGmaps: [
      { name: "Oatman - Main Street", url: "https://maps.google.com/?q=Oatman+AZ" },
      { name: "Cool Springs Station", url: "https://maps.google.com/?q=Cool+Springs+Station+Route+66+Arizona" },
      { name: "Kingman - Visitor Center", url: "https://maps.google.com/?q=Kingman+Arizona+Visitor+Center" },
      { name: "Giganticus Headicus", url: "https://maps.google.com/?q=Giganticus+Headicus+Kingman+Arizona" },
      { name: "Hackberry General Store", url: "https://maps.google.com/?q=Hackberry+General+Store+Arizona" },
      { name: "Seligman - Route 66", url: "https://maps.google.com/?q=Seligman+Route+66+Arizona" },
      { name: "Days Inn Williams", url: "https://maps.google.com/?q=Days+Inn+Williams+AZ" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Lake+Havasu+City+AZ/Oatman+AZ/Cool+Springs+Station+Route+66+Arizona/Kingman+AZ/Giganticus+Headicus+Kingman+Arizona/Hackberry+General+Store+Arizona/Seligman+AZ/Williams+AZ"
  },
  7: {
    hotelGmaps: "https://maps.google.com/?q=The+View+Hotel+Monument+Valley",
    parking: "Parcheggio The View Hotel gratuito. Grand Canyon: $35/veicolo (pass 7 giorni). Desert View: incluso nel pass.",
    parkingCost: "Hotel gratis + pass GC $35",
    parkingGmaps: [
      { name: "Williams (partenza)", url: "https://maps.google.com/?q=Williams+AZ" },
      { name: "Grand Canyon - Mather Point", url: "https://maps.google.com/?q=Mather+Point+Grand+Canyon+National+Park" },
      { name: "Grand Canyon - Yavapai Point", url: "https://maps.google.com/?q=Yavapai+Point+Grand+Canyon" },
      { name: "Desert View Watchtower", url: "https://maps.google.com/?q=Desert+View+Watchtower+Grand+Canyon" },
      { name: "The View Hotel Monument Valley", url: "https://maps.google.com/?q=The+View+Hotel+Monument+Valley" }
    ],
    youtube: "https://youtube.com/shorts/_kXeNFCPw_o",
    routeGmaps: "https://www.google.com/maps/dir/Williams+AZ/Mather+Point+Grand+Canyon+National+Park/Yavapai+Point+Grand+Canyon/Desert+View+Watchtower+Grand+Canyon/The+View+Hotel+Monument+Valley"
  },
  8: {
    hotelGmaps: "https://maps.google.com/?q=Travelodge+Page+AZ",
    parking: "Parcheggio hotel gratuito. Horseshoe Bend: $10/veicolo (parcheggio a pagamento gestito da Page City).",
    parkingCost: "$10 (Horseshoe Bend)",
    parkingGmaps: [
      { name: "Monument Valley (partenza)", url: "https://maps.google.com/?q=Monument+Valley+Arizona" },
      { name: "Forrest Gump Point", url: "https://maps.google.com/?q=Forrest+Gump+Point+Monument+Valley" },
      { name: "Travelodge Page", url: "https://maps.google.com/?q=Travelodge+Page+AZ" },
      { name: "Horseshoe Bend", url: "https://maps.google.com/?q=Horseshoe+Bend+Page+AZ" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Monument+Valley+AZ/Forrest+Gump+Point+Monument+Valley/Travelodge+Page+AZ/Horseshoe+Bend+Page+AZ"
  },
  9: {
    hotelGmaps: "https://maps.google.com/?q=La+Quinta+Inn+Kanab+UT",
    parking: "Parcheggio hotel gratuito. Antelope Canyon X: parcheggio meeting point incluso nel tour.",
    parkingCost: "Gratis",
    parkingGmaps: [
      { name: "Page (partenza)", url: "https://maps.google.com/?q=Page+AZ" },
      { name: "Antelope Canyon X", url: "https://maps.google.com/?q=Antelope+Canyon+X+Page+AZ" },
      { name: "La Quinta Inn Kanab", url: "https://maps.google.com/?q=La+Quinta+Inn+Kanab+UT" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Page+AZ/Antelope+Canyon+X+Page+AZ/La+Quinta+Inn+Kanab+UT"
  },
  10: {
    hotelGmaps: "https://maps.google.com/?q=La+Quinta+Inn+Kanab+UT",
    parking: "Parcheggio hotel gratuito. Bryce Canyon: $35/veicolo (pass 7 giorni) + shuttle gratuito. Viewpoint congestionati in agosto.",
    parkingCost: "$35 (pass Bryce)",
    parkingGmaps: [
      { name: "Kanab (partenza)", url: "https://maps.google.com/?q=Kanab+UT" },
      { name: "Bryce Canyon - Sunset Point", url: "https://maps.google.com/?q=Sunset+Point+Bryce+Canyon+National+Park" },
      { name: "Bryce Canyon - Bryce Point", url: "https://maps.google.com/?q=Bryce+Point+Bryce+Canyon+National+Park" },
      { name: "Bryce Canyon - Navajo Loop Trailhead", url: "https://maps.google.com/?q=Navajo+Loop+Trailhead+Bryce+Canyon" },
      { name: "La Quinta Inn Kanab (rientro)", url: "https://maps.google.com/?q=La+Quinta+Inn+Kanab+UT" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Kanab+UT/Sunset+Point+Bryce+Canyon+National+Park/Bryce+Point+Bryce+Canyon+National+Park/La+Quinta+Inn+Kanab+UT"
  },
  11: {
    hotelGmaps: "https://maps.google.com/?q=Sahara+Las+Vegas+Hotel",
    parking: "Parcheggio hotel gratuito. Zion NP: $35/veicolo (pass 7 giorni). Parcheggi Visitor Center: arrivare entro le 8:00. Springdale: parcheggi a pagamento $20-25/giorno.",
    parkingCost: "$35 (pass Zion) + eventuale $20 Springdale",
    parkingGmaps: [
      { name: "Kanab (partenza)", url: "https://maps.google.com/?q=Kanab+UT" },
      { name: "Zion Canyon Visitor Center", url: "https://maps.google.com/?q=Zion+Canyon+Visitor+Center+Springdale+UT" },
      { name: "Zion NP - Riverside Walk", url: "https://maps.google.com/?q=Riverside+Walk+Zion+National+Park" },
      { name: "Sahara Las Vegas", url: "https://maps.google.com/?q=Sahara+Las+Vegas+Hotel" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Kanab+UT/Zion+Canyon+Visitor+Center+Springdale+UT/Sahara+Las+Vegas+Hotel"
  },
  12: {
    hotelGmaps: "https://maps.google.com/?q=Sahara+Las+Vegas+Hotel",
    parking: "Auto parcheggiata in hotel. Muoversi con Monorail ($5 corsa, $13 day pass) o a piedi sulla Strip.",
    parkingCost: "Hotel: verificare resort fee (~$45 include parcheggio)"
  },
  13: {
    hotelGmaps: "https://maps.google.com/?q=La+Quinta+Bakersfield+North",
    parking: "Parcheggio hotel gratuito. Soste lungo la I-15/CA-58: aree di servizio gratuite.",
    parkingCost: "Gratis",
    parkingGmaps: [
      { name: "Las Vegas (partenza)", url: "https://maps.google.com/?q=Las+Vegas+Strip" },
      { name: "Barstow - Peggy Sue's 50's Diner", url: "https://maps.google.com/?q=Peggy+Sue%27s+50%27s+Diner+Barstow+CA" },
      { name: "Mojave - CA-58", url: "https://maps.google.com/?q=Mojave+CA" },
      { name: "Tehachapi", url: "https://maps.google.com/?q=Tehachapi+CA" },
      { name: "La Quinta Bakersfield", url: "https://maps.google.com/?q=La+Quinta+Bakersfield+North" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Las+Vegas+NV/Peggy+Sue%27s+50%27s+Diner+Barstow+CA/Mojave+CA/Tehachapi+CA/La+Quinta+Bakersfield+North"
  },
  14: {
    hotelGmaps: "https://maps.google.com/?q=La+Quinta+Visalia+Sequoia+Gateway",
    parking: "Parcheggio hotel gratuito. Sequoia NP: $35/veicolo (pass 7 giorni). Parcheggi Giant Forest: gratis con pass, ma si riempiono in fretta.",
    parkingCost: "$35 (pass Sequoia/Kings Canyon)",
    parkingGmaps: [
      { name: "Bakersfield (partenza)", url: "https://maps.google.com/?q=Bakersfield+CA" },
      { name: "Sequoia NP - Ash Mountain Entrance", url: "https://maps.google.com/?q=Ash+Mountain+Entrance+Sequoia+National+Park" },
      { name: "Sequoia NP - General Sherman Tree", url: "https://maps.google.com/?q=General+Sherman+Tree+Sequoia+National+Park" },
      { name: "Sequoia NP - Giant Forest Museum", url: "https://maps.google.com/?q=Giant+Forest+Museum+Sequoia+National+Park" },
      { name: "La Quinta Visalia", url: "https://maps.google.com/?q=La+Quinta+Visalia+Sequoia+Gateway" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Bakersfield+CA/Ash+Mountain+Entrance+Sequoia+National+Park/General+Sherman+Tree+Sequoia+National+Park/La+Quinta+Visalia+Sequoia+Gateway"
  },
  15: {
    hotelGmaps: "https://maps.google.com/?q=Yosemite+Southgate+Hotel+Oakhurst",
    parking: "Parcheggio hotel gratuito. Yosemite NP: $35/veicolo (pass 7 giorni). Parcheggi Valley: arrivare entro le 8:00, navette gratuite.",
    parkingCost: "$35 (pass Yosemite)",
    parkingGmaps: [
      { name: "Visalia (partenza)", url: "https://maps.google.com/?q=Visalia+CA" },
      { name: "Yosemite - South Entrance", url: "https://maps.google.com/?q=Yosemite+National+Park+South+Entrance" },
      { name: "Yosemite Valley - El Capitan", url: "https://maps.google.com/?q=El+Capitan+Yosemite+National+Park" },
      { name: "Yosemite Valley - Tunnel View", url: "https://maps.google.com/?q=Tunnel+View+Yosemite+National+Park" },
      { name: "Glacier Point (opzionale)", url: "https://maps.google.com/?q=Glacier+Point+Yosemite+National+Park" },
      { name: "Yosemite Southgate Hotel Oakhurst", url: "https://maps.google.com/?q=Yosemite+Southgate+Hotel+Oakhurst" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Visalia+CA/Yosemite+National+Park+South+Entrance/El+Capitan+Yosemite+National+Park/Yosemite+Southgate+Hotel+Oakhurst"
  },
  16: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Spero+San+Francisco",
    parking: "NESSUN parcheggio: auto riconsegnata! Muoversi a piedi/BART/bus. NON lasciare mai bagagli in auto in nessun caso a SF.",
    parkingCost: "N/D (senza auto)",
    rentalReturnGmaps: "https://maps.google.com/?q=Hertz+325+Mason+St+San+Francisco+CA+94102",
    rentalReturnGmapsLabel: "Hertz SFO - 325 Mason St, San Francisco",
    routeGmaps: "https://www.google.com/maps/dir/Oakhurst+CA/San+Francisco+CA"
  },
  17: {
    hotelGmaps: "https://maps.google.com/?q=Timbri+Hotel+33+Turk+St+San+Francisco+CA+94102",
    parking: "Nessuna auto. Ferry Building: a piedi o tram F-line. Ferry per Sausalito da Pier 41 ($14 andata/ritorno a persona).",
    parkingCost: "N/D (giorno senza auto)"
  },
  18: {
    hotelGmaps: "https://maps.google.com/?q=Timbri+Hotel+33+Turk+St+San+Francisco+CA+94102",
    parking: "Nessuna auto. Cable Car: $8 corsa singola, $13 day pass Muni. Bus Muni: $3.",
    parkingCost: "N/D (giorno senza auto)"
  },
  19: {
    hotelGmaps: "https://maps.google.com/?q=Timbri+Hotel+33+Turk+St+San+Francisco+CA+94102",
    parking: "Nessuna auto. Pier 33 Alcatraz: a piedi, tram F o Uber (~$12). Tour Alcatraz già pagato.",
    parkingCost: "N/D (giorno senza auto)"
  },
  20: {
    hotelGmaps: "https://maps.google.com/?q=San+Francisco+International+Airport",
    parking: "Nessuna auto. Trasferimento a SFO: BART ($10 a persona, ~30 min) o Uber (~$35-45).",
    parkingCost: "N/D (giorno senza auto)"
  }
};
