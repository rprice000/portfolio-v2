import React from 'react';
import Header from '../components/header';

function Nav(props) {
    const tabs = [ 'About', 'Portfolio', 'Resume', 'Contact'];

    return(
        <div>
            <Header />
            <ul>
                {tabs.map((tab) => (
                    <li key={tab}>
                        <a 
                            href={"#" + tab.toLowerCase()}
                            onclick={() => props.handlePageChange(tab)}
                            className = {props.currentPage === tab ? "nav-link active" : "nav-link"}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Nav;