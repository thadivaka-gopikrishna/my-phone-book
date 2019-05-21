import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="text-center">
      <hr>
      <app-nav>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-nav>
      <p class="red">Copyright &copy; 2019 </p>
    </div>
  `,
  styles: [
    `
    .red{
      color: red;
    }
    `
  ]
})
export class FooterComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }



}
