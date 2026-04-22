// ============================================================
// DATA ASET — Nama file sesuai dengan yang ada di folder
// ============================================================
const dokuImages = [
    "Bukti Percakapan Chat WhatsApp Pengumpulan Draf Perbup.png",
    "Draf Perbup Final Acc.jpeg",
    "Konsul Daring Coach.png",
    "Konsultasi Awal dengan Mentor.png",
    "Koordinasi Awal dengan Bagian Hukum Terkait Bahasa Hukum.png",
    "Koordinasi Lintas Sektoral.jpeg",
    "Koordinasi dengan Camat Jenangan.png",
    "Menganalisis Draf untuk Membuat Daftar Inventarisasi Masalah.png",
    "Pelaksanaan Evaluasi Seluruh Rangkaian Kegiatan Aktualisasi.png",
    "Pelaksanaan Uji Publik Terbatas dengan Satlinmas.png",
    "Pelaksanaan Uji Publik Terbatas dengan Satpol PP.png",
    "Pembahasan Dengan Bagian Hukum.jpeg",
    "Penjaringan Aspirasi Poskamling.jpeg",
    "Penjaringan Aspirasi.jpeg",
    "Penyerahan Dokumen Draf Final ke Bagian Hukum Setda.png",
    "Penyerahan Dokumen Draf Final kepada Kasatpol PP.png",
    "Proses Penyusunan dan Pengetikan Draf Perbaikan Perbup.png",
    "Proses Revisi dan Finalisasi Draf Pasca Uji Publik.png",
    "Sosialisasi Draf Perbup Final.jpeg",
    "Sosialisasi Draf Perbup Kepada Anggota Satlinmas.png",
    "Uji Pebup Poskamling kepada Satlinmas.jpeg",
    "Uji Publik dengan Satpol PP.jpeg"
];

// Bukti dukung — nama file SESUAI dengan yang ada di folder
const buktiDirs = {
    'word_docs': {
        title: 'Dokumen Administrasi Ekstra (.docx)',
        icon: 'fa-file-word',
        files: [
            'assets/Dokumen/Basith Rancangan Jadwal.docx',
            'assets/Dokumen/DIM_Perbup_Siskamling.docx',
            'assets/Dokumen/Draf Pengajuan.docx',
            'assets/Dokumen/Draf Perbup Awal Lama.docx',
            'assets/Dokumen/MASUKAN UJI PUBLIK.docx',
            'assets/Dokumen/TABULASIPENJARINGAN AWAL.docx'
        ]
    },
    'pengendalian_mentor': {
        title: 'Bukti Pengendalian Mentor',
        icon: 'fa-chalkboard-teacher',
        files: [
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0001.jpg',
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0002.jpg',
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0003.jpg',
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0004.jpg',
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0005.jpg',
            'assets/Dokumen/Bukti Pengendalian Mentor/bukti pengendalian_pages-to-jpg-0006.jpg'
        ]
    },
    'notulen_mentor': {
        title: 'Notulen Mentor Lengkap',
        icon: 'fa-clipboard-check',
        files: [
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0001.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0002.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0003.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0004.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0005.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0006.jpg',
            'assets/Dokumen/Notulen Mentor/BASITH NOTULEN MENTOR_page-0007.jpg'
        ]
    },
    'pengendalian_coach': {
        title: 'Bukti Pengendalian Coach',
        icon: 'fa-user-tie',
        files: [
            'assets/Dokumen/Bukti Pengendalian Coach/Bukti Pengendalian Pembelajaran Aktualisasi oleh coach_page-0001.jpg',
            'assets/Dokumen/Bukti Pengendalian Coach/Bukti Pengendalian Pembelajaran Aktualisasi oleh coach_page-0002.jpg',
            'assets/Dokumen/Bukti Pengendalian Coach/Bukti Pengendalian Pembelajaran Aktualisasi oleh coach_page-0003.jpg'
        ]
    },
    'nota': {
        title: 'Nota Dinas Bagian Hukum',
        icon: 'fa-file-alt',
        files: [
            'assets/bukti dukung/nota dinas/nota dinas.jpg',
            'assets/bukti dukung/nota dinas/nota dinas bagian hukum.jpg'
        ]
    },
    'notulen_konsul': {
        title: 'Notulensi Konsultasi',
        icon: 'fa-clipboard-list',
        files: [
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 2.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 3.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 4.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 5.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 6.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi Mentor 7.jpg',
            'assets/bukti dukung/notulen/Notulen Konsultasi bagian Hukum.jpeg',
            'assets/bukti dukung/notulen/Notulen Konsultasi bagian Hukum 2.jpeg'
        ]
    },
    'balasan': {
        title: 'Surat Balasan',
        icon: 'fa-envelope-open-text',
        files: [
            'assets/bukti dukung/surat balasan/balasan.jpeg'
        ]
    }
};

const frameCount = 53;
const sequenceImages = [];

// ============================================================
// INTERSECTION OBSERVER (Reveal animations)
// ============================================================
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', () => {
    populateGrids();
    startAssetCachePreloader();
    
    // Load theme preference
    const savedTheme = localStorage.getItem('aktualisasi_theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        const toggleBtn = document.getElementById('theme-toggle-btn');
        if(toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Ganti ke Mode Gelap</span>';
    }
});

/* ================= 1. Populate UI Grids ================= */
function populateGrids() {
    // --- Galeri Dokumentasi (Photo Stack) ---
    const stackImgs = document.getElementById('photo-stack-imgs');
    const psCount = document.getElementById('ps-count');
    if (stackImgs && psCount) {
        let html = '';
        const limit = Math.min(3, dokuImages.length);
        for(let i=0; i<limit; i++) {
            html += `<img src="assets/dokumentasi/${dokuImages[i]}" class="photo-stack-img" alt="Dokumentasi ${i}" loading="lazy">`;
        }
        stackImgs.innerHTML = html;
        psCount.innerText = `${dokuImages.length} Foto Tersedia`;
    }

    // --- Bukti Dukung (Folder Cards) ---
    const buktiContainer = document.getElementById('bukti-grid-container');
    if (buktiContainer) {
        let html = '';
        Object.entries(buktiDirs).forEach(([category, cat]) => {
            if (category === 'word_docs') {
                html += `
                <div class="folder-card reveal" onclick="openDocsModal()">
                    <div class="folder-icon"><i class="fas ${cat.icon}"></i></div>
                    <div class="folder-info">
                        <div class="folder-title">${cat.title}</div>
                        <div class="folder-count">${cat.files.length} File Unduhan</div>
                    </div>
                </div>`;
            } else {
                html += `
                <div class="folder-card reveal" onclick="openGallery('${category}', 0)">
                    <div class="folder-icon"><i class="fas ${cat.icon}"></i></div>
                    <div class="folder-info">
                        <div class="folder-title">${cat.title}</div>
                        <div class="folder-count">${cat.files.length} Dokumen</div>
                    </div>
                </div>`;
            }
        });
        // Kita timpa styling gridnya untuk folder-card
        buktiContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(280px, 1fr))";
        buktiContainer.style.gap = "20px";
        buktiContainer.innerHTML = html;
    }
}

// Custom Modal Untuk Word Docs
function openDocsModal() {
    const docs = buktiDirs['word_docs'].files;
    const container = document.getElementById('docs-modal-body');
    if (container) {
        let html = '';
        docs.forEach(file => {
            const rawName = file.substring(file.lastIndexOf('/') + 1);
            const name = rawName.replace(/\.(docx)/gi, '').replace(/_/g, ' ');
            html += `
            <a href="${file}" download class="doc-dl-item hover-lift">
                <i class="fas fa-file-word" style="color: #3b82f6; font-size: 1.5rem;"></i>
                <span style="flex:1;">${name}</span>
                <i class="fas fa-download" style="color: var(--gold-main);"></i>
            </a>`;
        });
        container.innerHTML = html;
        openModal('docs-modal');
    }
}

/* ================= 2. Asset Preloader with Cache ================= */
function startAssetCachePreloader() {
    let loaded = 0;
    const urls = [];

    // Antrian sequence frames
    for (let i = 1; i <= frameCount; i++) {
        urls.push({ type: 'seq', index: i, url: `assets/sequence/sequence (${i}).jpg` });
    }
    // Antrian galeri dokumentasi
    dokuImages.forEach(img => urls.push({ type: 'img', url: `assets/dokumentasi/${img}` }));
    // Antrian bukti dukung (hanya gambar)
    Object.values(buktiDirs).forEach(cat =>
        cat.files.forEach(f => {
            if (!f.endsWith('.docx')) {
                urls.push({ type: 'img', url: f });
            }
        })
    );

    const total = urls.length;
    const fallbackTimer = setTimeout(finishLoading, 6000);

    urls.forEach(item => {
        const img = new Image();
        img.onload = img.onerror = () => {
            loaded++;
            let pct = Math.min(100, Math.floor((loaded / total) * 100));
            const bar = document.getElementById('loader-bar');
            const pctEl = document.getElementById('loader-percent');
            if (bar) bar.style.width = pct + '%';
            if (pctEl) pctEl.innerText = pct + '%';

            if (item.type === 'seq') sequenceImages[item.index] = img;

            if (loaded >= total) {
                clearTimeout(fallbackTimer);
                const status = document.getElementById('loader-text-status');
                if (status) status.innerText = 'Siap Ditampilkan...';
                setTimeout(finishLoading, 120);
            }
        };
        img.src = item.url;
    });
}

let isFinished = false;
function finishLoading() {
    if (isFinished) return;
    isFinished = true;
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('done');
    initSequenceLogic();
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ================= 3. Sequence Animation ================= */
let currentFrame = 1;
const canvas = document.getElementById('sequence-canvas');
const context = canvas ? canvas.getContext('2d') : null;

function initSequenceLogic() {
    if (!canvas || !context) return;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    window.addEventListener('scroll', () => {
        const seqSection = document.getElementById('sequence-container');
        if (!seqSection) return;
        const rect = seqSection.getBoundingClientRect();

        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            const scrollTop = -rect.top;
            const maxScroll = rect.height - window.innerHeight;
            let fraction = 0;
            if (maxScroll > 0) fraction = Math.max(0, Math.min(1, scrollTop / maxScroll));

            const frameIndex = Math.min(frameCount, Math.floor(fraction * (frameCount - 1)) + 1);
            if (frameIndex !== currentFrame) {
                currentFrame = frameIndex;
                requestAnimationFrame(() => renderCanvas(currentFrame));
            }
        }
    }, { passive: true });
}

function resizeCanvas() {
    if (!canvas) return;
    const wrapper = document.getElementById('canvas-wrapper');
    if (wrapper) {
        canvas.width = wrapper.clientWidth;
        canvas.height = wrapper.clientHeight;
    } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    renderCanvas(currentFrame);
}

function renderCanvas(frameIdx) {
    if (!sequenceImages[frameIdx] || !sequenceImages[frameIdx].complete) return;
    const img = sequenceImages[frameIdx];
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const cx = (canvas.width - img.width * ratio) / 2;
    const cy = (canvas.height - img.height * ratio) / 2;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, 0, img.width, img.height, cx, cy, img.width * ratio, img.height * ratio);
}

/* ================= 4. Navbar Scroll ================= */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 60) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
}, { passive: true });

/* ================= 5. PDF Worker Initialization ================= */
// Gunakan fallback yang lebih aman untuk inisiasi library
const pdfjsLib = window.pdfjsLib || window['pdfjs-dist/build/pdf'];
if (pdfjsLib) {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
}

/* ================= 6. Modal Functions ================= */
function openModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
    if (id === 'pdf-modal') {
        const container = document.getElementById('pdf-render-container');
        if (container) container.innerHTML = '';
    }
}

function closeModalOutside(e, id) {
    if (e.target.id === id) closeModal(id);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-backdrop.open').forEach(el => closeModal(el.id));
    }
});

function openPdfModal(title, pdfUrl) {
    const titleEl = document.getElementById('pdf-m-title');
    if (titleEl) titleEl.textContent = title;
    
    const container = document.getElementById('pdf-render-container');
    if (container) {
        container.innerHTML = '<div style="color: #64748b; padding: 40px; font-weight: 500; font-size: 1.1rem; text-align: center;"><i class="fas fa-spinner fa-spin mr-3"></i> Memuat dokumen PDF, mohon tunggu...</div>';
        
        pdfjsLib.getDocument(pdfUrl).promise.then(pdf => {
            container.innerHTML = '';
            
            // PERBAIKAN MOBILE: Kunci skala render untuk HP agar RAM tidak jebol
            const isMobile = window.innerWidth <= 768;
            const scale = isMobile ? 1.0 : 1.5; 

            for (let i = 1; i <= pdf.numPages; i++) {
                pdf.getPage(i).then(page => {
                    const canvas = document.createElement('canvas');
                    canvas.style.maxWidth = '100%';
                    canvas.style.height = 'auto';
                    canvas.style.display = 'block';
                    canvas.style.borderRadius = '8px';
                    canvas.style.backgroundColor = '#fff';
                    canvas.style.boxShadow = '0 10px 20px rgba(0,0,0,0.3)';
                    // Tambahkan margin bawah agar halaman tidak menempel
                    canvas.style.marginBottom = '16px'; 
                    container.appendChild(canvas);
                    
                    const viewport = page.getViewport({ scale: scale });
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    
                    const renderContext = {
                        canvasContext: canvas.getContext('2d'),
                        viewport: viewport
                    };
                    page.render(renderContext);
                });
            }
        }).catch(err => {
            console.warn("PDF.js gagal memuat dokumen:", err);
            container.innerHTML = `<div style="text-align:center; padding: 20px; color: white;">
                <p style="margin-bottom: 16px;"><i class="fas fa-exclamation-triangle" style="color: #eab308; font-size: 2rem;"></i><br>Gagal memuat pratinjau PDF.</p>
                <a href="${pdfUrl}" target="_blank" style="display:inline-block; padding:10px 20px; background:#eab308; color:#040b16; font-weight:bold; border-radius:100px; text-decoration:none;"><i class="fas fa-download"></i> Buka / Unduh Dokumen</a>
            </div>`;
        });
    }
    
    openModal('pdf-modal');
}
/* ================= 7. Lightbox Logic ================= */
let lbCurrentGallery = [];
let lbCurrentIndex = 0;
let currentLbZoom = 1;

function zoomLbImage(factor) {
    currentLbZoom += factor;
    if (currentLbZoom < 0.25) currentLbZoom = 0.25;
    if (currentLbZoom > 4) currentLbZoom = 4;
    
    const img = document.getElementById('lb-img');
    if (img) {
        img.style.transform = `scale(${currentLbZoom})`;
    }
}

function resetZoomLb() {
    currentLbZoom = 1;
    const img = document.getElementById('lb-img');
    if (img) {
        img.style.transform = `scale(1)`;
    }
}

function openGallery(category, index) {
    lbCurrentIndex = index;
    if (category === 'doku') {
        lbCurrentGallery = dokuImages.map(f => ({
            src: 'assets/dokumentasi/' + f,
            title: f.replace(/\.(jpeg|jpg)/i, ''),
            desc: 'Dokumentasi lapangan kegiatan aktualisasi.'
        }));
    } else {
        const cat = buktiDirs[category];
        lbCurrentGallery = (cat ? cat.files : []).map(f => ({
            src: f,
            title: cat.title + ' — ' + f.substring(f.lastIndexOf('/') + 1).replace(/\.(jpg|jpeg)/gi, ''),
            desc: 'Dokumen administrasi pendukung aktualisasi.'
        }));
    }
    updateLightboxUI();
    openModal('lightbox');
}

function updateLightboxUI() {
    if (!lbCurrentGallery.length) return;
    const item = lbCurrentGallery[lbCurrentIndex];
    const img = document.getElementById('lb-img');
    const title = document.getElementById('lb-title');
    const captionTitle = document.getElementById('lb-caption-title');
    const desc = document.getElementById('lb-desc');
    const prev = document.getElementById('lb-prev');
    const next = document.getElementById('lb-next');
    if (img) img.src = item.src;
    if (title) title.textContent = item.title;
    if (captionTitle) captionTitle.textContent = item.title;
    if (desc) desc.textContent = item.desc;
    if (prev) prev.style.display = lbCurrentIndex > 0 ? 'flex' : 'none';
    if (next) next.style.display = lbCurrentIndex < lbCurrentGallery.length - 1 ? 'flex' : 'none';
    
    resetZoomLb();
}

function lbNavigate(dir, e) {
    if (e) e.stopPropagation();
    const newIndex = lbCurrentIndex + dir;
    if (newIndex >= 0 && newIndex < lbCurrentGallery.length) {
        lbCurrentIndex = newIndex;
        updateLightboxUI();
    }
}

/* ================= 8. Theme Toggle ================= */
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('aktualisasi_theme', isLight ? 'light' : 'dark');
    
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if(toggleBtn) {
        if(isLight) {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i> <span>Ganti ke Mode Gelap</span>';
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i> <span>Ganti ke Mode Terang</span>';
        }
    }
}

