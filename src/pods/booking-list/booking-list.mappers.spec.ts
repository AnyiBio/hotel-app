import * as apiModel from './api/booking-list.api-model';
import * as viewModel from './booking-list.vm';
import { mapBookingListFromApiToVm } from './booking-list.mappers';

describe('./pods/booking-list', () => {
  it('should return empty array when feeding undefined booking list', () => {
    // Arrange
    const bookingList = undefined;

    // Act
    const result = mapBookingListFromApiToVm(bookingList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding null booking list', () => {
    // Arrange
    const bookingList = null;

    // Act
    const result = mapBookingListFromApiToVm(bookingList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return empty array when feeding empty array booking list', () => {
    // Arrange
    const bookingList = [];

    // Act
    const result = mapBookingListFromApiToVm(bookingList);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return one item with values when passing one item with values', () => {
    // Arrange
    const roomList: apiModel.Booking[] = [
      {
        id: 'test id',
        isActive: true,
        room: 'test name',
        hotelName: 'Hotel Med 70',
        startDate: '01/01/2024',
        endDate: '01/02/2024',
      },
    ];

    const expectedResult: viewModel.Booking[] = [
      {
        id: 'test id',
        isActive: true,
        room: 'test name',
        hotelName: 'Hotel Med 70',
        startDate: '01/01/2024',
        endDate: '01/02/2024'
      },
    ];

    // Act
    const result = mapBookingListFromApiToVm(roomList);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return two item with values when passing two item with values', () => {
    // Arrange
    const bookingList: apiModel.Booking[] = [
      {
        id: 'test id 1',
        isActive: true,
        room: 'test name 1',
        hotelName: 'test@email.com',
        startDate: '01/01/2024',
        endDate: '01/02/2024',
      },
      {
        id: 'test id 2',
        isActive: true,
        room: 'test name 2',
        hotelName: 'test@email.com',
        startDate: '01/01/2024',
        endDate: '01/02/2024',
      },
    ];

    const expectedResult: viewModel.Booking[] = [
      {
        id: 'test id 1',
        isActive: true,
        room: 'test name 1',
        hotelName: 'test@email.com',
        startDate: '01/01/2024',
        endDate: '01/02/2024'
      },
      {
        id: 'test id 2',
        isActive: true,
        room: 'test name 2',
        hotelName: 'test@email.com',
        startDate: '01/01/2024',
        endDate: '01/02/2024'
      },
    ];

    // Act
    const result = mapBookingListFromApiToVm(bookingList);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
