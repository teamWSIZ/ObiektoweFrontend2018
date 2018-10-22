
//System logowania do WD (działa wewnątrz WSIZ i w VPN)
class LogonService {
    constructor(http, wdUrl) {
        this.wdUrl = wdUrl; //e.g. https://denver.wsi.edu.pl:8443/wd-auth
        this.http = http;
        this.wdauth = ''; //token autoryzacyjny do dalszej pracy; '' będzie oznaczać niezalogowanego usera
        this.album = '';
        this.logged = false;
    }

    login(album, pass) {
        let pass_md5 = md5(pass);
        let url = this.wdUrl + '/auth?album=' + album + '&pass=' + pass_md5;
        console.log('Wysyłam: ' + url);
        let instance = this;
        return this.http({
                url: url,
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            }).success(function (data) {
                instance.wdauth = data;
                instance.album = album;
                instance.logged = true;
                alert('Zalogowano, token=' + data);
            });
    }

    logout() {
        this.wdauth='';
        this.album='';
        this.logged = false;
    }
}

/**
 * Serwis przechowujący i odświeżający listę "postów" czatu z jsonplaceholder
 */
class ChatService {
    constructor(http, apply) {
        this.postsurl = "https://jsonplaceholder.typicode.com/posts";
        this.apply = apply;
        this.http = http;
        this.posts = [];
    }
    //odświeża listę postów przez zapytanie http
    refresh() {
        console.log('Refreshing posts');
        let instance = this;
        return this.http({
            url: this.postsurl,
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).success(function(json){
            console.log('got: ' + json);
            instance.posts = json;
        });
    }
}

