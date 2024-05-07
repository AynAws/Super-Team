function name() {
    const prefix = [
        'God Emperor ',
        'Padishah Emperor ',
        'Ser ',
        'Lord ',
        'Duke ',
        'Emperor ',
        'Earl ',
        'Baron ',
        'Count ',
        'Viscount ',
        'St. '
    ]
    const suffix = [
        ' Jr.',
        ' Sr.',
        ' IX',
        ' VI',
        ' Ph.D.',
        ' M.D.',
    ]
    let x = Math.floor(Math.random() * 19);
    if (x === 19) {
        let pre = prefix[Math.floor(Math.random * prefix.length)];
    } else {
        let pre = '';
    }
    let y = Math.floor(Math.random() * 9);
    if (y === 9) {
        let suf = suffix[Math.floor(Math.random * suffix.length)];
    } else {
        let suf = '';
    }
    const firstName = [
        'Lionel',
        'Varys',
        'Bob',
        'Johnny',
        'Paul',
        'Leto',
        'Ghanima',
        'Alia',
        'Vladmir',
        'Samwell',
        'Ahmed',
        'Daniel',
        'Adam',
        'Mikkel',
        'Mikken',
        'Gendry',
        'Craster',
        'Jonas',
        'Mikasa',
        'Grisha',
        'Ymir',
        'Bartosz',
        'Cristiano'
    ]
    let first = firstName[Math.floor(Math.random * firstName.length)];
    const lastName = [
        'Harkonnen',
        'Tiedemann',
        'Atreides',
        'Messi',
        'Ronaldo'
    ]
    let last = lastName[Math.floor(Math.random * lastName.length)];
    return pre + first + last + suf;
}

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

        switch (member.position.toLowerCase()) {
            case 'forward':
              backgroundColor = '#ffc107'; // Yellow for forwards
              break;
            case 'midfielder':
              backgroundColor = '#28a745'; // Green for midfielders
              break;
            case 'defender':
              backgroundColor = '#007bff'; // Blue for defenders
              break;
            case 'goalkeeper':
              backgroundColor = '#dc3545'; // Red for goalkeepers
              break;
            default:
              backgroundColor = '#6c757d'; // Gray for other positions
          }

        card.style.backgroundColor = backgroundColor;
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