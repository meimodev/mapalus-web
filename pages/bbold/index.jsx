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
                        if (index == 0) {
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

    const data = [
        {
            //part 1
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/vegj4izvc34lnl5ck49qx/b2_part_1_1.jpg?rlkey=pe7eo6h73b9dvrp9do7ptkwjy&dl=1",
                "https://www.dropbox.com/scl/fi/65g4ywn6crom782us3t1e/b2_part_1_2.jpg?rlkey=3en11ercklau2pid9y7hw2nfw&dl=1",
                "https://www.dropbox.com/scl/fi/syye4v9xri0owl1irle98/b2_part_1_3.jpg?rlkey=nggqtslfzpabd3l0cxsbckugi&dl=1",
                "https://www.dropbox.com/scl/fi/b0v2lk7so128qmxc3auqb/b2_part_1_4.jpg?rlkey=ohb15rd8fnimzwzs49m5qqo6f&dl=1",
                "https://www.dropbox.com/scl/fi/zivdrrm4nznq6qcyztdex/b2_part_1_5.jpg?rlkey=80kcl32j0xkj5wmi1fvsd58rp&dl=1",
                "https://www.dropbox.com/scl/fi/5d13fzf7i13n1spy9do82/b2_part_1_6.jpg?rlkey=dk8edp3r2hp1ka38zmiuqikdb&dl=1",
                "https://www.dropbox.com/scl/fi/wclfzznbt4r4pn3wngvz1/b2_part_1_7.jpg?rlkey=l8l7x2e3abf3s16vyudxwdkju&dl=1",
                "https://www.dropbox.com/scl/fi/ojj1xf9tdi63r5cvwlnwh/b2_part_1_8.jpg?rlkey=lzi60i48wmbdlq9s6q3g5htm5&dl=1",
                "https://www.dropbox.com/scl/fi/svbnzcpb2eurzmr3sgvls/b2_part_1_9.jpg?rlkey=6bnfw0zd8uwq6v8jjbhshg7ux&dl=1",
                "https://www.dropbox.com/scl/fi/syzg1a4ixra28x39mah9r/b2_part_1_10.jpg?rlkey=nhfbx3d9igf6u2b95fmmcgwdu&dl=1",
                "https://www.dropbox.com/scl/fi/keay0d64asg1pfc4sxz51/b2_part_1_11.jpg?rlkey=ffgmkdhwtljo3takd5pwhtw8r&dl=1",
            ],
        },
        {
            //part 2
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/fumrwmpsbnq3kb6k8swvi/b2_part_2_1.jpg?rlkey=xn65gs28umdg34e6sothaq30t&dl=1",
                "https://www.dropbox.com/scl/fi/wo8slk2w1l1o31bkm4o4o/b2_part_2_2.jpg?rlkey=k4mq8390rrsfcw2g0d2p2a79l&dl=1",
                "https://www.dropbox.com/scl/fi/ifdwhbw6xhv2y0qbmtum5/b2_part_2_3.jpg?rlkey=5kevakoa1nqsbkjhor59dq99a&dl=1",
                "https://www.dropbox.com/scl/fi/ew5v3bftc76glyl2jwmk6/b2_part_2_4.jpg?rlkey=129ode3c96eur668yc9ty651k&dl=1",
                "https://www.dropbox.com/scl/fi/nvwgcufsocmajxzjy9x6o/b2_part_2_5.jpg?rlkey=gid62qvos5bzu76rmpr3gxn7p&dl=1",
                "https://www.dropbox.com/scl/fi/sbsl6nv0zaw6t6f6m7axl/b2_part_2_6.jpg?rlkey=tykpsd98ncrc2fqhxlyifsl9v&dl=1",
                "https://www.dropbox.com/scl/fi/s5rcau3nl408r87mb5o43/b2_part_2_7.jpg?rlkey=n1wrppl7ri7qj8s5mikhzz8om&dl=1",
                "https://www.dropbox.com/scl/fi/yo5p5q5743qo0l2gmgbf1/b2_part_2_8.jpg?rlkey=u4jvdcmoujkvjtizj5nm51y8u&dl=1",
                "https://www.dropbox.com/scl/fi/v925pg903gtluqbiqgxhl/b2_part_2_9.jpg?rlkey=ecjs0kqvbft1w5oufs8mycjp9&dl=1",
                "https://www.dropbox.com/scl/fi/bux17pyho48wla20vpbn8/b2_part_2_10.jpg?rlkey=5gzrv19cgg44qp4jd7612ytnm&dl=1",
            ],
        },
        {
            //part 3
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/lhcvvphp9yl8x97scewez/b2_part_3_1.jpg?rlkey=o1dhs7f2uvwpsh499lenuz9cd&dl=1",
                "https://www.dropbox.com/scl/fi/6yf02ycheu6hc2g2106rd/b2_part_3_2.jpg?rlkey=0awrf93zq0j9a4yejmenuccm9&dl=1",
                "https://www.dropbox.com/scl/fi/qcungeqaw03whnkjqr5w4/b2_part_3_3.jpg?rlkey=992brod970k1g2lgr4q4klkzx&dl=1",
                "https://www.dropbox.com/scl/fi/1yuwzpr4n83wxx9ghuipp/b2_part_3_4.jpg?rlkey=teuyj16f9dttjlvqlfvuo2g9l&dl=1",
                "https://www.dropbox.com/scl/fi/rramd25g47xxdss4khocg/b2_part_3_5.jpg?rlkey=0g3r3uoo9mricep4wfrtq4f6i&dl=1",
                "https://www.dropbox.com/scl/fi/mboqrijc0rmadrfc5sb9p/b2_part_3_6.jpg?rlkey=c6sagycv9n02n1nihs5zztgxy&dl=1",
                "https://www.dropbox.com/scl/fi/jkql9ako8aajv8r4di7lb/b2_part_3_7.jpg?rlkey=wbmt6or33dsvn9qepq2egzbcz&dl=1",
                "https://www.dropbox.com/scl/fi/n46tcazyqv333h6j28ss7/b2_part_3_8.jpg?rlkey=r6a62nceoa06ikdqtfcrpv2dr&dl=1",
                "https://www.dropbox.com/scl/fi/p2rba1sjinz5a91h6qvx9/b2_part_3_9.jpg?rlkey=l3krdf7x2o7bdaptwhm0ig762&dl=1",
                "https://www.dropbox.com/scl/fi/vbngy9gu07mcg7ltw886z/b2_part_3_10.jpg?rlkey=b3tttpb3nsg1smpmxpx53vna0&dl=1",
            ],
        },

        {
            //part 4
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/xu329mgfjbimmvg2aas4r/b2_part_4_1.jpg?rlkey=vgnj71eqdad28deq0yoquat2u&dl=1",
                "https://www.dropbox.com/scl/fi/yyezypn52zj9tgk23yzjy/b2_part_4_2.jpg?rlkey=dnrwu54i9dcdj23sqy4dsz8wx&dl=1",
                "https://www.dropbox.com/scl/fi/zvbcakwyxvfyof8zy48ew/b2_part_4_3.jpg?rlkey=akodej1kwp27b0l6s9ohiysg4&dl=1",
                "https://www.dropbox.com/scl/fi/dhzorl8exmtcq3818jj9w/b2_part_4_5.jpg?rlkey=liszol69q5e5bivyo6l6maq55&dl=1",
                "https://www.dropbox.com/scl/fi/20e9b4rgsarz397s96y3v/b2_part_4_6.jpg?rlkey=doq6g9uauferwvhkm8zs3uaka&dl=1",
                "https://www.dropbox.com/scl/fi/fppw1dnr83639hnpgqiv2/b2_part_4_7.jpg?rlkey=uxipn4s1tkid0eqfkgvfdja2v&dl=1",
                "https://www.dropbox.com/scl/fi/h05af7h0jdg2v072l8jim/b2_part_4_8.jpg?rlkey=oi645qgjr32zxr6vhjqx18vi4&dl=1",
                "https://www.dropbox.com/scl/fi/pybj3j9janjwme932age6/b2_part_4_9.jpg?rlkey=69fp5irxqzuix8vzztq3gjstz&dl=1",
                "https://www.dropbox.com/scl/fi/geiczpufumwh605v3sxlg/b2_part_4_10.jpg?rlkey=41jjwn2920xdow2y5af06atst&dl=1",
            ],
        },
        {
            //part 5
            label: "B2",
            href: "/bbold/b2",
            images: [
                "https://www.dropbox.com/scl/fi/k1p7xs7dcx27pt2ww528v/b2_part_5_1.jpg?rlkey=f6lvegjvuv5jbu4ku5g18zpkx&dl=1",
                "https://www.dropbox.com/scl/fi/41gedyu7m3wicv7x7pyfg/b2_part_5_2.jpg?rlkey=o2tv8kq5l8idfecf82a2qvcpu&dl=1",
                "https://www.dropbox.com/scl/fi/h7n1tjtvu7q49h3prasns/b2_part_5_3.jpg?rlkey=c9nyysb0ica9zrb0ksw4nvyat&dl=1",
                "https://www.dropbox.com/scl/fi/q21f91ilan7vciheydi81/b2_part_5_4.jpg?rlkey=h1pgubaxtglgv3crv7ylvyh80&dl=1",
                "https://www.dropbox.com/scl/fi/7n8l4p81xjzd79h9ruptx/b2_part_5_5.jpg?rlkey=lobqj40qko7wojr4gphn5f4m0&dl=1",
                "https://www.dropbox.com/scl/fi/ovtk788j7cdydn2e19lq3/b2_part_5_6.jpg?rlkey=e3ry8pzvmjg2kzdedkffu0e2i&dl=1",
                "https://www.dropbox.com/scl/fi/brymg696fvbpct9173sqo/b2_part_5_7.jpg?rlkey=84xebd8c3u9w8vzc66mjcntao&dl=1",
                "https://www.dropbox.com/scl/fi/7jr4kf41aww8ufp3rgfsy/b2_part_5_8.jpg?rlkey=v2qeydrr4tevu4cfcey59g1gy&dl=1",
                "https://www.dropbox.com/scl/fi/2yjmcmqpislnjxlgvwjp8/b2_part_5_9.jpg?rlkey=6d54x1bq9n9z31bykc57yhgyk&dl=1",
            ],
        },
        {
            //B4 Part 1
            label: "B4",
            href: "/bbold/b4",
            images: [
                "https://www.dropbox.com/scl/fi/jnal15axj768a6owx96cl/b4_part_1_1.jpg?rlkey=5y9n1eq546nvkxsyk0pxrgnvp&dl=1",
                "https://www.dropbox.com/scl/fi/3b7amtj6cawvyn3suo360/b4_part_1_2.jpg?rlkey=k7yeslyssrw17c5dc0ct0gnyb&dl=1",
                "https://www.dropbox.com/scl/fi/fhykyl32c6939crrl9hoq/b4_part_1_3.jpg?rlkey=twuik6dnuvotcc7hnwmsehuls&dl=1",
                "https://www.dropbox.com/scl/fi/696bmvfgmycgvitlw4nvx/b4_part_1_4.jpg?rlkey=9e0cil0rkoe9q809mz5xf3m39&dl=1",
                "https://www.dropbox.com/scl/fi/zqnst7tre6kr41rw67s4s/b4_part_1_5.jpg?rlkey=jteglep7imgod8iyzab9uyzko&dl=1",
                "https://www.dropbox.com/scl/fi/u9l2xnd0uq23qhas8u0y7/b4_part_1_6.jpg?rlkey=qjjxmirt49w1fdxjtycd8ycr9&dl=1",
                "https://www.dropbox.com/scl/fi/tn7lj0zk8bblbvfc4dvmj/b4_part_1_7.jpg?rlkey=h6mgd8q5nngeby1qapekbkmgn&dl=1",
                "https://www.dropbox.com/scl/fi/mm0i144ex2bcm7na9is1f/b4_part_1_8.jpg?rlkey=w9caujc3oy8kzdl760lkhdxev&dl=1",
                "https://www.dropbox.com/scl/fi/wc5h6lgok79btzt6zzde9/b4_part_1_9.jpg?rlkey=43sw2zxzjdh5wrs23dzbjxbi4&dl=1",
                "https://www.dropbox.com/scl/fi/f8moijcnmhwujqfda566h/b4_part_1_10.jpg?rlkey=pswskw7omw2u1e7y6dso28pkx&dl=1",
                //another part
                "https://www.dropbox.com/scl/fi/zcn1hg2agtpsg4bwyemnv/b4_part_3_1.jpg?rlkey=fio7vr5t2tb10gkj0nhvlrr85&dl=1",
                "https://www.dropbox.com/scl/fi/sq6mac161k5ge3hb4n715/b4_part_3_2.jpg?rlkey=ajjhfdo4v60xdt8ny6j5oq2t5&dl=1",
                "https://www.dropbox.com/scl/fi/089erpjpbnr1xbor9p5cz/b4_part_3_3.jpg?rlkey=9ies4mpqv6bepyvawye5u6z6q&dl=1",
                "https://www.dropbox.com/scl/fi/z2wib1s5ocau71mmaabri/b4_part_3_4.jpg?rlkey=oaa5gz8weilhyf57az61hebd7&dl=1",
            ],
        },
        {
            //B4 Part 2
            label: "B4",
            href: "/bbold/b4",
            images: [
                "https://www.dropbox.com/scl/fi/aqobab99ea9d56lxfvtfn/b4_part_2_1.jpg?rlkey=mzk2n08dt4dvmhhmn9xwi9gwa&dl=1",
                "https://www.dropbox.com/scl/fi/sxfycxkqlqxsjhmewui4m/b4_part_2_2.jpg?rlkey=kemnmshwbbv6k8e5fej1vjxq9&dl=1",
                "https://www.dropbox.com/scl/fi/65fr4qg623rxd1rmlf62e/b4_part_2_3.jpg?rlkey=nr2zuh5wbxj7jt8qcwm2owvll&dl=1",
                "https://www.dropbox.com/scl/fi/8jiavfzri5beno5akw3s2/b4_part_2_4.jpg?rlkey=zp13isp3y3u2slhbwf0pfe09o&dl=1",
                "https://www.dropbox.com/scl/fi/tbfsgzo36mxlva1pwzrtj/b4_part_2_5.jpg?rlkey=yzeogtbcl5w1zyduxn9hnhxfe&dl=1",
                "https://www.dropbox.com/scl/fi/lxuxt4bi4juzllu04xcph/b4_part_2_6.jpg?rlkey=t2kya6hrypc5jp29f2rhpgd6q&dl=1",
                "https://www.dropbox.com/scl/fi/86pd0vcuywfamuibsa446/b4_part_2_7.jpg?rlkey=q73dvnt7v7891ggevbdnb94dw&dl=1",
                "https://www.dropbox.com/scl/fi/euhr98b5lins5qqv4mzit/b4_part_2_8.jpg?rlkey=wxw0djym6hed09j4bj3u2d80w&dl=1",
                "https://www.dropbox.com/scl/fi/2o1t9wq6039b9itiw7903/b4_part_2_9.jpg?rlkey=m4akba7yqfnuwm1pb4ajv30j2&dl=1",
                "https://www.dropbox.com/scl/fi/i2f100bv3qdrexsu7nm8f/b4_part_2_10.jpg?rlkey=ex0vml2963pzr3evzir3j3weu&dl=1",
                "https://www.dropbox.com/scl/fi/bc6zmnyhpkwhipqwt2pkz/b4_part_2_11.jpg?rlkey=xd2kb59zkrz0s9qofzxvurcvg&dl=1",
                "https://www.dropbox.com/scl/fi/9aapzsf6xa3y5fvupbyif/b4_part_2_12.jpg?rlkey=em8cwiorzropepab0al1wkguc&dl=1",
                "https://www.dropbox.com/scl/fi/28i11os43xmgmip0mvbfn/b4_part_2_13.jpg?rlkey=lexi0k48x3su2pyq5og61dsrt&dl=1" +
                "https://www.dropbox.com/scl/fi/q7qeupape3z9o2udv4v93/b4_part_2_14.jpg?rlkey=uvn5w2pgqmogkwxkx1g91fjmc&dl=1",
                "https://www.dropbox.com/scl/fi/k0dq1kl5y8zz6bxu5awof/b4_part_2_15.jpg?rlkey=tlyo1ql6gznoqeulreq3u0lfm&dl=1",
                //another part
                "https://www.dropbox.com/scl/fi/v1p1nndhl2aocc6yh2jq0/b4_part_3_5.jpg?rlkey=nx0oudgzhcdhdwv48n4tmjwcq&dl=1",
                "https://www.dropbox.com/scl/fi/o2qetk3e89zoibjd52wxd/b4_part_3_6.jpg?rlkey=7cxvi9oub7689s5ikp1hgeqn3&dl=1",
                "https://www.dropbox.com/scl/fi/zdss68l7j6l4w06rsaf33/b4_part_3_7.jpg?rlkey=83cu9e82q067trcpnj8x1t8bp&dl=1",

            ],
        },
        {
            //C
            label: "C",
            href: "/bbold/c",
            images: [
                "https://www.dropbox.com/scl/fi/k6ytubl5m8g76i2fy21y5/C_part_1_1.jpg?rlkey=xgyj8ovvxxgqxjjq3s44s4qps&dl=1",
                "https://www.dropbox.com/scl/fi/htm0gzsz0mt5ly8nh90o8/C_part_1_3.jpg?rlkey=tbpovek1kb3btirvo8tvo0ood&dl=1",
                "https://www.dropbox.com/scl/fi/fv5gj7oq8r5kgypzsf5qv/C_part_1_4.jpg?rlkey=h4hkbpw04c0waaxbq8r2f82de&dl=1",
                "https://www.dropbox.com/scl/fi/xxncke9d1gqhffl14sjaa/C_part_1_5.jpg?rlkey=ufqbs8golufeojeet2qv4irdb&dl=1",
                "https://www.dropbox.com/scl/fi/x1qcgvn8utvqsp58f9kf1/C_part_1_6.jpg?rlkey=jqejl5hovp3syu6h3jmwcwuh6&dl=1",
                "https://www.dropbox.com/scl/fi/qr0wah1js4lnsca5ggtyh/C_part_1_7.jpg?rlkey=2a7a2pqz2rev4nrbqkowx114c&dl=1",
                "https://www.dropbox.com/scl/fi/i2gg385j5yoz1w5hr2a72/C_part_1_8.jpg?rlkey=n1j5pdu67t47r9ibl92jf30mx&dl=1",
                "https://www.dropbox.com/scl/fi/ud6s98icl1npzevcn04fy/C_part_1_9.jpg?rlkey=0lbnbusvbaw2qx7gupmt3zb2s&dl=1",
                "https://www.dropbox.com/scl/fi/lyyziuw55lq6ajlgldbeo/C_part_1_10.jpg?rlkey=jaqry18xs3l8yve1p6suy3evj&dl=1",
                "https://www.dropbox.com/scl/fi/18tqzwkcoap8ey78kgplj/C_part_1_12.jpg?rlkey=6st6ap4gmzes9ejz106f9u5vl&dl=1",
                "https://www.dropbox.com/scl/fi/qoa5t2kizz0oxx9df0zhr/C_part_1_13.jpg?rlkey=xmu83jnz8iu8132uw9s2ybcly&dl=1",
                "https://www.dropbox.com/scl/fi/6pbru12v7thghohjg2euh/C_part_1_14.jpg?rlkey=qrvizyi30meatolo8nvams4re&dl=1",
                "https://www.dropbox.com/scl/fi/ttcis78qd5epy0vdfg1h1/C_part_1_16.jpg?rlkey=o1ofp9n438zjoh5nnceww58k9&dl=1",
                "https://www.dropbox.com/scl/fi/jevp7lzj1ehjhrg3uwx0f/C_part_1_17.jpg?rlkey=328sywn94xke1snh8e7x21839&dl=1",
                "https://www.dropbox.com/scl/fi/j3s1ydavagy6gjbehas26/C_part_1_18.jpg?rlkey=sfzrgcjudhhjdd3sua4j3xdxy&dl=1",
            ],
        },
        {
            //lanyard index 8
            label: "Lanyard",
            href: "/bbold/lanyard",
            images: [
                "https://www.dropbox.com/scl/fi/ahjj7j6h4y7i2bt962k51/Landyard_1_1.jpg?rlkey=z24wcdzf99ja3zjd2kg7isulu&dl=1",
                "https://www.dropbox.com/scl/fi/7ui1erdy9urqcn3upx3qk/Landyard_1_2.jpg?rlkey=wkha1xidbbw385g5i14z4j9yd&dl=1",
                "https://www.dropbox.com/scl/fi/60lkyscemr7ju0i8sm4rn/Landyard_1_3.jpg?rlkey=f5emnpn21ja84lm5y9xr8tixa&dl=1",
                "https://www.dropbox.com/scl/fi/a6cb4ph94dv2f45jo8hob/Landyard_1_4.jpg?rlkey=8ot699hxs733z0l9pq60027as&dl=1",
                "https://www.dropbox.com/scl/fi/173rosrrn5wyghhl1vyto/Landyard_1_5.jpg?rlkey=sy5lrahaflcvnt4y54pqmv63u&dl=1",
                "https://www.dropbox.com/scl/fi/e55en03f5qupt65a9trvb/Landyard_1_6.jpg?rlkey=c7h2rfn806h5cc8xa7z783z1p&dl=1",
                "https://www.dropbox.com/scl/fi/3nb3d48bi6e8x9qnuizvi/Landyard_1_7.jpg?rlkey=l05ci4g8z4qbmd7sp3zgneyaz&dl=1",
                "https://www.dropbox.com/scl/fi/rqfo2jpiq6rx2z5jxwvpo/Landyard_1_8.jpg?rlkey=cdugcimyctmpybpl9i8q8g9gb&dl=1",
                "https://www.dropbox.com/scl/fi/usinm9yr9hvogo4du3mu6/Landyard_1_9.jpg?rlkey=q9u0tl2x6myv0nqxzx0aldg87&dl=1",
                "https://www.dropbox.com/scl/fi/egq8bedv3745mdpsa6wei/Landyard_1_10.jpg?rlkey=9a3qqt3td8r01xp3c00ep63ju&dl=1",
                "https://www.dropbox.com/scl/fi/ii5198lr2wuc2jy70tnr4/Landyard_1_11.jpg?rlkey=ih51v0dsi8r5ziav7l7k0hufn&dl=1",
                ///Lanyard keychain
                "https://www.dropbox.com/scl/fi/fox12ioy10mkzublpsp9u/Landyard_KC_1_1.jpg?rlkey=8zc5u48wwglwwhtp43vbz8bh7&dl=1",
                "https://www.dropbox.com/scl/fi/jh4j6ymtigeqf4vn2pg9a/Landyard_KC_1_2.jpg?rlkey=om3igd8yozagsgqr4k3gd4rq9&dl=1",
                "https://www.dropbox.com/scl/fi/l6w56itc7odz9ha28a9ff/Landyard_KC_1_3.jpg?rlkey=19tze5d2gvw0t7u4qhchj4psb&dl=1",
                "https://www.dropbox.com/scl/fi/dodultgbaurb11axllclm/Landyard_KC_1_4.jpg?rlkey=7zjwyqfknavcietefn3h939az&dl=1",
            ],
        },
        {
            //Pin another index
            label: "Pin",
            href: "/bbold/pin",
            images: [
                "https://www.dropbox.com/scl/fi/0c3i0qbi2iilnp8eh3aqv/Pin_1_1.jpg?rlkey=1lylekemvvpt8h99igzy2y56t&dl=1",
                "https://www.dropbox.com/scl/fi/teencpm499xin7n4xn2r4/Pin_1_2.jpg?rlkey=qbkh7xx3po2i43n2ys36sl97o&dl=1",
                "https://www.dropbox.com/scl/fi/xx6haoal2350aq6li8c99/Pin_1_3.jpg?rlkey=s7cvck271y2in9y88zegp0czz&dl=1",
                "https://www.dropbox.com/scl/fi/hwk2yxmor0md2nhfp8qun/Pin_1_4.jpg?rlkey=jri8j49ntz1c6mcyvpiw7mmfo&dl=1",
                "https://www.dropbox.com/scl/fi/4hovwrmhdbkrvgc068uwu/Pin_1_5.jpg?rlkey=x5wc3h5xen6ktoq0clhtbtwpx&dl=1",
                "https://www.dropbox.com/scl/fi/hz1hz617etkgvd43unnfg/Pin_1_6.jpg?rlkey=yzdnrpyzfbkhazckxz61i05rg&dl=1",
                "https://www.dropbox.com/scl/fi/k45zc2rzrmq84q698hij0/Pin_1_7.jpg?rlkey=07jib2i3ffbjdjjpdc19vszal&dl=1",
                "https://www.dropbox.com/scl/fi/ojwnq1jniy8pza3uxi4f1/Pin_1_8.jpg?rlkey=gbbdx3cq6mx00jxhmya1gtxtg&dl=1",
                "https://www.dropbox.com/scl/fi/c4khclulo6fwhu3dbps2x/Pin_1_9.jpg?rlkey=kbcrvhap1svkybbbuvgpfvpv0&dl=1",
                "https://www.dropbox.com/scl/fi/szdxbkktha23p5a3aqplx/Pin_1_10.jpg?rlkey=swo0zqel5dp56befqh9gxv3mi&dl=1",
                "https://www.dropbox.com/scl/fi/9oqqov4laaata9gelg8wt/Pin_1_11.jpg?rlkey=rm9lrkuci5vzl94nj1apg8ssz&dl=1",
                "https://www.dropbox.com/scl/fi/3mm6kkvoj29nmxpwcb8s2/Pin_1_12.jpg?rlkey=2up3lwlvz88c7xzwfq03juttj&dl=1",
                "https://www.dropbox.com/scl/fi/rn1xc6sftnifp5vw3covq/Pin_1_13.jpg?rlkey=2u1rjgwcr0qnl4cgct00rqavn&dl=1",
            ],
        },
        {
            //Pin index 10
            label: "Pin",
            href: "/bbold/pin",
            images: [
                "https://www.dropbox.com/scl/fi/qzexs6wp67couxy882emw/Pin_1_14.jpg?rlkey=m6rm6udjhiij4uzk70vplrtkv&dl=1",
                "https://www.dropbox.com/scl/fi/w0z9k8etpccre1lrwy0h4/Pin_1_15.jpg?rlkey=6scrv064nbjgsyqb5ik0ch8vd&dl=1",
                "https://www.dropbox.com/scl/fi/ee0ed4xdr42rxk7rs8bnz/Pin_1_16.jpg?rlkey=clgf480neea0x30ebu3n54t6s&dl=1",
                "https://www.dropbox.com/scl/fi/1f2v2uv61gha5focc35kb/Pin_1_17.jpg?rlkey=52sx9gsmrq780a4bs2tzh80iz&dl=1",
                "https://www.dropbox.com/scl/fi/sddnavmqbx4krsgifgqop/Pin_1_18.jpg?rlkey=r6y06y2i4oxhivimuniudxbej&dl=1",
                "https://www.dropbox.com/scl/fi/2f8hefpjsjxcm04t4hk4t/Pin_1_19.jpg?rlkey=8dkl1msq1lh9fzeaf62yzb8jq&dl=1",
                "https://www.dropbox.com/scl/fi/nv2r245prcttbdyaojx8l/Pin_1_20.jpg?rlkey=h6c51i7yfpqx2ebqoc4qo0bu9&dl=1",
                "https://www.dropbox.com/scl/fi/wng8yt5odjw5htvuj8ly0/Pin_1_21.jpg?rlkey=54mf9tj7o9scfn6el7yp4pslu&dl=1",
                "https://www.dropbox.com/scl/fi/ws1r3ahzbm5lx6fv5xbud/Pin_1_22.jpg?rlkey=y4bq2c1wqk6bpsj2xdim8dvz7&dl=1",
                "https://www.dropbox.com/scl/fi/cfr79pp5714v9bbkun6om/Pin_1_23.jpg?rlkey=2o3hv93pc690hwxs30dwrpcvw&dl=1",
                "https://www.dropbox.com/scl/fi/i8uvak3646l2lppzutybx/Pin_1_24.jpg?rlkey=hp2fn188lr9nc3jbb4h8i9cjj&dl=1",
                "https://www.dropbox.com/scl/fi/kznu28dpeubpnvuy1ovry/Pin_1_25.jpg?rlkey=fxt9viizbfixx44ih4a6r21ws&dl=1",
                "https://www.dropbox.com/scl/fi/a251usjtli2b567qbcoxn/Pin_1_26.jpg?rlkey=5kj33jd0kkfqtoyap97kupno4&dl=1",
                "https://www.dropbox.com/scl/fi/2ebf0n1hwm39yo26qoswt/Pin_1_27.jpg?rlkey=3v26tyizhe09jbui6lp0q5iuo&dl=1",
                "https://www.dropbox.com/scl/fi/1nnnazjq680i0ptzces5s/Pin_1_28.jpg?rlkey=1avc3oabjnm1keif6rx5sw23h&dl=1",
            ],
        },
    ];

    const availablePictures = {
        label: "BBOLD",
        href: "",
        images: [
            "https://www.dropbox.com/scl/fi/4n0d36jqj9jr1f27x8kck/order_1_1.jpg?rlkey=nsh350d2rdkmt485kt7p1my4g&dl=1",
            "https://www.dropbox.com/scl/fi/utxjsfat7itb5fv4nxwvn/order_1_2.jpg?rlkey=gudga77yxeeqq1no7ocdtix20&dl=1",
            "https://www.dropbox.com/scl/fi/kicbq95tf9i17nxv3rqwg/order_1_3.jpg?rlkey=h7u1rr5do2ashkiv34oh4tqh6&dl=1",
            "https://www.dropbox.com/scl/fi/1gbqcvjc7ino55i6y2con/order_1_4.jpg?rlkey=dckduniwa9zv8ab31zuaje83v&dl=1",
            "https://www.dropbox.com/scl/fi/n5j9f67cq1xl3zci3bp8b/order_1_5.jpg?rlkey=2yt20ec0msbcn4q1f8vd39ex8&dl=1",
            "https://www.dropbox.com/scl/fi/4k0du8x7jhutnrr8jvw46/order_1_6.jpg?rlkey=k16cbcv6pewdt00bjxbhjc7ev&dl=1",
        ],
    };

    return (
        <div className="h-full w-full bg-stone-700">
            <_BuildMeta/>

            <div className="h-full text-stone-100 max-w-lg mx-auto ">
                <main className="">
                    <div className="">
                        <div className="flex-col ">
                            <div className="pt-10 px-6">
                                <img src="https://www.dropbox.com/scl/fi/i3yxgk5w4j4h93ovb1hta/valentine-bbold.gif?rlkey=vjvqwcwt8v7632g98xmyuwnlp&st=iz9r7e43&dl=1"
                                     alt="bbold logo"/>
                            </div>

                            <Fade cascade triggerOnce>
                                <div className="h-[2rem]"></div>

                                <div className="flex h-[22rem]">
                                    <SwiperWrapper href={data[7].href} label={data[7].label}>
                                        {data[7].images.map((e) => {
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
                                    <SwiperWrapper href={data[9].href} label={data[9].label}>
                                        {data[9].images.map((e) => {
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

                                    <SwiperWrapper href={data[10].href} label={data[10].label}>
                                        {data[10].images.map((e) => {
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
                                        href={data[8].href}
                                        label={data[8].label}
                                        labelClassName="w-[10rem] h-12"
                                    >
                                        {data[8].images.map((e) => {
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
                                    <SwiperWrapper href={data[2].href} label={data[2].label}>
                                        {data[2].images.map((e) => {
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

                                    <SwiperWrapper href={data[3].href} label={data[3].label}>
                                        {data[3].images.map((e) => {
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
                                    <SwiperWrapper href={data[4].href} label={data[4].label}>
                                        {data[4].images.map((e) => {
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
                                    <SwiperWrapper href={data[5].href} label={data[5].label}>
                                        {data[5].images.map((e) => {
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

                                    <SwiperWrapper href={data[1].href} label={data[1].label}>
                                        {data[1].images.map((e) => {
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
