import {Component, OnInit} from "@angular/core";
import {GithubService} from "../github.service";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any[];
  repos: any[];

  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user => {
      this.user = user;
      console.log(this.user);
    });

    this._githubService.getRepo().subscribe(repos => {
      this.repos = repos;
      console.log(this.repos);
    })
  }

  ngOnInit() {
  }

}
