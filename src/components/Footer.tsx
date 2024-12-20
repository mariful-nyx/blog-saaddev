import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className="h-[600px] md:h-[400px] px-4 md:px-[10%] py-10 mt-[100px] border-t flex flex-col md:flex md:flex-row gap-12">
            
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col gap-2">
                    <strong className="text-xl pb-4">Services</strong>
                    <ul className="list-none flex flex-col gap-2">
                        <li><Link to="https://saadinsider.vercel.app/service/1/" target="__blank" className="font-semibold text-black hover:text-blue-600 no-underline hover:underline">Custom Software Development</Link></li>

                    </ul>
                </div>
                <div className="flex flex-col gap-2">
                    <strong className="text-xl pb-4">Projects</strong>
                    <ul className="list-none flex flex-col gap-2">
                        <li><Link to="https://mms-saadinsider.vercel.app/" target="__blank" className="font-semibold text-black hover:text-blue-600 no-underline hover:underline">MMS</Link></li>
                        <li><Link to="https://fin-saadinsider.vercel.app/" target="__blank" className="font-semibold text-black hover:text-blue-600 no-underline hover:underline">Fin</Link></li>
                        <li><Link to="https://ecom-saadinsider.vercel.app/" target="__blank" className="font-semibold text-black hover:text-blue-600 no-underline hover:underline">Ecom</Link></li>

                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Footer