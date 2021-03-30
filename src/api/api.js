const mainUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';
const developer = 'azamat';
const fetchTodoList = (currentPage) => {
    return fetch(`${mainUrl}?developer=${developer}&page=${currentPage}`);
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

export {fetchTodoList, createTask}
// module.export = createTask;
