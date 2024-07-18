import './App.css'
import { useLoaderData } from 'react-router-dom'
import TeaCard from './Components/TeaCard'
import { useState } from 'react';
import Header from './Components/Header/Header';

function App() {
  const loadedteas = useLoaderData();
  const [teas, setTeas] = useState(loadedteas);
  return (
    <div>
      <Header></Header>
      <h1 className='text-6xl font-extrabold text-blue-800 my-20'>Quality Time With Tea</h1>

      <div className='grid grid-cols-2 gap-4'>
        {
          teas.map((tea) =>
            <TeaCard
              key={tea._id}
              tea={tea}
              teas={teas}
              setTeas={setTeas}
              >
            </TeaCard>
          )
        }
      </div>

    </div>
  )
}

export default App
