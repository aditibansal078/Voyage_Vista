const TermsOfServicePage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>Terms of Service</h1>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <p>
          Welcome to our hotel reservation system software! These Terms of Service govern your use of our software and any related services provided by us.
        </p>
        <p>
          By accessing or using our software, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our software.
        </p>
      </div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Use of Our Software</h2>
        <p>
          The use of our software is intended for personal, non-commercial use only. You may not use our software for any illegal or unauthorized purpose nor may you, in the use of the service, violate any laws in your jurisdiction (including but not limited to copyright laws).
        </p>
      </div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Intellectual Property Rights</h2>
        <p>
          Our software and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of our company and its licensors.
        </p>
      </div>
      <div style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
        <h2 style={{ textDecoration: 'underline', marginBottom: '10px' }}>Changes</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
      </div>
      {/* Include other sections and content as needed */}
    </div>
  );
};

export default TermsOfServicePage;
