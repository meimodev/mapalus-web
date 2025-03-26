/* eslint-disable @next/next/no-img-element */


export default function Page() {
    // noinspection HtmlUnknownTarget

    const imageUrl = "https://www.dropbox.com/scl/fi/bwuxk7kxoridt3irux7gr/bol-bol-waiting.jpg?rlkey=8ug4zvfn1wftf7eo5u55mxkbq&st=pnbcgcmi&dl=1"

        return (
            <div className="font-bold text-white h-screen">
                <div className={"h-full bg-no-repeat bg-contain bg-center " +
                    "bg-[url('https://www.dropbox.com/scl/fi/bwuxk7kxoridt3irux7gr/bol-bol-waiting.jpg?rlkey=8ug4zvfn1wftf7eo5u55mxkbq&st=pnbcgcmi&dl=1')]"}>
                </div>
            </div>
        );
    };
