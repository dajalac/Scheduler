import React from 'react'
import SearchTable from '../components/search/SearchTable'
import TableAppts from '../components/table/TableAppts'
import './Home.css'

export default function Home() {
    return (
        <div className="home-screen">
            <div className="home-screen-searchMenu">
            <SearchTable/>
            </div>
            <div className="home-screen-table">
            <TableAppts/>
            </div>
           
        </div>
    )
}
