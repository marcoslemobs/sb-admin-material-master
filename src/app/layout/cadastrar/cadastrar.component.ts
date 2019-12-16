import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../shared/services/service.service'
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.scss']
})
export class CadastrarComponent implements OnInit {

  contatos: Array<any>;
  contato: any;

  constructor(private service : ServiceService) { }


  ngOnInit() {
    this.contato = {};
  }

  criar(frm:FormGroup){
    this.service.criar(this.contato);

    frm.reset();

  }

}
