import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';



/* This const is not used within our app.
   Although we are passing it to the Headline Component
   it is only here as an exampleof testing PropTypes */
const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: false,
}];


const App = (props) => {

  const { fetchPosts, posts } = props;
  const config = {
    buttonText: 'Get Posts',
    emitEvent: () => fetchPosts(),
  }
  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
      </section>
      <SharedButton {...config} />
      {posts.length > 0 && posts.map((post, i) => {
        const { title, body } = post;
        return <ListItem key={i.toString()} title={title} desc={body} />
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.post,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
