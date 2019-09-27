import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import getUsers from "features/home/posts/requests/get-users";

import
{
    getPostsAction,
    removePostAction
} from "features/home/posts/redux/actions";

import PostsView from "features/home/posts/component/view";

class Posts extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        const { getPosts, removePost } = this.props;

        getUsers().then(response => console.log(response));

        getPosts();

        setInterval(() => removePost(), 1000);
    }

    render()
    {
        const { posts } = this.props;

        return <PostsView posts={ posts }/>;
    }
}

const mapStateToProps = state =>
({
    posts: state.homeReducer.posts
});

const mapDispatchToProps = dispatch =>
({
    getPosts: () => dispatch(getPostsAction()),
    removePost: () => dispatch(removePostAction())
});

Posts.propTypes =
{
    posts: PropTypes.array,
    getPosts: PropTypes.func,
    removePost: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);