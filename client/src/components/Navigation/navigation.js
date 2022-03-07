import React, { useState } from 'react';

import NavTabs from './index';
import About from '../../pages/About';
import Portfolio from '../../pages/Portfolio';
import Resume from '../../pages/Resume';
import Contact from '../../pages/Contact';



function NavigatePortfolio () {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'About': 
                return (<About />);
    
            case 'Portfolio': 
                return (<Portfolio />);
            
            case 'Resume': 
                return (<Resume />);
    
            case 'Contact': 
                return (<Contact />);
  
            default: return (<About />);
        }
    };


    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            
            <div>
                {
                    renderPage()
                }
            </div>
        </div>
    )
}

export default NavigatePortfolio;