
export const Button = ({ text = "Test button", onClick }) => {
    return (
        <button className="block w-full py-4 my-4 bg-[#2148C0] rounded text-white text-2xl select-none hover:bg-[#2163c0]" onClick={onClick}>
            {text}
        </button>
    )
}
