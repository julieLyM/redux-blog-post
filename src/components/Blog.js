import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      hashtags: [],
      tags: '',
      propositions: [],
    };
  }

  onNameChange = ({ target: { value: title } }) => {
    this.setState({
      title,
    });
  };

  onDescriptionChange = ({ target: { value: description } }) => {
    this.setState({
      description,
    });
  };

  onHashtagsChange = ({ target: { value: hashtags } }) => {
    this.setState({
      hashtags,
    });
  };

  onPublishPost = e => {
    e.preventDefault();
    this.props.addPost({
      ...this.state,
      hashtags: this.state.hashtags.split(' '),
    });
    this.props.addTags(this.state.hashtags.split(' '));
  };

  filterValue = ({ target: { value: tags } }) => {
    this.setState({
      tags,
    });
    this.autoCompleteTags(this.state.tags);
  };

  autoCompleteTags = tag => {
    const myReg = new RegExp(tag, 'gi');
    const { tags } = this.props;
    const propositions = !tags ? [] : tags.filter(tag => myReg.test(tag));
    this.setState({ propositions });
    console.log(propositions);
  };

  render() {
    const { posts } = this.props;
    return (
      <div sytle={{ display: 'flex' }}>
        {posts.map((post, i) => (
          <div style={{ border: 'black solid 1px' }} key={i}>
            <p>title du post: {post.title}</p>
            <p>description: {post.description}</p>

            <div>
              {post.hashtags.map((hashtag, i) => (
                <div key={i}>{hashtag}</div>
              ))}
            </div>
          </div>
        ))}
        <div>
          <form>
            <input
              type="text"
              placeholder="name of title"
              onChange={this.onNameChange}
            />
            <input
              type="text"
              placeholder="description"
              onChange={this.onDescriptionChange}
            />

            <input
              type="text"
              placeholder="hashtag"
              onChange={this.onHashtagsChange}
            />
            <input placeholder="autoComplete" onChange={this.filterValue} />

            <div>
              {this.state.propositions.map((filter, i) => (
                <p key={i}>{filter}</p>
              ))}
            </div>
          </form>
          <button onClick={this.onPublishPost}>create a new post</button>
        </div>
      </div>
    );
  }
}
