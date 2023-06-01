import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/example-house1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '/assets/example-house2.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/example-house3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];
  constructor() { }
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  
  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }
}
