import React from 'react';

const BotYoisenContainer = ({ url, showContainer, handleClose }) => {
   return (
      <>
         <div
            className='iframeContainer'
            style={{ display: showContainer ? 'block' : 'none' }}
         >
            <div>
               <button onClick={handleClose}>Cerrar</button>
            </div>
            <iframe
               src={url}
               width='500'
               height='280'
               title='iframeYoisen'
            ></iframe>
         </div>
      </>
   );
};

export default BotYoisenContainer;
