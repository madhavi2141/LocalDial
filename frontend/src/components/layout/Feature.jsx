import React from 'react';
import '../../styles/Feature.css'; // Add this line to link the CSS file

const Feature = () => {
    const featureData = [
        { icon: '\uD83D\uDCC8', title: 'Analytics', description: 'Gain insights with our detailed analytics tools.' },
        { icon: '\uD83D\uDDC0', title: 'Customizable Solutions', description: 'Tailor our tools to fit your business needs.' },
        { icon: '\uD83D\uDD10', title: 'Secure', description: 'Your data is safe with industry-leading security.' },
        { icon: '\u23F1', title: '24/7 Support', description: 'Our team is here to help anytime, anywhere.' },
        { icon: '\uD83D\uDCBB', title: 'User-Friendly Interface', description: 'Enjoy an intuitive and seamless experience.' },
        { icon: '\uD83C\uDF0E', title: 'local Reach', description: 'Expand your business across the world.' }
    ];

    return (
        <div className="page-container">
            <header className="header">
                <h1>Our Features</h1>
                <p>Discover what makes us stand out</p>
            </header>

            <div className="container">
                <div className="features-grid">
                    {featureData.map((feature, index) => (
                        <div className="feature" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-title">{feature.title}</div>
                            <div className="feature-description">{feature.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;