const n = x => Math.floor(Math.random() * x);

// Generates prefix, first name, middle name/nickname, last name, suffix
function nameGen() {
    let pre, suf, first, last, nick;
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
        'St. ',
        'Lil ',
        'Hodor ',
        'Lady ',
        'Duchess',
        'Empress ',
        'Queen ',
        'Baroness ',
        'Countess ',
        'Viscountess '
    ];

    const suffix = [
        ' Jr.',
        ' Sr.',
        ' IX',
        ' VI',
        ' Ph.D.',
        ' M.D.',
        ' Hodor'
    ];
    if (n(20) === 19) {
        pre = prefix[n(prefix.length)];
    } else {
        pre = '';
    }
    if (n(10) === 9) {
        suf = suffix[n(suffix.length)];
    } else {
        suf = '';
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
        'Cristiano',
        'Levi',
        'Gregory',
        'Aaron',
        'Brianna',
        'Elizabeth',
        'Emma',
        'Gabrielle',
        'Jake',
        'Jayden',
        'Kevin',
        'Koustubha',
        'Kyle',
        'Mahek',
        'Matthew',
        'Owen',
        'Sophia',
        'Sunay',
        'Viacheslav',
        'Walder',
        'Hodor'
    ];
    first = firstName[n(firstName.length)];

    const lastName = [
        'Harkonnen',
        'Tiedemann',
        'Atreides',
        'Messi',
        'Ronaldo',
        'Ackerman',
        'Stark',
        'Clegane',
        'Kilgore',
        'Mathew',
        'Nisenson',
        'Pinto',
        'Bootnik',
        'Reznik',
        'Kozlovsky',
        'Tarantola',
        'Cherichello',
        'Yau',
        'Piccinich',
        'Kolla',
        'Rabkin',
        'Mahesh',
        'Passantino',
        'Chiu',
        'Antushevich',
        'Bhatt',
        'Kostenko',
        'Frey',
        'Hodor'
    ];
    last = lastName[n(lastName.length)];

    const nickName = [
        '“The Hound”',
        '“Littlefinger”',
        '“The Undertaker”',
        'De',
        'Vi',
        'ibn',
        'bin',
        'of the Knife',
        '“Blackfish”',
        '“Hodor”'
    ];
    if (n(20) === 19) {
        nick = ` ${nickName[n(nickName.length)]} `;
    } else {
        nick = ' ';
    }
    const name = pre + first + nick + last + suf;
    return name;
};

function positionGen() {
    const positionArray = [
        'Benchwarmer',
        'Forward',
        'Backward',
        'Midward',
        'Upward',
        'Downward',
        'Leftward',
        'Rightward',
        'Ward',
        'Hostage',
        'KindaEastButNotReallyEastLikeMoreNortheastButNotAllTheWayNortheastward',
        'Wardward',
        'Hodor'
    ];
    const position = positionArray[n(positionArray.length)];
    return position;
}

const teamMembers =  [
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }
    /*{
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    },
    {
        name: 'placeholder',
        position: 'Defender',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }*/
];

teamMembers.forEach(member => {
    member.name = nameGen();
    member.position = positionGen();
});

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