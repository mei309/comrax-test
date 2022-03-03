import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { debounceTime, distinctUntilChanged, Subscription } from 'rxjs';
import { SearchListenerService } from 'src/app/services/search-listener.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  title!: string;

  searchTerm: FormControl = new FormControl('');

  subscription!: Subscription;
  faSearch = faSearch;

  constructor(private searchListener: SearchListenerService, private router: Router) { }

  ngOnInit(): void {
    // i did the search immediately and without pressing a button (it lookd nicer to me)
    this.subscription = this.searchTerm.valueChanges.pipe(debounceTime(800), distinctUntilChanged()).subscribe(serc => {
      if(this.router.url === '/details') {
          this.router.navigate(['../']);
      }
      this.searchListener.searchChange(serc);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
