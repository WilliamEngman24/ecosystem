**Assignment**

**Technical choices - Reflection**
- File structure
    - The app is devided into; pages, components, hooks, service and layout. The reason for the division for there to be a place for views, resuable components, hooks with states and some logic, a purely logic based file and a place for layouts.

        - Pages; contains the views of the app and relies on App.jsx, MainLayout.jsx and Navigation.jsx for interactablity and display.
        - Components; contains rendering and reuseable material for pages and other components. 
        - Hooks; contains states and logic for pages and components. useAnimalSearch is both used by the ContainerSearchAndList(component) and Animals(page)
        - Service; contains pure logic that is used by both hooks and directly by AnimalProfile.
        - layout; contains the pattern for navigation and the dynamic showcasing of the different pages

- Routing
    - The routing of the app is divided into App.jsx, MainLayout.jsx and Navigation.jsx

        - App; Defines all paths, connects URLs to the pages/views and creates a layout for nested routing. 
        - MainLayout; Decides which child route should have its component/view rendered and decides the layout of the whole app
        - Navigation: Displays pages, changes the URL and lets the page change without reloading it. Navlink keeps track of which page is active. 

- Component division
    - (example) Both OverlayForEcosystem and Animals(page) uses ContainerSearchAndList. Said component is divided into SearchFieldAndButton and SearchList. SearchList uses ItemCard.

- Props/State solution
    - (example) Animals pass a cardEffect prop to ContainerSearchAndList. The Container uses a hook (useAnimalSearch) to store information about search result and the logic used to preform it. The Continer passes states from the hook to SearchFeildAndButton, which then sends back information from the input feild and sets the trigger state to true (through a funtion when the button is clicked). Because the trigger state is true, the handler fetches the data from FetchData(using the API) and the hook returns the data and proccess information to the Container. The Container passes the cardEffect and the fetched data to SearchList. The List creates ItemCards depending on the amount of objects in the passeed data and each ItemCard gets the cardEffect and data of a specific animal. When ItemCard(button) is pressed, the cardEffect function is activated with the data of the animal as a parameter. In the case of Animals, the cardEffect changes the URL and passes the data of the animal onto the AnimalProfile page of the specific animal, dynamically reached through "<Route path="animals/:id" element={<AnimalProfile />}/>".

- API https://api-ninjas.com/api/animals
    - I wanted to make an applicaiton that would have its own data interact with itself. I chose this API because it specifically had "prey" and "predators" as feilds. These two feilds are used in EcosystemEvaluation.js to check if the current animals in the ecosystem makes the ecosystem functional or not. Depending on the results the app will display information on both herbivores and carnivores regarding a lack of predators or prey. 


This is an Ecosystem application that:
- Displays animals and their information
- Allows the user to make a simple ecosystem and get information about what is lacking or if it functions.

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