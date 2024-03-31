import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [];
  public eventosFiltrados: any = [];
<<<<<<< HEAD
  mostrarImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(): string {
=======

  exibirImagem: boolean = true;
  private _filtroLista: string = '';

  public get filtroLista(){
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  filtrarEventos(filtrarPor: string): any {
<<<<<<< HEAD
    filtrarPor = filtrarPor.toLocaleUpperCase();
    return this.eventos.filter(
      (evento: { tema: string; }) => evento.tema.toLocaleUpperCase().indexOf(filtrarPor) !== -1
    )
  }

  constructor(private http: HttpClient) { }
=======
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      (evento: { tema: string; local: string;}) => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
        evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1

    )
  }

  constructor(private http:HttpClient) { }
>>>>>>> 8b440da961cd198999fe3886890b734974018d09

  ngOnInit(): void {
    this.getEventos();
  }

<<<<<<< HEAD
  alterarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
=======
  alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      response => {
        this.eventos = response;
<<<<<<< HEAD
        this.eventosFiltrados = this.eventos
=======
        this.eventosFiltrados = this.eventos;
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
      },
      error => console.log(error)
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 8b440da961cd198999fe3886890b734974018d09
}
