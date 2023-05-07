import React from "react";
import Spinner from "./Spinner";

const Post = ({ post, loadding }) => {
  return (
    <>
      <div>{loadding && <Spinner />}</div>

      {post
        ? post.map((singlePost) => (
            <div className="card border-0 mb-2">
              <div className="card-body border-0 shadow shadow-md mb-2 p-3 bg-light">
                <div
                  className="d-lg-flex mb-md-2 gap-2 flex-grow align-items-center align-items-lg-start justify-content-lg-center"
                  id="post"
                >
                  <div className="w-25">
                    <h6 className="card-title">
                      <a
                        href="/"
                        style={{ textDecoration: "none" }}
                        className="text-dark"
                      >
                        {singlePost.title}
                      </a>
                    </h6>

                    <p
                      style={{ fontSize: "12px" }}
                      className="text-muted fw-light"
                    >
                      Published : 28 march 2023, 09:46 pm
                    </p>
                  </div>
                  <div className="mx-1 w-50 pb-md-3 pb-lg-0 ">
                    <p className="card-text">
                      {`${singlePost.content.substr(0, 155)} ...`}
                    </p>
                  </div>

                  <div className="w-auto w-100">
                    <img
                      src={singlePost.imageUrl}
                      style={{ height: "120px", width: "230px" }}
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : "<h5>No data found</h5>"}
    </>
  );
};

export default Post;
