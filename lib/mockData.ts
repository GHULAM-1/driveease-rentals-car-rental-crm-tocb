// Mock data for car rental CRM
export type Car = {
  registration: string;
  model: string;
  year: number;
  status: 'available' | 'rented' | 'in service';
  serviceHistory: string[];
};

export type Booking = {
  carRegistration: string;
  customerName: string;
  fromDate: string;
  toDate: string;
};

export type Customer = {
  name: string;
  documents: { type: 'CNIC' | 'license'; url: string; }[];
  rentalHistory: string[];
};

export const cars: Car[] = [
  { registration: 'XYZ-123', model: 'Toyota Camry', year: 2020, status: 'available', serviceHistory: ['Oil change', 'Tire rotation'] },
  { registration: 'ABC-456', model: 'Honda Accord', year: 2022, status: 'rented', serviceHistory: ['Brake check'] },
];

export const bookings: Booking[] = [
  { carRegistration: 'XYZ-123', customerName: 'Jane Smith', fromDate: '2023-10-01', toDate: '2023-10-05' },
];

export const customers: Customer[] = [
  {
    name: 'John Smith',
    documents: [
      { type: 'CNIC', url: 'http://example.com/cnic-john' },
      { type: 'license', url: 'http://example.com/license-john' }
    ],
    rentalHistory: ['XYZ-123', 'ABC-456']
  }
];