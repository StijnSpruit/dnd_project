// important imports
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

//json imports
const phb24 = require('./json/phb_24.json');

const BOOKS = [
    { name: "Acquisitions Incorporated", url: "https://www.dndbeyond.com/sources/ai", content: {}, shortname: "ai" },
    { name: "Baldur's Gate: Descent into Avernus", url: "https://www.dndbeyond.com/sources/bgdia", content: {}, shortname: "bgdia" },
    { name: "Bigby Presents: Glory of the Giants", url: "https://www.dndbeyond.com/sources/bpgg", content: {}, shortname: "bpgg" },
    { name: "Candlekeep Mysteries", url: "https://www.dndbeyond.com/sources/cm", content: {}, shortname: "cm" },
    { name: "Curse of Strahd", url: "https://www.dndbeyond.com/sources/cos", content: {}, shortname: "cos" },
    { name: "Dragon of Icespire Peak", url: "https://www.dndbeyond.com/sources/doip", content: {}, shortname: "doip" },
    { name: "Dungeon Master's Guide", url: "https://www.dndbeyond.com/sources/dmg", content: {}, shortname: "dmg" },
    { name: "Eberron: Rising from the Last War", url: "https://www.dndbeyond.com/sources/erlw", content: {}, shortname: "erlw" },
    { name: "Essentials Kit", url: "https://www.dndbeyond.com/sources/essentials", content: {}, shortname: "essentials" },
    { name: "Explorer's Guide to Wildemount", url: "https://www.dndbeyond.com/sources/egw", content: {}, shortname: "egw" },
    { name: "Ghosts of Saltmarsh", url: "https://www.dndbeyond.com/sources/gos", content: {}, shortname: "gos" },
    { name: "Guildmasters' Guide to Ravnica", url: "https://www.dndbeyond.com/sources/ggr", content: {}, shortname: "ggr" },
    { name: "Hoard of the Dragon Queen", url: "https://www.dndbeyond.com/sources/hotdq", content: {}, shortname: "hotdq" },
    { name: "Journeys Through the Radiant Citadel", url: "https://www.dndbeyond.com/sources/jtrc", content: {}, shortname: "jtrc" },
    { name: "Keys from the Golden Vault", url: "https://www.dndbeyond.com/sources/kftgv", content: {}, shortname: "kftgv" },
    { name: "Lost Mine of Phandelver", url: "https://www.dndbeyond.com/sources/lmop", content: {}, shortname: "lmop" },
    { name: "Mordenkainen's Tome of Foes", url: "https://www.dndbeyond.com/sources/mtf", content: {}, shortname: "mtf" },
    { name: "Monsters of the Multiverse", url: "https://www.dndbeyond.com/sources/motm", content: {}, shortname: "motm" },
    { name: "Mythic Odysseys of Theros", url: "https://www.dndbeyond.com/sources/mot", content: {}, shortname: "mot" },
    { name: "Out of the Abyss", url: "https://www.dndbeyond.com/sources/oota", content: {}, shortname: "oota" },
    { name: "Phandelver and Below: The Shattered Obelisk", url: "https://www.dndbeyond.com/sources/phandelver", content: {}, shortname: "phandelver" },
    { name: "Planescape: Adventures in the Multiverse", url: "https://www.dndbeyond.com/sources/planescape", content: {}, shortname: "planescape" },
    { name: "Player's Handbook 2014", url: "https://www.dndbeyond.com/sources/phb", content: {}, shortname: "phb2014" },
    { name: "Player's Handbook 2024", url: "https://www.dndbeyond.com/sources/phb", content: phb24, shortname: "phb2024" },
    { name: "Princes of the Apocalypse", url: "https://www.dndbeyond.com/sources/pota", content: {}, shortname: "pota" },
    { name: "Rime of the Frostmaiden", url: "https://www.dndbeyond.com/sources/rotfm", content: {}, shortname: "rotfm" },
    { name: "Storm King's Thunder", url: "https://www.dndbeyond.com/sources/skt", content: {}, shortname: "skt" },
    { name: "Sword Coast Adventurer's Guide", url: "https://www.dndbeyond.com/sources/scag", content: {}, shortname: "scag" },
    { name: "Tales from the Yawning Portal", url: "https://www.dndbeyond.com/sources/tftyp", content: {}, shortname: "tftyp" },
    { name: "Tasha's Cauldron of Everything", url: "https://www.dndbeyond.com/sources/tcoe", content: {}, shortname: "tcoe" },
    { name: "The Rise of Tiamat", url: "https://www.dndbeyond.com/sources/rot", content: {}, shortname: "rot" },
    { name: "The Wild Beyond the Witchlight", url: "https://www.dndbeyond.com/sources/wbtw", content: {}, shortname: "wbtw" },
    { name: "Tomb of Annihilation", url: "https://www.dndbeyond.com/sources/toa", content: {}, shortname: "toa" },
    { name: "Volo's Guide to Monsters", url: "https://www.dndbeyond.com/sources/vgm", content: {}, shortname: "vgm" },
    { name: "Vecna: Eve of Ruin", url: "https://www.dndbeyond.com/sources/vecna", content: {}, shortname: "vecna" },
    { name: "Waterdeep: Dragon Heist", url: "https://www.dndbeyond.com/sources/wdh", content: {}, shortname: "wdh" },
    { name: "Waterdeep: Dungeon of the Mad Mage", url: "https://www.dndbeyond.com/sources/dotmm", content: {}, shortname: "dotmm" },
    { name: "Xanathar's Guide to Everything", url: "https://www.dndbeyond.com/sources/xgte", content: {}, shortname: "xgte" }
];
app.get('/api/books', (req, res) => {
    res.json(BOOKS);
});
app.param('name', (req, res, next, name) => {
  console.log('CALLED ONLY ONCE', name)
  next()
})
app.get('/api/books/:name', (req, res) => {
    const bookName = req.params.name;
    console.log(bookName)
    const book = BOOKS.find(b => b.shortname == bookName);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Book not found');
    }
});

//host api
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});