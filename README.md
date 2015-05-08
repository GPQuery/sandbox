# GPQuery-Sandbox

> Experimental development repository for GPQuery\Dashboard using [Polymer](//polymer-project.org) Custom Elements with [D3.js](//d3js.org) and [nvD3](//nvd3.org).

---

## DEPENDENCIES

**Bower**:
 - Polymer
     - Core-Icons
     - Core-Ajax
     - Paper-Elements
 - D3.js
 - nvD3


## FILE STRUCTURE

```
├── app/                            --> Application Files
│   ├── components/                 --> Bower Directory
│   │   └── ...
│   ├── elements/                   --> Custom Elements
│   │   │   ├── element             --> Element Directory
│   │   │   │   ├── element.html    --> Template File
│   │   │   │   ├── element.css     --> Stylesheet
│   │   │   │   └── element.js      --> Javascript
│   │   │   └── ...
│   │   └── ...
│   ├── styles/                     --> Stylesheets
│   │   ├── app.css                 --> Main Stylesheet
│   │   └── ...
│   ├── ...
│   ├── ...
│   └── ...
├── api/
│   ├── data/                       --> Data JSON Files
│   │   ├── data.json
│   │   └── ...
│   └── ...
├── .bowerrc
├── .gitignore
├── README.md
├── bower.json
├── composer.json
├── package.json
├── ...
└── ...
```

## NOTES

 - Currently using Polymer 0.5 due to lack of documentation for Polymer 0.8-alpha at this very moment.
