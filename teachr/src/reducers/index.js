import { axiosWithAuth } from '../hooks';

export default function reducer(state, action) {
    switch (action.type) {
        case 'set_user':
            return {
                ...state,
                user: action.payload,
            };
        case 'update_user':
            console.log(state.user, action.payload);
            window.localStorage.setItem(
                'user',
                JSON.stringify({
                    ...state.user,
                    ...action.payload,
                })
            );
            return {
                ...state,
                user: { ...state.user, ...action.payload },
            };
        case 'logout_user':
            window.localStorage.removeItem('user');
            return {};
        case 'update_classes':
            if (state.classes) {
                return {
                    ...state,
                    classes: [...state.classes, action.payload],
                };
            } else {
                return {
                    ...state,
                    classes: [...action.payload],
                };
            }

        case 'edit_classes':
            let updatedClasses = state.classes.map(c => {
                if (c.id == action.payload.id) {
                    return action.payload;
                }
                return c;
            });

            return {
                ...state,
                classes: updatedClasses,
            };
        case 'set_user_classes':
            return {
                ...state,
                classes: action.payload,
            };
        case 'delete_user':
            axiosWithAuth()
                .delete()
                .then(res => console.log(res))
                .catch(err => console.log(err));

            window.localStorage.removeItem('user');

            return {
                state: {},
            };
        case 'delete_user':
            console.log('Inside case delete');
            axiosWithAuth()
                .delete(`/classes/${action.payload}`)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            let classes = state.classes.filter(c => {
                console.log(action.payload);
                console.log(c);

                return c.id !== action.payload;
            });

            console.log(classes);

            return {
                ...state,
                classes: classes,
            };
        case 'set_preview':
            return {
                ...state,
                preview: action.payload,
            };
        case 'update_search':
            return {
                ...state,
                search: action.payload,
            };

        case 'update_state':
            return {
                ...state,
                state: action.payload,
            };

        default:
            return state;
    }
}
