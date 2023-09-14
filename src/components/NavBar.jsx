export default function NavBar() {
    return (
        <div className="NavBar">
            <button className="menu-button">
                <img src="./src/assets/icons/menu.svg" />
            </button>
            <img src="./src/assets/icons/logo.svg" className="logo-image" />
            <button className="search-button">
                <img src="./src/assets/icons/search.svg" />
            </button>
        </div>
    )
}