import { Component, Input, OnInit  } from '@angular/core';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { AuthService } from '../services/auth.service';
import { AppwriteService } from '../services/appwrite.service';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-img-avatar',
  standalone: true,
  imports: [NzPopoverModule, NzMenuModule, NzButtonModule, NzIconModule, NzDividerModule, NzSkeletonModule, NzModalModule],
  templateUrl: './img-avatar.component.html',
  styleUrl: './img-avatar.component.css'
})
export class ImgAvatarComponent {
  avatarURL: string | null = null; // Allow null values
  isPopoverVisible = false; // Variable to track popover visibility
  togglePopover(): void {
    this.isPopoverVisible = !this.isPopoverVisible; // Toggle visibility state
  }
  onPopoverVisibleChange(visible: boolean): void {
    this.isPopoverVisible = visible; // Sync the visibility state
  }
  @Input() imgSrc: string = 'https://cdn-icons-png.flaticon.com/512/219/219969.png';
  constructor(private authService: AuthService, private appwriteService: AppwriteService, private modal: NzModalService) {}
  logout(): void {
    this.modal.confirm({
      nzTitle: 'Are you sure you want to log out?',
      nzContent: '<span>If you want to work you need to be logged in</span>',
      nzOkText: 'Yes, Log out',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => this.authService.logout(),
      nzCancelText: 'No, Cancel',
      nzOnCancel: () => console.log('Cancel')
    });
    
  }
  username = "";
  async ngOnInit(): Promise<void> {
    this.authService.username$.subscribe(status => {
      this.username = status;
    });
    this.authService.AvatarURL$.subscribe(status => {
      this.avatarURL = status;
    });
  }
}
