import './App.css';
import { useState } from 'react';

import GiveUp from './components/GiveUp';
import BotYoisenContainer from './components/BotYoisenContainer';

function App() {
   const [urlBotYoisen, setUrlBotYoisen] = useState('');
   const [showContainerYoisen, setShowContainerYoisen] = useState(false);

   const handleClickGiveUp1 = () => {
      setUrlBotYoisen('https://next-app-pokemon.vercel.app/');
      setShowContainerYoisen(true);
   };

   const handleClickGiveUp2 = () => {
      setUrlBotYoisen('https://game-life-conway.netlify.app/');
      setShowContainerYoisen(true);
   };

   const handleClose = () => {
      setUrlBotYoisen('');
      setShowContainerYoisen(false);
   };

   return (
      <div className='App'>
         <GiveUp
            textButton='Iniciá la solicitud de baja'
            handleClickGiveUp={handleClickGiveUp1}
         />
         <GiveUp
            textButton='Si te arrepentiste'
            handleClickGiveUp={handleClickGiveUp2}
         />

         <BotYoisenContainer
            url={urlBotYoisen}
            showContainer={showContainerYoisen}
            handleClose={handleClose}
         />
      </div>
   );
}

export default App;
