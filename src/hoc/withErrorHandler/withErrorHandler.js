import React, { useState, useEffect } from 'react'
import { ModalWrap } from '../../components';


const withErrorHandler = (WrappedComponent, axios) => {

    return (props) => { 
        const [error, setError] = useState(null);
        
        
        useEffect(() => {
            const reqInterc = axios.interceptors.request.use(req => {
                setError(null)
                console.log("req..", req)
                return req;
            })

            const resInterc = axios.interceptors.response.use(res => {
                setError(error)
                console.log("..error..", error)
                throw error;
            })

            return () => {
                axios.interceptors.eject(reqInterc)
                axios.interceptors.eject(resInterc)
            }
        }, []);

        const handleErrorConfirmation = () => {
            setError(null);
        }

        return <>
            <ModalWrap title="Error Message" lgShow={error} setLgShow={handleErrorConfirmation}>
                {error && error.message}
            </ModalWrap>
            <WrappedComponent {...props} />
            </>
    }
}

export default withErrorHandler

// const NewWrappedComponent = (props) => {
//     return <div />
//   }

