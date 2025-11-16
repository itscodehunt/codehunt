// JavaScript Document
/*
TemplateMo 600 Prism Flux
https://templatemo.com/tm-600-prism-flux
*/

// Static data (keep this at top)
const portfolioData = [
    { 
        id: 1, 
        title: 'CORE JAVA', 
        description: 'Master object-oriented programming, data types, loops, methods, classes, and exception handling with real-world examples.', 
        image: 'images/corejava.png', 
        tech: ['OOP', 'Collections', 'Exceptions'] ,
        link: 'corejava.html'
    },

    { 
        id: 2, 
        title: 'JDBC', 
        description: 'Learn how to connect Java applications with databases using JDBC drivers, CRUD operations, transactions, and batch processing.', 
        image: 'images/jdbc.png', 
        tech: ['MySQL', 'Driver', 'Database'] ,
        link: 'jdbc.html'
    },

    { 
        id: 3, 
        title: 'SERVLET & JSP', 
        description: 'Build dynamic web applications using Servlets and JSP, session management, cookies, MVC architecture, and JSTL.', 
        image: 'images/servletjsp.png', 
        tech: ['Servlet', 'JSP', 'MVC'] ,
        link: 'servletjsp.html'
        
    },

    { 
        id: 4, 
        title: 'HIBERNATE', 
        description: 'Learn ORM mapping, HQL, caching, relationships, and JPA integration to manage databases efficiently with Hibernate.', 
        image: 'images/hibernate.png', 
        tech: ['ORM', 'HQL', 'JPA'] ,
        link: 'hibernate.html'
    },

    { 
        id: 5, 
        title: 'SPRING CORE', 
        description: 'Understand IoC, Dependency Injection, Bean lifecycle, Autowiring, and Spring container configuration in depth.', 
        image: 'images/springcore.png', 
        tech: ['IoC', 'DI', 'Spring Beans'] ,
        link: 'springcore.html'
    },

    { 
        id: 6, 
        title: 'SPRING MVC', 
        description: 'Develop production-ready MVC web apps with controllers, view resolvers, form handling, validation, and REST integration.', 
        image: 'images/springmvc.png', 
        tech: ['Dispatcher', 'ViewResolver', 'MVC'] ,
        link: 'springmvc.html'
    },

    { 
        id: 7, 
        title: 'SPRING BOOT', 
        description: 'Create rapid production-ready applications with auto-configuration, embedded servers, and Spring Boot starters.', 
        image: 'images/springboot.png', 
        tech: ['RAD', 'Data JPA', 'REST API'] ,
        link: 'springboot.html'
    },

    { 
        id: 8, 
        title: 'SPRING SECURITY', 
        description: 'Implement authentication, authorization, JWT, custom filters, and secure your applications using Spring Security 5.7.', 
        image: 'images/springsecurity.png', 
        tech: ['JWT', 'Authentication'] ,
        link: 'springsecurity.html'
    },

    { 
        id: 9, 
        title: 'SPRING REST API', 
        description: 'Build clean RESTful services with HTTP methods, request validation, exception handling, and layered architecture.', 
        image: 'images/restapi.png', 
        tech: ['REST', 'JSON', 'HTTP'] ,
        link: 'springrestapi.html'
    },

    { 
        id: 10, 
        title: 'MICROSERVICES', 
        description: 'Learn microservices architecture, API gateways, service discovery, communication patterns, and deployment strategies.', 
        image: 'images/microservices.png', 
        tech: ['Eureka', 'Feign', 'API Gateway'] ,
        link: 'springmicroservices.html'
    },

    { 
        id: 11, 
        title: 'REALTIME PROJECT', 
        description: 'Work on a fully integrated real-time Java project including backend, REST APIs, security, and database architecture.', 
        image: 'images/taxi.png', 
        tech: ['Spring Boot', 'MySQL', 'JWT'] ,
        link: 'jdbc.html'
    }
];

const skillsData = [
    { name: 'React.js', icon: '⚛️', level: 95, category: 'frontend' },
    { name: 'Node.js', icon: '🟢', level: 90, category: 'backend' },
    { name: 'TypeScript', icon: '📘', level: 88, category: 'frontend' },
    { name: 'AWS', icon: '☁️', level: 92, category: 'cloud' },
    { name: 'Docker', icon: '🐳', level: 85, category: 'cloud' },
    { name: 'Python', icon: '🐍', level: 93, category: 'backend' },
    { name: 'Kubernetes', icon: '☸️', level: 82, category: 'cloud' },
    { name: 'GraphQL', icon: '◈', level: 87, category: 'backend' },
    { name: 'TensorFlow', icon: '🤖', level: 78, category: 'emerging' },
    { name: 'Blockchain', icon: '🔗', level: 75, category: 'emerging' },
    { name: 'Vue.js', icon: '💚', level: 85, category: 'frontend' },
    { name: 'MongoDB', icon: '🍃', level: 90, category: 'backend' }
];

// Utility functions not DOM-dependent (kept outside)
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.getElementById('header');
    if (section) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = section.offsetTop - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
}

function initParticles(particlesContainerId = 'particles') {
    const particlesContainer = document.getElementById(particlesContainerId);
    if (!particlesContainer) return;
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (18 + Math.random() * 8) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Animated counter for stats
function animateCounter(element) {
    const target = parseInt(element.dataset.target) || 0;
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// DOM-dependent initialization — run after DOM loaded
document.addEventListener('DOMContentLoaded', () => {
    // Query DOM elements here (safe after DOMContentLoaded)
    const carousel = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    // --- Carousel State & Logic ---
    let currentIndex = 0;
    let autoRotateInterval;
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    const threshold = 50; // Minimum distance to swipe (in pixels)

    function createCarouselItem(data, index) {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.dataset.index = index;
        const techBadges = data.tech.map(tech => `<span class="tech-badge">${tech}</span>`).join('');
        item.innerHTML = `
            <div class="card">
                <div class="card-number">0${data.id}</div>
                <div class="card-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
                <h3 class="card-title">${data.title}</h3>
                <p class="card-description">${data.description}</p>
                <div class="card-tech">${techBadges}</div>
                <button class="card-cta" onclick="window.location.href='${data.link}'">Explore</button>
            </div>
        `;
        return item;
    }

    function updateCarousel(extraTranslation = 0) {
        const items = document.querySelectorAll('.carousel-item');
        const indicators = document.querySelectorAll('.indicator');
        const totalItems = items.length;
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth <= 1024;
        
        // Apply the temporary translation to the entire carousel container
        if (carousel) {
            carousel.style.transform = `translateX(${extraTranslation}px)`;
            carousel.style.transition = extraTranslation === 0 ? 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none';
        }

        items.forEach((item, index) => {
            let offset = index - currentIndex;
            // Handle wrap-around for the 3D effect
            if (offset > totalItems / 2) offset -= totalItems;
            else if (offset < -totalItems / 2) offset += totalItems;
            
            const absOffset = Math.abs(offset);
            const sign = offset < 0 ? -1 : 1;

            // Use the transition only when NOT dragging
            item.style.transition = extraTranslation === 0 ? 'all 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)' : 'none';
            item.style.pointerEvents = absOffset === 0 ? 'auto' : 'none'; // Only allow interaction with the center card

            let spacing1 = 400, spacing2 = 600, spacing3 = 750;
            if (isMobile) { spacing1 = 280; spacing2 = 420; spacing3 = 550; }
            else if (isTablet) { spacing1 = 340; spacing2 = 520; spacing3 = 650; }

            // Apply 3D transformation based on offset (no drag translation here)
            let transformStyle = '';
            let opacity = 0;
            let zIndex = 1;

            if (absOffset === 0) {
                transformStyle = 'translate(-50%, -50%) translateZ(0) scale(1)';
                opacity = 1;
                zIndex = 10;
            } else if (absOffset === 1) {
                const translateX = sign * spacing1;
                const rotation = isMobile ? 25 : 30;
                const scale = isMobile ? 0.88 : 0.85;
                transformStyle = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-200px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                opacity = 0.8;
                zIndex = 5;
            } else if (absOffset === 2) {
                const translateX = sign * spacing2;
                const rotation = isMobile ? 35 : 40;
                const scale = isMobile ? 0.75 : 0.7;
                transformStyle = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-350px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                opacity = 0.5;
                zIndex = 3;
            } else if (absOffset === 3) {
                const translateX = sign * spacing3;
                const rotation = isMobile ? 40 : 45;
                const scale = isMobile ? 0.65 : 0.6;
                transformStyle = `translate(-50%, -50%) translateX(${translateX}px) translateZ(-450px) rotateY(${-sign * rotation}deg) scale(${scale})`;
                opacity = 0.3;
                zIndex = 2;
            } else {
                transformStyle = 'translate(-50%, -50%) translateZ(-500px) scale(0.5)';
                opacity = 0;
                zIndex = 1;
            }
            
            item.style.transform = transformStyle;
            item.style.opacity = opacity;
            item.style.zIndex = zIndex;
        });

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() { 
        currentIndex = (currentIndex + 1) % portfolioData.length; 
        updateCarousel(); 
    }
    function prevSlide() { 
        currentIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length; 
        updateCarousel(); 
    }
    function goToSlide(index) { 
        if (index === currentIndex) return; // Prevent unnecessary update
        currentIndex = index; 
        updateCarousel(); 
        resetAutoRotate(); // Reset timer on manual interaction
    }

    function startAutoRotate() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        autoRotateInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoRotate() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
        startAutoRotate();
    }

    function initCarousel() {
        if (!carousel || !indicatorsContainer) return;
        
        // clear existing
        carousel.innerHTML = '';
        indicatorsContainer.innerHTML = '';

        portfolioData.forEach((data, index) => {
            const item = createCarouselItem(data, index);
            carousel.appendChild(item);

            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.dataset.index = index;
            indicator.addEventListener('click', () => goToSlide(index));
            indicatorsContainer.appendChild(indicator);
        });

        // Initialize swipe listeners on the carousel itself
        addCarouselSwipeListeners(carousel);
        
        updateCarousel();
        startAutoRotate(); // Start auto-rotation
    }

    // --- Swipe/Drag Logic ---
    
    function getPositionX(event) {
        // Use touch events for mobile, mouse/pointer events for desktop
        return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
    }

    function dragStart(event) {
        // Prevent drag when interacting with CTA button/links
        if (event.target.closest('.card-cta') || event.target.tagName === 'A' || (event.type === 'mousedown' && event.button !== 0)) return;

        isDragging = true;
        startPos = getPositionX(event);
        carousel.classList.add('dragging');

        // Stop auto-rotate when dragging starts
        if (autoRotateInterval) clearInterval(autoRotateInterval);
    }

    function dragging(event) {
        if (!isDragging) return;
        // Prevent default behavior (like scrolling on touch devices) only if horizontal drag is significant
        if (event.type.includes('touch')) {
             // We allow default scroll if the movement is primarily vertical
             const currentPos = getPositionX(event);
             currentTranslate = currentPos - startPos;
             const isHorizontal = Math.abs(currentTranslate) > Math.abs(event.touches[0].clientY - startPos);
             if (isHorizontal) {
                 event.preventDefault(); 
             }
        }
        
        const currentPos = getPositionX(event);
        currentTranslate = currentPos - startPos;

        // Apply the temporary translation to the whole carousel container
        // This moves the entire scene horizontally for visual feedback
        updateCarousel(currentTranslate);
    }

    function dragEnd(event) {
        if (!isDragging) return;
        isDragging = false;
        carousel.classList.remove('dragging');

        const movedBy = currentTranslate;
        
        // Snap logic: if moved more than the threshold, move to the next/prev slide
        if (movedBy < -threshold) {
            nextSlide(); // Swiped left
        } else if (movedBy > threshold) {
            prevSlide(); // Swiped right
        } 
        
        // Always reset the temporary carousel translation
        updateCarousel(0); 

        // Cleanup temporary state
        currentTranslate = 0;
        
        // Restart auto-rotate after drag ends
        startAutoRotate();
    }

    function addCarouselSwipeListeners(element) {
        // Disable image dragging default browser behavior
        element.ondragstart = () => false; 

        // Touch events (for mobile/tablet)
        // Use passive: false on touchmove to allow preventDefault if we detect horizontal drag
        element.addEventListener('touchstart', dragStart, { passive: true });
        element.addEventListener('touchmove', dragging, { passive: false });
        element.addEventListener('touchend', dragEnd);

        // Mouse events (for desktop dragging)
        element.addEventListener('mousedown', dragStart);
        document.addEventListener('mousemove', dragging); // Bind mousemove to document
        document.addEventListener('mouseup', dragEnd); // Bind mouseup to document
        element.addEventListener('mouseleave', dragEnd); // Catch edge case
    }


    // --- Skills grid initialization (unchanged logic but safe) ---
    function initSkillsGrid() {
        const skillsGrid = document.getElementById('skillsGrid');
        const categoryTabs = document.querySelectorAll('.category-tab');
        if (!skillsGrid) return;

        function displaySkills(category = 'all') {
            skillsGrid.innerHTML = '';
            const filteredSkills = category === 'all' ? skillsData : skillsData.filter(skill => skill.category === category);
            filteredSkills.forEach((skill, index) => {
                const hexagon = document.createElement('div');
                hexagon.className = 'skill-hexagon';
                hexagon.style.animationDelay = `${index * 0.1}s`;
                hexagon.innerHTML = `
                    <div class="hexagon-inner">
                        <div class="hexagon-content">
                            <div class="skill-icon-hex">${skill.icon}</div>
                            <div class="skill-name-hex">${skill.name}</div>
                            <div class="skill-level">
                                <div class="skill-level-fill" style="width: ${skill.level}%"></div>
                            </div>
                            <div class="skill-percentage-hex">${skill.level}%</div>
                        </div>
                    </div>
                `;
                skillsGrid.appendChild(hexagon);
            });
        }

        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                displaySkills(tab.dataset.category);
            });
        });

        displaySkills();
    }

    // --- Event listeners ---
    if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoRotate(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoRotate(); });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { prevSlide(); resetAutoRotate(); }
        if (e.key === 'ArrowRight') { nextSlide(); resetAutoRotate(); }
    });

    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => updateCarousel(), 250);
    });

    // Initialize components
    initCarousel();
    initParticles();
    // initSkillsGrid(); // uncomment if you want skills grid active
    
    // safe menu toggle
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Header scroll effect
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        });
    }

    // Smooth scrolling nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetSection.offsetTop - headerHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                if (navMenu) navMenu.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            }
        });
    });

    // Update active nav on scroll
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    const href = link.getAttribute('href').substring(1);
                    if (href === sectionId) link.classList.add('active');
                });
            }
        });
    }
    window.addEventListener('scroll', updateActiveNav);

    // --- Stats IntersectionObserver & fallback (mobile-friendly) ---
    const observerOptions = {
        threshold: 0.1,             // lower threshold for mobile
        rootMargin: '0px 0px -50px 0px' // trigger a bit earlier
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(number => {
                    if (!number.classList.contains('animated')) {
                        number.classList.add('animated');
                        animateCounter(number);
                    }
                });
            }
        });
    }, observerOptions);

    // Accept either .stats-section (preferred) or .stats-grid (fallback)
    const statsSection = document.querySelector('.stats-section') || document.querySelector('.stats-grid');
    if (statsSection) {
        try { observer.observe(statsSection); }
        catch (err) { console.warn('Observer failed:', err); }
    } else {
        console.warn('Stats section/grid not found: counters will run via fallback.');
    }

    // Fallback: always run counters on load (useful for mobile / if observer missed)
    window.addEventListener('load', () => {
        document.querySelectorAll('.stat-number').forEach(num => {
            if (!num.classList.contains('animated')) {
                num.classList.add('animated');
                animateCounter(num);
            }
        });
    });

    // --- Contact form handler ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            alert(`Thank you ${data.name}! Your message has been transmitted successfully.`);
            contactForm.reset();
        });
    }

    // Loading screen hide
    const loader = document.getElementById('loader');
    window.addEventListener('load', () => {
        if (loader) setTimeout(() => loader.classList.add('hidden'), 1500);
    });

    // Parallax hero (safe)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero');
        if (parallax) parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

}); // end DOMContentLoaded
