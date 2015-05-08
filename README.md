# GPQuery-Sandbox

Bower dependencies listed in `bower.json` and installed in `components/`:
```
"polymer": "Polymer/polymer#0.5",
"core-icons": "Polymer/core-icons#~0.5.5",
"paper-elements": "Polymer/paper-elements#~0.5.5",
"core-ajax": "Polymer/core-ajax#0.5",
"d3": "~3.3.13",
"nvd3": "~1.7.1"
```

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
