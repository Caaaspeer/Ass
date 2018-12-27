import { Component, OnInit } from '@angular/core';
import { DownloadUrlService } from './ass.service';
import { AssModel } from './ass.model';
import { Filter } from './filter.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public datas: AssModel[] = [];
  public filter: Filter = new Filter();
  constructor(
    private getDataService: DownloadUrlService,
  ) { }

  ngOnInit() {
    this.getDataService.getData().subscribe(res => {
      this.datas = res;
    });
  }

  public doFilter(): void {
    this.datas.forEach(data => {
      let isFilted = false;
      if (!isFilted && this.filter.name && !data.name.toLowerCase().includes(this.filter.name.toLowerCase())) {
        isFilted = true;
        data.show = false;
      }
      if (!isFilted && this.filter.hair && !data.hair_color.toLowerCase().includes(this.filter.hair.toLowerCase())) {
        isFilted = true;
        data.show = false;
      }

      if (!isFilted && ((this.filter.lowAge && data.age < this.filter.lowAge)
      || ((this.filter.plusAge || this.filter.plusAge === 0) && data.age > this.filter.plusAge))) {
        isFilted = true;
        data.show = false;
      }
      if (!isFilted && ((this.filter.lowHeight && data.height < this.filter.lowHeight)
      || ((this.filter.plusHeight || this.filter.plusHeight === 0) && data.height > this.filter.plusHeight))) {
        isFilted = true;
        data.show = false;
      }
      if (!isFilted && ((this.filter.lowWeight && data.weight < this.filter.lowWeight)
      || ((this.filter.plusWeight || this.filter.plusWeight === 0) && data.weight > this.filter.plusWeight))) {
        isFilted = true;
        data.show = false;
      }

      if (!isFilted && this.filter.frend) {
        const frend = data.friends.toString().toLowerCase().replace(', ', ',');
        if (!frend.includes(this.filter.frend.toLowerCase().replace(', ', ','))) {
          data.show = false;
          isFilted = true;
        }
      }
      if (!isFilted && this.filter.professions) {
        const professions = data.professions.toString().toLowerCase().replace(', ', ',');
        if (!professions.includes(this.filter.professions.toLowerCase().replace(', ', ','))) {
          data.show = false;
          isFilted = true;
        }
      }
      if (!isFilted) {
        data.show = true;
      }
    });
  }
}
