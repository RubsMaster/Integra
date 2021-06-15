import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miFormulario:FormGroup;

  constructor(private router: Router) { 
    this.miFormulario = new FormGroup({
      usuario : new FormControl('',Validators.required),
      contrasena : new FormControl('',Validators.required)
    })

  }

  ngOnInit(): void {
  }

  login(){
    
    var user = this.miFormulario.get('usuario');
    var pass = this.miFormulario.get('contrasena');

    if(this.miFormulario.invalid){
      alert('Uno o dos campos se encuentran vacios.')
      return;
    }
    this.router.navigateByUrl('/home');


    }
}
