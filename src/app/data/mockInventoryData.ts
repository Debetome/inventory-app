export const dummyInventoryItems = [
  {
    id: 1,
    name: 'Widget A',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category: {
      id: 1,
      name: 'Category A',
      description: 'Category for Widget A',
    },
    quantity: 50,
    price: 25.5,
    status: 'In Stock',
    supplier: {
      id: 1,
      name: 'Supplier X',
      contact_name: 'John Doe',
      email: 'john.doe@supplierx.com',
      phone: '123-456-7890',
      address: '123 Supplier St, Supplierland',
    },
    created_at: new Date('2023-01-15'),
    updated_at: new Date('2023-06-20'),
  },
  {
    id: 2,
    name: 'Gadget B',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    category: {
      id: 2,
      name: 'Category B',
      description: 'Category for Gadget B',
    },
    quantity: 20,
    price: 45.75,
    status: 'Low Stock',
    supplier: {
      id: 2,
      name: 'Supplier Y',
      contact_name: 'Jane Smith',
      email: 'jane.smith@suppliery.com',
      phone: '987-654-3210',
      address: '456 Supplier Ave, Suppliertown',
    },
    created_at: new Date('2023-02-28'),
    updated_at: new Date('2023-07-10'),
  },
  // Add more dummy data as needed
]

export const dummySuppliers = [
  {
    id: 1,
    name: 'ABC Supplies',
    contact_name: 'John Doe',
    email: 'john.doe@abcsupplies.com',
    phone: '+1234567890',
    address: '123 Supplier Street, Supplier City',
    created_at: new Date('2023-01-01T10:00:00Z'),
    updated_at: new Date('2023-01-01T12:00:00Z'),
  },
  {
    id: 2,
    name: 'XYZ Distributors',
    contact_name: 'Jane Smith',
    email: 'jane.smith@xyzdistributors.com',
    phone: '+1987654321',
    address: '456 Distributor Avenue, Distributor Town',
    created_at: new Date('2023-02-01T09:00:00Z'),
    updated_at: new Date('2023-02-01T11:00:00Z'),
  },
  {
    id: 3,
    name: 'Global Imports',
    contact_name: 'Michael Johnson',
    email: 'michael.johnson@globalimports.com',
    phone: '+1122334455',
    address: '789 Importer Road, Import City',
    created_at: new Date('2023-03-01T08:00:00Z'),
    updated_at: new Date('2023-03-01T10:00:00Z'),
  },
  // Add more dummy suppliers as needed
]
