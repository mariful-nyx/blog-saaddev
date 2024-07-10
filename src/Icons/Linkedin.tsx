const Linkedin = ({ className, stroke = "black", onClick }: { className?: string, stroke?: string, onClick?: () => void }) => {
    return (
        <svg className={className} onClick={onClick} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4287_3094)">
                <path d="M3.57363 1.76698C3.57632 2.11276 3.44286 2.44571 3.20208 2.6939C2.96131 2.94208 2.63255 3.08557 2.28685 3.09336C1.94187 3.0807 1.61494 2.936 1.37361 2.68914C1.13229 2.44229 0.995018 2.11217 0.990173 1.76698C1.00517 1.43068 1.14748 1.11265 1.38827 0.877383C1.62905 0.642113 1.95029 0.507203 2.28685 0.5C2.62244 0.507337 2.94254 0.642582 3.18172 0.878085C3.4209 1.11359 3.5611 1.43156 3.57363 1.76698ZM1.12875 5.44916C1.12875 4.68699 1.61377 4.80577 2.28685 4.80577C2.95994 4.80577 3.43506 4.68699 3.43506 5.44916V12.8729C3.43506 13.645 2.95004 13.4866 2.28685 13.4866C1.62367 13.4866 1.12875 13.645 1.12875 12.8729V5.44916Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.43451 5.44927C5.43451 5.02364 5.59288 4.86527 5.84034 4.81578C6.0878 4.76628 6.93905 4.81578 7.236 4.81578C7.53295 4.81578 7.65173 5.30079 7.64183 5.66703C7.89584 5.32613 8.23308 5.05611 8.62129 4.8828C9.00949 4.70949 9.43567 4.6387 9.85906 4.6772C10.2748 4.65178 10.6913 4.71412 11.0814 4.86015C11.4714 5.00618 11.8265 5.23265 12.1233 5.52484C12.4202 5.81703 12.6522 6.1684 12.8044 6.55613C12.9566 6.94386 13.0255 7.35927 13.0067 7.77537V12.8433C13.0067 13.6154 12.5316 13.457 11.8585 13.457C11.1854 13.457 10.7103 13.6154 10.7103 12.8433V8.88399C10.7277 8.68021 10.7011 8.47508 10.6322 8.28252C10.5633 8.08996 10.4537 7.91448 10.311 7.768C10.1683 7.62152 9.99571 7.50747 9.805 7.43359C9.6143 7.35972 9.40993 7.32774 9.20577 7.33985C9.00256 7.33469 8.80057 7.37275 8.61317 7.45152C8.42578 7.53028 8.25725 7.64796 8.11875 7.79675C7.98026 7.94555 7.87494 8.12206 7.80979 8.31461C7.74464 8.50716 7.72113 8.71136 7.74082 8.91368V12.873C7.74082 13.6451 7.2558 13.4867 6.58271 13.4867C5.90963 13.4867 5.43451 13.6451 5.43451 12.873V5.44927Z" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_4287_3094">
                    <rect width="14" height="14" fill="white" />
                </clipPath>
            </defs>
        </svg>


    )
}

export default Linkedin