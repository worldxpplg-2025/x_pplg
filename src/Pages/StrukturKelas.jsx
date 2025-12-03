import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
    const [aosLoaded, setAosLoaded] = useState(false)

    useEffect(() => {
        if (!aosLoaded) {
            AOS.init({
                duration: 800,
                easing: "ease-out-cubic",
                once: true,
            })
            setAosLoaded(true)
        }
    }, [aosLoaded])

    // ANIMASI HOVER GLOW (1 tempat)
    const glow = "transition-all duration-300 hover:scale-[1.03] hover:brightness-110"

    return (
        <div className="z-1 relative h-auto lg:overflow-hidden">

            {/* Wali Kelas */}
            <div
                data-aos="fade-up"
                className={`mt-14 md:mt-10 ${glow}`}
            >
                <BorderStruktur Jabatan="Wali Kelas" Nama="Neng Hendriawati, S.Pd., M.Pd." Width="200px" />
            </div>

            <div className="flex flex-col justify-center items-center">

                {/* Line vertical */}
                <img
                    src="LineVertikal.svg"
                    alt=""
                    data-aos="zoom-in"
                    data-aos-delay="150"
                    className="transition-all"
                />

                {/* Garis cabang */}
                <div className="lg:flex">
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-1rem]" />
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex" />
                </div>

                {/* Bulatan */}
                <div
                    data-aos="fade"
                    data-aos-delay="200"
                    className="flex gap-[10rem] lg:gap-[25rem] relative top-[-1.7rem]"
                >
                    <img src="Circle.svg" alt="" />
                    <img src="Circle.svg" alt="" />
                </div>

                {/* Ketua & Wakil */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="250"
                    className="flex relative top-[-2.5rem]"
                >
                    <div className={`relative left-[0.3rem] ${glow}`}>
                        <BorderStruktur Jabatan="Ketua Kelas" Nama="Aidil" Width="140px" />
                    </div>

                    <img src="LineHorizontalPendek.svg" className="relative top-3" />

                    <div className={`relative right-[0.3rem] ${glow}`}>
                        <BorderStruktur Jabatan="Wakil Ketua" Nama="Rizky" Width="140px" />
                    </div>
                </div>

                <img src="LineVertikal2.svg" alt="" className="relative top-[-3rem]" />

                {/* Sekretaris - Bendahara */}
                <div className="lg:flex">
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-4rem]" />
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-4rem] hidden lg:flex" />
                </div>

                <div
                    className="flex gap-[10rem] lg:gap-[25rem] relative top-[-4.6rem]"
                    data-aos="zoom-in"
                    data-aos-delay="150"
                >
                    <img src="Circle.svg" alt="" />
                    <img src="Circle.svg" alt="" />
                </div>

                <div
                    className="flex gap-[5rem] lg:gap-[20rem] relative top-[-5.3rem]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {/* Sekretaris */}
                    <div className="flex-col">
                        <div className={glow}>
                            <BorderStruktur Jabatan="Sekretaris" Nama="Sindi" Width="140px" />
                        </div>
                        <div className="py-[3%]"></div>
                        <div className={glow}>
                            <BorderStruktur Jabatan="" Nama="Raisa" Width="140px" />
                        </div>
                    </div>

                    {/* Bendahara */}
                    <div className="flex-col">
                        <div className={glow}>
                            <BorderStruktur Jabatan="Bendahara" Nama="Nazla" Width="140px" />
                        </div>
                        <div className="py-[3%]"></div>
                        <div className={glow}>
                            <BorderStruktur Jabatan="" Nama="Muthia" Width="140px" />
                        </div>
                    </div>
                </div>

                <img src="LineVertikal3.svg" alt="" className="relative top-[-12rem]" />

                {/* Security + Kebersihan */}
                <div className="lg:flex">
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-13rem]" />
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-13rem] hidden lg:flex" />
                    <img src="LineHorizontal.svg" alt="" className="relative top-[-13rem] hidden lg:flex" />
                </div>

                <div
                    className="flex gap-[8rem] lg:gap-[20rem] relative top-[-13.7rem]"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    <img src="Circle.svg" alt="" />
                    <img src="Circle.svg" alt="" />
                    <img src="Circle.svg" alt="" className="hidden lg:flex" />
                </div>

                <div
                    className="flex gap-[5rem] lg:gap-[17rem] relative top-[-14.5rem]"
                    data-aos="fade-up"
                    data-aos-delay="350"
                >
                    {/* Keamanan */}
                    <div className="flex-col">
                        <div className={glow}>
                            <BorderStruktur Jabatan="Keamanan" Nama="Siddik" Width="140px" />
                        </div>
                        <div className="py-[3%]"></div>
                        <div className={glow}>
                            <BorderStruktur Jabatan="" Nama="Nadzar" Width="140px" />
                        </div>
                    </div>

                    {/* Kebersihan */}
                    <div className={`flex-col ${glow}`}>
                        <BorderStruktur Jabatan="Kebersihan" Nama="Tulus" Width="140px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StrukturKelas
