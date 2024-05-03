const teamMembers =  [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'Lionel Messi Jr',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');
    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        // Styling card based off of position
        let backgroundColor
        // Create a list of skills with li tags around each element
        const skillsList = member.skills.map(skill => `<li>${skill}</li>`).join('');
        card.innerHTML = `
        <div class="card">
            <div class="card-header">
            ${member.name}
            </div>
            <div class="card-body">
                    <p><strong>Positon:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong>
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
            </div>
        </div>
        `;
        teamCardsContainer.appendChild(card);
    })
};

window.onload = generateTeamCards();