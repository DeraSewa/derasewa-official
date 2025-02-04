import "../styles/HelpSupport.css";

const HelpSupport: React.FC = () => {
    return (
        <div className="help-support-container">
            <div className="title">HELP AND SUPPORT</div>
            <div className="content">
                At DeraSewa, we are committed to providing excellent support to our users. If you need assistance, our support team is here to help.

                <br />

                <h4>Contact Support:</h4>
                <li>Email: <a href="mailto:derasewa.official@gmail.com">derasewa.official@gmail.com</a></li>
                <li>Phone: 9767664483</li>
                <li>Facebook: <a href="https://facebook.com/DeraSewa">DeraSewa</a></li>
                <li>Official Website: <a href="https://derasewa.com">derasewa.com</a></li>

                <br />

                <h4>Support Services:</h4>
                <li>Troubleshooting app issues</li>
                <br />
                <li>Assistance with account management</li>
                <br />
                <li>Help with room listings and searches</li>
                <br />
                <li>Addressing complaints and transaction problems</li>

                <br />

                <h4>Self-Help Resources:</h4>
                <li>Knowledge Base: Access articles and tutorials on using DeraSewa</li>
                <br />
                <li>FAQ Section: Find answers to common questions</li>

                <br />
            </div>
            <div>Our goal is to ensure that your experience with DeraSewa is smooth and satisfactory. If you encounter any issues, don’t hesitate to reach out to us.</div>
        </div>
    )
}

export default HelpSupport;
