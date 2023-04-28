const filthyRobot = [
    [
        { civ: 'Babylon', leader: 'Nebuchadnezzar II' },
        { civ: 'Egypt', leader: 'Ramesses II' },
        { civ: 'England', leader: 'Elizabeth' },
        { civ: 'Ethiopia', leader: 'Haile Selassie' },
        { civ: 'Inca', leader: 'Pachacuti' },
        { civ: 'Korea', leader: 'Sejong' },
        { civ: 'Persia', leader: 'Darius I' },
        { civ: 'Poland', leader: 'Casimir III' },
    ],
    [
        { civ: 'Arabia', leader: 'Harun al-Rashid' },
        { civ: 'Aztec', leader: 'Montezuma' },
        { civ: 'China', leader: 'Wu Zetian' },
        { civ: 'Greece', leader: 'Alexander' },
        { civ: 'Huns', leader: 'Attila' },
        { civ: 'Maya', leader: 'Pacal' },
        { civ: 'Russia', leader: 'Catherine' },
        { civ: 'Shoshone', leader: 'Pocatello' },
        { civ: 'Spain', leader: 'Isabella' },
    ],
    [
        { civ: 'Brazil', leader: 'Pedro II' },
        { civ: 'Byzantium', leader: 'Theodora' },
        { civ: 'Celts', leader: 'Boudicca' },
        { civ: 'Germany', leader: 'Bismarck' },
        { civ: 'India', leader: 'Gandhi' },
        { civ: 'Indonesia', leader: 'Gajah Mada' },
        { civ: 'Mongolia', leader: 'Genghis Khan' },
        { civ: 'Morocco', leader: 'Ahmad al-Mansur' },
        { civ: 'Ottomans', leader: 'Suleiman' },
        { civ: 'Portugal', leader: 'Maria I' },
        { civ: 'Rome', leader: 'Augustus Caesar' },
        { civ: 'Siam', leader: 'Ramkhamhaeng' },
        { civ: 'Songhai', leader: 'Askia' },
        { civ: 'Sweden', leader: 'Gustavus Adolphus' },
        { civ: 'Zulu', leader: 'Shaka' },
    ],
    [
        { civ: 'America', leader: 'Washington' },
        { civ: 'Assyria', leader: 'Ashurbanipal' },
        { civ: 'Austria', leader: 'Maria Theresa' },
        { civ: 'Carthage', leader: 'Dido' },
        { civ: 'Denmark', leader: 'Harald Bluetooth' },
        { civ: 'Netherlands', leader: 'William' },
    ],
    [
        { civ: 'France', leader: 'Napoleon' },
        { civ: 'Japan', leader: 'Oda Nobunaga' },
        { civ: 'Polynesia', leader: 'Kamehameha' },
    ],
    [
        { civ: 'Iroquois', leader: 'Hiawatha' },
        { civ: 'Venice', leader: 'Enrico Dandolo' },
    ],
];

const peaceful = [
    [
        { civ: 'Poland', leader: 'Casimir III' },
        { civ: 'Babylon', leader: 'Nebuchadnezzar II' },
        { civ: 'Korea', leader: 'Sejong' },
        { civ: 'Maya', leader: 'Pacal' },
        { civ: 'Shoshone', leader: 'Pocatello' },
    ],
    [
        { civ: 'Aztec', leader: 'Montezuma' },
        { civ: 'Egypt', leader: 'Ramesses II' },
        { civ: 'Ethiopia', leader: 'Haile Selassie' },
        { civ: 'Inca', leader: 'Pachacuti' },
        { civ: 'Arabia', leader: 'Harun al-Rashid' },
        { civ: 'India', leader: 'Gandhi' },
    ],
    [
        { civ: 'Persia', leader: 'Darius I' },
        { civ: 'America', leader: 'Washington' },
        { civ: 'Rome', leader: 'Augustus Caesar' },
        { civ: 'Russia', leader: 'Catherine' },
        { civ: 'Spain', leader: 'Isabella' },
        { civ: 'Assyria', leader: 'Ashurbanipal' },
        { civ: 'Celts', leader: 'Boudicca' },
        { civ: 'Indonesia', leader: 'Gajah Mada' },
    ],
    [
        { civ: 'England', leader: 'Elizabeth' },
        { civ: 'China', leader: 'Wu Zetian' },
        { civ: 'Greece', leader: 'Alexander' },
        { civ: 'Byzantium', leader: 'Theodora' },
        { civ: 'Denmark', leader: 'Harald Bluetooth' },
        { civ: 'Morocco', leader: 'Ahmad al-Mansur' },
        { civ: 'Portugal', leader: 'Maria I' },
        { civ: 'Siam', leader: 'Ramkhamhaeng' },
    ],
    [
        { civ: 'Huns', leader: 'Attila' },
        { civ: 'Zulu', leader: 'Shaka' },
        { civ: 'Austria', leader: 'Maria Theresa' },
        { civ: 'Mongolia', leader: 'Genghis Khan' },
        { civ: 'Songhai', leader: 'Askia' },
        { civ: 'Carthage', leader: 'Dido' },
        { civ: 'Germany', leader: 'Bismarck' },
        { civ: 'Japan', leader: 'Oda Nobunaga' },
        { civ: 'Netherlands', leader: 'William' },
        { civ: 'Ottomans', leader: 'Suleiman' },
        { civ: 'Polynesia', leader: 'Kamehameha' },
        { civ: 'Sweden', leader: 'Gustavus Adolphus' },
    ],
    [
        { civ: 'Brazil', leader: 'Pedro II' },
        { civ: 'France', leader: 'Napoleon' },
        { civ: 'Iroquois', leader: 'Hiawatha' },
        { civ: 'Venice', leader: 'Enrico Dandolo' },
    ],
];

const lists = [
    { name: 'Filthy Robot', list: filthyRobot },
    { name: 'Peaceful', list: peaceful },
];

const getStars = (checked) => {
    let stars = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= checked) {
            stars += `<div class="fa fa-star checked"></div>`;
        } else {
            stars += `<div class="fa fa-star"></div>`;
        }
    }

    return stars;
};

const selectTierList = () => {
    const tierListName = document.getElementById('TierListSelector').value;
    const tierList = lists.find((x) => x.name === tierListName).list;

    document.getElementById('CurrentTierList').innerHTML = tierList
        .map((tier) =>
            tier
                .map(
                    (civ) =>
                        `<img class="CivIcon" src='./icons/${civ.civ}.webp' alt='${civ.civ}, ${civ.leader}' title='${civ.civ}, ${civ.leader}'>`
                )
                .join('')
        )
        .map(
            (tier, index) =>
                `<section class="Tier"><div>${getStars(
                    index
                )}</div><div class="TierCivs">${tier}</div></section>`
        )
        .join('');
};

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

const difficulties = [];

const selectDifficulty = (player, difficulty) => {
    difficulties.find((x) => x.player === player).difficulty = difficulty;

    for (let i = 1; i <= 5; i++) {
        const element = document.getElementById(
            `Player ${player} Difficulty ${i}`
        );

        if (i <= difficulty) {
            element.classList.add('checked');
        } else {
            element.classList.remove('checked');
        }
    }
};

const addRow = () => {
    const table = document.getElementById('PlayerTable');
    const rows = difficulties.length;

    difficulties.push({ player: rows, difficulty: 2 });

    table.innerHTML += `<section class='PlayerRow'>
        <input value='Player ${rows + 1}'></input>
        <section class='Difficulty'>
            <div onClick='selectDifficulty(${rows}, 1)' id="Player ${rows} Difficulty 1" class="fa fa-star checked"></div>
            <div onClick='selectDifficulty(${rows}, 2)' id="Player ${rows} Difficulty 2" class="fa fa-star checked"></div>
            <div onClick='selectDifficulty(${rows}, 3)' id="Player ${rows} Difficulty 3" class="fa fa-star"></div>
            <div onClick='selectDifficulty(${rows}, 4)' id="Player ${rows} Difficulty 4" class="fa fa-star"></div>
            <div onClick='selectDifficulty(${rows}, 5)' id="Player ${rows} Difficulty 5" class="fa fa-star"></div>
        </section>
        <div class="PlayerPicks" id='Player ${rows} Picks'>
            <img class="CivIcon" src='./icons/None.png'>
            <img class="CivIcon" src='./icons/None.png'>
            <img class="CivIcon" src='./icons/None.png'>
        </div>
    </section>`;

    if (rows >= 7) {
        document.getElementById('AddPlayerButton').classList.add('Hidden');
    }
};

const generateCivs = () => {
    const tierListName = document.getElementById('TierListSelector').value;
    const tierList = lists.find((x) => x.name === tierListName).list;

    // randomise the civs in each tier
    const civsLeft = JSON.parse(JSON.stringify(tierList)).map((civTier) =>
        shuffleArray(civTier)
    );

    // assign the players with the lowest difficulty first
    difficulties.sort((x) => x.difficulty);

    // for each player generate 3 choices
    difficulties.forEach((player) => {
        const choices = [];

        // one choice from the tier above
        // two from the correct tier
        // pop removes civ once chosen, players cant play the same civ
        choices.push(civsLeft[player.difficulty - 1].pop());
        choices.push(civsLeft[player.difficulty].pop());
        choices.push(civsLeft[player.difficulty].pop());

        document.getElementById(`Player ${player.player} Picks`).innerHTML =
            choices
                .map(
                    (x) =>
                        `<img class="CivIcon" src='./icons/${x.civ}.webp' alt='${x.civ}, ${x.leader}' title='${x.civ}, ${x.leader}'>`
                )
                .join('');
    });
};

addRow();

document.getElementById('TierListSelector').innerHTML = lists
    .map((x) => `<option value="${x.name}">${x.name}</option>`)
    .join('');
selectTierList();
