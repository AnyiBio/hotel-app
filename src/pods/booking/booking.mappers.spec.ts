import { mapBookingFromApiToVm } from './booking.mappers';
import * as apiModel from './api/booking.api-model';
import * as viewModel from './booking.vm';

describe('./pods/room/room.mappers', () => {
  it('should return empty room when feeding null value', () => {
    // Arrange
    const booking = null;

    // Act
    const result = mapBookingFromApiToVm(booking);

    // Assert
    expect(result).toEqual(viewModel.createEmptyRoom());
  });

  it('should return empty room when feeding undefined value', () => {
    // Arrange
    const room = undefined;

    // Act
    const result = mapBookingFromApiToVm(room);

    // Assert
    expect(result).toEqual(viewModel.createEmptyRoom());
  });

  it('should return expected result but feeding null hotel list', () => {
    // Arrange
    const booking: apiModel.Booking = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      details: null,
      clientName: '',
      bookingStartDate: '',
      bookingEndDate: ''
    };

    const expectedResult: viewModel.Booking = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      clientName: '',
      bookingStartDate: '',
      bookingEndDate: '',
    };

    // Act
    const result = mapBookingFromApiToVm(booking);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result but feeding undefined project list', () => {
    // Arrange
    const booking: apiModel.Booking = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      clientName: '',
      bookingStartDate: '',
      bookingEndDate: '',
      details: undefined
    };

    const expectedResult: viewModel.Booking = {
      id: 'test id',
      name: 'test name',
      clientName: '',
      bookingStartDate: '',
      bookingEndDate: '',
      isActive: true,
      details: {
        cost: 0,
        base: '',
        kindOfRoom: '',
      },
    };

    // Act
    const result = mapBookingFromApiToVm(booking);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const booking: apiModel.Booking = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      clientName: '',
      bookingStartDate: '',
      bookingEndDate: '',
      details: {
        cost: 0,
        base: '',
        kindOfRoom: '',
      },
    };

    const expectedResult: viewModel.Booking = {
      id: 'test id',
      name: 'test name',
      clientName: '',
      isActive: true,
      bookingStartDate: '',
      bookingEndDate: '',
      details: {
        cost: 0,
        base: '',
        kindOfRoom: '',
      },
    };

    // Act
    const result = mapBookingFromApiToVm(booking);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
