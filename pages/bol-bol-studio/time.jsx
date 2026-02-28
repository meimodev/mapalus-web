import React, {useMemo} from "react";
import dayjs from "dayjs";
import {Fade} from "react-awesome-reveal";
import {Strip} from "./package";
import {
    minutesSinceMidnight,
    timeOptions,
    withMinutesSinceMidnight,
} from "./config";

export async function getServerSideProps() {
    return {
        notFound: true,
    };
}

export default function TimeView({
    studioInfo = {},
    selectedDateTime = new Date(),
    onSelectDateTime = () => {
    },
    onContinue = () => {
    }
}) {
    const openMinutes = studioInfo?.openingHours?.openMinutes;
    const closeMinutes = studioInfo?.openingHours?.closeMinutes;
    const stepMinutes = studioInfo?.timeStepMinutes;
    const timezoneLabel = studioInfo?.timezoneLabel || "";

    const options = useMemo(() => {
        return timeOptions({
            openMinutes,
            closeMinutes,
            stepMinutes,
        });
    }, [openMinutes, closeMinutes, stepMinutes]);

    const selectedMinutes = selectedDateTime ? minutesSinceMidnight(selectedDateTime) : 0;

    const hasValidSelection =
        typeof openMinutes === "number" &&
        typeof closeMinutes === "number" &&
        selectedMinutes >= openMinutes &&
        selectedMinutes < closeMinutes;

    return (
        <div className="p-4 bg-blue-800 text-white w-full font-lemon">
            <Fade direction="up" triggerOnce>
                <div className="flex gap-6 overflow-clip my-4 justify-between items-center ">
                    <div className="grow-1 w-full ">
                        <h2 className="text-2xl font-lemon ">Pilih Jam</h2>
                        <p className="text-sm italic font-american">Pilih jam sesuai jam buka studio</p>
                    </div>
                    <div className="grow-0 overflow-clip  ">
                        <Strip length={51}/>
                    </div>
                </div>
            </Fade>

            <Fade direction="up" triggerOnce>
                <div className="mb-4 font-lemon">
                    <div className="text-sm text-blue-50">Tanggal</div>
                    <div className="text-lg">{dayjs(selectedDateTime).format("D MMMM YYYY")}</div>
                </div>
            </Fade>

            <Fade cascade damping={0.05} triggerOnce>
                <div className="grid grid-cols-3 gap-3 max-h-72 overflow-y-auto pr-1">
                    {options.map((m) => {
                        const isSelected = m === selectedMinutes;
                        const label = dayjs().startOf("day").add(m, "minute").format("HH:mm");

                        return (
                            <button
                                key={m}
                                onClick={() => {
                                    onSelectDateTime(withMinutesSinceMidnight(selectedDateTime, m));
                                }}
                                className={`transition duration-200 px-3 py-3 rounded-xl border-2 text-sm hover:scale-[0.98] active:scale-95
                                    ${isSelected ? "bg-white text-blue-800 border-amber-400" : "bg-blue-800 text-white border-white hover:bg-white hover:text-blue-800"}
                                `}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>
            </Fade>

            <Fade direction="up" triggerOnce>
                <div className="mt-6">
                    <div className="text-xs text-blue-50 mb-2">
                        {hasValidSelection ? (
                            <div>
                                Terpilih: {dayjs(selectedDateTime).format("HH:mm")} {timezoneLabel}
                            </div>
                        ) : (
                            <div>Pilih jam dulu yaaa</div>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            if (!hasValidSelection) {
                                alert("Silahkan pilih jam terlebih dahulu");
                                return;
                            }
                            onContinue();
                        }}
                        className="transition duration-200 w-full font-lemon bg-white text-blue-800 px-4 py-2 rounded-xl hover:bg-blue-800 hover:text-white border-2 focus:bg-blue-800 focus:text-white active:scale-[0.99]"
                    >
                        Lanjut
                    </button>
                </div>
            </Fade>
        </div>
    );
}
