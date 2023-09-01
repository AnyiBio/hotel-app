import { mockRoomSearchList } from './api/room.mock-data';

export const initialState = {
  filter: {
    city: 'Medellín',
    stars: 5,
    hotel: '',
    capacity: 2
  },
  filteredRooms: mockRoomSearchList,
};


export const filterReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        filter: { ...state.filter, city: action.payload },
        filteredRooms: mockRoomSearchList.filter(
          (room) => room.city === action.payload
        ),
      };
    case 'SET_STARS':
      return {
        ...state,
        filter: { ...state.filter, stars: action.payload },
        filteredRooms: mockRoomSearchList.filter(
          (room) => room.stars.length === action.payload
        ),
      };
    case 'SET_HOTEL':
      return {
        ...state,
        filter: { ...state.filter, hotel: action.payload },
        filteredRooms: mockRoomSearchList.filter(
          (room) => room.hotelName.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case 'SET_PEOPLE':
      console.log("room.capacity", action.payload)
      return {
        ...state,
        filter: { ...state.filter, hotel: action.payload },
        filteredRooms: mockRoomSearchList.filter(
          (room) => room.capacity === +action.payload
        ),
      };
    default:
      return state;
  }
};
