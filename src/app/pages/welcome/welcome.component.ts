import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { AppwriteService } from '../../services/appwrite.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: 
  [
    NzButtonModule,
    NzCardModule,
    NzStatisticModule,
    NzLayoutModule,
    NzGridModule,
    NzTypographyModule,
    NzIconModule,
    NzBackTopModule
  ],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  totalClients = 0;

  constructor(private appwriteService: AppwriteService) { }

  public async getDocuments() {
    try {
      const documents = await this.appwriteService.getDocuments();
      console.log('Documents:', documents);
    } catch (error) {
      console.error('Error fetching documents:', error);
    }
  }
}
