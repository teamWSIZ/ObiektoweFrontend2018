


/////////////////////////////////////////////

class LoggedUser {
    constructor(album, wdauth) {
        this.album = album;
        this.wdauth = wdauth;
    }

    report() {
        alert(this.album);
    }
}


//nasza klasa
class LogonService {
    //default values
    constructor() {
        this.cleanup();
    }

    login(album, pass) {
        //call external service
        console.log('logging in user:' + album);
        this.user = new LoggedUser(album, pass);
        this.loggedIn = true;
    }

    logout() {
        console.log('logging out');
        this.cleanup();
    }

    cleanup() {
        this.user = new LoggedUser("", "");
        this.loggedIn = false;
    }
}

class ChatService {

    constructor() {
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }

    getPosts(target) {
        console.log('Target=' + target);
        //ma zapytać sieć o dane, i je zwrócić z tej metody
        fetch(this.url)
            .then(response => response.json())
            .then(json => {
                // this.messages.splice(0, this.messages.length);
                target.push(json);
                console.log('Pushing: ' + json.length + ' elements');
            });
    }


}

