import  {useState} from 'react'
import './TopFooter.css'
import white_arrow from '../../assets/arrow.svg'
import dark_arrow from '../../assets/dark_arrow1.png'
import { useForm, ValidationError } from '@formspree/react';

const TopFooter = () => {
  const [state, handleSubmit] = useForm("myzjleqy");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState('');
  
  const newsletterOptions = [
    { value: 'weekly', label: 'Weekly Newsletter' },
    { value: 'monthly', label: 'Monthly Newsletter' },
    { value: 'events', label: 'Events & Updates' },
    { value: 'research', label: 'Research & Publications' },
    { value: 'all', label: 'All Newsletters' }
  ];

  const handleOptionSelect = (value, label) => {
    setSelectedNewsletter(value);
    setShowDropdown(false);
  };

  if (state.succeeded) {
    return (
      <div className='top-footer'>
        <div className='top-footer-content'>
          <p>Thanks for Signing Up To Our Newsletter!</p>
        </div>
      </div>
    );
  }

  return (
    <div className='top-footer'>
      <div className='top-footer-content'>
        <p>Sign up to our newsletter</p>
        <form onSubmit={handleSubmit} className='newsletter-form'>
          <div className='newsletter-row'>
            <p>Select Newsletter</p>
            <div className='custom-dropdown'>
              <button
                type="button"
                className='dropdown-trigger'
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img src={white_arrow} alt='' className={`dropdown-arrow ${showDropdown ? 'open' : ''}`} />
              </button>
              {showDropdown && (
                <div className='dropdown-options'>
                  {newsletterOptions.map((option) => (
                    <div
                      key={option.value}
                      className='dropdown-option'
                      onClick={() => handleOptionSelect(option.value, option.label)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <input
              type="hidden"
              name="newsletter"
              value={selectedNewsletter}
            />
          </div>
          <div className='form-group'>
            <label htmlFor="firstName"></label>
            <input id="firstName" placeholder='First Name *' type="text" name="firstName" required  />
            <ValidationError prefix="First Name" field="firstName" errors={state.errors}/>
          </div>
          <div className='form-group'>
            <label htmlFor="lastName"></label>
            <input id="lastName"placeholder='Last Name *' type="text" name="lastName" required />
            <ValidationError prefix="Last Name" field="lastName" errors={state.errors}/>
          </div>
          <div className='form-group'>
            <label htmlFor="email"></label>
            <input id="email" placeholder='E-mail *' type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors}/>
          </div>
          <button type="submit" disabled={state.submitting} className='submit-btn'>
            <span>Subscribe</span>
            <img src={white_arrow} alt='' className='white_arrow'/> <img src= {dark_arrow} alt="" className='dark_arrow' />
          </button>
        </form>
      </div>
    </div>

  )
}

export default TopFooter