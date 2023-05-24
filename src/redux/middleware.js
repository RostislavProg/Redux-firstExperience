import { COMMENT_CREATE } from './type';
import { errorOn } from './actions';

const badWords = ['Fuck', 'Bitch', 'fuck', 'bitch']

export function spamFilter({dispatch}){
    return function(next) {
        return function(action) {
            if (action.type === COMMENT_CREATE){
                const hasBadWords = badWords.some(res => action.data.text.includes(res));
                if (hasBadWords) {
                    return dispatch(errorOn('curses are unacceptable'))
                }
            }
            return next(action);
        }
    }
}