import PropTypes from "prop-types"
import Button from "./Button"


const Header = ({ title }) => {


    return (
        <header>
            <h1 className={"header"}>{title}
                <Button name={"Add"} color={"green"} />
            </h1>
        </header>

    )
}

//Setting the default props for the Header component
Header.defaultProps = {
    title: "Tile has not been given"
}

//Setting up the default props type
Header.propTypes = {
    title:PropTypes.string,

}
export default Header