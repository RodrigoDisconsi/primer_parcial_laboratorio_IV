import { Component, OnInit } from '@angular/core';
import { GithubInterface } from 'src/app/models/github-interface';
import { GithubService } from 'src/app/servicios/github.service';

@Component({
  selector: 'app-detalle-github',
  templateUrl: './detalle-github.component.html',
  styleUrls: ['./detalle-github.component.scss']
})
export class DetalleGithubComponent implements OnInit {

  github:GithubInterface;

  constructor(private git:GithubService) { }

  ngOnInit(): void {
    this.git.getData().subscribe(x => {
      this.github = x as GithubInterface;
    });
  }

}
