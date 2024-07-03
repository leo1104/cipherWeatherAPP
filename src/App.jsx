import { BrowserRouter, Route, Routes } from "react-router-dom"
import Search from "./components/Search"
import SearchResult from "./components/SearchResult"
import Weather from "./components/Weather"


function App() {


//make browser routes and components for path : /, 
// /search/countryName(countyName dynamic)
// lat /log 

//make


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Search/>}/>
      <Route path="/search/:country" element={<SearchResult/>}/>
      <Route path="/search/:country/:lat/:lon" element={<Weather/>}/>

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
