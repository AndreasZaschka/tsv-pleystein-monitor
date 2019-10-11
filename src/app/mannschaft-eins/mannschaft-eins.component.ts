import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppRoutingSetting} from '../app.routing.setting';

@Component({
  selector: 'app-mannschaft-eins',
  templateUrl: './mannschaft-eins.component.html',
  styleUrls: ['./mannschaft-eins.component.scss']
})
export class MannschaftEinsComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {

    setTimeout(() => {
      this.router.navigate(['2te']);
    }, AppRoutingSetting.ROUTING_TIME);

  }

}
