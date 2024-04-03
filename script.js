// script.js

const speakers = [
    { name: "Artist 1", image: "images/speaker1.jpg" },
    { name: "Artist 2", image: "images/speaker2.jpg" }
];

function generateSpeakerHTML(speaker) {
    return `
        <div class="speaker">
            <img src="${speaker.image}" alt="${speaker.name}">
            <h2>${speaker.name}</h2>
        </div>
    `;
}

function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.style.display = (nav.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const featuredSpeakersSection = document.getElementById('featured-speakers');
    let speakersHTML = '';

    speakers.forEach(function(speaker) {
        speakersHTML += generateSpeakerHTML(speaker);
    });

    featuredSpeakersSection.innerHTML = speakersHTML;
});
