const civs = [
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
        <div class="PlayerPicks" id='Player ${rows} Picks'></div>
    </section>`;
};

const generateCivs = () => {
    // randomise the civs in each tier
    const civsLeft = JSON.parse(JSON.stringify(civs)).map((civTier) =>
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
            choices.map(
                (x) =>
                    `<img class="CivIcon" src='./icons/${x.civ}.webp' alt='${x.civ}, ${x.leader}' title='${x.civ}, ${x.leader}'>`
            );
    });
};

addRow();
