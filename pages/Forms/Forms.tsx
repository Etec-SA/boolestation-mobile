import { useState } from "react";
import SignForm from "./SignForm";
import LoginForm from "./LoginForm";
import React from "react";

const Forms = ({ redirectToApp }: { redirectToApp: (...args: any)=>void })=> {
    const [page, setPage] = useState<'SignIn' | 'SignUp'>('SignUp');

    function handlePageChange(pageName: typeof page){
        setPage(pageName);
    }

    return(
        <>
            {page === 'SignUp' ? <SignForm changePage={handlePageChange} redirectToMain={redirectToApp}/>: null}
            {page === 'SignIn' ? <LoginForm changePage={handlePageChange} redirectToMain={redirectToApp}/>: null}
        </>
    )
}

export default Forms;