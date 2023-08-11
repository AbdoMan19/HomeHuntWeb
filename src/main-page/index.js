import './main-page.css';
import Header from "./header"
import FeaturedHouse from './featured-house';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import SearchResults from "../search-results";
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeatureHouse from '../hooks/useFeaturedHouse';
import housesContext from '../context/housesContext';
function App() 
{
  const allHouses=useHouses()
  const featuredHouse=useFeatureHouse(allHouses);
  return (
    <housesContext.Provider value={allHouses}>
      <Router>
      <div className="container">
          <Header subtitle="Providing houses all over the worled"  />
          <HouseFilter/>
          <Routes>
            <Route exact path="/house/:id"
             element={<HouseFromQuery />}
            />  
            <Route exact path="/searchresults/:country"
             element={<SearchResults />}
            />             
            <Route exact path="/"
              element={<FeaturedHouse house={featuredHouse}/>}
            /> 
          </Routes>
      </div>
    </Router>
    </housesContext.Provider>
    
    
  );
}

export default App;
