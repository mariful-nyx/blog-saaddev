const Camera = ({ className, stroke = "black", onClick }: { className?: string, stroke?: string, onClick?: () => void }) => {
    return (
        <svg className={className} onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 5C13.5 4.73478 13.3946 4.48043 13.2071 4.29289C13.0196 4.10536 12.7652 4 12.5 4H10.5L9 2H5L3.5 4H1.5C1.23478 4 0.98043 4.10536 0.792893 4.29289C0.605357 4.48043 0.5 4.73478 0.5 5V11C0.5 11.2652 0.605357 11.5196 0.792893 11.7071C0.98043 11.8946 1.23478 12 1.5 12H12.5C12.7652 12 13.0196 11.8946 13.2071 11.7071C13.3946 11.5196 13.5 11.2652 13.5 11V5Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 9.75C8.24264 9.75 9.25 8.74264 9.25 7.5C9.25 6.25736 8.24264 5.25 7 5.25C5.75736 5.25 4.75 6.25736 4.75 7.5C4.75 8.74264 5.75736 9.75 7 9.75Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
        </svg>


    )
}

export default Camera