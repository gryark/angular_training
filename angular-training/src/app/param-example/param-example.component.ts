import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-param-example',
  standalone: true,
  imports: [],
  templateUrl: './param-example.component.html',
  styleUrl: './param-example.component.css'
})
export class ParamExampleComponent {

  id: string="";
  name: string = "";
  params:object[] = [];
  constructor(
    private route: ActivatedRoute,
 
  )
   { 
   this.id = this.route.snapshot.paramMap.get('id') || '';
   this.route.queryParams.subscribe(params => console.log(params));

  }
}   