const n = x => Math.floor(Math.random() * x); // Random number gen with the number cap as a parameter x

// Generates prefix, first name, middle name/nickname, last name, suffix
function nameGen() {
    let pre, suf, first, last, nick;
const n = x => Math.floor(Math.random() * x); // Random number gen with the number cap as a parameter x

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
        ' Hodor'
    ];
    if (n(20) === 19) {
        pre = prefix[n(prefix.length)];
    } else {
        pre = '';
        pre = '';
    }
    if (n(10) === 9) {
        suf = suffix[n(suffix.length)];
    if (n(10) === 9) {
        suf = suffix[n(suffix.length)];
    } else {
        suf = '';
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
        'Hodor',
        'Lelouch',
        'Youssef',
        'Muhammad',
        'Malcolm',
        'Malik',
        'Trevor',
        'Layci',
        'Pranshu'
    ];
    first = firstName[n(firstName.length)];

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
        'Hodor',
        'Lelouch',
        'Youssef',
        'Muhammad',
        'Malcolm',
        'Malik',
        'Trevor',
        'Layci',
        'Pranshu'
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
        'Hodor',
        'Lamperogue',
        'Ali',
        'X',
        'Little',
        'Shabazz',
        'Barrett',
        'Acquista'
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
        '“Hodor”',
        'Mohamed',
        'el-'
    ];
    if (n(20) === 19) {
        nick = ` ${nickName[n(nickName.length)]} `;
    } else {
        nick = ' ';
    }
    const name = pre + first + nick + last + suf;
    return name;
};

function directionGen() {
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
};

function skillsGen() {
    const skillsArray = [
        'Headbutting', 'Dribbling', 'Shooting', 'Passing', 'Charging', 'Hazardous Material Recovery'
    ]
    const skill1 = skillsArray[n(skillsArray.length)];
    let newArray = skillsArray.filter(item => item !== skill1);

    const skill2 = newArray[n(newArray.length)];
    newArray = newArray.filter(item => item !== skill2);

    const skill3 = newArray[n(newArray.length)];

    return [skill1, skill2, skill3];
};

function quipGen() { // DONT FORGET
    const quipArray = [
    ]
};

const teamMembers =  [
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
    {
        name: nameGen(),
        position: directionGen(),
        skills: skillsGen(),
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.',
        colour: 'yellow'
    },
];

const antiTeamMembers =  [
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
        name: 'placeholder',
        position: 'Forward',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball control',
        weaknesses: 'Heading ability',
        biography: 'lorem ipsum dolor sit amet consectuer tet.'
    }
];

/*teamMembers.forEach((member, index) => {
    member.name = nameGen();
    switch (index) {
        case 0:
        case 1:
            member.position = directionGen();
            member.colour = 'yellow';
            break;
        default:
            member.colour = 'grey';
            break;
    }
    member.skills = skillsGen();
});*/

antiTeamMembers.forEach((antiMember, index) => {
    let antiName = () => antiMember.name = nameGen();
    let antiPos = () => antiMember.position = nameGen();
    let antiSkill = () => antiMember.name = nameGen();
})

function generateTeamCards(team, teamID) {
    const teamCardsContainer = document.getElementById(teamID);
    team.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col-md-4');
        // Styling card based off of position
        let backgroundColor;
        let backgroundColor;

        switch (member.colour.toLowerCase()) { // Needs updating when I make the new positions
            case 'yellow':
              backgroundColor = '#ffc107'; // Marigold
              break;
            case 'antiYellow':
              backgroundColor = '#2169EA'; // Opposite of previous (Bluetiful)
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

window.onload = generateTeamCards(teamMembers, 'teamCards'), generateTeamCards(antiTeamMembers, 'antiTeamCards');
window.onload = generateTeamCards(teamMembers, 'teamCards'), generateTeamCards(antiTeamMembers, 'antiTeamCards');