import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  section: null | string = null
  date: null | string = null

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.section = this.route.snapshot.paramMap.get('section')
    this.date = this.route.snapshot.paramMap.get('date')
  }

}
