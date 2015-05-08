# GPQuery API Sandbox

This directory contains a number of sample JSON-formatted responses from the Ergast Developer API, simplifying testing of the front-end components.
```
├── api/
│   ├── 2012/
│   │   ├── 1/
│   │   │   ├── circuits.json
│   │   │   ├── constructors.json
│   │   │   ├── constructorStandings.json
│   │   │   ├── drivers.json
│   │   │   ├── driverStandings.json
│   │   │   ├── lapTimes.json
│   │   │   ├── pitStops.json
│   │   │   ├── qualifying.json
│   │   │   ├── races.json
│   │   │   ├── results.json
│   │   │   ├── status.json
│   │   │   └── :query.json
│   │   └── :round/
│   ├── :season/
│   └── README.md
└── ...
```

An HTTP 'GET' request should be directed to a URL:
> `api/:season/:round/:query.json`

 - `/:season/` - Season 1950-present, or `current` 
 - `/:round/` - Round number 1-20, or `last` 
 - `/:query.json` - Query mode corresponds to `JSON` files in directory