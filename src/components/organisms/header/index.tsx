import Heart from '../../atoms/heart/index'

const Header = () =>{

    return (
        <header className='flex '>
            <Heart className='w-10' />

            <h1 className="text-2xl font-bold">Monitorador de frequência cardíaca</h1>
        </header>
    )
}

export default Header;