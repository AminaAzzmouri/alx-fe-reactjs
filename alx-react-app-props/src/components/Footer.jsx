function Footer() {
  const footerStyle = {
    backgroundColor: '#263238',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    marginTop: '40px',
    borderTop: '4px solid #0d47a1'
  };

  return (
    <footer style={footerStyle}>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;
