// ==================== PHOTOS ====================
const dayPhotos = {
  1: 'photos/day1-la.jpg',
  2: 'photos/day2-santamonica.jpg',
  3: 'photos/day3-hollywood.jpg',
  4: 'photos/day4-joshuatree.jpg',
  5: 'photos/day5-lakehavasu.jpg',
  6: 'photos/day6-route66.jpg',
  7: 'photos/day7-grandcanyon.jpg',
  8: 'photos/day8-horseshoe.jpg',
  9: 'photos/day9-antelope.jpg',
  10: 'photos/day10-bryce.jpg',
  11: 'photos/day11-zionvegas.jpg',
  12: 'photos/day12-vegas.jpg',
  13: 'photos/day13-vegasbakersfield.jpg',
  14: 'photos/day14-sequoia.jpg',
  15: 'photos/day15-yosemite.jpg',
  16: 'photos/day16-sanfrancisco.jpg',
  17: 'photos/day17-sausalito.jpg',
  18: 'photos/day18-sf.jpg',
  19: 'photos/day19-alcatraz.jpg',
  20: 'photos/day20-return.jpg'
};

const phasePhotos = {
  phase1: 'photos/phase1.jpg',
  phase2: 'photos/phase2.jpg',
  phase3: 'photos/phase3.jpg',
  phase4: 'photos/phase4.jpg',
  phase5: 'photos/phase5.jpg'
};

const phaseColors = {
  phase1: '#e07a5f',
  phase2: '#f2cc8f',
  phase3: '#3d405b',
  phase4: '#81b29a',
  phase5: '#e07a5f'
};

const phaseNames = {
  phase1: 'Costa & L.A.',
  phase2: 'Deserti & R66',
  phase3: 'Canyon del Sud',
  phase4: 'Las Vegas',
  phase5: 'Sequoia & SFO'
};

const phaseIcons = {
  phase1: '🌴',
  phase2: '🌵',
  phase3: '🏜️',
  phase4: '🎲',
  phase5: '🌉'
};

// ==================== STATE ====================
var activePhase = 'all';
var expandedDay = null;
var checklist = {};

try { checklist = JSON.parse(localStorage.getItem('cali2026_checklist')) || {}; } catch(e) { checklist = {}; }

// ==================== TAB NAVIGATION ====================
function switchTab(tab) {
  // Update top tabs
  ['home','itinerary','map','info'].forEach(function(t) {
    var btn = document.getElementById('tab-' + t);
    if (btn) btn.className = 'tab-btn' + (t === tab ? ' active' : '');
  });

  // Update bottom nav
  ['home','itinerary','map','info'].forEach(function(t) {
    var nav = document.getElementById('nav-' + t);
    if (nav) nav.className = 'nav-btn' + (t === tab ? ' active' : '');
  });

  // Show/hide panels
  ['home','itinerary','map','info'].forEach(function(t) {
    var p = document.getElementById('panel-' + t);
    if (p) p.style.display = (t === tab) ? '' : 'none';
  });

  // Initialize map on first map tab visit
  if (tab === 'map' && !window._leafletMap) {
    setTimeout(function() { initMap(); }, 100);
  }

  // Resize map if already initialized
  if (tab === 'map' && window._leafletMap) {
    setTimeout(function() { window._leafletMap.invalidateSize(); }, 200);
  }

  // Populate day grid when switching to itinerary tab
  if (tab === 'itinerary') {
    setTimeout(function() { renderDayGrid(); }, 50);
  }

  // Scroll to top on tab switch
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// No countdown in public version

// ==================== PHASE PILLS ====================
function renderPhasePills() {
  var container = document.getElementById('phase-pills');
  if (!container) return;
  container.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'phase-pill' + (activePhase === 'all' ? ' active' : '');
  if (activePhase === 'all') allBtn.style.backgroundColor = '#3d405b';
  allBtn.textContent = '📋 Tutti';
  allBtn.onclick = function() { filterPhase('all'); };
  container.appendChild(allBtn);

  var phases = ['phase1','phase2','phase3','phase4','phase5'];
  phases.forEach(function(pid) {
    var btn = document.createElement('button');
    btn.className = 'phase-pill' + (activePhase === pid ? ' active' : '');
    if (activePhase === pid) btn.style.backgroundColor = phaseColors[pid];
    btn.textContent = phaseIcons[pid] + ' ' + phaseNames[pid];
    btn.onclick = function() { filterPhase(pid); };
    container.appendChild(btn);
  });
}

function filterPhase(pid) {
  activePhase = (activePhase === pid) ? 'all' : pid;
  expandedDay = null;
  renderPhasePills();
  renderDayGrid();
  // Reset detail when phase changes
  backToDayGrid();
}

// ==================== HOME PHASES ====================
function renderHomePhases() {
  var container = document.getElementById('home-phases');
  if (!container) return;
  container.innerHTML = '';

  phasesData.forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'home-phase';
    div.onclick = function() {
      activePhase = p.id;
      switchTab('itinerary');
      renderPhasePills();
      renderDaysList();
    };
    div.innerHTML = '<div class="home-phase-icon">' + p.icon + '</div>' +
      '<div class="home-phase-text">' +
        '<div class="home-phase-title">' + p.title + '</div>' +
        '<div class="home-phase-sub">Giorni ' + p.days + ' • ' + p.km + ' km — ' + p.desc + '</div>' +
      '</div>' +
      '<div class="home-phase-arrow">›</div>';
    container.appendChild(div);
  });
}

// ==================== DAY GRID (ITINERARY TAB) ====================
function renderDayGrid() {
  var container = document.getElementById('day-grid');
  if (!container) return;
  container.innerHTML = '';

  var filtered = itineraryData;
  if (activePhase !== 'all') {
    filtered = itineraryData.filter(function(d) { return d.phaseId === activePhase; });
  }

  filtered.forEach(function(d) {
    var idx = itineraryData.indexOf(d);
    var photo = dayPhotos[d.day];
    var color = phaseColors[d.phaseId] || '#3d405b';

    var tile = document.createElement('div');
    tile.className = 'day-tile';
    tile.onclick = function() { selectDay(idx); };

    var bg = document.createElement('div');
    bg.className = 'day-tile-bg';
    if (photo) {
      bg.style.backgroundImage = 'url(' + photo + ')';
    } else {
      bg.style.background = 'linear-gradient(135deg, ' + color + '40, ' + color + '80)';
    }
    tile.appendChild(bg);

    var overlay = document.createElement('div');
    overlay.className = 'day-tile-overlay';
    tile.appendChild(overlay);

    var content = document.createElement('div');
    content.className = 'day-tile-content';
    content.innerHTML = '<div class="day-tile-num">Giorno ' + d.day + '</div><div class="day-tile-title">' + d.title + '</div>';
    tile.appendChild(content);

    container.appendChild(tile);
  });
}

function selectDay(idxStr) {
  var idx = parseInt(idxStr, 10);
  if (isNaN(idx)) return;
  selectDayByIdx(idx);
}

function selectDayByIdx(idx) {
  var d = itineraryData[idx];
  if (!d) return;

  var area = document.getElementById('day-detail-area');
  if (!area) return;

  var color = phaseColors[d.phaseId] || '#3d405b';

  var photo = dayPhotos[d.day] || '';

  var html = '<button class="day-back-btn" onclick="backToDayGrid()">‹ Torna ai giorni</button>';
  html += '<div class="day-card expanded" style="border-radius:14px;overflow:hidden;border:1px solid #f0ece3;box-shadow:0 2px 8px rgba(0,0,0,0.08)">';

  // Photo banner at top if available
  if (photo) {
    html += '<div style="width:100%;height:190px;overflow:hidden"><img src="' + photo + '" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy"></div>';
  }

  // Header bar
  html += '<div class="day-header" style="cursor:default;border-bottom:1px solid #f0ece3">';
  html += '<span class="day-badge" style="background:' + color + '">G' + d.day + '</span>';
  html += '<div class="day-info">';
  html += '<div class="day-title">' + d.title + '</div>';
  html += '<div class="day-meta">' + d.date + ' • ' + d.region + '</div>';
  html += '</div>';
  html += '</div>';

  // Close bar
  html += '<div class="day-close-bar">';
  html += '<button class="day-close-btn" onclick="backToDayGrid()">✕ Chiudi</button>';
  html += '<a href="' + d.gmaps + '" target="_blank" rel="noopener" class="day-gmaps-btn">🗺️ Google Maps</a>';
  html += '</div>';

  // Content
  html += '<div class="day-detail-inner">' + renderDayContent(d) + '</div>';
  html += '</div>';

  // Bottom back button
  html += '<div style="text-align:center;padding:16px 0 8px">';
  html += '<button onclick="backToDayGrid()" style="background:#3d405b;color:#fff;border:none;border-radius:12px;padding:12px 28px;font-size:14px;font-weight:700;font-family:inherit;cursor:pointer;box-shadow:0 2px 6px rgba(61,64,91,0.25);transition:transform .15s">‹ Torna ai giorni</button>';
  html += '</div>';

  // Hide grid, show detail
  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = 'none';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = 'none';
  area.innerHTML = html;
  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function backToDayGrid() {
  var area = document.getElementById('day-detail-area');
  if (area) area.innerHTML = '';
  var grid = document.getElementById('day-grid');
  if (grid) grid.style.display = '';
  var pills = document.getElementById('phase-pills');
  if (pills) pills.style.display = '';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Legacy aliases
var renderDaysList = renderDayGrid;
var populateDaySelector = renderDayGrid;

function renderDayContent(d) {
  var links = linksData[d.day] || {};

  // Route button
  var routeUrl = links.routeGmaps || d.gmaps;
  var routeLabel = links.routeGmaps ? '🗺️ PERCORSO COMPLETO SU GOOGLE MAPS' : '🗺️ APRI SU GOOGLE MAPS';

  // Hotel
  var hotelHTML = d.hotel;
  if (links.hotelGmaps) {
    hotelHTML = '<a href="' + links.hotelGmaps + '" target="_blank" rel="noopener" style="color:#e07a5f;font-weight:700">' + d.hotel + '</a>';
  }

  // Rental
  var rentalHTML = '';
  if (links.rentalGmaps || links.rentalReturnGmaps) {
    rentalHTML = '<div style="background:rgba(224,122,95,0.06);padding:10px;border-radius:8px;border:1px solid rgba(224,122,95,0.15);font-size:11px;margin-bottom:8px">';
    if (links.rentalGmaps) rentalHTML += '🚗 <strong>Ritiro auto:</strong> <a href="' + links.rentalGmaps + '" target="_blank" style="color:#e07a5f;font-weight:700">' + (links.rentalGmapsLabel || 'Google Maps') + '</a><br>';
    if (links.rentalReturnGmaps) rentalHTML += '🔑 <strong>Riconsegna:</strong> <a href="' + links.rentalReturnGmaps + '" target="_blank" style="color:#e07a5f;font-weight:700">' + (links.rentalReturnGmapsLabel || 'Google Maps') + '</a>';
    rentalHTML += '</div>';
  }

  // Parking
  var parkingHTML = '';
  if (links.parking) {
    parkingHTML = '<div class="detail-box"><div class="detail-title">🅿️ Parcheggi & Logistica</div><div class="detail-text">' + links.parking + '</div>';
    if (links.parkingCost) parkingHTML += '<div style="margin-top:4px;font-size:10px;color:#888">💵 Costo: <strong>' + links.parkingCost + '</strong></div>';
    if (links.parkingGmaps && links.parkingGmaps.length > 0) {
      parkingHTML += '<div style="margin-top:6px">';
      links.parkingGmaps.forEach(function(p) {
        parkingHTML += '<a href="' + p.url + '" target="_blank" style="display:flex;align-items:center;gap:4px;font-size:11px;color:#e07a5f;font-weight:700;margin:2px 0">🅿️ ' + p.name + '</a>';
      });
      parkingHTML += '</div>';
    }
    parkingHTML += '</div>';
  }

  // Transfer
  var transferHTML = '';
  if (d.transferInfo) {
    transferHTML = '<details style="background:rgba(61,64,91,0.05);padding:10px;border-radius:8px;border:1px solid rgba(61,64,91,0.15);margin-bottom:8px"><summary style="font-size:11px;font-weight:700;color:#3d405b;cursor:pointer">🚗 Indicazioni Transfert</summary><div style="font-size:11px;line-height:1.6;color:#555;margin-top:6px">' + d.transferInfo + '</div></details>';
  }

  // YouTube
  var youtubeHTML = '';
  if (links.youtube) {
    youtubeHTML = '<div style="background:rgba(220,38,38,0.05);padding:10px;border-radius:8px;border:1px solid rgba(220,38,38,0.1);margin-bottom:8px"><a href="' + links.youtube + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;background:#dc2626;color:#fff;font-size:11px;font-weight:700;padding:6px 12px;border-radius:6px">▶️ Video su YouTube</a></div>';
  }

  // Food & Supermarkets
  var foodItems = '';
  if (d.food) {
    d.food.forEach(function(f) { foodItems += '<div class="food-item"><span class="food-dot">•</span>' + f + '</div>'; });
  }
  var marketItems = '';
  if (d.supermarkets) {
    d.supermarkets.forEach(function(s) { marketItems += '<span class="market-tag">' + s + '</span> '; });
  }

  var html = '';
  // Stats
  html += '<div class="stats-grid">';
  html += '<div class="stat-box"><div class="stat-label">Guida</div><div class="stat-value">🚗 ' + d.km + 'km</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tempo</div><div class="stat-value" style="font-size:10px">⏱️ ' + d.time + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Alba</div><div class="stat-value terracotta">🌅 ' + d.sunrise + '</div></div>';
  html += '<div class="stat-box"><div class="stat-label">Tramonto</div><div class="stat-value">🌇 ' + d.sunset + '</div></div>';
  html += '</div>';

  // Timezone
  html += '<div class="tz-bar">⌚ <strong>Fuso:</strong> ' + d.fuso + '<span style="background:#fff;padding:2px 8px;border-radius:4px;font-size:9px;font-weight:700;box-shadow:0 1px 2px rgba(0,0,0,0.1)">Ora locale</span></div>';

  // Route button
  html += '<a href="' + routeUrl + '" target="_blank" rel="noopener" class="route-btn">' + routeLabel + '</a>';

  // Description
  html += '<div class="detail-box"><div class="detail-title">🧭 Programma</div><div class="detail-text">' + d.desc + '</div></div>';


  html += parkingHTML;

  // Rental
  html += rentalHTML;

  // Transfer
  html += transferHTML;

  // YouTube
  html += youtubeHTML;

  // Food & Markets
  html += '<div class="food-grid">';
  html += '<div class="food-box food-sage"><div class="food-title sage">🥗 Cibo Veg</div>' + foodItems + '</div>';
  html += '<div class="food-box food-gold"><div class="food-title gold">🛒 Supermarket</div>' + marketItems + '</div>';

  // Bonus stops
  var bonusItems = '';
  if (d.bonus) {
    d.bonus.forEach(function(b) { bonusItems += '<div style="padding:4px 0">➕ ' + b + '</div>'; });
  }
  if (bonusItems) {
    html += '<div class="food-box" style="margin-top:8px;background:#fff9e6;border:1px solid #e8d9a0"><div class="food-title">📍 Da non perdere</div>' + bonusItems + '</div>';
  }
  html += '</div>';

  // Hotel
  html += '<div class="hotel-row">🛌 <strong>Alloggio:</strong> ' + hotelHTML + '</div>';

  return html;
}

// No checklist in public version

// ==================== MAP ====================
var mapStops = [
  { day: 1, label: "Los Angeles", lat: 34.0850, lng: -118.3510, phase: "phase1" },
  { day: 2, label: "Santa Monica", lat: 34.0093, lng: -118.4973, phase: "phase1" },
  { day: 3, label: "Hollywood", lat: 34.1341, lng: -118.3215, phase: "phase1" },
  { day: 4, label: "Joshua Tree NP", lat: 34.0116, lng: -116.1698, phase: "phase2" },
  { day: 5, label: "Lake Havasu City", lat: 34.4839, lng: -114.3224, phase: "phase2" },
  { day: 6, label: "Williams (Route 66)", lat: 35.2495, lng: -112.1910, phase: "phase2" },
  { day: 7, label: "Grand Canyon ➔ Monument Valley", lat: 36.9980, lng: -110.0983, phase: "phase3" },
  { day: 8, label: "Page / Horseshoe Bend", lat: 36.9147, lng: -111.4558, phase: "phase3" },
  { day: 9, label: "Antelope Canyon ➔ Kanab", lat: 37.0475, lng: -112.5263, phase: "phase3" },
  { day: 10, label: "Bryce Canyon NP", lat: 37.5930, lng: -112.1871, phase: "phase3" },
  { day: 11, label: "Zion NP ➔ Las Vegas", lat: 36.1716, lng: -115.1391, phase: "phase3" },
  { day: 12, label: "Las Vegas Strip", lat: 36.1147, lng: -115.1728, phase: "phase4" },
  { day: 13, label: "Bakersfield", lat: 35.3733, lng: -119.0187, phase: "phase4" },
  { day: 14, label: "Sequoia NP", lat: 36.5647, lng: -118.7520, phase: "phase5" },
  { day: 15, label: "Yosemite Valley", lat: 37.7450, lng: -119.5938, phase: "phase5" },
  { day: 16, label: "San Francisco", lat: 37.7898, lng: -122.4111, phase: "phase5" },
  { day: 17, label: "Sausalito", lat: 37.8591, lng: -122.4853, phase: "phase5" },
  { day: 18, label: "SF: Lombard St", lat: 37.8021, lng: -122.4194, phase: "phase5" },
  { day: 19, label: "Alcatraz Island", lat: 37.8267, lng: -122.4230, phase: "phase5" },
  { day: 20, label: "SFO Aeroporto", lat: 37.6213, lng: -122.3790, phase: "phase5" }
];

function initMap() {
  var mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') {
    if (mapEl) mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
    return;
  }

  try {
    var map = L.map('map').setView([36.5, -117], 6);
    window._leafletMap = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap',
      maxZoom: 19
    }).addTo(map);

    // Phase routes
    var phases = ['phase1','phase2','phase3','phase4','phase5'];
    phases.forEach(function(pid) {
      var points = mapStops.filter(function(s) { return s.phase === pid; });
      if (points.length >= 2) {
        var latlngs = points.map(function(p) { return [p.lat, p.lng]; });
        L.polyline(latlngs, { color: phaseColors[pid], weight: 4, opacity: 0.7 }).addTo(map);
      }
    });

    // Full route
    var allLatlngs = mapStops.map(function(s) { return [s.lat, s.lng]; });
    L.polyline(allLatlngs, { color: '#3d405b', weight: 2, opacity: 0.5, dashArray: '6, 8' }).addTo(map);

    // Markers
    mapStops.forEach(function(stop) {
      var color = phaseColors[stop.phase];
      var icon = L.divIcon({
        className: '',
        html: '<div style="background:' + color + ';color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4)">' + stop.day + '</div>',
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map).bindPopup('<strong>Giorno ' + stop.day + '</strong><br>' + stop.label);
    });

    map.fitBounds(allLatlngs, { padding: [40, 40] });
  } catch(e) {
    console.warn('Map failed:', e);
    mapEl.style.display = 'none';
    var fb = document.getElementById('map-fallback');
    if (fb) fb.style.display = 'block';
  }
}

// ==================== INIT ====================
// ==================== HERO MAP ====================
function initHeroMap() {
  var heroEl = document.getElementById('hero-map');
  if (!heroEl || typeof L === 'undefined') return;

  try {
    var map = L.map('hero-map', {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      touchZoom: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      boxZoom: false
    }).setView([36.5, -117], 5);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19
    }).addTo(map);

    var phases = ['phase1','phase2','phase3','phase4','phase5'];
    phases.forEach(function(pid) {
      var points = mapStops.filter(function(s) { return s.phase === pid; });
      if (points.length >= 2) {
        var latlngs = points.map(function(p) { return [p.lat, p.lng]; });
        L.polyline(latlngs, { color: phaseColors[pid], weight: 4, opacity: 0.8 }).addTo(map);
      }
    });

    var allLatlngs = mapStops.map(function(s) { return [s.lat, s.lng]; });
    L.polyline(allLatlngs, { color: '#3d405b', weight: 2, opacity: 0.5, dashArray: '6, 8' }).addTo(map);

    mapStops.forEach(function(stop) {
      var color = phaseColors[stop.phase];
      var icon = L.divIcon({
        className: '',
        html: '<div style="background:' + color + ';color:#fff;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4)">' + stop.day + '</div>',
        iconSize: [22, 22],
        iconAnchor: [11, 11]
      });
      L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map);
    });

    map.fitBounds(allLatlngs, { padding: [30, 30] });
  } catch(e) {
    console.warn('Hero map failed:', e);
  }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', function() {
  switchTab('home');
  renderHomePhases();
  renderPhasePills();
  renderDayGrid();
  initHeroMap();
});