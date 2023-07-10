import './login.css'
import Navbar from '../components/Navbar'


function Login() {
    return(
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="from">
                        <h2>Login</h2>
                        <form>
                        <div className="wave-group">
                                <input required type="value" className="input"></input>
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>U</span>
                                    <span className="label-char" style={{ '--index': 1 }}>s</span>
                                    <span className="label-char" style={{ '--index': 2 }}>u</span>
                                    <span className="label-char" style={{ '--index': 3 }}>a</span>
                                    <span className="label-char" style={{ '--index': 4 }}>r</span>
                                    <span className="label-char" style={{ '--index': 5 }}>i</span>
                                    <span className="label-char" style={{ '--index': 6 }}>o</span>
                                </label>
                            </div>

                            <div className="wave-group">
                                <input required type="password" className="input"></input>
                                <span className="bar"></span>
                                <label className="label">
                                    <span className="label-char" style={{ '--index': 0 }}>C</span>
                                    <span className="label-char" style={{ '--index': 1 }}>o</span>
                                    <span className="label-char" style={{ '--index': 2 }}>n</span>
                                    <span className="label-char" style={{ '--index': 3 }}>t</span>
                                    <span className="label-char" style={{ '--index': 4 }}>r</span>
                                    <span className="label-char" style={{ '--index': 5 }}>a</span>
                                    <span className="label-char" style={{ '--index': 6 }}>s</span>
                                    <span className="label-char" style={{ '--index': 7 }}>e</span>
                                    <span className="label-char" style={{ '--index': 8 }}>ñ</span>
                                    <span className="label-char" style={{ '--index': 9 }}>a</span>
                                </label>
                            </div>

                            <button className="btn">Entrar</button>
                            <p className="forget"><a href="#">¿Olvidaste tu Contraseña?</a></p>
                            <p className="forget"><a href="#">¿No tienes una Cuenta?</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;