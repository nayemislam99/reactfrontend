import { useState } from 'react';
import { userApi } from '../service/postApi';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const inputChangeHandaler = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  // const logToken = JSON.parse(localStorage.getItem("token"));

  const loginHandaler = async (e) => {
    e.preventDefault();
    let logAttemt = await userApi.post('/api/user/login', login);
    const token = logAttemt.data.token;
    localStorage.setItem('token', JSON.stringify(token));
    navigate('/home');
    // console.log(token);
  };

  // useEffect(() => {
  //   if (!logToken) {
  //     navigate("/login");
  //   }
  // }, [logToken, navigate]);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="card shadow shadow-md p-3 bg-body">
              <div className="card-body">
                <form onSubmit={loginHandaler}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="title"
                      placeholder="email"
                      value={login.email}
                      onChange={inputChangeHandaler}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      value={login.password}
                      onChange={inputChangeHandaler}
                    />
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-dark">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
