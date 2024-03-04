import Heart from '../../atoms/heart/index'

const Header = () =>{

    return (
        <header className='flex gap-4 items-center justify-center p-5 border-b-2'>
            <Heart className='w-10' />

            <h1 className="text-2xl font-bold">Monitorador de frequência cardíaca</h1>
        </header>
    )
}

export default Header;