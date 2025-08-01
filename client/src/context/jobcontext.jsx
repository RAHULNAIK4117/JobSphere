
import React,{createContext,useContext} from "react";


const Jobcontext = createContext();

export const Jobprovider =({children}) => {

    const title = ' Indian JobLelo';

    return(
        <Jobcontext.Provider value={{title}}>
            {children}
        </Jobcontext.Provider>


    );


}

export const usejob = () => useContext(Jobcontext);