
export const Button = ({ text = "Test button" }) => {
    return (
        <button className="block w-full py-4 my-4 bg-[#2148C0] rounded text-white text-2xl">
            {text}
        </button>
    )
}
