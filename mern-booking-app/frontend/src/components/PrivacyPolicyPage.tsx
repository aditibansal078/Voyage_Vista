const PrivacyPolicyPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>Privacy Policy</h1>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <p>
          Thank you for choosing Voyage Vista. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to ensure its security.
        </p>
      </div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Information We Collect</h2>
        <p>
          When you use Voyage Vista, we may collect certain personal information, including:
        </p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Contact Information: Such as your name, email address, phone number, and mailing address.</li>
          <li>Reservation Details: Including dates of stay, room preferences, and special requests.</li>
          <li>Payment Information: Such as card details.</li>
        </ul>
      </div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>How We Use Your Information</h2>
        <p>
          We use the personal information we collect for the following purposes:
        </p>
        <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginBottom: '20px' }}>
          <li>Reservation Processing: To process your hotel reservations and ensure your stay meets your expectations.</li>
          <li>Customer Support: To provide assistance and support regarding your reservations or any issues you may encounter.</li>
          <li>Improvement of Services: To analyze usage trends and preferences in order to improve our software and services.</li>
        </ul>
      </div>
      {/* Include other sections and content as needed */}
    </div>
  );
};

export default PrivacyPolicyPage;
