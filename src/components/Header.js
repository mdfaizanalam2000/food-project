import React from 'react'
export default function Header() {
    return (
        <>
            <nav className="navbar row sticky-top">
                <div className="col-12 col-md-3">
                    <img src="/images/logo.webp" alt="logo" className='logo' />
                </div>

                <div className="col-12 col-md-6 mt-2 mt-md-0">
                    <div className="input-group">
                        <input type="text" id='search_field' className='form-control' placeholder='Search your favourite restaurant' />

                        <div className="input-group-append">
                            <button id='search_btn' className='btn'>
                                <i className='fa fa-search' aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                    <button className='btn' id='login_btn'>Login</button>
                    <span className='ml-3' id='cart'>Cart</span>
                    <span className='ml-1' id='cart_count'>1</span>
                </div>
            </nav>
        </>
    )
}
