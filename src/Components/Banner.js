import React, { useEffect, useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    const [theme, setTheme] = useState("light-theme");

    const toggleTheme = () => {
        if (theme === "dark-theme") {
            setTheme("light-theme")
        }
        else {
            setTheme('dark-theme');
        }
    }

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <div className='banner_home'>
            <nav class="navbar navbar-expand-lg bannernav">
                <p class="navbar-brand" href="#">Navbar</p>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item active">
                            <p class="nav-link" href="#">Home <span class="sr-only">(current)</span></p>
                        </li>
                        <li class="nav-item">
                            <p class="nav-link" href="#">Link</p>
                        </li>
                        <li class="nav-item dropdown">
                            <p class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </p>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <div onClick={toggleTheme} className='form_icons'>
                            {theme === "dark-theme" ? (
                                <FontAwesomeIcon icon={faSun} size="xl" style={{ color: "#ffffff" }} />
                            ) : (
                                <FontAwesomeIcon icon={faMoon} size="xl" style={{ color: "#000000" }} />
                            )}
                        </div>
                    </form>
                </div>
            </nav>


            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://images5.alphacoders.com/890/890505.jpg" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://images5.alphacoders.com/890/890505.jpg" alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://images5.alphacoders.com/890/890505.jpg" alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mt-4'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div class="card" style={{ width: '22rem' }}>
                            <div>
                                <img class="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjiwT-EmE5Azr0v0hqvzb7qIZEBMbq8j1dg&s" alt="Card image cap" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-dark' onClick={() => toggleTheme()}>Read more..</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner


