
export default function FinishView({onFinishOrder}) {

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg max-w-sm w-full text-center">
                <h2 className="text-3xl font-bold mb-4">Thank You</h2>
                <p className="text-lg mb-4">
                    Pesanan anda telah diterima, anda akan dihubungi admin kami yaaa.
                </p>

                <button
                    onClick={onFinishOrder}
                    className="mt-4 bg-white text-blue-500 px-6 py-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Kembali
                </button>
            </div>
        </div>
    );
}
