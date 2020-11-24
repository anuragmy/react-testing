import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should update store correctly', () => {
    const expectedState = [{
      title: 'title1',
      body: 'body1',
    },
    {
      title: 'title1',
      body: 'body1',
    },
    {
      title: 'title1',
      body: 'body1',
    }
    ];
    const store = testStore();
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        responseText: expectedState,
      })
    })

    return store.dispatch(fetchPosts())
      .then(() => {
        const newState = store.getState();
        expect(newState.post).toBe(expectedState);

      })
  });
});
