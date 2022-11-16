import React, {useMemo} from "react";
import {useTable} from "react-table";
import { COLUMNS } from "../components/courtColumns";
import styles from '../styles/table.module.css';

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/courtApi");
    const court = await res.json();
    // console.log(court);
    return {
        props: {court},
    };
}

export default function Court ({court}) {
    console.log(court);
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => court, []);

    //CREATE A TABLE INSTANCE
    //useTable hook.. We pass in an object as argument 
    // columns: COLUMNS,//we specify two properties, columns and rows
    // data: MOCK_DATA
    
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,} = useTable({columns, data}); ///this object is in shorthand
    // console.log(headerGroups);
    // console.log(rows[0].id);
    console.log(rows)
    
    return(///TODO: fixed the error with the keys, but, need to make them unique keys.
        <div className={styles.table}>
            <table style={{width: "100%"}} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr key={1} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th key={column.id} {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>    
                    ))}
                    <tr style={{}}>
                        <th style={{}}></th>
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return <td key={4} {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                })}
                            </tr>
                        )
                    })}
                    <tr>
                        <td style={{}}></td>
                    </tr>
                </tbody>
            </table>
		</div>
    )
}