import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-body'>
            <div className="toolbar">
                <div className="toolbar-left">
                    <div className="list-item">
                        <div className="link-container">
                            <a href="#" className="link">
                                <div className="list-text">Satıcı paneli</div>
                            </a>
                        </div>
                    </div>
                    <div className="list-item">
                    <div className="link-container">
                            <a href="#" className="link">
                                <div className="list-text">Satıcı bilgi merkezi</div>
                            </a>
                        </div>
                    </div>
                    <div className="list-item">
                    <div className="link-container">
                            <a href="#" className="link">
                                <div className="list-text">Trendyol Akademi</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-bar">
                <div className="left">
                    <a href="#" className='logo-link'>
                        <div className="logo-wrap">
                            <img src="./image/trendyol-logo.svg" alt="" />
                        </div>
                    </a>
                </div>
                <div className="right">
                    <div className="nav-wrap">
                        <ul className="nav-left">
                            <li>
                                <span>satıcı başvuru formu</span>
                            </li>
                        </ul>
                        <div className="nav-right">
                            <a href="#" className="info-center">
                                <span className='icon'></span>
                                <span className="text">Satıcı bilgi merkezi</span>
                            </a>
                            <a href="#" className="academy">
                                <span className='icon'></span>
                                <span className="text">trendyol academy</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header 