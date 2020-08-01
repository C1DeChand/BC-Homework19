import React from "react";

function Footer() {
    return (

    <div className="row fixed-bottom">
        <div className="col-12">
            <hr id="hr-bar"></hr>
            <nav className="navbar navbar-dark bg-dark" id="copyrightBar">
                <span className="navbar-text mx-auto" id="copyrightText">© Copyright 2020 Cameron DeChand</span>
            </nav>
        </div>
    </div>

    );
}

export default Footer;