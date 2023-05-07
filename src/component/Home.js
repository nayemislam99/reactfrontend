import { useState, useEffect } from 'react';
import Select from 'react-select';
import { postApi } from '../service/postApi';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function Home() {
  //set all tags
  const options = [
    { value: 'Javascript', label: 'Javascript' },
    { value: 'Full Stack', label: 'Full Stack' },
    { value: 'Node Js', label: 'Node Js' },
    { value: 'Express', label: 'Express' },
  ];
  const navigate = useNavigate();
  const logToken = JSON.parse(localStorage.getItem('token'));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const [imgUrl, setImgUrl] = useState(null);

  const [tags, setTags] = useState([]);

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);
  const handleChangeTags = (tags) => {
    const tagsArray = [];
    for (let data in tags) {
      tagsArray.push(tags[data].value);
    }
    setTags(tagsArray);
  };
  const handleChangeFile = (e) => {
    setFile(e.target.files[0]);
    setImgUrl(URL.createObjectURL(e.target.files[0]));
  };

  const canSave =
    Boolean(title) && Boolean(content) && Boolean(file) && Boolean(imgUrl);
  const config = {
    headers: {
      Authorization: `Bearer ${logToken}`,
    },
  };

  //api call
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('file', file);
    formData.append('tags', tags);

    try {
      const sendPostData = await postApi.post(
        '/api/post/create-post',
        formData,
        config
      );
      const resSucess = sendPostData.data.msg;
      console.log(sendPostData);
      console.log('inside try catch');
      toast.success(resSucess);
    } catch (error) {
      const resError = error.response.data.fail;
      const expressError = error.response.data.errors;
      console.log(expressError ? expressError : null);
      console.log(resError ? resError : null);
      console.log(error);
      toast.error(resError);

      expressError.map((singleError) => toast.error(singleError.msg));
    }
  };

  useEffect(() => {
    if (!logToken) {
      navigate('/login');
    }
  }, [logToken, navigate]);

  return (
    <>
      <div className="container- ms-0">
        <div className="row">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
          <ToastContainer />

          <div className="col-md-2">
            <div
              className="d-flex flex-shrink-0 min-vh-100 flex-column bg-dark p-3"
              style={{ width: '280px' }}
            >
              <ul className="nav nav-pills flex-column mb-auto">
                <li>
                  <a href="/client" className="nav-link text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      className="bi bi-house-fill me-2"
                      viewBox="0 0 18 18"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/client" className="nav-link text-white">
                    <i class="bi bi-plus-square-dotted"></i>
                    <span className="ms-2">New Post</span>
                  </a>
                </li>
                <li>
                  <a href="/client" className="nav-link text-white">
                    <i class="bi bi-gear-fill"></i>
                    <span className="ms-2">Settings</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 offset-md-2 mt-5">
            <div className="card">
              <div className="card-body shadow shadow-sm p-3 bg-light">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={handleChangeTitle}
                      className="form-control"
                      id="title"
                      placeholder="title"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="content" className="form-label">
                      Content
                    </label>
                    <textarea
                      className="form-control"
                      name="content"
                      onChange={handleChangeContent}
                      value={content}
                      id="content"
                      rows="3"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="tags" className="form-label">
                      Tags
                    </label>
                    <Select
                      isMulti
                      onChange={handleChangeTags}
                      options={options}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="file"
                      className="form-label btn btn-lg btn-info"
                    >
                      Thumbnail
                    </label>
                    <input
                      className="form-control d-none"
                      type="file"
                      name="file"
                      id="file"
                      onChange={handleChangeFile}
                    />
                  </div>

                  {imgUrl && (
                    <img
                      src={imgUrl}
                      alt="img"
                      className="img-fluid img-thumbnail"
                    />
                  )}

                  <div className="mt-3">
                    <button disabled={!canSave} className="btn btn-dark">
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
