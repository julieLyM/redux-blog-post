import { connect } from 'react-redux';
import Blog from '../components/Blog';
import { addPost, addTags } from '../actions';

const mapStateToProps = state => {
  return {
    posts: state.posts,
    tags: state.tags,
  };
};

const mapDispatchToProps = dispatch => ({
  addPost: post => dispatch(addPost(post)),
  addTags: tags => dispatch(addTags(tags)),
});

const Connected = connect(mapStateToProps, mapDispatchToProps)(Blog);
export default Connected;
