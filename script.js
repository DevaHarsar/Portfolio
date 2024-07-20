document.addEventListener('DOMContentLoaded', function() {
    const seeMoreBtn = document.getElementById('see-more-btn');
    const showLessBtn = document.getElementById('see-less-btn');
    const workList = document.getElementById('work-list');

    // Array of new projects
    const newProjects = [
        {
            imgSrc: 'images/work-1.png',
            title: 'Java House Rental Mangement System',
            description: 'Java house rental management system created using OOPS concept',
            link: 'https://github.com/DevaHarsar/Java-House-rental-Mangement'
        },
        {
            imgSrc: 'images/work-2.png',
            title: 'Ayurverse',
            description: 'Created a web application using html css and javascript with quiz a medical assistant website',
            link: 'https://github.com/DevaHarsar/Ayurverse'
        }
        // Add more projects as needed
    ];

    seeMoreBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Loop through new projects and create HTML
        newProjects.forEach(project => {
            const workDiv = document.createElement('div');
            workDiv.classList.add('work');
            workDiv.classList.add('new-project'); // Add a class to identify new projects
            workDiv.innerHTML = `
                <img src="${project.imgSrc}" alt="">
                <div class="layer">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
            `;
            workList.appendChild(workDiv);
        });

        // Hide the "See More" button and show the "Show Less" button
        seeMoreBtn.style.display = 'none';
        showLessBtn.style.display = 'block';
    });

    showLessBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        // Remove new projects from the work list
        const newProjectsDivs = document.querySelectorAll('.work.new-project');
        newProjectsDivs.forEach(div => div.remove());

        // Show the "See More" button and hide the "Show Less" button
        seeMoreBtn.style.display = 'block';
        showLessBtn.style.display = 'none';
    });
});


 