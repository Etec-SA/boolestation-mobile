import { useState } from "react";
import SignForm from "./SignForm";
import LoginForm from "./LoginForm";

const Forms = ()=> {
    const [page, setPage] = useState<'SignIn' | 'SignUp'>('SignUp');

    function handlePageChange(pageName: typeof page){
        setPage(pageName);
    }

    return(
        <>
            {page === 'SignUp' ? <SignForm changePage={handlePageChange}/>: null}
            {page === 'SignIn' ? <LoginForm changePage={handlePageChange}/>: null}
        </>
    )
}

export default Forms;