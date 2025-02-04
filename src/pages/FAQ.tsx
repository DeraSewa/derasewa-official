import "../styles/FAQ.css";

const FAQ: React.FC = () => {
    return (
        <div className="faq-container">
            <div className="title">FAQ</div>
            <div className="content">

                <h4>Q: How do I create an account on DeraSewa?</h4>
                <li>A: To create an account, download our app, click on 'Sign Up,' and follow the prompts to enter your details.</li>

                <br />

                <h4>Q: How can I search for rooms?</h4>
                <li>A: Use the search bar on the home screen to enter your preferred location and apply filters to refine your search.</li>

                <br />

                <h4>Q: What types of filters are available for room searches?</h4>
                <li>A: You can filter rooms by price, location, room type, amenities, and more.</li>

                <br />

                <h4>Q: Is there a fee to use DeraSewa?</h4>
                <li>A: Yes, there is a fee to contact room owners or to host rooms on our app. Payments can be made through eSewa (an online mobile wallet) or using Deracoin, our in-app currency earned through the referral process.</li>

                <br />

                <h4>Q: How do I contact a room owner?</h4>
                <li>A: Click on the room listing and pay the allocated amount of money through eSewa or Deracoin to contact the owner.</li>

                <br />

                <h4>Q: What should I do if I encounter a scam or fraud?</h4>
                <li>A: Report the listing immediately through the app, and our team will investigate and take appropriate action.</li>

                <br />

                <h4>Q: How can I update my profile information?</h4>
                <li>A: Go to 'Profile' in the app menu, and you can update your personal information and preferences.</li>

                <br />

                <h4>Q: What if I forget my password?</h4>
                <li>A: Use the 'Forgot Password' feature on the login screen to reset your password via email.</li>

                <br />

                <h4>Q: How do I report inappropriate content?</h4>
                <li>A: Use the report feature on the listing or contact our support team directly.</li>

                <br />

                <h4>Q: How can I delete my account?</h4>
                <li>A: Go to 'Account Settings' and select 'Delete Account.' Follow the prompts to confirm the deletion.</li>

                <br />

                <h4>Q: What is Deracoin and how can I use it?</h4>
                <li>A: Deracoin is our in-app currency that can be earned through referrals. It can be used for transactions within the app, such as contacting room owners or hosting rooms.</li>

                <br />

                <h4>Q: How can I earn Deracoin?</h4>
                <li>A: You can earn Deracoin by referring friends to use DeraSewa. For each successful referral, you will receive a certain amount of Deracoin.</li>

                <br />

            </div>
            <div>If you have any other questions, please visit our Help and Support section or contact our support team.</div>
        </div>
    )
}

export default FAQ;
