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
        case 'update_students':
            if (state.students) {
                return {
                    ...state,
                    students: [...state.students, action.payload],
                };
            } else {
                return {
                    ...state,
                    students: [...action.payload],
                };
            }

        case 'edit_students':
            let updatedstudents = state.students.map(c => {
                if (c.id === action.payload.id) {
                    return action.payload;
                }
                return c;
            });

            return {
                ...state,
                students: updatedstudents,
            };
        case 'set_user_students':
            return {
                ...state,
                students: action.payload,
            };
        case 'delete_user':
            console.log('Inside case delete');
            axiosWithAuth()
                .delete(`/students/${action.payload}`)
                .then(res => console.log(res))
                .catch(err => console.log(err));

            let students = state.students.filter(c => {
                console.log(action.payload);
                console.log(c);

                return c.id !== action.payload;
            });

            console.log(students);

            return {
                ...state,
                students: students,
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
