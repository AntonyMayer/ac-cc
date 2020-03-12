import React, { useState, useEffect } from 'react';
import { Table } from '../components/Table';
import { User } from '../components/User';
import { CELL_TYPES } from '../components/Table/constants';
import { fetchResource, getContactValue, getContactTags, getLocation } from '../utils';
import { RESOURCES } from '../utils/constants';

const ContactsTable = () => {
  const [ isLoading, setLoading ] = useState(true);
  const [ rows, setRows ] = useState([]);
  const [ error, setError ] = useState(null);

  const headers = [ 
    { id: 'contact', value: 'Contact' }, 
    { id: 'total_value', value: 'Total Value' },
    { id: 'location', value: 'Location' },
    { id: 'deals', value: 'Deals' },
    { id: 'tags', value: 'Tags' }
  ];

  const transformData = (contacts, deals, contactTags, tags) => contacts.map(({ 
    firstName, id, lastName, deals: contactDeals, contactTags: currentTags, ip
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
        id: `total_value_${id}`,
        value: getContactValue(id, deals)
      },
      {
        id: `location_${id}`,
        value: getLocation(ip)
      },
      {
        id: `deals_${id}`,
        value: contactDeals.length
      },
      {
        id: `tags_${id}`,
        value: getContactTags(currentTags, contactTags, tags)
      }
    ]
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { contacts, deals, contactTags, tags } = await fetchResource(
          RESOURCES.CONTACTS,
          'include=deals,contactTags.tag,notes'
          // 'bounceLogs,contactAutomations,contactGoals,contactLogs,contactTags,contactDeals,fieldValues,notes,organization,plusAppend,trackingLogs,accountContacts'
        );
        const parsedData = transformData(contacts, deals, contactTags, tags);
        setRows(parsedData);
      } catch (e) {
        setError(e);
      }
  
      setLoading(false);
    };

    fetchData();
  }, []);

  return <Table 
    isLoading={isLoading} 
    headers={headers} 
    rows={rows} 
    error={error} 
  />
}

export default ContactsTable;