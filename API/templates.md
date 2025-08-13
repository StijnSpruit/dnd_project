# BOOK TEMPLATES

in index.js we have our books json. replace book name with the shortname of the book you're working on, give the full name as "name". url to d&d beyond book, link the content to your content json file adn give the shortname (will be in url)<br/>
Since large json files load long, we split up our data:
- species and subspecies
- class and its subclasses

We also indent by single spaces. this is still very readable and saves about 50% of data compared to full tabs
```js
const book_name = {
    species: require('./json/phb24/phb_24_species.json').species,
    subspecies: require('./json/phb24/phb_24_species.json').subspecies,
    classes: [
        {
            identifier: "barbarian",
            content: require('./json/phb24/classes/phb_24_barbarian.json').class
        } 
    ]
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
            "primary_ability": "STR",
            "skill_prof": ["History", "Insight", "Medicine", "Persuasion", "Religion"],
            "tool_prof": [],
            "weapon_prof": ["Simple weapons"],
            "armor_training": ["light armor", "medium armor", "shields"],
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
empty class template:
```json
{
 "class": {
  "name": "",
  "identifier": "",
  "desc": "",
  "hit_die": "",
  "lvl_1_hitpoint": "d_ + ___ modifier",
  "hitpoint_per_level": "d_ + ___ modifier or _ + ___ modifier",
  "primary_ability": "___ or ___",
  "saving_throw_prof": "___ and ___",
  "skill_prof": [
   "History",
   "Insight",
   "Perception",
   "Persuasion",
   "Survival",
   "Intimidation",
   "Acrobatics",
   "Animal handling",
   "Athletics"
  ],
  "weapon_prof": ["Simple weapons"],
  "tool_prof": [],
  "armor_training": [
   "light armor"],
  "levels": [
   {
    "level": "1st",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "2nd",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "3rd",
    "prof_bonus": "+2",
    "features": [
     {
      "name": "Barbarian Subclass",
      "desc": "Gain a subclass for your barbarian character",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "4th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "Ability score improvement",
      "desc": "Improve your Ability Score or choose another feat you qualify for",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "5th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "6th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "7th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "8th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "9th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "10th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "11th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "12th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "13th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "14th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "15th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "16th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "17th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "18th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "19th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "Epic boon",
      "desc": "You gain an Epic Boon feat or another feat you qualify for.",
      "feature_data": []
     }
    ],
    "class_specific": []
   },
   {
    "level": "20th",
    "prof_bonus": "+",
    "features": [
     {
      "name": "",
      "desc": "",
      "feature_data": []
     }
    ],
    "class_specific": []
   }
  ]
 }
}
```
empty subclass json (same file as class)
```json
"subclasses": [
  {
   "name": "",
   "identifier": "",
   "subclass_of": "",
   "desc": "",
   "levels": [
    {
     "level": "3rd",
     "features": [
      {
       "name": "",
       "desc": "",
       "feature_data": []
      },
      {
       "name": "",
       "desc": "",
       "feature_data": []
      }
     ]
    },
    {
     "level": "6th",
     "features": [
      {
       "name": "",
       "desc": "",
       "feature_data": []
      }
     ]
    },
    {
     "level": "14th",
     "features": [
      {
       "name": "",
       "desc": "",
       "feature_data": []
      }
     ]
    }
   ]
  },
```
