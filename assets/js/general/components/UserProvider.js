import  { Component } from "react";


export default class UserProvider extends Component {

// Context state
    state = {
        user: {},
    } ;

    constructor( props ) {
        super( props ) ;
        this.setUser = this.props.user ;
        this.testContext() ;
        console.log( userC)

    }

    testContext = () => {
        const { children } = this.props
        const { user } = this.state
        const { setUser } = this

        return (

            <UserContext.Provider
                value={{
                    user,
                    setUser,
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }

    // Method to update state
    setUser = (user) => {
        this.setState((prevState) => ({ user }))
    }

    render() {
        const { children } = this.props
        const { user } = this.state
        const { setUser } = this

        return (
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }
}

<UserProvider />