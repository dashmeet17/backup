import React from 'react'
import 'react-table/react-table.css'
import '../css/table.css'
import Form from '../components/form'
import Chart from '../components/chart'
import Table from '../components/table'
import ReactTable from 'react-table'
import {Provider} from 'react-redux' //provides store to the application
import store from '../redux/store'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class Index extends React.Component {

  render () {
    return (
      <Provider store={store}>
        <div>
          <Form/>
          <Table/>
        </div>
      </Provider>
    )
  }
}
