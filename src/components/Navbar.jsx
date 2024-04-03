import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // setUser("");
                // return <Navigate to="/login"></Navigate>
                // navigate('/login')

            }).catch((error) => {
                console.log(error);
            });

    }


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="btn btn-ghost text-xl">Project</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/items">List Items</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">

                    {/* <Link>
                        <button className="btn btn-primary">Logout</button>
                    </Link> */}
                    {
                        user ?
                            <>
                                <p>{user.email}</p>
                                <button onClick={handleLogOut} className="btn btn-error">Logout</button>
                            </>
                            :
                            <>
                                <Link to="/register">
                                    <button className="btn btn-primary">Register</button>
                                </Link>
                                <Link to="/login">
                                    <button className="btn btn-primary">Login</button>
                                </Link>
                            </>
                    }






                </div>
            </div>
        </div>
    );
};

export default Navbar;