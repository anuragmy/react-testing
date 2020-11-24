import React from 'react';
import Header from './component/header';
import Headline from './component/headline';
import SharedButton from './component/button';
import ListItem from './component/listItem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';

const tempArr = [{
  fName: 'Joe',
  lName: 'Bloggs',
  email: 'joebloggs@gmail.com',
  age: 24,
  onlineStatus: false,
}];


const App = (props) => {
  const [hide, setHide] = React.useState(false);
  const { fetchPosts, posts } = props;

  const hideButton = () => setHide(!hide);

  const fetchData = () => {
    fetchPosts();
    hideButton();
  }

  const config = {
    buttonText: 'Get Posts',
    emitEvent: fetchData,
  }
  return (
    <div className="App" data-test="appComponent">
      <Header />
      <section className="main">
        <Headline header="Posts" desc="Click the button to render posts!" tempArr={tempArr} />
      </section>
      <p>state : {hide === false ? 'false' : 'true'}</p>
      {!hide && (
        <SharedButton {...config} />
      )}
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
