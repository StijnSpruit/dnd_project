# BOOK TEMPLATES

in index we have our books json. replace book name with the shortname of the book you're working on, give the full name as "name". url to d&d beyond book, link the content to your content json file adn give the shortname (will be in url)
```js
const book_name = require('path/to/json')
{ name: "book_name", url: "https://www.dndbeyond.com/sources/ai", content: book_name, shortname: "ai" }

```
### content json
in the json directory, add book_name.json (again, replace book_name with shortname). since we already have the book info in index.js, you only need the content here<br/>
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
