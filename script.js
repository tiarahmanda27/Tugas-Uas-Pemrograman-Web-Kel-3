document.addEventListener('DOMContentLoaded', function () {
    const nomorWA = '6289610652372';

    document.addEventListener('click', function (event) {
        const target = event.target;
        if (!(target instanceof Element)) return;

        const tombol = target.closest('.btn-pesan');
        if (!tombol) return;

        event.preventDefault();

        const namaProduk = tombol.getAttribute('data-nama') || 'Menu Dapur Enak';
        const pesan = `Halo DAPUR ENAK, saya ingin memesan menu: ${namaProduk}. Mohon informasi ketersediaannya. Terima kasih!`;
        const urlWhatsApp = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

        window.open(urlWhatsApp, '_blank');
        if (!tab) {
            window.location.href = urlWhatsApp;
        }
    });

    
    document.querySelectorAll('.product-card').forEach(function (kartu) {
        kartu.addEventListener('mouseenter', function () {
            kartu.style.transform = 'translateY(-6px)';
            kartu.style.boxShadow = '0 12px 25px rgba(0, 0, 0, 0.15)';
        });

        kartu.addEventListener('mouseleave', function () {
            kartu.style.transform = 'translateY(0)';
            kartu.style.boxShadow = '';
        });
    });

    
    document.querySelectorAll('a[href^="#"]').forEach(function (tautan) {
        tautan.addEventListener('click', function (event) {
            const href = tautan.getAttribute('href');
            if (!href || href === '#') return;

            const tujuan = document.querySelector(href);
            if (!tujuan) return;

            event.preventDefault();
            tujuan.scrollIntoView({ behavior: 'smooth', block: 'start' });

            
            const menuNavbar = document.querySelector('#navbarNav');
            if (menuNavbar && menuNavbar.classList.contains('show') && window.bootstrap) {
                window.bootstrap.Collapse.getOrCreateInstance(menuNavbar).hide();
            }
        });
    });
});
