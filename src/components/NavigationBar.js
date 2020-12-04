import { React } from 'react';


function NavigationBar() {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">
                HealthCare
            </a>

            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard">Dashboard</a>
                    </li>
                </ul>
            </div> */}
        </nav>
    );
}

export default NavigationBar;