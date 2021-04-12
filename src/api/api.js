const mainUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
const developer = 'azamata';
const fetchTodoList = (currentPage) => {
    let page = 1;
    if(typeof currentPage !== "undefined") {
        page = currentPage;
    }
    return fetch(`${mainUrl}?developer=${developer}&page=${page}`);
};

const createTask = (username, email, text) => {
    let form = new FormData();
        form.append("username", username);
        form.append("email", email);
        form.append("text", text);
    const requestOptions = {
        method: 'POST',
        body: form
    };
    return fetch(`${mainUrl}create?developer=${developer}`, requestOptions);
}

const login = (username, password) => {
    let form = new FormData();
        form.append("username", username);
        form.append("password", password);
    const requestOptions = {
        method: 'POST',
        body: form
    };
    return fetch(`${mainUrl}login?developer=${developer}`, requestOptions);
}

const edit = (id, text, status) => {
    console.log('inside it')
    let form = new FormData();
        form.append('token', window.localStorage.getItem('access token'));
        form.append('text', text);
        form.append('status', status);
    const requestOptions = {
        method: 'POST',
        body: form
    };
    console.log(id, text, status)
    return fetch(`${mainUrl}edit/${id}?developer=${developer}`, requestOptions);
}

export {fetchTodoList, createTask, login, edit}
// module.export = createTask;
