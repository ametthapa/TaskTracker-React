import Button from './Button'

const Header = ( { title } ) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='add' />

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
