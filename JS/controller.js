function addNewUser() {
    let username = $("#userName").val();
    let paswort = $("#passWort").val();

    return {
        username,
        paswort
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

    refreshUsers();

});