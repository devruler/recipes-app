import React, {useState, useEffect} from 'react';

import './App.css';

import Header from './partials/Header'
import Footer from './partials/Footer'
import Hero from './components/Hero'
import Recipes from './components/Recipes'

import LoadingOverlay from 'react-loading-overlay'

function App() {

  const [recipes, setRecipes] = useState([]);
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const APP_ID = '2205acc2';
  const APP_KEY = 'ab093b2abc35616c43d68feb1b30b65c';

  const search = (query) => {
    if(query.length > 0)

      setIsLoading(true)

      fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&health=alcohol-free`)
      .then(res => res.json())
      .then(data => {
        if(data.hits.length < 1){
          alert('No recipes!')
          return []
        }
        setSearchedRecipes(data.hits)
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false))
      
  }


  useEffect(() => {

    setIsLoading(true)
    fetch(`https://api.edamam.com/search?q=&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=10&health=alcohol-free`)
    .then(res => res.json())
    .then(data => setRecipes(data.hits))
    .catch(err => {
      console.log(err);
    })
    .finally(() => setIsLoading(false))

  }, [])

  return (
    <div className="relative">

      {isLoading && <div className='fixed h-screen w-full'>
        <LoadingOverlay
        active={isLoading}
        spinner
        text='Loading recipes...'
        className="h-screen"
        >
        </LoadingOverlay>
      </div>}

      <Header />


      <div className="main-content px-4 xl:px-20 lg:px-15 md:px-12 sm:px-10 xs:px-8">

        <Hero search={query => search(query)} />

        {recipes.length > 0 && <Recipes recipes={recipes} searchedRecipes={searchedRecipes}/>}
        
      </div>

      
      <Footer />


    </div>
  );
}



export default App;
