import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
    const [aosLoaded, setAosLoaded] = useState(false)

    useEffect(() => {
        if (!aosLoaded) {
            AOS.init({ duration: 700, easing: "ease-out-cubic" })
            AOS.refresh()
            setAosLoaded(true)
        }
    }, [aosLoaded])

    return (
        <div className="relative h-auto lg:overflow-hidden">

            {/* Wali Kelas */}
            <div data-aos="fade-up">
                <div className="card-appear glow">
                    <BorderStruktur Jabatan="Wali Kelas" Nama="Neng Hendriawati, S.Pd., M.Pd." Width="200px" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center">

                {/* Vertical Line */}
                <img src="LineVertikal.svg" alt=""
                    className="line-draw"
                    data-aos="fade-up"
                />

                {/* Cabang 1 */}
                <div className="lg:flex gap-2 mt-2">
                    <img src="LineHorizontal.svg" className="line-draw" />
                    <img src="LineHorizontal.svg" className="line-draw hidden lg:flex" />
                </div>

                {/* Circles */}
                <div className="flex gap-[10rem] lg:gap-[25rem] mt-2">
                    <img src="Circle.svg" className="pop" />
                    <img src="Circle.svg" className="pop" />
                </div>

                {/* Ketua & Wakil */}
                <div className="flex gap-6 mt-3 card-appear">
                    <div className="glow">
                        <BorderStruktur Jabatan="Ketua Kelas" Nama="Aidil" Width="140px" />
                    </div>

                    <img src="LineHorizontalPendek.svg" className="line-draw" />

                    <div className="glow">
                        <BorderStruktur Jabatan="Wakil Ketua" Nama="Rizky" Width="140px" />
                    </div>
                </div>

                {/* Vertical */}
                <img src="LineVertikal2.svg" className="line-draw mt-5" />

                {/* Sekretaris & Bendahara */}
                <div className="lg:flex mt-5">
                    <img src="LineHorizontal.svg" className="line-draw" />
                    <img src="LineHorizontal.svg" className="line-draw hidden lg:flex" />
                </div>

                <div className="flex gap-[10rem] lg:gap-[25rem] mt-2">
                    <img src="Circle.svg" className="pop" />
                    <img src="Circle.svg" className="pop" />
                </div>

                {/* Sekretaris & Bendahara Cards */}
                <div className="flex gap-[5rem] lg:gap-[20rem] mt-3 card-appear">
                    <div>
                        <div className="glow">
                            <BorderStruktur Jabatan="Sekretaris" Nama="Sindi" Width="140px" />
                        </div>
                        <div className="mt-3 glow">
                            <BorderStruktur Jabatan="" Nama="Raisa" Width="140px" />
                        </div>
                    </div>

                    <div>
                        <div className="glow">
                            <BorderStruktur Jabatan="Bendahara" Nama="Nazla" Width="140px" />
                        </div>
                        <div className="mt-3 glow">
                            <BorderStruktur Jabatan="" Nama="Muthia" Width="140px" />
                        </div>
                    </div>
                </div>

                {/* Vertical */}
                <img src="LineVertikal3.svg" className="line-draw mt-10" />

                {/* Keamanan – Kebersihan */}
                <div className="lg:flex mt-4">
                    <img src="LineHorizontal.svg" className="line-draw" />
                    <img src="LineHorizontal.svg" className="line-draw hidden lg:flex" />
                    <img src="LineHorizontal.svg" className="line-draw hidden lg:flex" />
                </div>

                <div className="flex gap-[8rem] lg:gap-[20rem] mt-2">
                    <img src="Circle.svg" className="pop" />
                    <img src="Circle.svg" className="pop" />
                    <img src="Circle.svg" className="pop hidden lg:flex" />
                </div>

                <div className="flex gap-[5rem] lg:gap-[17rem] mt-3 card-appear">
                    <div>
                        <div className="glow">
                            <BorderStruktur Jabatan="Keamanan" Nama="Siddik" Width="140px" />
                        </div>
                        <div className="mt-3 glow">
                            <BorderStruktur Jabatan="" Nama="Nadzar" Width="140px" />
                        </div>
                    </div>

                    <div className="glow">
                        <BorderStruktur Jabatan="Kebersihan" Nama="Tulus" Width="140px" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default StrukturKelas
