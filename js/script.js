
const courses = [
    {
        title: "HTML for beginners",
        description: "Learning HTML for developing modern interactive   web applications.",
        rating: 4.5,
        tags: ["Engineering", "Testing"],
        image: "../images/Card Image.png"
    },
    {
        title: "CSS for mobile",
        description: "You'll learn about CSS, layouts, wrappers, creating a sticky navbar, and more.",
        rating: 4.3,
        tags: ["Engineering", "Testing"],
         image: "../images/Card Image (1).png"
    },
    {
        title: "JavaScript",
        description: "This course provides a comprehensive introduction to the JavaScript programming language.",
        rating: 4.7,
        tags: ["JavaScript", "Development"],
         image: "../images/Card Image (2).png"
    }
];



function createCard(course) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = course.image;
    img.alt = course.title;

    const content = document.createElement('div');
    content.className = 'card-content';

    const cardUp = document.createElement('div');
    cardUp.className = 'card-up';

    const title = document.createElement('h3');
    title.textContent = course.title;

    const rating = document.createElement('span');
    rating.className = 'rating';
    rating.innerHTML = `<span class="star">★</span> ${course.rating.toFixed(1)}`;

    cardUp.appendChild(title);
    cardUp.appendChild(rating);

    const description = document.createElement('p');
    description.textContent = course.description;

    const tags = document.createElement('div');
    tags.className = 'tags';
    course.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });

    const arrow = document.createElement('span');
    arrow.className = 'arrow';
    arrow.innerHTML = '➔';

    content.appendChild(cardUp);
    content.appendChild(description);
    content.appendChild(tags);
    content.appendChild(arrow);

    card.appendChild(img);
    card.appendChild(content);

    return card;
}


function renderCards() {
    const container = document.querySelector('.card-container');
    courses.forEach(course => {
        const card = createCard(course);
        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', renderCards);

const mentors = [
    { name: "John Wilson", role: "UI / UX Designer", experience: "6 yr.", image: "../images/Avatar.png" },
    { name: "Daniel Hill", role: "Test Engineer", experience: "5 yr.", image: "../images/Avatar (1).png" },
    { name: "Sofia Harris", role: "Python Developer", experience: "8 yr.", image: "../images/Avatar (2).png" },
    { name: "Eva Smith", role: "Motion Designer", experience: "4 yr.", image: "../images/Avatar (3).png" }
];

function createMentorCard(mentor) {
    return `
        <div class="mentor-card">
            <img src="${mentor.image}" alt="${mentor.name}" class="profile-pic">
            <div class="mentor-info">
                <div class="up">
                    <div class="mentor-name">${mentor.name}</div>
                    <div class="mentor-exp">Exp. ${mentor.experience}</div>
                </div>
                <div class="down">
                    <div class="mentor-role">${mentor.role}</div>
                </div>
            </div>
        </div>
    `;
}

function renderMentorCards() {
    const container = document.getElementById('mentors-container');
    const mentorCards = mentors.map(createMentorCard).join('');
    container.innerHTML += mentorCards;
}


window.onload = renderMentorCards;