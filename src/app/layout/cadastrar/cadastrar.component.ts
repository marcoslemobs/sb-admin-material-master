import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgModule } from '@angular/core';


import { ServiceService } from '../../shared';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss'],
  
  
})
export class CadastrarComponent implements OnInit {

  users: Array<any>;
  user: any;

  constructor(private service : ServiceService) { }


  ngOnInit() {
    this.user = {};
  }

  criar(frm: FormGroup){
    this.service.criar(this.user).subscribe(resposta => {
      this.users.push(resposta);


    frm.reset();

    });
    

}
}