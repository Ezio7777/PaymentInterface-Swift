import { useState } from 'react';
import './App.css';

// SVG Icons
const ChevronDown = ({ expanded }) => (
  <svg 
    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" 
    strokeLinecap="round" strokeLinejoin="round" 
    style={{ 
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', 
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)' 
    }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const UpiLogo = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 12 L11 6 L11 18 Z" fill="#00a651" />
    <path d="M19 12 L13 6 L13 18 Z" fill="#f37021" />
  </svg>
);

const WalletIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
    <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
    <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
  </svg>
);

const CardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
);

const BankIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 22 7 12 2"></polygon>
    <polyline points="2 17 22 17"></polyline>
    <polyline points="2 22 22 22"></polyline>
    <line x1="6" y1="17" x2="6" y2="7"></line>
    <line x1="10" y1="17" x2="10" y2="7"></line>
    <line x1="14" y1="17" x2="14" y2="7"></line>
    <line x1="18" y1="17" x2="18" y2="7"></line>
  </svg>
);

const BadgeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#EB5B31" stroke="#EB5B31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
    <line x1="7" y1="7" x2="7.01" y2="7"></line>
    <path d="M14 10l-4 4"></path>
    <circle cx="10" cy="10" r="0.5" fill="white" stroke="none"></circle>
    <circle cx="14" cy="14" r="0.5" fill="white" stroke="none"></circle>
  </svg>
);

const FreechargeIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="20" fill="#E8613F"/>
    <path d="M22 10L14 22H20L18 30L26 18H20L22 10Z" fill="white"/>
  </svg>
);

const PayZappIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect width="40" height="40" rx="8" fill="#F4F5F7" stroke="#DDD"/>
    <text x="20" y="18" fontSize="11" fill="#D32F2F" fontWeight="800" textAnchor="middle" letterSpacing="-0.5">PAY</text>
    <text x="20" y="30" fontSize="11" fill="#1976D2" fontWeight="800" textAnchor="middle" letterSpacing="-0.5">ZAPP</text>
  </svg>
);

const HdfcIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="28" height="28" fill="none" stroke="#ED232A" strokeWidth="4"/>
    <rect x="14" y="14" width="12" height="12" fill="#004B8D"/>
  </svg>
);

const SbiIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" fill="#00AEEF"/>
    <circle cx="20" cy="18" r="5" fill="white"/>
    <path d="M18 22H22V32H18V22Z" fill="white"/>
  </svg>
);

const IciciIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" fill="#F26522"/>
    <path d="M16 12C24 12 28 18 26 28C22 20 18 18 16 12Z" fill="white"/>
    <circle cx="26" cy="12" r="3" fill="white"/>
  </svg>
);


function App() {
  const [selectedPayment, setSelectedPayment] = useState(0);
  const [upiId, setUpiId] = useState('');

  const orderDetails = {
    name: "Hi Prasad Naik,",
    phone: "9999999999",
    orderNumber: "Order12312",
    product: "Product1 desc",
    orderValue: "₹5,00,000.00",
    discount: "₹2,000.00",
    savingPercentage: "0.4%",
    payableAmount: "₹4,98,000.00"
  };

  const handleVerify = () => {
    if (upiId.trim()) {
      alert(`Verifying UPI: ${upiId}`);
    } else {
      alert('Please enter a valid UPI ID');
    }
  };

  const togglePayment = (index) => {
    setSelectedPayment(index === selectedPayment ? null : index);
  };

  return (
    <div className='main'>
      <div className='app-container'>
        
        <div className='scroll-content'>
          <div className='header'>
            <p className='headerChild1'>Paying to</p>
            <p className='headerChild2'>homefood</p>
          </div>

          <div className='bottom-sheet'>
            <div className='card-container'>
              <div className='card-name'>{orderDetails.name}</div>
              <div className='card-ph'>{orderDetails.phone}</div>
              
              <div className='divider'></div>

              <div className='order-header'>
                <span className='order-number'>Order {orderDetails.orderNumber} orderNumber</span>
                <span className='view-order'>View order <ChevronDown expanded={false} /></span>
              </div>

              <div className='product-desc'>{orderDetails.product}</div>

              <div className='divider-spacing'></div>

              <div className='order-details'>
                <div className='detail-row'>
                  <span className='detail-label'>Order Value</span>
                  <span className='detail-value'>{orderDetails.orderValue}</span>
                </div>
                <div className='detail-row'>
                  <span className='detail-label'>Discount</span>
                  <span className='detail-value'>{orderDetails.discount}</span>
                </div>
              </div>

              <div className='saving-badge-wrapper'>
                <div className='saving-badge'>
                  <BadgeIcon />
                  <span className='badge-text'>Total saving of {orderDetails.savingPercentage} on this order</span>
                </div>
              </div>

              <div className='divider'></div>

              <div className='payable-section'>
                <span className='payable-label'>Payable Amount</span>
                <span className='payable-amount'>{orderDetails.payableAmount}</span>
              </div>
            </div>

            <div className='payment-container'>
              <div className='payment-header'>Select Payment Method</div>

              {/* UPI Section */}
              <div className={`payment-method ${selectedPayment === 0 ? 'active' : ''}`}>
                <div className='payment-top' onClick={() => togglePayment(0)}>
                  <div className='icon-circle'><UpiLogo /></div>
                  <span className='payment-name'>UPI</span>
                  <div className='chevron-wrapper'><ChevronDown expanded={selectedPayment === 0} /></div>
                </div>

                <div className={`expanded-wrapper ${selectedPayment === 0 ? 'open' : ''}`}>
                  <div className='expanded-content-inner'>
                    <div className='expanded-content'>
                      <label className='input-label upi-label'>Enter UPI id</label>
                      <input
                        type='text'
                        placeholder='abc@bank'
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        className='input-field mb-16'
                      />
                      <button className='verify-btn' onClick={handleVerify}>Verify</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wallet Section */}
              <div className={`payment-method ${selectedPayment === 1 ? 'active' : ''}`}>
                <div className='payment-top' onClick={() => togglePayment(1)}>
                  <div className='icon-circle'><WalletIcon /></div>
                  <span className='payment-name'>Wallet</span>
                  <div className='chevron-wrapper'><ChevronDown expanded={selectedPayment === 1} /></div>
                </div>

                <div className={`expanded-wrapper ${selectedPayment === 1 ? 'open' : ''}`}>
                  <div className='expanded-content-inner'>
                    <div className='expanded-content'>
                      <div className='brand-grid'>
                        <div className='brand-item'>
                          <FreechargeIcon />
                          <span>Freecharge</span>
                        </div>
                        <div className='brand-item'>
                          <PayZappIcon />
                          <span>PayZap</span>
                        </div>
                      </div>
                      <select className='select-dropdown'>
                        <option>Select Wallet</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Section */}
              <div className={`payment-method ${selectedPayment === 2 ? 'active' : ''}`}>
                <div className='payment-top' onClick={() => togglePayment(2)}>
                  <div className='icon-circle'><CardIcon /></div>
                  <span className='payment-name'>Debit / Credit Card</span>
                  <div className='chevron-wrapper'><ChevronDown expanded={selectedPayment === 2} /></div>
                </div>

                <div className={`expanded-wrapper ${selectedPayment === 2 ? 'open' : ''}`}>
                  <div className='expanded-content-inner'>
                    <div className='expanded-content'>
                      <label className='input-label'>Enter card number</label>
                      <input className='input-field mb-16' placeholder='Card Number' />

                      <div className='form-row mb-16'>
                        <div className='form-group flex-2'>
                          <label className='input-label'>Expiry date</label>
                          <div className='flex-row'>
                            <input className='input-field' placeholder='MM' />
                            <input className='input-field' placeholder='YYYY' />
                          </div>
                        </div>
                        <div className='form-group flex-1'>
                          <label className='input-label'>CVV</label>
                          <input className='input-field' placeholder='CVV' />
                        </div>
                      </div>

                      <label className='input-label'>Enter card holder's name</label>
                      <input className='input-field mb-16' placeholder='Name on Card' />

                      <div className='checkbox-row'>
                        <input type="checkbox" className='custom-checkbox' defaultChecked />
                        <span className='checkbox-text'>
                          Save card as per new RBI guidelines. <span className='learn-more'>Learn More</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Banking Section */}
              <div className={`payment-method ${selectedPayment === 3 ? 'active' : ''}`}>
                <div className='payment-top' onClick={() => togglePayment(3)}>
                  <div className='icon-circle'><BankIcon /></div>
                  <span className='payment-name'>Net Banking</span>
                  <div className='chevron-wrapper'><ChevronDown expanded={selectedPayment === 3} /></div>
                </div>

                <div className={`expanded-wrapper ${selectedPayment === 3 ? 'open' : ''}`}>
                  <div className='expanded-content-inner'>
                    <div className='expanded-content'>
                      <div className='brand-grid bank-grid'>
                        <div className='brand-item'>
                          <HdfcIcon />
                          <span>HDFC Bank</span>
                        </div>
                        <div className='brand-item'>
                          <SbiIcon />
                          <span>SBI</span>
                        </div>
                        <div className='brand-item'>
                          <IciciIcon />
                          <span>ICICI Bank</span>
                        </div>
                      </div>
                      <select className='select-dropdown'>
                        <option>Select Bank</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Powered By */}
              <div className='powered-by'>
                Powered by <span className='powered-by-logo'><span className='s-box'>S</span>WIFT PAY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Proceed to Pay Sticky Footer */}
        <div className='proceed-footer'>
          PROCEED TO PAY
        </div>

      </div>
    </div>
  );
}

export default App;