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
import {collection, getDocs} from "firebase/firestore";
import {useRouter} from 'next/router'


dayjs.locale("id");

export async function getServerSideProps({req, res}) {


    let querySnapshot = await getDocs(collection(firestore, "bb_bookings"));

    let data = {bookingsData: [], packagesData: [], accountsData: [],};

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

    console.log(data);

    return {
        props: data,
    };
}

export default function Page({bookingsData, packagesData, accountsData}) {

    const carouselRef = useRef();
    const {phone, pin} = useRouter().query;

    const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState({});
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [bookings, setBookings] = useState(bookingsData);

    const [packages, setPackages] = useState(packagesData);

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
        if(!account) return;
        setIsAdmin(!!account);
        console.log(`Admin account ! ${account.phone} + ${account.name}`);

    }, []);

    const handleResetSelection = () => {
        setSelectedPackage({});
        setBookingDialogOpen(false);
    }

    return (
        <div className="bg-[#372f2d]">
            <Meta
                title="Bol-bol Studio"
                description="Bol bol studio menu"
                color="#1c1917"
                image="/esspecto-hori.png"
            />

            <Fade cascade triggerOnce>
                <div className="h-1/2 flex flex-col justify-center items-center text-stone-100 max-w-lg mx-auto">

                    <Carousel ref={carouselRef}>

                        <CalendarView
                            bookings={bookings}
                            isAdmin={isAdmin}
                            selectedDate={selectedDate}
                            onSelectDate={(date) => {
                                console.log(date);
                                carouselRef.current.next()
                            }}
                            onCancelBooking={(booking) => {
                                console.log(booking)
                            }}
                        />
                        <Package
                            packages={packages}
                            selectedPackage={selectedPackage}
                            onSelectPackage={(pkg) => {
                                setSelectedPackage(pkg);
                                console.log(pkg)
                                carouselRef.current.next();
                            }}/>

                        <ConfirmationView
                            onConfirmOrder={() => {
                                carouselRef.current.next()
                            }}
                            selectedDate={"20 Februari 2025"}
                            packageName={"Package 5 Orang"}
                            basePrice={"5000"}>
                        </ConfirmationView>
                        <FinishView onFinishOrder={() => {
                            carouselRef.current.first();
                            handleResetSelection();
                        }}>

                        </FinishView>

                    </Carousel>
                    {isAdmin ? <button
                        onClick={() => {
                            setBookingDialogOpen(true);
                        }}
                        className="w-full bg-amber-500 text-White px-4 py-2 rounded my-5 font-bold"
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
                        onSubmit={() => {
                            handleResetSelection();
                        }}/>
                </div>
            </Fade>

        </div>
    );
}

