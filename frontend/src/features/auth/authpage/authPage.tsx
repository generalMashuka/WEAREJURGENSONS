import * as React from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { useAppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../authSlice";
import * as api from "../api";
import { selectCreateError, selectUser } from "../selectors";

function AuthPage(): JSX.Element {
  const user = useSelector(selectUser);
  const CreateError = useSelector(selectCreateError);
  console.log(CreateError);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setName(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    dispatch(loginSuccess({ name, password }));
  };

  if (user) {
    navigate("/profile");
  }

  return (
    <div>
      { !CreateError ? (
        <form className="auth-form" onSubmit={handleSubmit}>
          {!user && <h2>Вход</h2>}
          {/* {user && <h2>Ты уже залогинен</h2>} */}
          {!user && (
            <>
              <div className="mb-3">
                <label htmlFor="name-input" className="form-label">
                  Имя
                </label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="name-input"
                  name="username"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password-input" className="form-label">
                  Пароль
                </label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="password-input"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Войти
              </button>
            </>
          )}
        </form>
      ): (
        <form className="auth-form" onSubmit={handleSubmit}>
        {!user && <h2>Вход</h2>}
        {!user && (
          <>
            <div className="mb-3">
              <label htmlFor="name-input" className="form-label">
                Имя
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="name-input"
                name="username"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password-input" className="form-label">
                Пароль
              </label>
              <input
                required
                type="password"
                className="form-control"
                id="password-input"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Войти
            </button>
          </>
        )}
        <div>
        <p>Неправильный логин или пароль</p>
        </div>
        
      </form>
        
      )}
    </div>
  );
}

export default AuthPage;
