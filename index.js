const paths = location.pathname.split('/');
const id = paths.pop() || paths.pop();

if (location.pathname.includes('/admin/user/')) {
    // `googleAccount` and `adAccount` are 'boolean' (TRUE/FALSE) attributes that indicate an account has been provisioned each respectively
    // `employeeStatus` is an HR-sourced attribute indicating Active, Terminated, or Leave of Absence status
    // `manager` is the user manager's `email` value
    showUserInfo();
}
async function showUserInfo() {
    const user = await getJson('/api/v1/users/' + id);
    var html = '<br>';
    // The following icons are hard-coded in here for ease of portability. Converted using: https://www.site24x7.com/tools/image-to-datauri.html
    if (user.profile.googleAccount) html += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAHQSURBVDhPpZLPaxNBFMc/M5Mo2W3TgqSWGErS1IuKipf6B4h3fxLBk+lFPRQtHqRFT4JnL3rzJNKDYFWkosVI6qWH1jaHXlsRtf4s2NZds+04mwyJ0T1Y/cCwM99578t7+0ZoA/+BtN9/JrKCH9NTrN6+RXVuBoIqKpsncbSAc+yUjWjyh8HXwQH8iXFEe9IkB0Yx1yqG9jxkRyddL4zpL7QYLF8axH/+2CQoVDqDc7qISDh4Tx7hPbxHqjRNrCdroy2hQQ2vopf6t+l3+/fo5ZGLVmyy4ft210rDIKgUdPAS/eVMj1X+jkYLwWQOvbKA6juJ7ButVRfSf/UbK99NV3Ze1XXY2S15MOTWzi1jFGZJf6N+sEgjShMVrk5XkGoXxFUYWadhoDoOElNwfn7BKnXunHO4f8GlfKWNXErim8HkUhEGovcy+94cYGwtzVD5ulWht0uR3y55/0kwu6iNgebw3ri9/W2MZ0vXeLpYMv0qMm3dFHcdx40nKL2dZOzVZ3Z8uMGWrWtMDDs2I+IhFZ8NM/66TDLuEuj18BmhhCRgFZc0s4VRRLOA6Kc8tTTHzcpdZj7Om79eJZvMcCR/iIHdJ2xEk0iDzdAyxs0DPwEIbQl76Cs+ogAAAABJRU5ErkJggg==" alt="Google Workspace Icon" height="20"/> | ';
    if (user.profile.adAccount) html += '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAFzUkdCAK7OHOkAAAAEZ0FNQQAAsY8L/GEFAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAaZJREFUOE+lU9suQ0EUXTNzTs85ParxgAev4sUviEcfIvErfISv8OQPJB4kXoTEJaStS0uV3pxLO9Y+bSmihJVZ2ZOZvWffZitL4BeoNROUHhNUHmNUGpQNSu4/PHD3PFC4uI+xOO9j/7iG3bMEz90UrlEwmlQYSDJnALWxfWJvI4N21IMzvIjSPjZW53B6+YCDmoJHK0XDcYhbowFdrkcIchqzBRczoYPpwCD0TOZRHuT6YjwOLYp6ksYPYBD/g45Sm+WcMRmS+7RnEVO+JJYUOWB3yNFebe5c2nwYQMEyV6bDmMR4damA62oLVy0FV4rFO8l0VBPRdeS8GDgo+BpTviE1QhbUc+Q5IORZweMZGeQUfJet450r3ZJHqKPWtg5tvjjFtrz/p27cx/rKLI4v7rF/R6NvKiXRaJ/xfaZHOnThMcaAXqXNnyl6Iv/fBRY6y/ev0MW8Qb2d4qGVotFJ0XzpocMaSCd6fZt92Ul4GybpeZnTVpJhqkVYXshj76iK3fMEKe+kJoatk/8/GiZXhml8GiehynG+ycY4wfVTjFJdnEV4BTp40UxCRbRBAAAAAElFTkSuQmCC" alt="Active Directory Icon" height="20"/> | ';
    html += 'HR Status: ' + user.profile.employeeStatus + ' | ';
    if (user.profile.manager) {
        const users = await getJson(`/api/v1/users?search=profile.email eq "${user.profile.manager}"`);
        if (users.length > 0) {
            html += `Manager: <a href="/admin/user/profile/view/${users[0].id}#tab-account" target="_blank">${user.profile.manager}</a> | `;
        } else {
            html += 'Manager: ' + user.profile.manager + ' | ';
        }
    }
    html += 'Type: ' + user.profile.userType;
    document.querySelector('.subheader').innerHTML += html;
}

async function getJson(url) {
    const res = await fetch(url);
    return res.json();
}
