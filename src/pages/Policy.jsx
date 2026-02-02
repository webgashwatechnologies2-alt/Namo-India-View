import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText, Scale, Clock, Lock, ShieldAlert, CheckCircle } from 'lucide-react';
import './CommonPage.css';

const Policy = () => {
    const location = useLocation();
    const path = location.pathname;

    const getPolicyData = () => {
        if (path.includes('privacy')) {
            return {
                title: 'Privacy Policy',
                icon: <Lock size={20} />,
                updateDate: 'January 1, 2026',
                sections: [
                    {
                        title: 'Data Collection',
                        content: 'We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services.',
                        items: ['Name and contact data', 'Credentials and security data', 'Payment data for bookings', 'Travel preferences']
                    },
                    {
                        title: 'How We Use Your Data',
                        content: 'We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.',
                        items: ['To facilitate account creation and logon process', 'To send administrative information', 'To fulfill and manage your orders', 'To post testimonials with your consent']
                    },
                    {
                        title: 'Data Security',
                        content: 'We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process.',
                        items: ['Encrypted data transmission', 'Regular security audits', 'Restricted employee access', 'Secure payment gateways']
                    }
                ]
            };
        }
        if (path.includes('terms')) {
            return {
                title: 'Terms & Conditions',
                icon: <Scale size={20} />,
                updateDate: 'January 1, 2026',
                sections: [
                    {
                        title: 'Agreement to Terms',
                        content: 'These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity and Namo India Traveling.',
                        items: ['Service usage rules', 'User representation', 'Prohibited activities', 'Intellectual property rights']
                    },
                    {
                        title: 'Booking Policy',
                        content: 'By booking any service through Namo India, you agree to abide by the specific rules and regulations of the service provider (hotels, transport, etc.).',
                        items: ['Valid ID requirements', 'Age restrictions', 'Advance payment rules', 'Modification of bookings']
                    }
                ]
            };
        }
        if (path.includes('refund')) {
            return {
                title: 'Refund Policy',
                icon: <ShieldAlert size={20} />,
                updateDate: 'January 1, 2026',
                sections: [
                    {
                        title: 'Cancellation Charges',
                        content: 'Our refund policy ensures that our customers are treated fairly while protecting our business operations from last-minute cancellations.',
                        items: [
                            '30+ days before travel: 10% cancellation fee (90% refund)',
                            '15-30 days before travel: 25% cancellation fee (75% refund)',
                            '7-14 days before travel: 50% cancellation fee (50% refund)',
                            'Less than 7 days before travel: No refund (100% cancellation fee)'
                        ]
                    },
                    {
                        title: 'Processing Time',
                        content: 'Once a refund is approved, it will be processed through the original payment method.',
                        items: ['Standard processing: 7-10 business days', 'Bank processing time varies', 'Direct UPI refunds are faster', 'Credit card refunds may take longer']
                    }
                ]
            };
        }
        return {
            title: 'Our Policies',
            icon: <ShieldCheck size={20} />,
            updateDate: 'January 1, 2026',
            sections: [
                {
                    title: 'Policy Overview',
                    content: 'Namo India Traveling is committed to transparency and clarity in all our dealings. Please select a specific policy from the sidebar to view detailed information.',
                    items: ['Privacy protection', 'Terms of service', 'Refund & cancellation rules']
                }
            ]
        };
    };

    const data = getPolicyData();

    const sidebarLinks = [
        { name: 'Privacy Policy', path: '/privacy-policy', icon: <Lock size={18} /> },
        { name: 'Terms & Conditions', path: '/terms-conditions', icon: <Scale size={18} /> },
        { name: 'Refund Policy', path: '/refund-policy', icon: <ShieldAlert size={18} /> }
    ];

    return (
        <div className="common-page">
            <div className="page-header himachal-bg">
                <div className="container header-content">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Trust & Transparency
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        Everything you need to know about our policies and how we protect you.
                    </motion.p>
                </div>
            </div>

            <div className="container">
                <div className="policy-layout">
                    {/* Sidebar */}
                    <aside className="policy-sidebar">
                        <div className="policy-nav-title">Documents</div>
                        <nav className="policy-nav">
                            {sidebarLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`policy-nav-link ${path === link.path ? 'active' : ''}`}
                                >
                                    {link.icon}
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <motion.main
                        key={path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="policy-main-card"
                    >
                        <div className="policy-header-meta">
                            <div className="section-tag" style={{ marginBottom: '15px' }}>OFFICIAL DOCUMENT</div>
                            <h2>{data.title}</h2>
                            <div className="policy-update-date">
                                <Clock size={16} /> Last Updated: {data.updateDate}
                            </div>
                        </div>

                        <div className="policy-content">
                            {data.sections.map((section, idx) => (
                                <div key={idx} className="policy-block">
                                    <h3>
                                        <span>{idx + 1}.</span> {section.title}
                                    </h3>
                                    <p>{section.content}</p>
                                    {section.items && (
                                        <ul>
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}

                            <div className="policy-footer-note" style={{
                                marginTop: '60px',
                                padding: '30px',
                                background: '#f8fafc',
                                borderRadius: '15px',
                                border: '1px solid #e2e8f0',
                                textAlign: 'center'
                            }}>
                                <CheckCircle size={32} color="#22c55e" style={{ marginBottom: '15px' }} />
                                <h4 style={{ marginBottom: '10px' }}>Questions?</h4>
                                <p style={{ fontSize: '14px', marginBottom: '0' }}>
                                    If you have any questions about our {data.title}, please contact our legal team at <br />
                                    <strong style={{ color: '#1a1a1a' }}>info@namoindia.com</strong>
                                </p>
                            </div>
                        </div>
                    </motion.main>
                </div>
            </div>
        </div>
    );
};

export default Policy;
