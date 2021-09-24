import { useState } from 'react';
import axios from 'axios';
import {BoxCustom, ImgCustom, BoxLogo} from '../Style/style-components'
import 'bulma/css/bulma.min.css'
import {IconLogo} from '../assets/Export'

const projectID = '7b4fefb4-69cf-4292-b00a-8e0b1f10cb32';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="">
      <BoxCustom className="">
        <BoxLogo>
        <ImgCustom src={IconLogo} alt="..."/>
        <h1 className="title">PTM Chat Beta</h1>
        </BoxLogo>

        <form onSubmit={handleSubmit}>
          <div className="field">
          <label className="label">Usuario</label>
          </div>
          
          <div className="control">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input is-primary" required />
          </div>

          <div className="field">
          <label className="label">Constraseña</label>
          </div>

          <div className="field">
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input is-primary"  required />
          </div>

          <div align="center">
            <button type="submit" className="button is-info">
              <span>Inicial sesión</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </BoxCustom>
    </div>

  );
};

export default Modal;
