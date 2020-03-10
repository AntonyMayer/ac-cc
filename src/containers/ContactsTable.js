import React, { useState, useEffect } from 'react';
import { Table } from '../components/Table';
import { User } from '../components/User';
import { CELL_TYPES } from '../components/Table/constants';
import { fetchResource } from '../utils/fetchResource';
import { RESOURCES } from '../utils/constants';

function TableContacts() {
  const [ isLoading, setLoading ] = useState(true);
  const [ rows, setRows ] = useState([]);
  const [ error, setError ] = useState({});

  const headers = [ 
    { id: 'contact', value: 'Contact' }, 
    { id: 'email', value: 'Email' },
    { id: 'phone', value: 'Phone' },
    { id: 'created', value: 'Created' },
  ];

  const transformData = contacts => contacts.map(({ 
    email, firstName, id, lastName, phone, cdate
  }) => ({
    id,
    row: [ 
      {
        id: `user_${id}`,
        type: CELL_TYPES.CUSTOM,
        value: {
          Component: User,
          props: {
            firstName, 
            lastName
          }
        }
      },
      {
        id: `email_${id}`,
        value: email
      },
      {
        id: `phone_${id}`,
        value: phone
      },
      {
        id: `created_${id}`,
        value: (new Date(cdate)).toLocaleString()
      }
    ]
  }));
  
  const fetchData = async () => {
    try {
      const { contacts } = await fetchResource(RESOURCES.CONTACTS);
      const parsedData = transformData(contacts);
      setRows(parsedData);
    } catch (e) {
      setError(e)
    }

    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  return <Table 
    isLoading={isLoading} 
    headers={headers} 
    rows={rows} 
    error={error} 
  />
}

export default TableContacts;