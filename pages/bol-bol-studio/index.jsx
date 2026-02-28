/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import dayjs from "dayjs";
import CalendarView from "./calendar";
import TimeView from "./time";
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
import {BB_DEFAULTS, BB_FIRESTORE, minutesSinceMidnight, normalizeStudioInfo, startOfDay} from "./config";

dayjs.locale("id");

export async function getServerSideProps({req, res}) {


    let querySnapshot = await getDocs(collection(firestore, BB_FIRESTORE.BOOKINGS_COLLECTION));

    const bookingsData = [];
    const packagesData = [];
    const accountsData = [];
    let addsOnData = [];

    querySnapshot.forEach((docSnap) => {
        const res = docSnap.data();

        bookingsData.push({
            id: docSnap.id,
            ...res,
            start: res.start.toDate().getTime(),
            end: res.end.toDate().getTime(),
            booking_timestamp: res.booking_timestamp.toDate().getTime(),
        });
    });

    querySnapshot = await getDocs(collection(firestore, BB_FIRESTORE.PACKAGES_COLLECTION));
    querySnapshot.forEach((docSnap) => {
        packagesData.push({id: docSnap.id, ...docSnap.data()});
    });

    querySnapshot = await getDocs(collection(firestore, BB_FIRESTORE.ACCOUNTS_COLLECTION));
    querySnapshot.forEach((docSnap) => {
        accountsData.push({id: docSnap.id, ...docSnap.data()});
    });

    const addsDocRef = doc(firestore, BB_FIRESTORE.ADDS_COLLECTION, BB_FIRESTORE.ADDS_DOC_ID);
    const addsDocSnap = await getDoc(addsDocRef);
    if (addsDocSnap.exists()) {
        const {titles = [], prices = []} = addsDocSnap.data() || {};
        addsOnData = titles.map((title, index) => {
            return {
                title,
                price: prices[index]
            }
        });
    }

    const publicDocRef = doc(firestore, BB_FIRESTORE.PUBLIC_COLLECTION, BB_FIRESTORE.PUBLIC_DOC_ID);
    const publicDocSnap = await getDoc(publicDocRef);
    const publicStudioRaw = publicDocSnap.exists() ? publicDocSnap.data() : undefined;

    const studioInfo = {
        ...normalizeStudioInfo(publicStudioRaw),
        timeStepMinutes: BB_DEFAULTS.TIME_STEP_MINUTES,
        packages: packagesData,
        addsOn: addsOnData,
    };

    return {
        props: {bookingsData, accountsData, studioInfo},
    };
}


export default function Page({bookingsData, accountsData, studioInfo}) {

    const carouselRef = useRef();
    const {phone, pin} = useRouter().query;

    const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState({});
    const [selectedDateTime, setSelectedDateTime] = useState(startOfDay(new Date()));

    const [bookings, setBookings] = useState(bookingsData);

    const packages = studioInfo?.packages || [];
    const addsOn = studioInfo?.addsOn || [];

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

    }, [accountsData, phone, pin]);

    const handleResetSelection = () => {
        setSelectedPackage({});
        setSelectedDateTime(startOfDay(new Date()));
        setBookingDialogOpen(false);
    }

    const handleOnAddBooking = async (booking) => {
        const docRef = await addDoc(collection(firestore, BB_FIRESTORE.BOOKINGS_COLLECTION), booking);

        const updatedBooking = {...booking, id: docRef.id};

        await setDoc(doc(firestore, BB_FIRESTORE.BOOKINGS_COLLECTION, docRef.id), updatedBooking, {merge: true});

        setBookings([...bookings, updatedBooking]);

    }

    const handleOnCancelBooking = async (booking) => {

        await deleteDoc(doc(firestore, BB_FIRESTORE.BOOKINGS_COLLECTION, booking.id));

        setBookings(bookings.filter((b) => b.id !== booking.id));
    }

    const handleOpenWAorder = ({name, phone, dateTime, "package": pkg}) => {
        const adminPhone = studioInfo?.adminPhone || "";

        const bookingDate = dayjs(dateTime).format("DD MMMM YYYY");
        const bookingTime = `${dayjs(dateTime).format("HH:mm")} ${studioInfo?.timezoneLabel || ""}`.trim();

        const url = `https://api.whatsapp.com/send?phone=${adminPhone}&text=Bol-bol%20studio%2C%20%F0%9F%93%B7%20booking%20info%3A%0A%F0%9F%91%A4%20nama%3A%20${encodeURIComponent(name)}%0A%F0%9F%93%9E%20phone%3A%20${encodeURIComponent(phone)}%0A%F0%9F%93%85%20tanggal%20booking%3A%20${encodeURIComponent(bookingDate)}%0A%F0%9F%95%92%20jam%20booking%3A%20${encodeURIComponent(bookingTime)}%0A%F0%9F%93%A6%20paket%3A%20${encodeURIComponent(pkg.name)}%0A%F0%9F%97%84%EF%B8%8F%20kapasitas%20paket%20%3A%20${encodeURIComponent(pkg.capacity)}%20orang%20%0A%F0%9F%91%8D%20--mohon%20menunggu%20konfirmasi%20admin--`;
        console.log(url)
        const win = window.open(url, '_blank');
        win.focus();
    }

    return (
        <div className="bg-[#372f2d]">
            <Meta
                title="Bol-bol Studio"
                description="Self photo studio, bebaskan ekspresimu untuk mengabadikan momen-momen terindah, gunakan gaya suka-sukamu di Bol-bol Studio."
                color="##1e40af"
            />

            <Fade cascade triggerOnce>
                <div className="h-1/2 flex flex-col justify-center items-center text-stone-100 max-w-lg mx-auto">

                    <Carousel ref={carouselRef}>

                        <HomeView studioInfo={studioInfo} onClickBooking={() => {
                            handleResetSelection();
                            carouselRef.current.next();
                        }}/>

                        <CalendarView
                            bookings={bookings}
                            isAdmin={isAdmin}
                            selectedDate={selectedDateTime}
                            onCancelBooking={handleOnCancelBooking}
                            onSelectDate={(date) => {
                                setSelectedPackage({});
                                setSelectedDateTime(startOfDay(date));
                                carouselRef.current.next()
                            }}/>

                        <TimeView
                            studioInfo={studioInfo}
                            selectedDateTime={selectedDateTime}
                            onSelectDateTime={(dateTime) => {
                                setSelectedDateTime(dateTime);
                            }}
                            onContinue={() => {
                                carouselRef.current.next();
                            }}
                        />

                        <Package
                            studioInfo={studioInfo}
                            onSelectPackage={(pkg) => {
                                const durationMinutes = Number(pkg?.duration || 0);
                                const startMinutes = minutesSinceMidnight(selectedDateTime);
                                const endMinutes = startMinutes + durationMinutes;
                                const closeMinutes = studioInfo?.openingHours?.closeMinutes;

                                if (
                                    durationMinutes > 0 &&
                                    typeof closeMinutes === "number" &&
                                    endMinutes > closeMinutes
                                ) {
                                    alert("Waktu yang dipilih melebihi jam tutup studio");
                                    return;
                                }

                                setSelectedPackage(pkg);
                                carouselRef.current.next();
                            }}/>

                        <ConfirmationView
                            studioInfo={studioInfo}
                            selectedDateTime={selectedDateTime}
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
                        studioInfo={studioInfo}
                        isOpen={bookingDialogOpen}
                        onClose={() => setBookingDialogOpen(false)}
                        onSubmit={handleOnAddBooking}/>
                </div>
            </Fade>

        </div>
    );
}

