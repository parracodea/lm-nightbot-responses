/**
 * !readyplayer
 * Example output: `Ready Player One! $(touser) is crushing it in Animal Crossing ! lilymeGamer`
 */

let ns = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten"
];
let n = ns[(Math.random() * ns.length) | 0];
let vs = [
    "about to get the new high score in",
    "absolutely dominating in",
    "crushing it in",
    "beating everyone in",
    "the master at",
    "ready to play",
    "playing"
];
let v = vs[(Math.random() * vs.length) | 0];
let gs = [
    "Minecraft PunchTrees SSSsss ",
    "Grand Theft Auto",
    "Tomb Raider TombRaid ",
    "Dragon Quest",
    "Halo",
    "Gran Turismo :race_car: ",
    "Lego Star Wars",
    "Uncharted",
    "Guitar Hero :guitar:",
    "Fallout",
    "Kingdom Hearts",
    "Nintendogs dogJAM",
    "Half-Life",
    "Rainbow Six",
    "Frogger OSFrog ",
    "SimCity :city_sunset:",
    "Wii Sports :tennis:",
    "Super Mario Bros.",
    "Mario Kart",
    "Pokémon",
    "Tetris",
    "Pac-Man",
    "Animal Crossing",
    "Candy Crush :candy:",
    "Octopath Traveler",
    "Call of Duty",
    "Skyrim :crossed_swords: ",
    "The Legend of Zelda :crossed_swords: ",
    "Super Smash Bros.",
    "The Sims",
    "Final Fantasy",
    "Assassin's Creed",
    "Sonic the Hedgehog",
    "Need for Speed",
    "Madden NFL :football:",
    "Snowboard Kids",
    "Oregon Trail",
    "Stardew Valley",
    "Banjo-Kazooie",
    "Fortnite",
    "New Pokémon Snap PepegaCamera bulbaDance",
    "Dave the Diver :diving_mask:"
];
let g = gs[(Math.random() * gs.length) | 0];
let es = [
    "lilymeGames",
    "peepoSitGamer",
    "pGGs",
    "lilymeGamer",
    "lilymeGG"
];
let e = es[(Math.random() * es.length) | 0];
`Ready Player ${n}! @touser is ${v} ${g} ! ${e}`