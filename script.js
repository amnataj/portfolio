
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('about')) {
                
                entry.target.querySelector('.section-title').classList.add('animate');
                entry.target.querySelector('.about-text').classList.add('animate');
                entry.target.querySelector('.hobby-icons').classList.add('animate');
            } else if (entry.target.classList.contains('skills')) {
               
                entry.target.querySelector('.section-title').classList.add('animate');
                const cards = entry.target.querySelectorAll('.skill-card');
                cards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100); 
                });
            } else if (entry.target.classList.contains('contact')) {
               
                entry.target.querySelector('.section-title').classList.add('animate');
                entry.target.querySelector('.contact-info').classList.add('animate');
                entry.target.querySelector('.contact-form').classList.add('animate');
            }
         
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

const sections = document.querySelectorAll('.about, .skills, .contact');
sections.forEach(section => {
    observer.observe(section);
});

const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    
    console.log('Form submitted:', { name, email, message });
   
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Message Sent!';
    submitButton.style.backgroundColor = '#28a745';
 
    contactForm.reset();
    
    setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.backgroundColor = '';
    }, 3000);
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, 
                behavior: 'smooth'
            });
        }
    });
});