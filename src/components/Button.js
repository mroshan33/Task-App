import PropTypes from "prop-types"
const Button = ({ name, color, onClick }) => {


    return (
        <>
            <button style={{ backgroundColor: color }} className="btn"
                onClick={onClick}>{name}</button>
        </>
    )
}

//Default action for button
const defaultOnClick = () => {
    alert("No action has been assigned to the button")
}

//Setting up the default props
Button.defaultProps = {
    name: 'Button',
    color: 'red',
    onClick: defaultOnClick(),
}

//Setting up the default prop's type
Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button