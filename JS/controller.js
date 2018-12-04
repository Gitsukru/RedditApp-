function addNewUser() {
    let username = $("#userName").val();
    let paswort = $("#passWort").val();

    return {
        username,
        paswort
    };
};


function addNewTopic() {
    let newTopics = $("#topicInput").val();
    return {
       newTopics
    };
};

function refreshUsers(users) {
    if (!users) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    if (users) {
        let newDom = renderUser(users);
        $("#usersArea").html(newDom);
    }
}

function refreshTopic(topic) {
    if (!topic) {
        topic = JSON.parse(localStorage.getItem("topic"));
    }
    if (topic) {
        let newDom = renderTopic(topic);
        $("#topicBtn").html(newDom);
    }
}

function renderUser(users) {
    let domYaz = "";
    for (let newUser of users) {
        domYaz +=
            `
                    <li><a class="usersBtn" type="button" href="#"> Users ▼</a>
                        <ul class="dropdown">
                            <li><a href="#">${newUser.username}</a></li>
                        </ul>
                    </li>
            `
    }
    return domYaz;
};

function renderTopic(topic) {
    let domaYaz = "";
    for (let newTopic of topic) {
        domaYaz +=
            `
            <div class="navTopics">
            <button id="topicBtn">${newTopic.newTopics}</button>  
            </div> 
            `
    }
    return domaYaz;
};








$(document).ready(function () {
    $("#btnNewUser").on("click", function () {
        let newUser = addNewUser();
        if (localStorage.getItem("users") !== null) {
            let users = JSON.parse(localStorage.getItem("users"));
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
        } else {
            localStorage.setItem("users", JSON.stringify([newUser]));

        }
        refreshUsers();
    })

    $("#addTopicBtn").on("click", function(){
        let newTopics = addNewTopic();
        if (localStorage.getItem("topic") !== null) {
            let topic = JSON.parse(localStorage.getItem("topic"));
            topic.push(newTopics);
            localStorage.setItem("topic", JSON.stringify(topic));
        } else {
            localStorage.setItem("topic", JSON.stringify([newTopics]));

        }
        refreshTopic();

    })

    refreshUsers();
    refreshTopic();
});