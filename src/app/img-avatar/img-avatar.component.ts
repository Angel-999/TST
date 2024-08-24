import { Component, Input  } from '@angular/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-img-avatar',
  standalone: true,
  imports: [NzPopoverModule, NzMenuModule, NzButtonModule, NzIconModule],
  templateUrl: './img-avatar.component.html',
  styleUrl: './img-avatar.component.css'
})
export class ImgAvatarComponent {
  @Input() imgSrc: string = 'https://cdn-icons-png.flaticon.com/512/219/219969.png';
  constructor(private authService: AuthService) {}
  logout(): void {
    this.authService.logout();
  }
}
