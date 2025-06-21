import {craeteContext} from 'react';

const Context = craeteContext();
export const UserContext = ({children}) => {
    const user = {
        name: "John Doe",
        phno:"1234564584"}
    return (
        <Context.Provider value={user}>
            {children}
        </Context.Provider>
    );
}
export default Context;