const rootElement  = document.querySelector(".root")

class Header extends React.Component {
    render() {
            return(
                <header>
                    <div id="left">
                    <img src="otros/profile.jpg" height="90%"/>
                    </div>
                    <div id="right">
                        <h1>{this.props.name}</h1>
                        <div className="bar">
                        </div>
                        <h3>{this.props.major}</h3>
                    </div>
                </header>
            )
    }
}

class Info extends React.Component {  
    render() {
            return(
                <div className="info">
                    <div id="aboutMe">
                        <h2>About me</h2>
                        <div className="bar"></div>
                        <p>It motivates me a lot develop my skills and grow professionally. I am confident in my ability to find interesting ideas to create unforgettable projects.</p>
                    </div>
                    <div id="contactInfo">
                        <h2>Contact</h2>
                        <div className="bar"></div>
                        <div id="contactTable">
                            <div className="contactRow">
                                <img src="otros/linkedin.svg" height="22px"/>
                                <p>{this.props.linkedin}</p>
                            </div>
                            <div className="contactRow">
                                <img src="otros/email.svg" height="22px"/>
                                <p>{this.props.mail}</p>
                            </div>
                            <div className="contactRow">
                                <img src="otros/phone-call.svg" height="22px"/>
                                <p>{this.props.numero}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }     
}

 class Skills extends React.Component {

    render() {
            return(
                <div id="skills">
                    <h2>Skills</h2>
                    <div className="bar"></div>
                        <div className="skillsTable">
                            <h4>HTML</h4>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>CSS</h3>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>JS</h3>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>React</h3>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>SQL</h3>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>C++</h3>
                            <div className="progressBar">
                                <div className="progress">
                                </div>
                            </div>
                            <h3>Python</h3>
                            <div className="progressBar">
                                <div className="progress">
                            </div>
                        </div>
                    </div>
                </div>

            )
    }     
}

ReactDOM.render(
    <React.Fragment>
    <Header name="Erhart Fabian Castillo Castellanos" major="Engineering student at Tec de Monterrey"/>
    <Info linkedin="www.linkedin.com/in/ErhartFabian" mail="A01274089@itesm.mx" numero="775-134-2305" />
    <Skills/>
    </React.Fragment>,
    rootElement
)






