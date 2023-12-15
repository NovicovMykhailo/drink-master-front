import css from './Modal.module.css';
import isAuth from '../../hooks/useAuth';
import { MdAdd } from 'react-icons/md';

import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/Auth/authOperation';
import LoadingCircle from 'components/Spinner/LoadingCircle';

const ModalCard = ({ closePopup }) => {
  const dispatch = useDispatch();
  const { userData } = isAuth();
  const { name, avatarURL } = userData;

  const hiddenFileInput = useRef(null); //input reference

  const [userPhoto, setUserPhoto] = useState(avatarURL); // userPhoto state
  const [userName, setUserName] = useState(''); // controlled name

  const [tempImageUrl, setTempImageUrl] = useState(null); //link to preview photo
  const [userFile, setUserFile] = useState(null); //state with file
  const [loadingURL, setLoadingURL] = useState(false); //spinner on load


  useEffect(() => {
    // refresh avatar on modal
    if (tempImageUrl) {
      setUserPhoto(tempImageUrl);
      setLoadingURL(false);
    }
  }, [avatarURL, tempImageUrl]);

  const onClick = event => {
    //fake input click
    hiddenFileInput.current.click();
  };

  const onPhotoChange = event => {
    //get new image logic
    const file = event.target.files[0];
    if (file) {
      setTempImageUrl(URL.createObjectURL(file));
      setUserFile(file);
    }
  };

  const onSubmit = () => {
    //submitting
    const formData = new FormData();
    userName && formData.append('name', userName);
    userFile && formData.append('avatarURL', userFile);

    dispatch(updateUser(formData));
    closePopup(prev=>!prev)


  };

  
  return (
    <div>
      <div className={css.modal__content__colorEffect1}></div>
      <div className={css.modal__content__colorEffect2}></div>
      <div className={css.loginContainer} >
        <div className={css.avatar}>
          <div className={css.UserIconContainer}>{loadingURL ? <LoadingCircle /> : <img className={css.Avatar} src={userPhoto} alt="User Avatar" />}</div>
          <button className={css.addAvatar} onClick={onClick}>
            <MdAdd className={css.addAvatarIcon} />
          </button>
          <input type="file" onChange={onPhotoChange} ref={hiddenFileInput} style={{ display: 'none' }} name="avatarURL" />
        </div>
        <input
          type="text"
          className={css.input}
          name="name"
          placeholder={name}
          value={userName}
          onChange={event => setUserName(event.target.value)}
          // pattern="[^\W\d_]"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit" className={css.loginBtn} onClick={onSubmit}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default ModalCard;

// const Avatar = {
//   display: 'block',
//   height: '100%',
//   width: '100%',
// };

// const UserIconContainer = {
//   width: '80px',
//   height: '80px',
//   overflow: 'hidden',
//   borderRadius: '50%',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   background: 'transparent',
// };
