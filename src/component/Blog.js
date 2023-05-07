import { useEffect, useState } from 'react';
import { postApi } from '../service/postApi';
import Post from './Post';
// import { postApi } from '../service/postApi';
// import axios from 'axios';

const Blog = () => {
  const [post, setPost] = useState([]);
  const [loadding, setLoadding] = useState(true);

  const getPost = async () => {
    try {
      const res = await postApi.get('/api/post');
      setPost(res.data.data);
      setLoadding(false);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-8 offset-md-2">
            <div className="latest_post d-inline-block mb-4">
              <h2 className="border border-bottom border-top-0 border-start-0 border-end-0 pb-2 border-3 border-dark w-100">
                Latest Story
              </h2>
            </div>
            <Post post={post} loadding={loadding} />
            <div className="text-center">
              <button className="btn btn-dark">Load More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
