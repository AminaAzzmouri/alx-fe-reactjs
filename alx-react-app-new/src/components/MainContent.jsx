function MainContent() {
  const mainStyle = {
    padding: '30px',
    backgroundColor: '#f0f8ff',
    color: '#333',
    fontSize: '18px',
    textAlign: 'center',
    fontFamily: 'Segoe UI, sans-serif',
    borderTop: '2px solid #ddd',
    borderBottom: '2px solid #ddd',
    margin: '20px auto',
    maxWidth: '600px',
    borderRadius: '8px'
  };

  return (
    <main style={mainStyle}>
      <p>I love to visit <strong>New York</strong>, <strong>Paris</strong>, and <strong>Tokyo</strong>.</p>
    </main>
  );
}

export default MainContent;
