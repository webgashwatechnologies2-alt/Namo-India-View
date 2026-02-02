import React from 'react';
import { CreditCard, ShieldCheck, Lock } from 'lucide-react';
import './CommonPage.css';

const PayNow = () => {
    return (
        <div className="common-page">
            <div className="page-header himachal-bg">
                <h1>Secure Payment</h1>
            </div>
            <div className="container">
                <section className="payment-section">
                    <div className="payment-container">
                        <div className="payment-header">
                            <ShieldCheck size={48} color="#22c55e" />
                            <h2>Complete Your Booking</h2>
                            <p>Your payment information is encrypted and secure.</p>
                        </div>

                        <form className="payment-form">
                            <div className="form-group">
                                <label>Cardholder Name</label>
                                <input type="text" placeholder="Name on card" required />
                            </div>
                            <div className="form-group">
                                <label>Card Number</label>
                                <div className="input-with-icon">
                                    <input type="text" placeholder="0000 0000 0000 0000" required />
                                    <CreditCard size={20} className="input-icon" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Expiry Date</label>
                                    <input type="text" placeholder="MM/YY" required />
                                </div>
                                <div className="form-group">
                                    <label>CVV</label>
                                    <input type="password" placeholder="***" required />
                                </div>
                            </div>
                            <div className="payment-summary">
                                <div className="summary-row"><span>Subtotal</span><span>₹15,000</span></div>
                                <div className="summary-row"><span>Taxes</span><span>₹2,700</span></div>
                                <div className="summary-row total"><span>Total Amount</span><span>₹17,700</span></div>
                            </div>
                            <button type="submit" className="btn-primary full-width">
                                <Lock size={18} /> Pay Securely Now
                            </button>
                        </form>

                        <div className="payment-footer">
                            <p>We accept all major credit and debit cards.</p>
                            <div className="payment-icons">
                                {/* Normally SVG icons for Visa, MC, etc would go here */}
                                <span>VISA</span> <span>MasterCard</span> <span>UPI</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default PayNow;
