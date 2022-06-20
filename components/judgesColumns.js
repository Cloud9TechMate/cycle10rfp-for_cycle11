export const COLUMNS = [//this is an array of objects
    //each column is represented by an object in this array
    {
        Header: 'JUDGE',//we need a way to associate each column with the rows of data, for that we need to specify the accessor property for each column
        accessor: 'JUDGE'
    },

    {
        Header: 'DEPUTY COURT CLERK',
        accessor: 'DEPUTY_COURT_CLERK'

    },
    
    {
        Header: 'ROOM',
        accessor: 'ROOM'
    },

    {
        Header: 'PHONE',
        accessor: 'PHONE'
    },

    {
        Header: 'DEPARTMENT',
        accessor: 'DEPARTMENT'
    },
];