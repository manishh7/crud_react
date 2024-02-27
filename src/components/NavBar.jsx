// import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const navigate = useNavigate();
    return (

        <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#!">CRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">

                    </ul>

                    <button className='btn btn-outline-secondary my-2 my-sm-0'
                        onClick={() => { navigate("/create-product") }}
                    >
                        CREATE Product
                    </button>
                </div>
            </div>
        </nav>

    )
}

