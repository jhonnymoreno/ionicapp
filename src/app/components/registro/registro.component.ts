import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastController } from "ionic-angular";

@Component({
  selector: "registro",
  templateUrl: "registro.html"
})
export class RegistroComponent {
  cadastroForm: FormGroup;
  text: string;

  constructor(private fb: FormBuilder, private toastCtrl: ToastController) {
    this.cadastroForm = this.fb.group({
      nome: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])
      ],
      email: ["", Validators.compose([Validators.email])],
      senha: ["", Validators.compose([Validators.required])]
    });
  }

  presentToast() {
    if (this.cadastroForm.valid) {
      let toast = this.toastCtrl.create({
        message: "Sucesso! Usuário criado",
        duration: 3000,
        position: "top"
      });

      toast.present();
    } else {
      let toast = this.toastCtrl.create({
        message: "Cadastro Inválido",
        duration: 3000,
        position: "top"
      });

      toast.present();
    }
  }

  enviarDados() {
    console.log(this.cadastroForm.value);
  }
}
