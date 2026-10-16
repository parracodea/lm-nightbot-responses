let rng = Math.floor(Math.random() * 50);
if (rng == 0) {
    `Boo!!! Ghost`
} else if (rng < 10) {
    let ma = [
        "kevinc70GhostLove 👻",
        "Witch 🧙‍♀️",
        "Vampire bbtheeVamPop",
        "Zombie justinegZombie",
        "Skeleton 💀",
        "Monster 🧌",
        "Werewolf 🐺",
        "Spider 🕷️",
        "Black Cat 🐈‍⬛",
        "Bat 🦇"
    ];
    let w = ma[Math.floor(Math.random() * ma.length)];
    `A ${w} opened the door!`
} else {
    let ca = [
        "Lollipops🍭",
        "Chocolates🍫",
        "Caramel",
        "Candy Corn",
        "Gummy Bears",
        "Licorice",
        "Marshmallows",
        "Toffee",
        "Taffy🍬",
        "Hard Candies",
        "Sour Candies",
        "Peppermints",
        "Chocolate Fudge",
        "Chocolate-covered Almonds",
        "Rock Candy",
        "Peanut Brittle",
        "Bubblegum"
    ];
    let c = ca[Math.floor(Math.random() * ca.length)];
    `$(user) got some ${c}!`
}