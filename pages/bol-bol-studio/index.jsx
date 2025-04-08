/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import dayjs from "dayjs";
import CalendarView from "./calendar";
import Package from "./package";
import Carousel from "./carousel";
import React, {useEffect, useRef, useState} from "react";
import ConfirmationView from "./confirmation";
import FinishView from "./finish";
import BookingDialog from "./booking";
import {firestore} from "../../firebase";
import {collection, getDocs, getDoc, doc, setDoc, addDoc, deleteDoc} from "firebase/firestore";

import {useRouter} from 'next/router'
import HomeView from "./home";

dayjs.locale("id");

export async function getServerSideProps({req, res}) {


    let querySnapshot = await getDocs(collection(firestore, "bb_bookings"));

    let data = {bookingsData: [], packagesData: [], accountsData: [], addsOnData: []};

    querySnapshot.forEach((doc) => {
        const res = doc.data();

        data.bookingsData.push({
            ...res,
            start: res.start.toDate().getTime(),
            end: res.end.toDate().getTime(),
            booking_timestamp: res.booking_timestamp.toDate().getTime(),
        });
    });

    querySnapshot = await getDocs(collection(firestore, "bb_packages"));

    querySnapshot.forEach((doc) => {
        data.packagesData.push(doc.data());
    });

    querySnapshot = await getDocs(collection(firestore, "bb_accounts"));

    querySnapshot.forEach((doc) => {
        data.accountsData.push(doc.data());
    });

    const docRef = doc(firestore, "bb_adds", "adds");
    const docSnap = await getDoc(docRef);
    const {titles, prices} = docSnap.data();

    data.addsOnData = titles.map((title, index) => {
        return {
            title,
            price: prices[index]
        }
    });

    return {
        props: data,
    };
}

export default function Page({bookingsData, packagesData, accountsData, addsOnData}) {

    const carouselRef = useRef();
    const {phone, pin} = useRouter().query;

    const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [bookings, setBookings] = useState(bookingsData);

    const [packages] = useState(packagesData);

    const [addsOn] = useState(addsOnData);

    useEffect(() => {
        //check if phone or pin is in query

        if (!phone || !pin) {
            console.log('no account');
            return;
        }

        //filter accountsData using phone number
        const account = accountsData.find(function (account) {
            if (account.phone !== phone) {
                console.log('phone not found');
                return undefined;
            }
            if (account.pin !== pin) {
                console.log('pin mismatch');
                return undefined;
            }

            if (account.admin === false) {
                console.log("account not an admin");
                return undefined;
            }
            return account;

        });
        if (!account) return;
        setIsAdmin(!!account);
        console.log(`Admin account ! ${account.phone} + ${account.name}`);

    }, []);

    const handleResetSelection = () => {
        setSelectedPackage({});
        setSelectedDate(new Date());
        setBookingDialogOpen(false);
    }

    const handleOnAddBooking = async (booking) => {
        const docRef = await addDoc(collection(firestore, "bb_bookings"), booking);

        const updatedBooking = {...booking, id: docRef.id};

        await setDoc(doc(firestore, "bb_bookings", docRef.id), updatedBooking, {merge: true});

        setBookings([...bookings, updatedBooking]);

    }

    const handleOnCancelBooking = async (booking) => {

        await deleteDoc(doc(firestore, "bb_bookings", booking.id));

        setBookings(bookings.filter((b) => b.id !== booking.id));
    }

    const handleOpenWAorder = ({name, phone, date, "package" : pkg}) => {
        const adminPhone="6289503162551";

        const url = `https://api.whatsapp.com/send?phone=${adminPhone}&text=Bol-bol%20studio%2C%20%F0%9F%93%B7%20booking%20info%3A%0A%F0%9F%91%A4%20nama%3A%20${encodeURIComponent(name)}%0A%F0%9F%93%9E%20phone%3A%20${encodeURIComponent(phone)}%0A%F0%9F%93%85%20tanggal%20booking%3A%20${encodeURIComponent(date)}%0A%F0%9F%93%A6%20paket%3A%20${encodeURIComponent(pkg.name)}%0A%F0%9F%97%84%EF%B8%8F%20kapasitas%20paket%20%3A%20${encodeURIComponent(pkg.capacity)}%20orang%20%0A%F0%9F%91%8D%20--mohon%20menunggu%20konfirmasi%20admin--`;
        console.log(url)
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="bg-[#372f2d]">
            <Meta
                title="Bol-bol Studio"
                description="Self photo studio, bebaskan ekspresimu untuk mengabadikan momen-momen terindah, gunakan gaya suka-sukamu di Bol-bol Studio."
                color="#0545CE"
            />

            <Fade cascade triggerOnce>
                <div className="h-1/2 flex flex-col justify-center items-center text-stone-100 max-w-lg mx-auto">

                    <Carousel ref={carouselRef}>

                        <HomeView onClickBooking={() => {
                            handleResetSelection();
                            carouselRef.current.next();
                        }}/>

                        <CalendarView
                            bookings={bookings}
                            isAdmin={isAdmin}
                            selectedDate={selectedDate}
                            onCancelBooking={handleOnCancelBooking}
                            onSelectDate={(date) => {
                                setSelectedDate(date);
                                carouselRef.current.next()
                            }}/>

                        <Package
                            packages={packages}
                            selectedPackage={selectedPackage}
                            addsOn={addsOn}
                            onSelectPackage={(pkg) => {
                                setSelectedPackage(pkg);
                                carouselRef.current.next();
                            }}/>

                        <ConfirmationView
                            selectedDate={selectedDate}
                            selectedPackage={selectedPackage}
                            onConfirmOrder={(order) => {
                                carouselRef.current.next();



                              handleOpenWAorder(order);
                            }}/>

                        <FinishView onFinishOrder={() => {
                            carouselRef.current.first();
                            handleResetSelection();
                        }}/>

                    </Carousel>

                    {isAdmin ? <button
                        onClick={() => {
                            setBookingDialogOpen(true);
                        }}
                        className="w-full bg-blue-900 text-White px-4 py-2 font-bold"
                    >
                        [ADMIN] Add Booking
                    </button> : <></>}
                    <div className="pt-4">
                        <FooterDefault/>
                    </div>
                    <BookingDialog
                        packages={packages}
                        isOpen={bookingDialogOpen}
                        onClose={() => setBookingDialogOpen(false)}
                        onSubmit={handleOnAddBooking}/>
                </div>
            </Fade>

        </div>
    );
}

