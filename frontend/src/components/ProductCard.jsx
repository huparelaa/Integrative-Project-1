import { Link } from 'react-router-dom'
import like from '../assets/icons/like.png'
import cart from '../assets/icons/cart.png'


const MaxLength = 30; 

export function ProductCard({ Product }) {
    const truncatedName = Product.Name.length > MaxLength ? `${Product.Name.substring(0, MaxLength)}...` : Product.Name;

    function formatNumberWithCommas(input) {
        if (typeof input !== 'number') {
            input = parseFloat(input.replace(/,/g, ''));
        }
        return input.toLocaleString('es-ES'); // Cambia 'es-ES' a tu localización si es diferente
    }
    
    return (
        <div>
            {Product.ProductType == 'Libro' && (
                <div className="CardP">
                    <div className='imageProduct'>
                        <img src={Product.ImageUrl}></img>
                    </div>
                    <div className="info">
                        <span className='TitleCard'>{truncatedName}</span>
                        <span className='AuthorsCard'>{Product.book.Authors}</span>
                        <span className='PriceCard'>$ {formatNumberWithCommas(Product.Price)}</span>
                        <div className="iconsCard">
                            <Link to="/Mis-MeGusta">
                                <img className="navbar-item like-icon" src={like} alt="Me gusta" />
                            </Link>
                            <img className="navbar-item cart-icon" src={cart} alt="Carrito" />
                        </div>
                        <Link to={`/Productos/DetalleProducto/${Product.ProductId}`} state={{ Product: Product }}>
                            <span className="seeCard">Ver más</span>
                        </Link>
                    </div>
                </div>
            )}
            {Product.ProductType == "Instrumento Musical" && (
                <div className="CardP">
                    <div className='imageProduct'>
                        <img src={Product.ImageUrl}></img>
                    </div>
                    <div className="info">
                        <span className='TitleCard'>{truncatedName}</span>
                        <span className='AuthorsCard'>{Product.musical_instrument.Brand}</span>
                        <span className='PriceCard'>$ {formatNumberWithCommas(Product.Price)}</span>
                        <div className="iconsCard">
                            <Link to="/Mis-MeGusta">
                                <img className="navbar-item like-icon" src={like} alt="Me gusta" />
                            </Link>
                            <img className="navbar-item cart-icon" src={cart} alt="Carrito" />
                        </div>
                        <Link to={`/Productos/DetalleProducto/${Product.ProductId}`} state={{ Product: Product }}>
                            <span className="seeCard">Ver más</span>
                        </Link>
                    </div>
                </div>
            )}
            {Product.ProductType == "Tecnologia" && (
                <div className="CardP">
                    <div className='imageProduct'>
                        <img src={Product.ImageUrl}></img>
                    </div>
                    <div className="info">
                        <span className='TitleCard'>{truncatedName}</span>
                        <span className='AuthorsCard'>{Product.technology.Brand}</span>
                        <span className='PriceCard'>$ {formatNumberWithCommas(Product.Price)}</span>
                        <div className="iconsCard">
                            <Link to="/Mis-MeGusta">
                                <img className="navbar-item like-icon" src={like} alt="Me gusta" />
                            </Link>
                            <img className="navbar-item cart-icon" src={cart} alt="Carrito" />
                        </div>
                        <Link to={`/Productos/DetalleProducto/${Product.ProductId}`} state={{ Product: Product }}>
                            <span className="seeCard">Ver más</span>
                        </Link>
                    </div>
                </div>
            )}
            {Product.ProductType == "Juego de mesa" && (
                <div className="CardP">
                    <div className='imageProduct'>
                        <img src={Product.ImageUrl}></img>
                    </div>
                    <div className="info">
                        <span className='TitleCard'>{truncatedName}</span>
                        <span className='AuthorsCard'>{Product.table_game.Maker}</span>
                        <span className='PriceCard'>$ {formatNumberWithCommas(Product.Price)}</span>
                        <div className="iconsCard">
                            <Link to="/Mis-MeGusta">
                                <img className="navbar-item like-icon" src={like} alt="Me gusta" />
                            </Link>
                            <img className="navbar-item cart-icon" src={cart} alt="Carrito" />
                        </div>
                        <Link to={`/Productos/DetalleProducto/${Product.ProductId}`} state={{ Product: Product }}>
                            <span className="seeCard">Ver más</span>
                        </Link>
                    </div>
                </div>
            )}
        </div>

    )
}