import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../models/post";


@Component({
  selector: 'app-site-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit, AfterViewInit {

  public post: Post;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {


    let id = this.route.snapshot.params['id'];

    console.log('test', id);

    this.http.getHttpData('/posts/'+ id, {})
      .subscribe(
        data => {
          this.post = data;
        }
      )
  }

  ngAfterViewInit(){
  }

}
