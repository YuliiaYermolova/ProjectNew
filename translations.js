// translations.js - Полная система перевода
const translations = {
    no: {
        // Navigation
        'nav-home': 'Hjem',
        'nav-menu': 'Meny',
        'nav-specials': 'Spesialer',
        'nav-about': 'Om oss',
        'nav-reviews': 'Anmeldelser',
        'nav-contact': 'Kontakt',
        'nav-tagline': 'Kaffe og bakeri',
        
        // Hero section
        'hero-title-line1': 'Den beste',
        'hero-title-highlight': 'kaffen',
        'hero-subtitle': 'Allerede i din by – spesialkaffe og fersk bakst.',
        'hero-description': 'En liten, koselig kaffebar i hjertet av Trondheim. Vi brygger håndlaget kaffe, liker rolig jazz og vil at alle skal føle seg som hjemme.',
        'btn-primary': 'Se meny',
        'btn-secondary': 'Dagens spesial',
        
        // About section
        'about-title': 'Om Pine & Brass',
        'about-subtitle': 'Vår historie',
        'about-heading': 'Velkommen til vår lille oase',
        'about-text1': 'Pine & Brass åpnet dørene i 2019 med en enkel visjon: å skape et sted der folk kan stoppe opp, nyte øyeblikket og smake ekte kvalitetskaffe. Vi er stolte av vårt håndverk og bruker bare de fineste kaffebønnene fra bærekraftige gårder.',
        'about-text2': 'Hver kopp brygges med omsorg, hver bakvare lages fra bunnen av. Våre baristaer er ikke bare ansatte – de er kaffeentusiaster som elsker å dele sin lidenskap med deg.',
        'about-years': 'År med kvalitet',
        'about-customers': 'Fornøyde kunder',
        'about-coffee-types': 'Kaffesorter',
        
        // Menu section
        'menu-title': 'Vår meny',
        'menu-subtitle': 'Handcrafted med kjærlighet',
        'menu-coffee': 'Kaffe',
        'menu-special': 'Spesialdrikker',
        'menu-bakery': 'Bakst',
        
        // Coffee menu items
        'espresso-name': 'Espresso',
        'espresso-desc': 'Intens og rik, perfekt ekstraksjon',
        'americano-name': 'Americano',
        'americano-desc': 'Espresso med varmt vann, mild og balansert',
        'cappuccino-name': 'Cappuccino',
        'cappuccino-desc': 'Espresso, dampet melk og skum',
        'latte-name': 'Latte',
        'latte-desc': 'Myk og kremet med espresso',
        'flat-white-name': 'Flat White',
        'flat-white-desc': 'Dobbelt espresso med silkeaktig melk',
        'cortado-name': 'Cortado',
        'cortado-desc': 'Espresso med dampet melk, perfekt balanse',
        'mocha-name': 'Mocha',
        'mocha-desc': 'Espresso med sjokolade og melk',
        'batch-brew-name': 'Batch Brew',
        'batch-brew-desc': 'Filterkaffe av dagens bønner',
        
        // Special drinks
        'raf-name': 'Raf Coffee',
        'raf-desc': 'Kremet vaniljekaffe klassiker fra Russland',
        'orange-tonic-name': 'Orange Espresso Tonic',
        'orange-tonic-desc': 'Forfriskende kombinasjon av citrus, tonic og en levende espressoshot',
        'iced-orange-name': 'Iced Orange Coffee',
        'iced-orange-desc': 'Kald kaffe med appelsin og is',
        'cold-brew-name': 'Cold Brew',
        'cold-brew-desc': '24-timers ekstraksjon, myk og søt',
        'pour-over-name': 'Pour-Over (V60)',
        'pour-over-desc': 'Håndbrygget filterkaffe',
        'maple-latte-name': 'Maple Latte',
        'maple-latte-desc': 'Latte med ekte lønnesirup',
        
        // Bakery items
        'croissant-name': 'Croissant',
        'croissant-desc': 'Fransk smørdeig, perfekt flaky',
        'cinnamon-bun-name': 'Kanelbolle',
        'cinnamon-bun-desc': 'Hjemmelaget med nordisk kanel',
        'cardamom-bun-name': 'Cardamombolle',
        'cardamom-bun-desc': 'Tradisjonell skandinavisk smak',
        'scones-name': 'Scones',
        'scones-desc': 'Serveres varm med syltetøy',
        'chocolate-cake-name': 'Sjokoladekake',
        'chocolate-cake-desc': 'Rik og saftig, perfekt til kaffen',
        'carrot-cake-name': 'Carrot Cake',
        'carrot-cake-desc': 'Med kremostglasur og nøtter',
        
        // Specials section
        'specials-title': 'Dagens spesial',
        'specials-subtitle': 'Spesialtilbud denne uken',
        'popular-badge': 'Populær',
        'new-badge': 'Ny',
        
        // News section
        'news-title': 'Nyheter',
        'news-subtitle': 'Siste fra Pine & Brass',
        'brewing-tips-title': 'Bryggetips',
        'brewing-tips-text': 'Slik lager du en søt cappuccino hjemme med perfekt skum og balanse.',
        'new-roast-title': 'Ny brenning',
        'new-roast-text': 'Ny nordisk brenning fra Etiopia har landet – frisk og floral med hint av citrus.',
        'read-more': 'Les mer →',
        
        // Reviews section
        'reviews-title': 'Hva sier kundene?',
        'reviews-subtitle': 'Anmeldelser fra våre gjester',
        'anna-review': 'Fantastisk kaffe og koselig atmosfære! Jeg kommer hit hver morgen før jobb. Baristaene er alltid hyggelige og kaffen er topp kvalitet. Anbefaler deres Flat White!',
        'erik-review': 'Beste kaffebaren i Trondheim! Elsker deres Orange Espresso Tonic – så forfriskende og unik. Interiøret er også nydelig med den skandinaviske stilen.',
        'maria-review': 'Perfekt sted for å jobbe med laptop. God wifi, deilig kaffe og fersk bakst. Kanelbullene deres er himmelske! Alltid god musikk og avslappet stemning.',
        
        // Contact section
        'contact-title': 'Besøk oss',
        'contact-subtitle': 'Finn veien til Pine & Brass',
        'opening-hours': 'Åpningstider',
        'daily-hours': 'Hver dag: 08:00–20:00',
        'no-rest-day': 'Ingen hviledager – vi er alltid her for deg!',
        'address-title': 'Adresse',
        'address-line1': 'Geelmuygens gate 2',
        'address-line2': '7012 Trondheim',
        'contact-title': 'Kontakt',
        'phone': '+47 470 00 000',
        'email': 'hello@pineandbrass.coffee',
        'contact-form-title': 'Send oss en melding',
        'form-name': 'Ditt navn *',
        'form-email': 'Din e-post *',
        'form-phone': 'Telefon (valgfritt)',
        'form-subject': 'Velg emne *',
        'form-subject-general': 'Generell henvendelse',
        'form-subject-booking': 'Booking/Reservasjon',
        'form-subject-catering': 'Catering',
        'form-subject-feedback': 'Tilbakemelding',
        'form-subject-partnership': 'Samarbeid',
        'form-subject-other': 'Annet',
        'form-message': 'Din melding *',
        'form-privacy': 'Jeg godtar at Pine & Brass Coffee kan kontakte meg angående denne henvendelsen *',
        'form-submit': 'Send melding',
        'form-success-title': 'Takk for din melding!',
        'form-success-text': 'Vi har mottatt henvendelsen din og vil svare deg så snart som mulig.',
        
        // Footer
        'footer-description': 'En liten, koselig kaffebar i hjertet av Trondheim. Vi bryr oss om kvalitet, bærekraft og gode opplevelser.',
        'footer-website': 'Nettsted',
        'footer-services': 'Tjenester',
        'footer-ordering': 'Bestilling',
        'footer-catalog': 'Katalog',
        'footer-rights': 'Alle rettigheter forbeholdt.'
    },
    
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-menu': 'Menu',
        'nav-specials': 'Specials',
        'nav-about': 'About',
        'nav-reviews': 'Reviews',
        'nav-contact': 'Contact',
        'nav-tagline': 'Coffee and bakery',
        
        // Hero section
        'hero-title-line1': 'The best',
        'hero-title-highlight': 'coffee',
        'hero-subtitle': 'Already in your city – specialty coffee and fresh pastries.',
        'hero-description': 'A small, cozy coffee shop in the heart of Trondheim. We brew handcrafted coffee, enjoy smooth jazz and want everyone to feel at home.',
        'btn-primary': 'View menu',
        'btn-secondary': "Today's special",
        
        // About section
        'about-title': 'About Pine & Brass',
        'about-subtitle': 'Our story',
        'about-heading': 'Welcome to our little oasis',
        'about-text1': 'Pine & Brass opened its doors in 2019 with a simple vision: to create a place where people can stop, enjoy the moment and taste real quality coffee. We are proud of our craft and use only the finest coffee beans from sustainable farms.',
        'about-text2': 'Each cup is brewed with care, each pastry is made from scratch. Our baristas are not just employees – they are coffee enthusiasts who love to share their passion with you.',
        'about-years': 'Years of quality',
        'about-customers': 'Satisfied customers',
        'about-coffee-types': 'Coffee types',
        
        // Menu section
        'menu-title': 'Our menu',
        'menu-subtitle': 'Handcrafted with love',
        'menu-coffee': 'Coffee',
        'menu-special': 'Special drinks',
        'menu-bakery': 'Bakery',
        
        // Coffee menu items
        'espresso-name': 'Espresso',
        'espresso-desc': 'Intense and rich, perfect extraction',
        'americano-name': 'Americano',
        'americano-desc': 'Espresso with hot water, mild and balanced',
        'cappuccino-name': 'Cappuccino',
        'cappuccino-desc': 'Espresso, steamed milk and foam',
        'latte-name': 'Latte',
        'latte-desc': 'Soft and creamy with espresso',
        'flat-white-name': 'Flat White',
        'flat-white-desc': 'Double espresso with silky milk',
        'cortado-name': 'Cortado',
        'cortado-desc': 'Espresso with steamed milk, perfect balance',
        'mocha-name': 'Mocha',
        'mocha-desc': 'Espresso with chocolate and milk',
        'batch-brew-name': 'Batch Brew',
        'batch-brew-desc': 'Filter coffee of the day',
        
        // Special drinks
        'raf-name': 'Raf Coffee',
        'raf-desc': 'Creamy vanilla coffee classic from Russia',
        'orange-tonic-name': 'Orange Espresso Tonic',
        'orange-tonic-desc': 'Refreshing combination of citrus, tonic and a lively espresso shot',
        'iced-orange-name': 'Iced Orange Coffee',
        'iced-orange-desc': 'Cold coffee with orange and ice',
        'cold-brew-name': 'Cold Brew',
        'cold-brew-desc': '24-hour extraction, soft and sweet',
        'pour-over-name': 'Pour-Over (V60)',
        'pour-over-desc': 'Hand-brewed filter coffee',
        'maple-latte-name': 'Maple Latte',
        'maple-latte-desc': 'Latte with real maple syrup',
        
        // Bakery items
        'croissant-name': 'Croissant',
        'croissant-desc': 'French butter dough, perfectly flaky',
        'cinnamon-bun-name': 'Cinnamon Bun',
        'cinnamon-bun-desc': 'Homemade with Nordic cinnamon',
        'cardamom-bun-name': 'Cardamom Bun',
        'cardamom-bun-desc': 'Traditional Scandinavian flavor',
        'scones-name': 'Scones',
        'scones-desc': 'Served warm with jam',
        'chocolate-cake-name': 'Chocolate Cake',
        'chocolate-cake-desc': 'Rich and moist, perfect with coffee',
        'carrot-cake-name': 'Carrot Cake',
        'carrot-cake-desc': 'With cream cheese frosting and nuts',
        
        // Specials section
        'specials-title': "Today's special",
        'specials-subtitle': 'Special offers this week',
        'popular-badge': 'Popular',
        'new-badge': 'New',
        
        // News section
        'news-title': 'News',
        'news-subtitle': 'Latest from Pine & Brass',
        'brewing-tips-title': 'Brewing Tips',
        'brewing-tips-text': 'How to make a sweet cappuccino at home with perfect foam and balance.',
        'new-roast-title': 'New Roast',
        'new-roast-text': 'New Nordic roast from Ethiopia has arrived – fresh and floral with hints of citrus.',
        'read-more': 'Read more →',
        
        // Reviews section
        'reviews-title': 'What do customers say?',
        'reviews-subtitle': 'Reviews from our guests',
        'anna-review': 'Fantastic coffee and cozy atmosphere! I come here every morning before work. The baristas are always friendly and the coffee is top quality. I recommend their Flat White!',
        'erik-review': 'Best coffee bar in Trondheim! Love their Orange Espresso Tonic – so refreshing and unique. The interior is also beautiful with the Scandinavian style.',
        'maria-review': 'Perfect place to work with laptop. Good wifi, delicious coffee and fresh pastries. Their cinnamon buns are heavenly! Always good music and relaxed atmosphere.',
        
        // Contact section
        'contact-title': 'Visit us',
        'contact-subtitle': 'Find your way to Pine & Brass',
        'opening-hours': 'Opening hours',
        'daily-hours': 'Every day: 08:00–20:00',
        'no-rest-day': 'No rest days – we are always here for you!',
        'address-title': 'Address',
        'address-line1': 'Geelmuygens gate 2',
        'address-line2': '7012 Trondheim',
        'contact-title': 'Contact',
        'phone': '+47 470 00 000',
        'email': 'hello@pineandbrass.coffee',
        'contact-form-title': 'Send us a message',
        'form-name': 'Your name *',
        'form-email': 'Your email *',
        'form-phone': 'Phone (optional)',
        'form-subject': 'Choose subject *',
        'form-subject-general': 'General inquiry',
        'form-subject-booking': 'Booking/Reservation',
        'form-subject-catering': 'Catering',
        'form-subject-feedback': 'Feedback',
        'form-subject-partnership': 'Partnership',
        'form-subject-other': 'Other',
        'form-message': 'Your message *',
        'form-privacy': 'I accept that Pine & Brass Coffee can contact me regarding this inquiry *',
        'form-submit': 'Send message',
        'form-success-title': 'Thank you for your message!',
        'form-success-text': 'We have received your inquiry and will respond to you as soon as possible.',
        
        // Footer
        'footer-description': 'A small, cozy coffee shop in the heart of Trondheim. We care about quality, sustainability and good experiences.',
        'footer-website': 'Website',
        'footer-services': 'Services',
        'footer-ordering': 'Ordering',
        'footer-catalog': 'Catalog',
        'footer-rights': 'All rights reserved.'
    }
};

// Основная функция перевода
function translatePage(lang) {
    // Обновляем все элементы с data-key атрибутами
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            // Обработка разных типов элементов
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'SELECT') {
                // Обработка опций select
                const options = element.querySelectorAll('option');
                options.forEach(option => {
                    const optionKey = option.getAttribute('data-key');
                    if (optionKey && translations[lang][optionKey]) {
                        option.textContent = translations[lang][optionKey];
                    }
                });
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Обновляем язык HTML
    document.documentElement.lang = lang;
    
    // Обновляем заголовок страницы
    if (lang === 'en') {
        document.title = 'Pine & Brass Coffee - Coffee and bakery in Trondheim';
    } else {
        document.title = 'Pine & Brass Coffee - Kaffe og bakeri i Trondheim';
    }
    
    console.log('Страница переведена на:', lang);
}

// Инициализация перевода
function initTranslation() {
    // Проверяем сохраненный язык
    const savedLang = localStorage.getItem('preferred-language') || 'no';
    
    // Устанавливаем начальный язык
    translatePage(savedLang);
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === savedLang) {
            btn.classList.add('active');
        }
    });
}

// Экспорт для использования в других файлах
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, translatePage, initTranslation };
}