const StartJSX = () => {
                        var name = "Manoj";
                        var age = "24";
                        let demo = null;
                        var undef = undefined;
                        var boolean = true;
                        return(<>
                            <h1>Beginning of Learning JSX</h1>
                            <h3>Learner name is {name}</h3>
                            <p>His age is <b>{age}</b></p>
                            <p>He is not Learning properly {demo},{undef},{boolean}.</p>
                            {header}
                       </>)
                    }

const header = <h2>JSX Expression!!</h2>

ReactDOM.createRoot(document.getElementById("root")).render(<StartJSX/>);