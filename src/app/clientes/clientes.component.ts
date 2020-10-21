import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = CLIENTES;

    displayedColumns: string[] = ['id', 'nombre', 'apellido', 'apellido2', 'email', 'createAt'];
    dataSource = new MatTableDataSource(this.clientes);

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    console.log(this.clienteService.getClientes());
  }

}
