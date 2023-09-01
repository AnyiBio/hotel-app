import * as apiModel from './api/hotel-list.api-model';
import * as viewModel from './hotel-list.vm';
import { mapHotelListFromApiToVm } from './hotel-list.mappers';

describe('./pods/hotel-list', () => {
  it('should return empty array when feeding undefined hotel list', () => {
    // Arrange
    const hotelList = undefined;

    // Act
    const result = mapHotelListFromApiToVm(hotelList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding null hotel list', () => {
    // Arrange
    const hotelList = null;

    // Act
    const result = mapHotelListFromApiToVm(hotelList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding empty array hotel list', () => {
    // Arrange
    const hotelList = [];

    // Act
    const result = mapHotelListFromApiToVm(hotelList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return one item with values when passing one item with values', () => {
    // Arrange
    const hotelList: apiModel.Hotel[] = [
      {
        id: 'test id',
        isActive: true,
        code: 'test code',
        name: 'test hotel name',
        creationDate: '05/11/2019',
      },
    ];

    const expectedResult: viewModel.Hotel[] = [
      {
        id: 'test id',
        isActive: true,
        code: 'test code',
        name: 'test hotel name',
        stars: '',
        creationDate: '05/11/2019',
      },
    ];

    // Act
    const result = mapHotelListFromApiToVm(hotelList);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return two item with values when passing two item with values', () => {
    // Arrange
    const hotelList: apiModel.Hotel[] = [
      {
        id: 'test id 1',
        isActive: true,
        code: 'test code',
        name: 'test hotel name 1',
        stars: '',
        creationDate: '05/11/2019',
      },
      {
        id: 'test id 2',
        isActive: false,
        code: 'test code',
        name: 'test hotel name 2',
        creationDate: '05/05/2019',
      },
    ];

    const expectedResult: viewModel.Hotel[] = [
      {
        id: 'test id 1',
        isActive: true,
        code: 'test code',
        name: 'test hotel name 1',
        stars: '',
        creationDate: '05/11/2019',
      },
      {
        id: 'test id 2',
        isActive: false,
        code: 'test code',
        name: 'test hotel name 2',
        stars: '',
        creationDate: '05/05/2019',
      },
    ];

    // Act
    const result = mapHotelListFromApiToVm(hotelList);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
