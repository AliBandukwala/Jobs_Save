import './App.css';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Jobs from './Components/Jobs';
import { jobs_list } from './Data/jobs_list';
import Navbar from './Components/Navbar';
import MediaContext from './Context/MediaContext';

function App() {

  const theme = useTheme()
  // using MUI mediaQuery hooks for getting the device size. This value will be passed down to childer component with React's Context API
  const matches = useMediaQuery(theme.breakpoints.down('md')) 

  return (
    <MediaContext.Provider value={matches}>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Navbar />
        <Jobs jobs_list={jobs_list} />
      </div>
    </MediaContext.Provider>
  );
}

export default App;
