// ==================== CHECKLIST DATA ====================
const checklistData = {
  docs: [
    "Passaporto in corso di validità (controllare scadenza)",
    "ESTA approvato online e stampato",
    "Patente di guida italiana valida",
    "Carta di credito fisica",
    "Voucher Hertz stampato/salvato offline",
    "Assicurazione medica/viaggio stipulata",
    "Biglietti aerei TAP Portugal su cellulare"
  ],
  parks: [
    "Scaricare mappe offline di Google Maps (5 stati USA)",
    "Scaricare l'App ufficiale NPS (Parchi Nazionali)",
    "Acquistare scorte d'acqua importanti per l'auto",
    "Crema solare 50+ e cappelli a tesa larga",
    "Pieno di benzina pianificato prima di ogni parco",
    "Verificare chiusura strade il giorno prima (nps.gov)"
  ],
  food: [
    "Comprare snack proteici vegani e frutta secca",
    "Hummus, crackers e pane per pranzi al sacco",
    "Borraccia termica robusta (almeno 1L a testa)",
    "Prenotare Gracias Madre (LA) e Shizen Vegan (SF)",
    "Frigo portatile o borsa termica per l'auto"
  ]
};

// ==================== PHASES DATA ====================
const phasesData = [
  { id: "phase1", title: "1. Costa & L.A.", days: "1 - 3", icon: "🌴", km: "175", desc: "La costa californiana e la scintillante Los Angeles." },
  { id: "phase2", title: "2. Deserti & R66", days: "4 - 6", icon: "🌵", km: "955", desc: "Joshua Tree, Pioneertown e la leggendaria Route 66." },
  { id: "phase3", title: "3. I Canyon del Sud", days: "7 - 11", icon: "🏜️", km: "1515", desc: "I parchi epici: Grand Canyon, Monument, Bryce e Zion." },
  { id: "phase4", title: "4. Las Vegas & Nevada", days: "12 - 13", icon: "🎲", km: "470", desc: "Il lusso della Strip e il grande deserto del Mojave." },
  { id: "phase5", title: "5. Sequoia & SFO", days: "14 - 20", icon: "🌉", km: "1252", desc: "Sequoia, Yosemite e il gran finale a San Francisco." }
];

// ==================== STATE ====================
let state = {
  selectedDay: 0,
  activePhase: "all",
  checklist: JSON.parse(localStorage.getItem('cali2026_checklist')) || {}
};
