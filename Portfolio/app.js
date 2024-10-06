const links = document.querySelectorAll('.link a'); // Select the anchor tags inside the links

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href'); // Get the target section id
        const targetSection = document.querySelector(targetId); // Select the target section
        
        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});



