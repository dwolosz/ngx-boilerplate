import {AfterViewInit, Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-site-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit, AfterViewInit {

  public post: any;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    let id = this.route.snapshot.params['id'];

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
