import React, {useState, useRef, useEffect} from 'react'
import './Topbar.css'
import search_icon from '../../assets/search.svg'
import { Link } from 'react-scroll';

const Topbar = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searching, setSearching] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

      const modalRef = useRef(null);
      useEffect(() => {
        const handleClickOutside = (e) => {
          if (showLoginModal && modalRef.current && !modalRef.current.contains(e.target)) {
            setShowLoginModal(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, [showLoginModal]);

  return (
    <>
      <div className='topbar'>
        <ul className='topbar-links'>
          <li>
            <Link
              to='main-footer'
              smooth={true}
              offset={200}
              duration={500}
              className='topbar-contact'
            >
              Contact Us
            </Link>
          </li>
          <li onClick={() => setShowLoginModal(true)} className='topbar-login'>
            Members Login
          </li>
          <li className="topbar-search">
            {showSearch ? (
              <form
                className="search-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchQuery.trim() !== '') {
                    setSearching(true);
                    setTimeout(() => {
                      setSearching(false);
                    }, 2000);
                  }
                }}
              >
                <div className="search-inline-wrapper">
                  <input
                    type="text"
                    className="search-input"
                    autoFocus
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={() => {
                      if (!searching && searchQuery.trim() === '') setShowSearch(false);
                    }}
                  />
                  {searching && <span className="searching-inline">Searching...</span>}
                </div>
              </form>
            ) : (
              <span onClick={() => setShowSearch(true)}>
                <img src={search_icon} alt="search" /> Search
              </span>
            )}
          </li>
        </ul>
      </div>
      {showLoginModal && (
        <div className='modal-backdrop'>
          <div className='modal-content' ref={modalRef}>
            <button className='modal-close' onClick={() => setShowLoginModal(false)}>
              ×
            </button>
            <h3>Login</h3>
            <form className='login-form'>
              <input
                type='text'
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;