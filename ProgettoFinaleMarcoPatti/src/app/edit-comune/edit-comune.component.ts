import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comune } from '../classes/comune';
import { ComuniService } from '../services/comuni.service';

@Component({
  selector: 'app-edit-comune',
  templateUrl: './edit-comune.component.html',
  styleUrls: ['./edit-comune.component.css']
})
export class EditComuneComponent implements OnInit {

 comune!: Comune

  constructor(private route: ActivatedRoute,
    private router: Router,
    private comuniService: ComuniService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.comuniService.detailComune(params['id']).subscribe(response => {
        this.comune = response
      })
    })
  }
  update(){
    this.comuniService.updateComune(this.comune).subscribe(response => console.log(response))
    this.router.navigate(['comuni'])
  }

}
