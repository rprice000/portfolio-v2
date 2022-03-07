import React from 'react';
import Header from '../Header/index';

function Nav(props) {
    const tabs = [ 'About', 'Portfolio', 'Resume', 'Contact'];

    return(
        <div id="headingContainer">
            <Header />
            <ul id="navUnorderdList">
                {tabs.map((tab) => (
                    <li key={tab}>
                        <a 
                            href={"#" + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className = {props.currentPage === tab ? "nav-link active" : "nav-link"}
                            id = "navLinks"
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