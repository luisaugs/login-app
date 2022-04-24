
export const Button = ({ text = "Test button", onClick }) => {
    return (
        <button className="block w-full py-4 my-4 bg-[#2148C0] rounded text-white text-2xl" onClick={onClick}>
            {text}
        </button>
    )
}
