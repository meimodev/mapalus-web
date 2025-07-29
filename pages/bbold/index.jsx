/* eslint-disable @next/next/no-img-element */
import FooterDefault from "../../comps/FooterDefault";
import {Fade} from "react-awesome-reveal";
import Meta from "../../comps/Meta";
import {useRouter} from "next/router";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination, Navigation} from "swiper";

export const _BuildMeta = () => {
    return (
        <Meta
            title="BBOLD MMXX Tondano | @bbold.mmxx"
            description="ALL PICTURE HAVE GOOD MOMENT TO REMEMBER"
            color="#372f2d"
            image="/bbold.png"
        />
    );
};

export const pictureData = [
    {
        //part 1
        label: "B2",
        href: "/bbold/b2",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_1.jpg?updatedAt=1753773305394",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_2.jpg?updatedAt=1753773298954",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_3.jpg?updatedAt=1753773298996",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_4.jpg?updatedAt=1753773306135",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_5.jpg?updatedAt=1753773309253",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_6.jpg?updatedAt=1753773313305",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_7.jpg?updatedAt=1753773312558",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_8.jpg?updatedAt=1753773285267",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_9.jpg?updatedAt=1753773285671",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_10.jpg?updatedAt=1753773285755",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_1_11.jpg?updatedAt=1753773286562",
        ],
    },
    {
        //part 2
        label: "B2",
        href: "/bbold/b2",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_1.jpg?updatedAt=1753773292151",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_2.jpg?updatedAt=1753773292058",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_3.jpg?updatedAt=1753773291866",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_4.jpg?updatedAt=1753773296052",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_5.jpg?updatedAt=1753773296115",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_6.jpg?updatedAt=1753773298561",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_7.jpg?updatedAt=1753773298990",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_8.jpg?updatedAt=1753773288669",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_9.jpg?updatedAt=1753773286586",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_2_10.jpg?updatedAt=1753773292097",
        ],
    },
    {
        //part 3
        label: "B2",
        href: "/bbold/b2",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_1.jpg?updatedAt=1753773302390",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_2.jpg?updatedAt=1753773306123",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_3.jpg?updatedAt=1753773302394",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_4.jpg?updatedAt=1753773312971",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_5.jpg?updatedAt=1753773309366",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_6.jpg?updatedAt=1753773306151",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_7.jpg?updatedAt=1753773309290",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_8.jpg?updatedAt=1753773281997",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_9.jpg?updatedAt=1753773279189",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_3_10.jpg?updatedAt=1753773285253"
        ],
    },

    {
        //part 4
        label: "B2",
        href: "/bbold/b2",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_1.jpg?updatedAt=1753773298558",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_2.jpg?updatedAt=1753773296047",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_3.jpg?updatedAt=1753773292983",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_5.jpg?updatedAt=1753773292185",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_6.jpg?updatedAt=1753773292118",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_7.jpg?updatedAt=1753773292095",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_8.jpg?updatedAt=1753773291833",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_9.jpg?updatedAt=1753773291840",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_4_10.jpg?updatedAt=1753773302392",
        ],
    },
    {
        //part 5
        label: "B2",
        href: "/bbold/b2",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_1.jpg?updatedAt=1753773306686",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_2.jpg?updatedAt=1753773312896",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_3.jpg?updatedAt=1753773312624",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_4.jpg?updatedAt=1753773306123",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_5.jpg?updatedAt=1753773305472",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_6.jpg?updatedAt=1753773298980",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_7.jpg?updatedAt=1753773298991",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_8.jpg?updatedAt=1753773286155",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B2%20POTRAIT/b2_part_5_9.jpg?updatedAt=1753773286377"
        ],
    },
    {
        //B4 Part 1
        label: "B4",
        href: "/bbold/b4",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_1.jpg?updatedAt=1753773279098",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_2.jpg?updatedAt=1753773278645",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_3.jpg?updatedAt=1753773278771",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_4.jpg?updatedAt=1753773271910",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_5.jpg?updatedAt=1753773271451",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_6.jpg?updatedAt=1753773271988",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_7.jpg?updatedAt=1753773278698",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_8.jpg?updatedAt=1753773260251",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_9.jpg?updatedAt=1753773260281",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_1_10.jpg?updatedAt=1753773278889",

            // another part
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_1.jpg?updatedAt=1753773278565",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_2.jpg?updatedAt=1753773279312",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_3.jpg?updatedAt=1753773278861",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_4.jpg?updatedAt=1753773272882",
        ],
    },
    {
        //B4 Part 2
        label: "B4",
        href:
            "/bbold/b4",
        images:
            [
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_1.jpg?updatedAt=1753773271741",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_2.jpg?updatedAt=1753773271751",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_3.jpg?updatedAt=1753773271734",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_4.jpg?updatedAt=1753773264928",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_5.jpg?updatedAt=1753773264905",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_6.jpg?updatedAt=1753773268440",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_7.jpg?updatedAt=1753773267145",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_8.jpg?updatedAt=1753773264427",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_9.jpg?updatedAt=1753773264445",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_10.jpg?updatedAt=1753773263996",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_11.jpg?updatedAt=1753773263472",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_12.jpg?updatedAt=1753773261776",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_13.jpg?updatedAt=1753773262279",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_14.jpg?updatedAt=1753773264063",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_2_15.jpg?updatedAt=1753773264116",

                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_5.jpg?updatedAt=1753773275165",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_6.jpg?updatedAt=1753773271944",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/B4/b4_part_3_7.jpg?updatedAt=1753773272238",

            ],
    },
    {
        //C
        label: "C",
        href:
            "/bbold/c",
        images:
            [
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_1.jpg?updatedAt=1753773325012",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_3.jpg?updatedAt=1753773325447",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_4.jpg?updatedAt=1753773327123",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_5.jpg?updatedAt=1753773327052",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_6.jpg?updatedAt=1753773328151",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_7.jpg?updatedAt=1753773327173",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_8.jpg?updatedAt=1753773320791",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_9.jpg?updatedAt=1753773323034",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_10.jpg?updatedAt=1753773323953",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_12.jpg?updatedAt=1753773323119",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_13.jpg?updatedAt=1753773323137",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_14.jpg?updatedAt=1753773324704",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_16.jpg?updatedAt=1753773324923",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_17.jpg?updatedAt=1753773324532",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/C/C_part_1_18.jpg?updatedAt=1753773325406"
            ],
    }
    ,
    {
        //lanyard index 8
        label: "Lanyard",
        href:
            "/bbold/lanyard",
        images:
            [
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_1.jpg?updatedAt=1753773318811",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_2.jpg?updatedAt=1753773318539",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_3.jpg?updatedAt=1753773316488",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_4.jpg?updatedAt=1753773320727",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_5.jpg?updatedAt=1753773319459",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_6.jpg?updatedAt=1753773320691",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_7.jpg?updatedAt=1753773320333",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_8.jpg?updatedAt=1753773316295",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_9.jpg?updatedAt=1753773316782",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_10.jpg?updatedAt=1753773313583",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard/Landyard_1_11.jpg?updatedAt=1753773313314",

                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard%20Key%20Chain/Landyard_KC_1_1.jpg?updatedAt=1753773242483",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard%20Key%20Chain/Landyard_KC_1_2.jpg?updatedAt=1753773242444",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard%20Key%20Chain/Landyard_KC_1_3.jpg?updatedAt=1753773242650",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Landyard%20Key%20Chain/Landyard_KC_1_4.jpg?updatedAt=1753773242530",
            ],
    },
    {
        //Pin another index
        label: "Pin",
        href:
            "/bbold/pin",
        images:
            [
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_1.jpg?updatedAt=1753773247691",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_2.jpg?updatedAt=1753773246090",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_3.jpg?updatedAt=1753773246077",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_4.jpg?updatedAt=1753773251416",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_5.jpg?updatedAt=1753773247297",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_6.jpg?updatedAt=1753773251490",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_7.jpg?updatedAt=1753773253635",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_8.jpg?updatedAt=1753773259725",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_9.jpg?updatedAt=1753773257782",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_10.jpg?updatedAt=1753773246002",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_11.jpg?updatedAt=1753773246100",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_12.jpg?updatedAt=1753773247274",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_13.jpg?updatedAt=1753773246227",
            ],
    }
    ,
    {
        //Pin index 10
        label: "Pin",
        href:
            "/bbold/pin",
        images:
            [
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_14.jpg?updatedAt=1753773253595",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_15.jpg?updatedAt=1753773252379",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_16.jpg?updatedAt=1753773247744",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_17.jpg?updatedAt=1753773247734",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_18.jpg?updatedAt=1753773254119",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_19.jpg?updatedAt=1753773253676",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_20.jpg?updatedAt=1753773260161",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_21.jpg?updatedAt=1753773259705",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_22.jpg?updatedAt=1753773259675",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_23.jpg?updatedAt=1753773260402",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_24.jpg?updatedAt=1753773253671",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_25.jpg?updatedAt=1753773253759",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_26.jpg?updatedAt=1753773257957",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_27.jpg?updatedAt=1753773259117",
                "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Pin/Pin_1_28.jpg?updatedAt=1753773253494",
            ],
    }
    ,
]

export default function Page() {
    const router = useRouter();

    const SwiperWrapper = ({
                               children,
                               label,
                               href,
                               className,
                               speed,
                               delay,
                               labelClassName = " w-12 h-12 ",
                           }) => {
        return (
            <Swiper
                onClick={() => {
                    if (href) {
                        router.push(href);
                    }
                }}
                speed={speed ? speed : 2000}
                pagination={{
                    dynamicBullets: false,
                    renderBullet: function (index, className) {
                        if (index === 0) {
                            return `<div class="bg-[#372f2d] opacity-80 cursor-default rounded-full mr-auto ml-4 text-center flex justify-center items-center ${labelClassName}">
              <span class="font-lemon text-xl drop-shadow-lg">${label}</span></div>`;
                        }
                        return "";
                    },
                }}
                autoplay={{
                    delay: delay ? delay : Math.floor(Math.random() * 10) * 600,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className={"mySwiper h-full w-full cursor-pointer " + className}
            >
                {children}
            </Swiper>
        );
    };


    const availablePictures = {
        label: "BBOLD",
        href: "",
        images: [
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Order/order_1_1.jpg?updatedAt=1753773242647",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Order/order_1_3.jpg?updatedAt=1753773242503",
            "https://ik.imagekit.io/geb6bfhmhx/bbold/web_images/Order/order_1_4.jpg?updatedAt=1753773242414",
        ],
    };

    return (
        <div className="h-full w-full bg-slate-800">
            <_BuildMeta/>

            <div className="h-full text-stone-100 max-w-lg mx-auto ">
                <main className="">
                    <div className="">
                        <div className="flex-col ">
                            <div className="pt-10 px-6">
                                <img src="/bbold.png" alt="bbold logo"/>

                            </div>

                            <Fade cascade triggerOnce>
                                <div className="h-[2rem]"></div>

                                <div className="flex h-[22rem]">
                                    <SwiperWrapper href={pictureData[7].href} label={pictureData[7].label}>
                                        {pictureData[7].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/* Pin */}
                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={pictureData[9].href} label={pictureData[9].label}>
                                        {pictureData[9].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={pictureData[10].href} label={pictureData[10].label}>
                                        {pictureData[10].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/* Lanyard */}
                                <div className="flex h-[22rem]">
                                    <SwiperWrapper
                                        href={pictureData[8].href}
                                        label={pictureData[8].label}
                                        labelClassName="w-[10rem] h-12"
                                    >
                                        {pictureData[8].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/*<div className="flex h-[13rem]">*/}
                                {/*    <SwiperWrapper href={data[0].href} label={data[0].label}>*/}
                                {/*        {data[0].images.map((e) => {*/}
                                {/*            return (*/}
                                {/*                <SwiperSlide*/}
                                {/*                    key={e}*/}
                                {/*                    style={{*/}
                                {/*                        background: `url(${e})`,*/}
                                {/*                        backgroundSize: "cover",*/}
                                {/*                    }}*/}
                                {/*                ></SwiperSlide>*/}
                                {/*            );*/}
                                {/*        })}*/}
                                {/*    </SwiperWrapper>*/}

                                {/*    <SwiperWrapper href={data[6].href} label={data[6].label}>*/}
                                {/*        {data[6].images.map((e) => {*/}
                                {/*            return (*/}
                                {/*                <SwiperSlide*/}
                                {/*                    key={e}*/}
                                {/*                    style={{*/}
                                {/*                        background: `url(${e})`,*/}
                                {/*                        backgroundSize: "cover",*/}
                                {/*                    }}*/}
                                {/*                ></SwiperSlide>*/}
                                {/*            );*/}
                                {/*        })}*/}
                                {/*    </SwiperWrapper>*/}
                                {/*</div>*/}

                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={pictureData[2].href} label={pictureData[2].label}>
                                        {pictureData[2].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={pictureData[3].href} label={pictureData[3].label}>
                                        {pictureData[3].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[22rem]">
                                    <SwiperWrapper href={pictureData[4].href} label={pictureData[4].label}>
                                        {pictureData[4].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                <div className="flex h-[13rem]">
                                    <SwiperWrapper href={pictureData[5].href} label={pictureData[5].label}>
                                        {pictureData[5].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>

                                    <SwiperWrapper href={pictureData[1].href} label={pictureData[1].label}>
                                        {pictureData[1].images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "cover",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>

                                {/* Availability  */}
                                <div className="flex h-screen px-2">
                                    <SwiperWrapper
                                        href={availablePictures.href}
                                        label={availablePictures.label}
                                        speed={2000}
                                        delay={1000}
                                        labelClassName="w-[7rem] h-12"
                                    >
                                        {availablePictures.images.map((e) => {
                                            return (
                                                <SwiperSlide
                                                    key={e}
                                                    style={{
                                                        background: `url(${e})`,
                                                        backgroundSize: "contain",
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                    }}
                                                ></SwiperSlide>
                                            );
                                        })}
                                    </SwiperWrapper>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </main>

                <Fade cascade triggerOnce>
                    <div className="mt-7 w-16 mx-auto">
                        <FooterDefault/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
