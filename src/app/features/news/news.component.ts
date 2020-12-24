import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { NewsService } from '../../core/services/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  section: null | string = null
  date: null | string = null
  id: null | string = null
  uuid: string = ''

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.section = this.route.snapshot.paramMap.get('section')
    this.date = this.route.snapshot.paramMap.get('date')
    this.id = this.route.snapshot.paramMap.get('id')
    const uuid = this.id ? this.id.slice(-36) : '';
    const url = `/section/${this.section}/${this.date}/${this.id}`;

    this.newsService.getNews(uuid, url).subscribe(response => {
      console.log(response);
    });
  }

}
