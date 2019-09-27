import React from "react";
import PropTypes from "prop-types";

import "features/home/posts/component/view.scss";

const PostsView = ({ posts }) =>
(
    <div>
        {
            posts &&
                posts.map((post, index) => <div key={ index }>{ post.title && post.title }</div>)
        }
    </div>
);

PostsView.propTypes =
{
    posts: PropTypes.array
};

export default PostsView;