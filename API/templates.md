# BOOK TEMPLATES

in books.js we have our books json. replace book name with the shortname of the book you're working on, give the full name as "name". url to d&d beyond book, link the content to your content json file adn give the shortname (will be in url)
```js
const book_name = {
    species: require('./json/phb24/phb_24_species.json').species,
    subspecies: require('./json/phb24/phb_24_species.json').subspecies,
    classes: {
        barbarian: require('./json/phb24/classes/phb_24_barbarian.json').classes
    }
    subclasses: {
        barbarian: require('./json/phb24/classes/phb_24_barbarian.json').subclasses
    }
};
const BOOKS = [
{ name: "book_name", url: "https://www.dndbeyond.com/sources/ai", content: book_name, shortname: "ai" }
]


```
### content json
in the json directory, add book_name_category.json (again, replace book_name with shortname and replace the category with something like species.)<br/>
example: 
```json
{
"species": [{
            "name": "Aasimar",
            "identifier":"snake_case_lowercase_name",
            "creature_type": "Humanoid",
            "size": "Small / Medium",
            "speed": 30,
            "traits": [
                {
                    "name": "",
                    "desc": ""
                }
            ]
        }],
"subspecies": [{
    "name":"",
    "identifier":"snake_case_lowercase_name",
    "subspecies_of":""
    "desc":"",
    "traits": [{
         "name":"",
         "desc":""
            }]
    }]
}
```
json/phb24/classes/phb_24_barbarian.json:
```json
"classes": [
        {
            "name":"Barbarian",
            "identifier":"barbarian"
            "desc":"rage and shit",
            "hit_die":"d12",
            "lvl_1_hitpoint":"12 + CON modifier",
            "hitpoint_per_level":"1d12 + CON modifier or 7 + CON modifier",
            "saving_throw_prof":"STR and CON",
            "levels": [
                {
                    "level":"1st",
                    "prof_bonus":"+2",
                    "features": [
                        {
                            "name":"Rage",
                            "desc": "Using a bonus action, you can enter Rage. Rage is a primal power that makes you powerful",
                            "feature_data": [
                                {
                                 "name":"",
                                 "desc":""
                                }
                               ]
                        },
                        {
                            "name":"Unarmored Defense",
                            "desc":"",
                            "feature_data": []
                        },
                        {
                            "name":"Weapon Mastery",
                            "desc":"",
                            "feature_data": []
                        }
                    ],
                    "class_specific": [
                        {
                            "name":"Rages",
                            "value":"2"
                        },
                        {
                            "name":"Rage Damage",
                            "value":"+2"
                        },
                        {
                            "name":"Weapon Mastery",
                            "value":"2"
                        }
                    ]
                }
            ]
        }
    ]

```
