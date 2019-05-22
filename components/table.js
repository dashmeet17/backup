import React, { useState, useEffect } from 'react';
import '../css/table.css'
import ReactTable from 'react-table'
import axios from 'axios'
import { fetchTrxnAction } from '../redux/actions/transactionActions.js'
import { useDispatch } from 'react-redux';

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionID'
  },
  {
    Header: 'User Name',
    accessor: 'username'
  },
  {
    Header: 'Payment Mode',
    accessor: 'paymentMode'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  }
];

const Table = () => {
  const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();
  const fetchTransactions = (trxn) => dispatch(fetchTrxnAction());

  return (
      <ReactTable
        className="container jumbotron trxnTable table-bordered"
        data={transactions}
        columns={columns}
        defaultPageSize={10}
      />
  )
};

export default Table;
