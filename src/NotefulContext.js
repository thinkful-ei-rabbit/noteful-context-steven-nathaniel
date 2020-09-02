import React from 'react';
import dummyStore from './dummy-store'

const NotefulContext = React.createContext({
    test: 'hello world!',
    hi: 'hi',
    folders: dummyStore.folders,
    notes: dummyStore.notes
});

export default NotefulContext;