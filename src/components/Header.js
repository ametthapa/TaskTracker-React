import Button from './Button'
import { useLocation } from "react-router"
const Header = ( { title, onAdd, showAdd } ) => {
    const location = useLocation()
    return (

        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                    color={!showAdd ? 'steelBlue' : 'red'}
                    text={!showAdd ? 'Add' : 'CLose'} 
                    onClick={onAdd} 
                />
            )}

        </header>
    )
}

Header.defaultProps ={
    title:'Task Tracker',
}

// const heading1Style ={
//     color:'red',
//     backgroundColor:'black'
// }

export default Header
