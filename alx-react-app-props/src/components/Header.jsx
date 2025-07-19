function Header() {
    return (
        <header style={{ 
                backgroundColor: '#0d47a1',
                color: '#fff',
                textAlign: 'center',
                padding: '20px 0',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                letterSpacing: '2px',
                fontFamily: 'Arial, sans-serif'
        }}>
            <h1>My Favorite Cities</h1>
        </header>
    );
}

export default Header;