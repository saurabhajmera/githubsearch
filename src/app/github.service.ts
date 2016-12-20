import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Global} from "./globals";
import "rxjs/add/operator/map";
import {Observable} from "rxjs";

@Injectable()
export class GithubService {

  private username: string;



  constructor(private _http: Http) {
    console.log('Github Service Ready!');
    this.username = "saurabhajmera";
  }

  getUser(): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': '*'
    });
    let options = new RequestOptions({headers: headers});
    console.log(this.username);
    return this._http.get('http://api.github.com/users/' + this.username +
      '?client_id=' + Global.CLIENT_ID + '&client_secret=' + Global.CLIENT_SECRET)
      .map(res => res.json());
    // .catch(this.handleError);
  }

  getRepo() {
    return this._http.get('http://api.github.com/users/' + this.username + '/repos' +
      '?client_id=' + Global.CLIENT_ID + '&client_secret=' + Global.CLIENT_SECRET)
      .map(res => res.json());

  }

  updateUserName(username: string) {
    this.username = username;
  }

}
