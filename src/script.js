// --- DOM ELEMENT REFERENCES ---
const contentContainer = document.getElementById('content-container');
const locationNameEl = document.getElementById('location-name');
const dateGregorianEl = document.getElementById('date-gregorian');
const dateHijriEl = document.getElementById('date-hijri');
const currentTimeEl = document.getElementById('current-time');
const changeZoneBtn = document.getElementById('change-zone-btn');
const zoneModal = document.getElementById('zone-modal');
const zoneModalContent = document.getElementById('zone-modal-content');
const modalCloseBtn = document.getElementById('modal-close-btn');
const zoneSearchInput = document.getElementById('zone-search-input');
const zoneList = document.getElementById('zone-list');

// --- CONSTANTS ---
const ZONES = [
    { code: "JHR01", name: "JHR01 - Pulau Aur dan Pulau Pemanggil" },
    { code: "JHR02", name: "JHR02 - Johor Bahru, Kota Tinggi, Kulai" },
    { code: "JHR03", name: "JHR03 - Kluang, Pontian" },
    { code: "JHR04", name: "JHR04 - Batu Pahat, Muar, Segamat, Gemas Johor" },
    { code: "KDH01", name: "KDH01 - Kota Setar, Kubang Pasu, Pokok Sena (Daerah Kecil)" },
    { code: "KDH02", name: "KDH02 - Kuala Muda, Yan, Pendang" },
    { code: "KDH03", name: "KDH03 - Padang Terap, Sik" },
    { code: "KDH04", name: "KDH04 - Baling" },
    { code: "KDH05", name: "KDH05 - Bandar Baharu, Kulim" },
    { code: "KDH06", name: "KDH06 - Langkawi" },
    { code: "KDH07", name: "KDH07 - Puncak Gunung Jerai" },
    { code: "KTN01", name: "KTN01 - Jeli, Gua Musang (Daerah Galas Dan Bertam), Kuala Krai" },
    { code: "KTN02", name: "KTN02 - Gua Musang (Daerah Chiku), Tumpat, Pasir Mas, Kota Bharu, Bachok, Machang, Tanah Merah, Pasir Puteh" },
    { code: "MLK01", name: "MLK01 - MELAKA" },
    { code: "NGS01", name: "NGS01 - Tampin, Jempol" },
    { code: "NGS02", name: "NGS02 - Jelebu, Kuala Pilah, Port Dickson, Rembau, Seremban" },
    { code: "PHG01", name: "PHG01 - Pulau Tioman" },
    { code: "PHG02", name: "PHG02 - Kuantan, Pekan, Rompin, Muadzam Shah" },
    { code: "PHG03", name: "PHG03 - Jerantut, Temerloh, Maran, Bera, Chenor, Jengka" },
    { code: "PHG04", name: "PHG04 - Bentong, Lipis, Raub" },
    { code: "PHG05", name: "PHG05 - Genting Sempah, Janda Baik, Bukit Tinggi" },
    { code: "PHG06", name: "PHG06 - Cameron Highlands, Genting Highlands, Bukit Fraser" },
    { code: "PLS01", name: "PLS01 - Kangar, Padang Besar, Arau" },
    { code: "PNG01", name: "PNG01 - Seluruh Negeri Pulau Pinang" },
    { code: "PRK01", name: "PRK01 - Tapah, Slim River, Tanjung Malim" },
    { code: "PRK02", name: "PRK02 - Ipoh, Batu Gajah, Kampar, Sg. Siput, Kuala Kangsar" },
    { code: "PRK03", name: "PRK03 - Pengkalan Hulu, Grik, Lenggong" },
    { code: "PRK04", name: "PRK04 - Temengor, Belum" },
    { code: "PRK05", name: "PRK05 - Teluk Intan, Bagan Datuk, Hilir Perak, Mualim" },
    { code: "PRK06", name: "PRK06 - Selama, Taiping, Bagan Serai, Parit Buntar" },
    { code: "PRK07", name: "PRK07 - Bukit Larut" },
    { code: "SBH01", name: "SBH01 - Bahagian Sandakan (Timur), Bukit Garam, Semawang, Temanggong, Tambisan, Bandar Sandakan, Sukau" },
    { code: "SBH02", name: "SBH02 - Beluran, Telupid, Pinangah, Terusan, Kuamut, Bahagian Sandakan (Barat)" },
    { code: "SBH03", name: "SBH03 - Lahad Datu, Silabukan, Kunak, Sahabat, Semporna, Tungku, Bahagian Tawau, Zon Timur" },
    { code: "SBH04", name: "SBH04 - Bandar Tawau, Balong, Merotai, Kalabakan, Bahagian Tawau, Zon Barat" },
    { code: "SBH05", name: "SBH05 - Kudat, Kota Marudu, Pitas, Pulau Banggi, Bahagian Kudat" },
    { code: "SBH06", name: "SBH06 - Gunung Kinabalu" },
    { code: "SBH07", name: "SBH07 - Kota Kinabalu, Ranau, Kota Belud, Tuaran, Penampang, Papar, Putatan, Bahagian Pantai Barat" },
    { code: "SBH08", name: "SBH08 - Pensiangan, Keningau, Tambunan, Nabawan, Bahagian Pedalaman, Zon Atas" },
    { code: "SBH09", name: "SBH09 - Beaufort, Kuala Penyu, Sipitang, Tenom, Long Pa Sia, Membakut, Bahagian Pedalaman, Zon Bawah" },
    { code: "SGR01", name: "SGR01 - Gombak, Petaling, Sepang, Hulu Langat, Hulu Selangor, Rawang, Shah Alam" },
    { code: "SGR02", name: "SGR02 - Kuala Selangor, Sabak Bernam" },
    { code: "SGR03", name: "SGR03 - Klang, Kuala Langat" },
    { code: "SWK01", name: "SWK01 - Limbang, Sundar, Trusan, Lawas" },
    { code: "SWK02", name: "SWK02 - Miri, Niah, Bekenu, Sibuti, Marudi" },
    { code: "SWK03", name: "SWK03 - Pandan, Bintulu, Sebauh, Tatau" },
    { code: "SWK04", name: "SWK04 - Sibu, Kanowit, Dalat, Oya, Mukah" },
    { code: "SWK05", name: "SWK05 - Sarikei, Bintangor, Belawai, Rajang" },
    { code: "SWK06", name: "SWK06 - Lubok Antu, Sri Aman, Roban, Debak, Kabong, Lingga, Engkelili, Betong, Spaoh, Pusa" },
    { code: "SWK07", name: "SWK07 - Serian, Simunjan, Samarahan, Sebuyau, Meludam" },
    { code: "SWK08", name: "SWK08 - Kuching, Bau, Lundu, Sematan" },
    { code: "SWK09", name: "SWK09 - Zon Khas (Kampung Patarikan)" },
    { code: "TRG01", name: "TRG01 - Kuala Terengganu, Marang, Kuala Nerus" },
    { code: "TRG02", name: "TRG02 - Besut, Setiu" },
    { code: "TRG03", name: "TRG03 - Hulu Terengganu" },
    { code: "TRG04", name: "TRG04 - Dungun, Kemaman" },
    { code: "WLY01", name: "WLY01 - Kuala Lumpur, Putrajaya" },
    { code: "WLY02", name: "WLY02 - Labuan" }
];
const PRAYER_NAME_MAP = {
    'imsak': 'Imsak', 'fajr': 'Subuh', 'syuruk': 'Syuruk',
    'dhuhr': 'Zohor', 'asr': 'Asar', 'maghrib': 'Maghrib', 'isha': 'Isyak'
};
const PRAYER_DISPLAY_ORDER = ['imsak', 'fajr', 'syuruk', 'dhuhr', 'asr', 'maghrib', 'isha'];
const PRAYER_KEYS_FOR_COUNTDOWN = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];

// --- STATE MANAGEMENT ---
let state = {
    zone: 'PRK02',
    prayerData: null,
    loading: true,
    error: null,
    nextPrayer: null,
    countdown: '--:--:--',
};

// --- INTERVALS ---
let countdownInterval;
let nextPrayerCheckInterval;

// --- HELPER FUNCTIONS ---
const formatTime12Hour = (timeString) => {
    if (!timeString || !timeString.includes(':')) return "N/A";
    const [hour, minute] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hour, 10));
    date.setMinutes(parseInt(minute, 10));
    return date.toLocaleTimeString('en-US', { hour: 'numeric', 'minute': '2-digit', hour12: true });
};

// --- RENDER FUNCTIONS (Update UI based on state) ---

/** Menunjukkan pemutar pemuatan */
function renderLoading() {
    contentContainer.innerHTML = `
        <div class="text-center py-10">
            <svg class="animate-spin h-8 w-8 text-amber-400 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <p class="mt-2 text-slate-400">Memuatkan data waktu solat...</p>
        </div>
    `;
    locationNameEl.textContent = `Memuatkan data untuk ${state.zone}...`;
}

/** Menunjukkan mesej ralat */
function renderError() {
    contentContainer.innerHTML = `
        <div class="text-center bg-red-900/50 border border-red-500 text-red-300 px-4 py-3 rounded-lg mx-auto max-w-md">
            <strong class="font-bold">Ralat!</strong>
            <span class="block sm:inline ml-2">${state.error}</span>
        </div>
    `;
    locationNameEl.textContent = 'Ralat memuatkan data. Sila cuba lagi.';
}

/** Memaparkan senarai waktu solat dan pemasa kiraan detik */
function renderPrayerTimes() {
    const prayerListHTML = PRAYER_DISPLAY_ORDER.map(key => {
        const prayerName = PRAYER_NAME_MAP[key];
        const prayerTime = state.prayerData[key];
        const isNext = state.nextPrayer?.name === prayerName;
        const rowClasses = isNext ? 'bg-amber-400' : 'bg-emerald-950/40';
        const nameColor = isNext ? 'text-slate-900' : 'text-slate-200';
        const timeColor = isNext ? 'text-slate-900 font-bold' : 'text-slate-100';
        const iconColor = isNext ? 'text-slate-900/70' : 'text-slate-400';
        
        return `
            <div class="flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${rowClasses}">
                <div class="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 ${iconColor}">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span class="font-medium ${nameColor}">${prayerName}</span>
                </div>
                <span class="font-semibold text-lg ${timeColor}">${formatTime12Hour(prayerTime)}</span>
            </div>
        `;
    }).join('');

    const countdownHTML = `
        <section class="text-center mt-8">
            <h2 class="text-lg font-semibold text-slate-300">
                Menuju Waktu <span class="gradient-text font-bold">${state.nextPrayer?.name || '...'}</span>
            </h2>
            <div id="countdown-display" class="text-4xl md:text-5xl font-bold text-slate-50 mt-2">${state.countdown}</div>
        </section>
    `;

    contentContainer.innerHTML = `
        <div class="max-w-lg mx-auto mt-4">
            <main class="flex flex-col gap-2">${prayerListHTML}</main>
            ${countdownHTML}
        </div>
    `;

    // Update header info
    const zoneInfo = ZONES.find(z => z.code === state.zone);
    locationNameEl.textContent = zoneInfo ? zoneInfo.name : `Zon: ${state.zone}`;
    dateGregorianEl.textContent = state.prayerData.date;
    dateHijriEl.textContent = state.prayerData.hijri;
}

/** Mengemas kini paparan kiraan detik */
function updateCountdownDisplay() {
    const countdownDisplay = document.getElementById('countdown-display');
    if (countdownDisplay) {
        countdownDisplay.textContent = state.countdown;
    }
}

/** Memaparkan senarai zon di dalam modal */
function renderZoneList(searchTerm = '') {
    const filtered = ZONES.filter(option =>
        option.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        option.code.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length > 0) {
        zoneList.innerHTML = filtered.map(option => `
            <li
                class="cursor-pointer select-none relative p-3 rounded-md text-slate-200 hover:bg-emerald-700 hover:text-white transition-colors ${state.zone === option.code ? 'bg-emerald-700 text-white font-semibold' : ''}"
                data-code="${option.code}"
            >
                <span class="block truncate">${option.name}</span>
            </li>
        `).join('');
    } else {
        zoneList.innerHTML = `<li class="text-center text-slate-400 p-4">Tiada zon ditemui.</li>`;
    }
}

// --- LOGIC FUNCTIONS ---

/** Mengambil data waktu solat dari API */
async function fetchPrayerTimes() {
    state.loading = true;
    state.error = null;
    renderLoading();

    try {
        const response = await fetch(`https://www.e-solat.gov.my/index.php?r=esolatApi/takwimsolat&period=today&zone=${state.zone}`);
        if (!response.ok) throw new Error(`Data tidak dapat dimuatkan (HTTP ${response.status})`);
        
        const data = await response.json();
        if (data.status !== 'OK!' || !data.prayerTime || data.prayerTime.length === 0) {
            throw new Error('Data tidak sah atau tiada dari API.');
        }
        state.prayerData = data.prayerTime[0];
        startCalculations();
    } catch (err) {
        console.error("Gagal memuatkan waktu solat:", err);
        state.error = err.message;
    } finally {
        state.loading = false;
        updateUI();
    }
}

/** Memulakan pengiraan untuk solat seterusnya dan pemasa */
function startCalculations() {
    calculateNextPrayer(); // Calculate immediately once
    if(nextPrayerCheckInterval) clearInterval(nextPrayerCheckInterval);
    nextPrayerCheckInterval = setInterval(calculateNextPrayer, 60000); // Recalculate every minute

    if (countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(updateCountdown, 1000); // Update countdown every second
}

/** Mengira waktu solat seterusnya */
function calculateNextPrayer() {
    if (!state.prayerData) return;
    const now = new Date();
    const todayStr = now.toISOString().split('T')[0];
    let upcomingPrayer = null;

    const prayersToday = PRAYER_KEYS_FOR_COUNTDOWN
        .map(key => ({
            name: PRAYER_NAME_MAP[key],
            time: new Date(`${todayStr}T${state.prayerData[key]}`)
        }))
        .filter(p => p.time > now)
        .sort((a, b) => a.time - b.time);

    if (prayersToday.length > 0) {
        upcomingPrayer = prayersToday[0];
    } else { // All prayers for today are done, next one is Fajr tomorrow
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        upcomingPrayer = {
            name: PRAYER_NAME_MAP.fajr,
            time: new Date(`${tomorrowStr}T${state.prayerData.fajr}`)
        };
    }

    if (state.nextPrayer?.name !== upcomingPrayer.name) {
        state.nextPrayer = upcomingPrayer;
        updateUI(); // Re-render if the next prayer has changed
    }
}

/** Mengemas kini logik pemasa kiraan detik */
function updateCountdown() {
    if (!state.nextPrayer) {
        state.countdown = '--:--:--';
        updateCountdownDisplay();
        return;
    }
    const now = new Date();
    const difference = state.nextPrayer.time - now;

    if (difference < 0) {
        state.countdown = '00:00:00';
        // Check for the next prayer again as time has passed
        calculateNextPrayer(); 
    } else {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        state.countdown = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    updateCountdownDisplay();
}

/** Mengemas kini UI utama berdasarkan keadaan semasa */
function updateUI() {
    if (state.loading) {
        renderLoading();
    } else if (state.error) {
        renderError();
    } else if (state.prayerData) {
        renderPrayerTimes();
    }
}

/** Mengemas kini jam masa nyata */
function updateClock() {
    currentTimeEl.textContent = new Date().toLocaleTimeString('ms-MY', { hour12: false });
}

/** Menukar zon solat dan memuat semula data */
function handleZoneChange(newZone) {
    state.zone = newZone;
    closeModal();
    fetchPrayerTimes();
}

// --- MODAL FUNCTIONS ---
function openModal() {
    renderZoneList();
    zoneModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    zoneSearchInput.focus();
}
function closeModal() {
    zoneModal.classList.add('hidden');
    document.body.style.overflow = '';
    zoneSearchInput.value = ''; // Reset search
}

// --- EVENT LISTENERS ---
changeZoneBtn.addEventListener('click', openModal);
modalCloseBtn.addEventListener('click', closeModal);
zoneModal.addEventListener('click', (e) => {
    if (e.target === zoneModal) { // Click on backdrop
        closeModal();
    }
});
zoneModalContent.addEventListener('click', e => e.stopPropagation()); // Prevent modal from closing when clicking inside
zoneSearchInput.addEventListener('input', (e) => renderZoneList(e.target.value));
zoneList.addEventListener('click', (e) => {
    const li = e.target.closest('li[data-code]');
    if (li) {
        const code = li.dataset.code;
        handleZoneChange(code);
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !zoneModal.classList.contains('hidden')) {
        closeModal();
    }
});

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    updateClock();
    setInterval(updateClock, 1000);
    fetchPrayerTimes();
});
