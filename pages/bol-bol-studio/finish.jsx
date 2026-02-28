
import {Fade} from "react-awesome-reveal";

export default function FinishView({onFinishOrder}) {

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-800 font-lemon text-white">
            <Fade direction="up" triggerOnce>
                <div className="bg-white text-blue-800 p-8 rounded-3xl shadow-lg max-w-sm w-full text-center border-2 border-blue-800">
                    <h2 className="text-3xl font-lemon mb-4">Thank You</h2>
                    <p className="text-sm font-american mb-4">
                        Pesanan anda telah diterima, anda akan dihubungi admin kami yaaa.
                    </p>

                    <button
                        onClick={onFinishOrder}
                        className="transition duration-200 mt-4 bg-blue-800 text-white px-6 py-2 rounded-xl hover:bg-white hover:text-blue-800 border-2 border-blue-800 active:scale-[0.99]"
                    >
                        Kembali
                    </button>
                </div>
            </Fade>
        </div>
    );
}
