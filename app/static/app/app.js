document.getElementById('task-form').onsubmit = function(event) {
    event.preventDefault();

    var task = document.getElementById('task').value;
    var dueDate = document.getElementById('due_date').value;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/add_task/', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-CSRFToken', getCookie('csrftoken'));

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var taskList = document.getElementById('tasks-list');
            taskList.innerHTML += '<p>' + 'Task Name: ' + task + ' - ' + 'Due Date: ' + dueDate + '</p>';
            taskList.innerHTML += '<button id="bttn-delete" onclick="deleteTask(this);">Delete</button>';
            taskList.innerHTML += '<button id="bttn-complete" onclick="markTaskAsDone(this);">Mark as Done</button>';
        }
    };

    xhr.send('task=' + encodeURIComponent(task) + '&due_date=' + encodeURIComponent(dueDate));
};

function deleteTask(bttn) {
    bttn.parentElement.remove();
}

function markTaskAsDone(bttn) {
    bttn.parentElement.remove();
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
