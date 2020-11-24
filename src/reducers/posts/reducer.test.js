import { types } from '../../actions/types';
import PostReducer from './reducer'

describe('Post Reducer', () => {
    it('should return default state', () => {
        const newState = PostReducer(undefined, {});
        expect(newState).toEqual([]);
    });
    it('should return new state if recieveing types', () => {
        const posts = [{ title: 'post1' }, { title: 'post2' }, { title: 'post3' }];
        const newState = PostReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});
