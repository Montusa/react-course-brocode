import PropTypes from 'prop-types';

function UserGreeting({isLoggedIn=false, username="Guest"}){
    
    const welcomemMessage = <h2 className="welcome-message">
                            Welcome {username}
                            </h2>

    const loginPrompt = <h2 className="login-prompt">
                        Log in to continue
                        </h2>

    return( isLoggedIn ? welcomemMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

export default UserGreeting