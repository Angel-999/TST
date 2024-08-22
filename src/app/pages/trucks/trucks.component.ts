import { Component, OnInit } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { CommonModule } from '@angular/common';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
@Component({
  selector: 'app-trucks',
  standalone: true,
  imports: 
  [
    NzCardModule,
    NzBackTopModule,
    CommonModule,
    NzListModule,
    NzGridModule
  ],
  templateUrl: './trucks.component.html',
  styleUrl: './trucks.component.css'
})
export class TrucksComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  trucksList = [
    {
      id: 1,
      title: 'Truck 1',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/trucks/IMG_035',
      description: 'Plates of truck 1',
      status: 'Available'
    },
    {
      id: 2,
      title: 'Truck 2',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/trucks/IMG_039',
      description: 'Plates of truck 2',
      status: 'Available'
    },
    {
      id: 3,
      title: 'Truck 3',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/trucks/IMG_035',
      description: 'Plates of truck 3',
      status: 'Available'
    },
    {
      id: 4,
      title: 'Truck 4',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/TST-Icon',
      description: 'Plates of truck 4',
      status: 'Available'
    },
    {
      id: 5,
      title: 'Truck 5',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/TST-Icon',
      description: 'Plates of truck 5',
      status: 'Available'
    },
    {
      id: 5,
      title: 'Truck 5',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/TST-Icon',
      description: 'Plates of truck 5',
      status: 'Available'
    },
    {
      id: 5,
      title: 'Truck 5',  
      imageUrl: 'https://ik.imagekit.io/7lvwoay0t/TST-Icon',
      description: 'Plates of truck 5',
      status: 'Available'
    }
  ]

}
