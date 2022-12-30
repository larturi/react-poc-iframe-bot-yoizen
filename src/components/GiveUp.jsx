import React from 'react';

const GiveUp = ({ textButton, handleClickGiveUp }) => {
   return (
      <>
         <div>
            <h3>Soy un GiveUp</h3>
            <button onClick={handleClickGiveUp}>{textButton}</button>
         </div>
      </>
   );
};

export default GiveUp;
