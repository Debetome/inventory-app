export interface Supplier {
  id: number | string
  name: string
  contact_name: string
  email: string
  phone: string
  address: string
  created_at: Date
  updated_at: Date
}

const dummySuppliers: Supplier[] = [
  {
    id: 1,
    name: 'Acme Supplies',
    contact_name: 'John Doe',
    email: 'john.doe@acmesupplies.com',
    phone: '+1-800-555-1234',
    address: '123 Acme St, Springfield, IL, 62701',
    created_at: new Date('2023-01-01T10:00:00Z'),
    updated_at: new Date('2023-07-01T10:00:00Z'),
  },
  {
    id: 2,
    name: 'Global Tech',
    contact_name: 'Jane Smith',
    email: 'jane.smith@globaltech.com',
    phone: '+1-800-555-5678',
    address: '456 Global Blvd, San Francisco, CA, 94103',
    created_at: new Date('2023-02-15T12:30:00Z'),
    updated_at: new Date('2023-07-15T14:45:00Z'),
  },
  {
    id: 3,
    name: 'Supply Solutions',
    contact_name: 'Mike Johnson',
    email: 'mike.johnson@supplysolutions.com',
    phone: '+1-800-555-9876',
    address: '789 Solutions Rd, Austin, TX, 78701',
    created_at: new Date('2023-03-10T08:45:00Z'),
    updated_at: new Date('2023-07-10T09:15:00Z'),
  },
  {
    id: 'A4',
    name: 'Industrial Experts',
    contact_name: 'Emily Davis',
    email: 'emily.davis@industrialexperts.com',
    phone: '+1-800-555-6543',
    address: '321 Industrial Park, Denver, CO, 80201',
    created_at: new Date('2023-04-20T15:00:00Z'),
    updated_at: new Date('2023-07-20T16:30:00Z'),
  },
  {
    id: 'B5',
    name: 'Techno Trade',
    contact_name: 'Chris Brown',
    email: 'chris.brown@technotrade.com',
    phone: '+1-800-555-4321',
    address: '654 Techno Ln, Seattle, WA, 98101',
    created_at: new Date('2023-05-05T11:00:00Z'),
    updated_at: new Date('2023-07-05T12:00:00Z'),
  },
]
