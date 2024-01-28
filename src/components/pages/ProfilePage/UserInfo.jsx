import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserInfo = () => {
  const { user } = useAuth0();

  return (
    <div className="UserInfo">
      <h2
        style={{
          fontSize: '4rem',
          color: '#404c4',
          borderBottom: '2px solid #404c4a',
          width: 'fit-content',
          margin: '5% auto 3%',
        }}
      >
        Profile
      </h2>
      <div
        style={{
          display: 'flex',
          width: 'fit-content',
          margin: '0 auto 8%',
          gap: '64px',
        }}
      >
        <img
          src={user.picture}
          alt="profile avatar"
          style={{
            height: '240px',
            width: '240px',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            margin: 'auto',
            fontSize: '2rem',
          }}
        >
          <h3>{user.nickname}</h3>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
