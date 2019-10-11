import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppRoutingSetting} from '../app.routing.setting';

@Component({
  selector: 'app-mannschaft-zwei',
  templateUrl: './mannschaft-zwei.component.html',
  styleUrls: ['./mannschaft-zwei.component.scss']
})
export class MannschaftZweiComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['1te']);
    }, AppRoutingSetting.ROUTING_TIME);
  }

}
