// Link aggiuntivi per ogni giorno: alloggio, parcheggi, noleggio, costi parcheggio
const linksData = {
  1: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Ziggy+on+Sunset",
    parking: "Valet parking dell'hotel a pagamento. Griffith Observatory",
    parkingGmaps: [
      { name: "Griffith Observatory", url: "https://maps.google.com/?q=W.+Observatory+Road+(Drop-Off+Only)+Los+Angeles+CA+90027+Stati+Uniti" }
    ],
    parkingCost: "$70/giorno hotel + $10/h Griffith Observatory",
    routeGmaps: "https://www.google.com/maps/dir/Aeroporto+Internazionale+di+Los+Angeles,+1+World+Wy,+Los+Angeles,+CA+90045,+Stati+Uniti/Hotel+Ziggy+on+Sunset,+8462+Sunset+Blvd,+West+Hollywood,+CA+90069,+Stati+Uniti/Osservatorio+Griffith,+2800+E+Observatory+Rd,+Los+Angeles,+CA+90027,+Stati+Uniti"

  },
  2: {
    hotelGmaps: "https://maps.google.com/?q=Hotel+Ziggy+on+Sunset",
    parking: "Valet parking dell'hotel a pagamento. Beverly Hills & Santa Monica",
    parkingGmaps: [
      { name: "Santa Monica Parking Structure 8", url: "https://maps.google.com/?q=1555+2nd+St+Santa+Monica+CA+90401" },
      { name: "Beverly Hills Parking (461 N Bedford Dr)", url: "https://maps.google.com/?q=461+N+Bedford+Dr+Beverly+Hills+CA+90210" }
    ],
    parkingCost: "$70/giorno hotel + Santa Monica + Beverly Hills",
    routeGmaps:"https://www.google.com/maps/dir/Hotel+Ziggy+on+Sunset,+8462+Sunset+Blvd,+West+Hollywood,+CA+90069,+Stati+Uniti/Beverly+Hills,+California,+Stati+Uniti/Rodeo+Dr,+Beverly+Hills,+CA,+Stati+Uniti/Molo+di+Santa+Monica,+200+Santa+Monica+Pier,+Santa+Monica,+CA+90401,+Stati+Uniti/Venice+Beach,+Los+Angeles,+California,+Stati+Uniti",
    rentalGmaps: "https://maps.google.com/?q=5400+W+Century+Blvd+Los+Angeles+CA+90045",
    rentalGmapsLabel: "Hertz - 5400 W Century Blvd, LA 90045"
  },
  3: {
    hotelGmaps: "https://maps.google.com/?q=Motel+6+Kingman+AZ+-+Route+66+West+424+W+Beale+St+Kingman+AZ+86401+Stati+Uniti",
    parking: "Hollywood: Hollywood & Highland Parking ($3 prime 2h). Route 66: parcheggi gratuiti lungo strada in tutte le cittadine. Parcheggio hotel gratuito.",
    parkingGmaps: [
      { name: "Hollywood & Highland Parking", url: "https://maps.google.com/?q=6801+Hollywood+Blvd+Los+Angeles+CA+90028" }
    ],
    parkingCost: "$10 totale",
    routeGmaps: "https://www.google.com/maps/dir/Hotel+Ziggy+on+Sunset,+8462+Sunset+Blvd,+West+Hollywood,+CA+90069,+Stati+Uniti/Hollywood+Walk+of+Fame,+6255+Sunset+Blvd+%23150,+Hollywood,+CA+90028,+Stati+Uniti/TCL+Chinese+Theatre,+6925+Hollywood+Blvd,+Hollywood,+CA+90028,+Stati+Uniti/Dolby+Theatre,+1810+Highland+Ave,+Los+Angeles,+CA+90028,+Stati+Uniti/Barstow,+California,+Stati+Uniti/Roy's+Motel+%26+Cafe,+87520+National+Trails+Hwy,+Amboy,+CA+92304,+Stati+Uniti/Oatman,+Arizona,+Stati+Uniti/Motel+6+Kingman,+AZ+-+Route+66+West,+424+W+Beale+St,+Kingman,+AZ+86401,+Stati+Uniti"
  },
  4: {
    hotelGmaps: "https://maps.google.com/?q=Maswik+Lodge+North",
    parking: "Route 66: parcheggi gratuiti lungo strada in tutte le cittadine. Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/Motel+6+Kingman,+AZ+-+Route+66+West,+424+W+Beale+St,+Kingman,+AZ+86401,+Stati+Uniti/Peach+Springs,+Arizona+86434,+Stati+Uniti/Seligman,+Arizona+86337,+Stati+Uniti/Williams,+Arizona+86046,+Stati+Uniti/Maswik+Lodge+North,+202+Village+Loop+Drive,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti"
  },
  5: {
    hotelGmaps: "https://maps.google.com/?q=Goulding's+Lodge",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    parkingGmaps: [
      { name: "Forrest Gump Point", url: "https://maps.google.com/?q=Forrest+Gump+Point+Monument+Valley" }
    ],
    routeGmaps: "https://www.google.com/maps/dir/Maswik+Lodge+North,+202+Village+Loop+Drive,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Pipe+Creek+Vista,+E+Rim+Dr,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Duck+on+a+Rock+Viewpoint,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Grandview+Point,+Arizona+86023,+Stati+Uniti/Moran+Point,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Lipan+Point,+Arizona+86023,+Stati+Uniti/Navajo+Point,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Desert+View+Watchtower,+Grand+Canyon+Village,+AZ+86023,+Stati+Uniti/Forrest+Gump+Point,+US-163+Scenic,+Mexican+Hat,+UT+84531,+Stati+Uniti/The+View+Hotel,+Indian+Rte+42,+Oljato-Monument+Valley,+UT+84536,+Stati+Uniti/Goulding's+Lodge,+1000+Gouldings+Trading+Post+Rd,+Oljato-Monument+Valley,+UT+84536,+Stati+Uniti"
  },
  6: {
    hotelGmaps: "https://maps.google.com/?q=Knights+Inn+Page",
    parking: "Parcheggio Horseshoe Bend: $10/veicolo. Parcheggio hotel gratuito. ",
    parkingCost: "$10 (Horseshoe Bend)",
    routeGmaps: "https://www.google.com/maps/dir/Goulding's+Lodge,+1000+Gouldings+Trading+Post+Rd,+Oljato-Monument+Valley,+UT+84536,+Stati+Uniti/Merrick+Butte,+Arizona+86033,+Stati+Uniti/Elephant+Butte,+Arizona+86033,+Stati+Uniti/Three+Sisters,+Oljato-Monument+Valley,+UT+84536,+Stati+Uniti/John+Ford+Point,+Oljato-Monument+Valley,+UT+84536,+Stati+Uniti/Camel+Butte,+Arizona+86033,+Stati+Uniti/Rain+God+Mesa,+Arizona+84536,+Stati+Uniti/Totem+pole,+Arizona+86033,+Stati+Uniti/Artist's+Point,+Unnamed+Road,+Kayenta,+AZ+86033,+Stati+Uniti/North+Window+Overlook,+Kayenta,+AZ+86033,+Stati+Uniti/The+Thumb,+Kayenta,+AZ+86033,+Stati+Uniti/Horseshoe+Bend,+Arizona+86040,+Stati+Uniti/Knights+Inn+Page,+121+S+Lake+Powell+Blvd,+Page,+AZ+86040,+Stati+Uniti"
  },
  7: {
    hotelGmaps: "https://maps.google.com/?q=Bryce+View+Lodge",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    youtube: "https://youtube.com/shorts/_kXeNFCPw_o",
    routeGmaps: "https://www.google.com/maps/dir/Knights+Inn+Page,+121+S+Lake+Powell+Blvd,+Page,+AZ+86040,+Stati+Uniti/Lower+Antelope+Canyon+Parking,+Indn,+Route+222,+Page,+AZ+86040,+Stati+Uniti/Big+Lake+Trading+Post,+1501+Coppermine+Rd,+Page,+AZ+86040,+Stati+Uniti/Glen+Canyon+Dam+Overlook,+Overlook+Dr,+Page,+AZ+86040,+Stati+Uniti/Wahweap+Overlook,+1000+US-89,+Page,+AZ+86040,+Stati+Uniti/Bryce+Canyon+National+Park+Sunset+Point,+Sunset+Pt+Rd,+Bryce+Canyon+City,+UT+84764,+Stati+Uniti/Bryce+View+Lodge,+105+Center+St,+Bryce+Canyon+City,+UT+84764,+Stati+Uniti"
  },
  8: {
    hotelGmaps: "https://maps.google.com/?q=Best+Western+East+Zion+Thunderbird+Lodge",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/Bryce+View+Lodge,+105+Center+St,+Bryce+Canyon+City,+UT+84764,+Stati+Uniti/Bryce+Canyon+National+Park+Sunrise+Point,+Rim+Trail,+Bryce+Canyon+City,+UT+84764,+Stati+Uniti/Bryce+Canyon+National+Park+Sunset+Point,+Sunset+Pt+Rd,+Bryce+Canyon+City,+UT+84764,+Stati+Uniti/Navajo+Loop+Trail,+Utah+84764,+Stati+Uniti/Inspiration+Point,+Utah+84764,+Stati+Uniti/Bryce+Point,+Utah+84764,+Stati+Uniti/Bryce+Natural+Bridge,+Bryce+Canyon+National+Park,+UT,+Stati+Uniti/Agua+Canyon+Overlook,+Bryce+Canyon,+National+Park,+UT,+Stati+Uniti/Rainbow+Point,+Utah,+Stati+Uniti/Yovimpa+Point,+Utah,+Stati+Uniti/Best+Western+East+Zion+Thunderbird+Lodge"
  },
  9: {
    hotelGmaps: "https://maps.google.com/?q=Horseshoe+Las+Vegas+3645+Las+Vegas+Blvd+S+Las+Vegas+NV+89109+Stati+Uniti",
    parking: "Parcheggio hotel $25/giorno.",
    parkingCost: "$25/giorno",
    routeGmaps: "https://www.google.com/maps/dir/Best+Western+East+Zion+Thunderbird+Lodge,+4530+State+St,+Mt+Carmel,+UT+84755,+Stati+Uniti/Canyon+Overlook+Trail,+Utah+84737,+Stati+Uniti/The+Zion-Mount+Carmel+Tunnel,+Zion+%E2%80%93+Mount+Carmel+Hwy,+Hurricane,+UT+84737,+Stati+Uniti/Zion+Canyon+Scenic+Dr,+Utah,+Stati+Uniti/Horseshoe+Las+Vegas,+3645+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89109,+Stati+Uniti"
  },
  10: {
    hotelGmaps: "https://maps.google.com/?q=Horseshoe+Las+Vegas+3645+Las+Vegas+Blvd+S+Las+Vegas+NV+89109+Stati+Uniti",
    parking: "Parcheggio hotel $25/giorno.",
    parkingCost: "$25/giorno",
    routeGmaps: "https://www.google.com/maps/dir/Horseshoe+Las+Vegas,+3645+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89109,+Stati+Uniti/Lake+Mead+National+Recreation+Area,+10+Lakeshore+Rd,+Boulder+City,+NV+89005,+Stati+Uniti/Valley+of+Fire+State+Park,+Moapa+Valley,+NV+89040,+Stati+Uniti/Elephant+Rock,+Valley+of+Fire+Hwy,+Overton,+NV+89040,+Stati+Uniti/White+Domes+Rd,+Nevada+89040,+Stati+Uniti/Mouse's+Tank+Rd,+Nevada+89040,+Stati+Uniti/Fire+Canyon+Rd,+Nevada+89040,+Stati+Uniti/Arch+Rock,+Overton,+NV+89040,+Stati+Uniti/Horseshoe+Las+Vegas,+3645+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89109,+Stati+Uniti/Las+Vegas+Sign+Parking,+5271-5753+S+Las+Vegas+Blvd,+Las+Vegas,+NV+89119,+Stati+Uniti/Gold+%26+Silver+Pawn+Shop,+713+S+Las+Vegas+Blvd,+Las+Vegas,+NV+89101,+Stati+Uniti/Meow+Wolf+Las+Vegas'+Omega+Mart,+3215+Rancho+Dr+%23100,+Las+Vegas,+NV+89102,+Stati+Uniti"
  },
  11: {
    hotelGmaps: "https://maps.google.com/?q=The+Ranch+at+Death+Valley",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/Horseshoe+Las+Vegas,+3645+Las+Vegas+Blvd+S,+Las+Vegas,+NV+89109,+Stati+Uniti/Red+Rock+Canyon+Visitor+Center,+1000+Scenic+Loop+Dr,+Las+Vegas,+NV+89161,+Stati+Uniti/Dante's+View,+California,+Stati+Uniti/Artists+Palette,+California,+Stati+Uniti/The+Ranch+at+Death+Valley,+CA-190,+DEATH+VALLEY,+CA+92328,+Stati+Uniti"
  },
  12: {
    hotelGmaps: "https://maps.google.com/?q=The+Gateway+Restaurant+%26+Lodge",
    parking: "Red Rock Canyon State Park ($6 per veicolo). Parcheggio hotel gratuito.",
    parkingCost: "$6 (Red Rock Canyon) + Gratis (hotel)",
    routeGmaps: "https://www.google.com/maps/dir/The+Ranch+at+Death+Valley,+CA-190,+DEATH+VALLEY,+CA+92328,+Stati+Uniti/Zabriskie+Point,+California,+Stati+Uniti/Bacino+di+Badwater,+California,+Stati+Uniti/Devils+Golf+Course,+California,+Stati+Uniti/Mesquite+Flat+Sand+Dunes,+California+92328,+Stati+Uniti/Trona+Pinnacles,+California,+Stati+Uniti/Red+Rock+Canyon+State+Park,+37749+Abbott+Dr,+Cantil,+CA+93519,+Stati+Uniti/The+Gateway+Restaurant+%26+Lodge,+45978+Sierra+Dr,+Three+Rivers,+CA+93271,+Stati+Uniti"
  },
  13: {
    hotelGmaps: "https://maps.google.com/?q=Yosemite+Cedar+Lodge",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/The+Gateway+Restaurant+%26+Lodge,+45978+Sierra+Dr,+Three+Rivers,+CA+93271,+Stati+Uniti/Sequoia+National+Park's+Tunnel+Log,+Crescent+Meadow+Rd,+Sequoia+National+Park,+CA+93262,+Stati+Uniti/Moro+Rock+Trail,+Sequoia+National+Park,+CA+93262,+Stati+Uniti/Albero+del+Generale+Sherman,+Three+Rivers,+CA+93262,+Stati+Uniti/Yosemite+Cedar+Lodge,+9966+CA-140,+El+Portal,+CA+95318,+Stati+Uniti"
  },
  14: {
    hotelGmaps: "https://maps.google.com/?q=San+Remo+Hotel+2237+Mason+St+San+Francisco+CA+94133+Stati+Uniti",
    parking: "Garage convenzionato hotel $30/giorno operativo dalle 7:00 alle 20:00.",
    parkingCost: "$30/giorno",
    routeGmaps: "https://www.google.com/maps/dir/Yosemite+Cedar+Lodge,+9966+CA-140,+El+Portal,+CA+95318,+Stati+Uniti/Tunnel+View,+California,+Stati+Uniti/Glacier+Point,+California,+Stati+Uniti/Washburn+Point,+5202+Glacier+Point+Rd,+TUOLUMNE+MEADOWS,+CA+95389,+Stati+Uniti/Cook's+Meadow+Loop,+Yosemite+Valley,+CA+95389,+Stati+Uniti/Sentinel+Bridge,+Stati+Uniti,+California,+TUOLUMNE+MEADOWS/El+Capitan+Meadow,+California+95389,+Stati+Uniti/San+Remo+Hotel,+2237+Mason+St,+San+Francisco,+CA+94133,+Stati+Uniti"
  },
  15: {
    hotelGmaps: "https://maps.google.com/?q=Ramada+Limited+Redondo+Beach",
    parking: "Parcheggio hotel gratuito.",
    parkingCost: "Gratis",
    routeGmaps: "https://www.google.com/maps/dir/San+Remo+Hotel,+2237+Mason+St,+San+Francisco,+CA+94133,+Stati+Uniti/Monterey,+California,+Stati+Uniti/Carmel-by-the-Sea,+California+93921,+Stati+Uniti/Bixby+Bridge,+CA-1,+Bixby+Creek+Bridge,+Monterey,+CA+93940,+Stati+Uniti/Big+Sur,+California,+Stati+Uniti/McWay+Falls+View+Point,+53034+CA-1,+Big+Sur,+CA+93920,+Stati+Uniti/Morro+Bay,+California,+Stati+Uniti/Santa+Barbara,+California,+Stati+Uniti/Malib%C3%B9,+California,+Stati+Uniti/Ramada+Limited+Redondo+Beach,+435+S+Pacific+Coast+Hwy,+Redondo+Beach,+CA+90277,+Stati+Uniti"
  },
  16: {
    hotelGmaps: "https://maps.google.com/?q=Aeroporto+Internazionale+di+Los+Angeles",
    parking: "Parcheggio Redondo Beach",
    parkingCost: "?",
    rentalReturnGmaps: "https://maps.google.com/?q=5251+W+98TH+ST+LOS+ANGELES+CA+90045",
    rentalReturnGmapsLabel: "Alamo LAX - Los Angeles International Airport",
    routeGmaps: "https://www.google.com/maps/dir/Ramada+Limited+Redondo+Beach,+435+S+Pacific+Coast+Hwy,+Redondo+Beach,+CA+90277,+Stati+Uniti/Redondo+Coffee+Shop+and+Bait+%26+Tackle+Shop,+141+Fishermans+Wharf,+Redondo+Beach,+CA+90277,+Stati+Uniti/Aeroporto+Internazionale+di+Los+Angeles,+1+World+Wy,+Los+Angeles,+CA+90045,+Stati+Uniti"
  }
};
