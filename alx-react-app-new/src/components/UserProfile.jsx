function UserProfile(props) {
  const containerStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px auto',
    width: '80%',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)'
  };

  const nameStyle = {
    color: 'blue',
    fontSize: '24px',
    marginBottom: '10px'
  };

  const ageStyle = {
    fontWeight: 'bold',
    color: '#444'
  };

  const bioStyle = {
    fontStyle: 'italic',
    color: '#666'
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p>Age: <span style={ageStyle}>{props.age}</span></p>
      <p style={bioStyle}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;
