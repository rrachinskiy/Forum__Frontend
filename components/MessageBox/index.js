export default ({ user, message, id }) => {
  return (
    <>
      <style jsx>{`
        .message-box {
          background: #FAFAFA;
          border-radius: 3px;
          margin-top: 10px;
          min-height: 480px;
          box-shadow: 0 0 1px rgba(0,0,0,0.3);
          border: 1px solid #DEDEDE;
          display: grid;
          grid-template-columns: 1fr 5fr;
          grid-template-rows: 40px auto 40px;
        }

        .signature {
          grid-column-start: 2;
          grid-column-end: 3;
          border-top: 1px solid #dedede;
          padding-left: 20px;
          padding-top: 10px;
        }

        .info {
          background: linear-gradient(#F6F6F6, #F0F0F0, #EAEAEA);
          border-bottom: 1px solid #DEDEDE;
          display: flex;
        }

        .nickname {
          justify-content: center;
          align-items: center;
        }

        .nickname span {
          line-height: 20px;
          align-self: center;
          font-weight: bold;
          font-family: Georgia;
          font-size: 0.9rem;
        }

        .date {
          display: flex;
          align-items: center;
        }

        .date span {
          line-height: 20px;
          align-self: center;
          font-family: ‘Palatino Linotype’, ‘Book Antiqua’, Palatino, serif;
          font-size: 0.93rem;
          font-weight: normal;
          padding-left: 20px;
        }

        .additional-info {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 10px;
        }

        .profile-image {
          display: inline-block;
          width: 130px;
          height: 130px;
          margin-top: 20px;
        }

        .role {
          margin-top: 12px;
        }

        .role-name {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .message {
          padding: 20px;
        }
      `}</style>
      <div id={id} className="message-box">
        <div className="nickname info">
          <span>{user?.nickname}</span>
        </div>
        <div className="date info">
          <span>Опубліковано: {message?.date}</span>
        </div>
        <div className="additional-info">
          <img className="profile-image" src={user?.image} />
          <div className="role">
            <span className="role-name">{user?.role}</span>
          </div>
        </div>
        <div className="message">
          {message?.text}
        </div>
        <div className="signature">
          {user?.signature}
        </div>
      </div>
    </>
  );
}