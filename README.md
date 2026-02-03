**Assignment**

This is an Ecosystem application that:
- Displays animals and their information
- Allows the user to make a simple ecosystem

To start the application:
- Download repo
- In terminal of project type:
    - npm install
    - npm run dev
- Open given URL from terminal in browser (example): 
    - http://localhost:5173

**Assignment Criteria Check**

Theme: Ecosytem/Animals

**SPA + Routing**
See: App.jsx
- [x] "Appen ska vara en React SPA med client-side routing (React Router)"
    - Use of React Router:
        - "import { Routes, Route } from 'react-router-dom'" is used to create routes

- [x] "Minst 3 routes/views (ex: /, /about, /contact eller liknande)"
    - Use of 3 routes/views: /, /about, animals

- [x] "Navigation ska ske via React Router´s inbyggda komponenter (t.ex. Link eller NavLink)"
    - Use of NavLink, see Navigation.jsx

**Component + Props**
See: components file
- [x] "Appen består av flera återanvändbara komponenter (inte allt i App.jsx)"
    - Use of:
        - Navigation.jsx for iterating header with navigation options
        - OverlayForEcosystem.jsx for reusable overlay for adding of animals

- [x] "Minst en komponent ska ta emot data via props och visa upp datan."
    - Home.jsx passes two props to OverlayForEcosystem.jsx and transfers the data in the 'handleAdd' function.

**State + Interactivity**
See: Home.jsx
- [x] "Du måste använda useState minst 1 gång för interaktivitet"
    - State is used to:
        - Save data object of animals
        - Turn on and off overlay and tell which diet type to add th animal to

**Data + API**
See: Animals.jsx, OverlayForEcosystem.jsx and FetchData.jsx

- [x] "Appen ska hämta data från ett API med (exempel) fetch i useEffect."
    - useEffect is used by both Animals and OverlayForEcosystem to call on API data with a button as trigger. The fetch is in FetchData.jsx

- [x] "Visa minst: loading state och enkel felhantering (t.ex. “Kunde inte hämta data”)."
    - Loading state and error handling is used in FetchData as both Animals and the Overlay pass setState information.

- [x] "Hämtad data ska användas och visas i användargränssnittet."
    - The Data from FetchData is represented in both Home.jsx and more prominelty in AnimalProfile


**VG Additional Criteria**

**Structure and Motivation**
- [x] "Tydlig filstruktur (t.ex. pages/, components/, services/)"
    - The project has been divided into the following files:
        - components
        - layout
        - pages
        - service

- [] "En sektion i README (minst 150 ord): “Tekniska val - reflektion” där du visar extra förståelse för dina tekniska beslut genom att du motiverar: mapp och filstruktur, Routing-upplägg, Komponentindelning, Props-lösning, State-lösning och varför du valt det API du valt"
    - This is the README file inwhich i aim to showcase that

**Extra Improvments**
- [x] "Välj minst 1 av dessa: Du har en “parameter” och (useParams) lösning i din kod (t.ex. /items/:id)"
    - In 