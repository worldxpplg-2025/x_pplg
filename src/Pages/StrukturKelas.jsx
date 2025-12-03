import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">

			{/* Wali Kelas */}
			<div data-aos="fade-up" data-aos-duration="500" className="mt-14 md:mt-10">
				<BorderStruktur Jabatan="Wali Kelas" Nama="Neng Hendriawati, S.Pd., M.Pd." Width="200px" />
			</div>

			<div className="flex flex-col justify-center items-center">
				<img src="LineVertikal.svg" alt="" data-aos="fade-up" data-aos-duration="550" />

				{/* Cabang */}
				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-1rem]" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-1rem] hidden lg:flex" />
				</div>

				<div className="flex gap-[10rem] lg:gap-[25rem] relative top-[-1.7rem]">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* Ketua & Wakil */}
				<div className="flex relative top-[-2.5rem]">
					<div className="relative left-[0.3rem]">
						<BorderStruktur Jabatan="Ketua Kelas" Nama="Aidil" Width="140px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<div className="relative right-[0.3rem]">
						<BorderStruktur Jabatan="Wakil Ketua" Nama="Rizky" Width="140px" />
					</div>
				</div>

				<img src="LineVertikal2.svg" alt="" className="relative top-[-3rem]" />

				{/* Cabang ke Sekertaris & Bendahara */}
				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-4rem]" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-4rem] hidden lg:flex" />
				</div>

				<div className="flex gap-[10rem] lg:gap-[25rem] relative top-[-4.6rem]">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				{/* Sekretaris & Bendahara */}
				<div className="flex gap-[5rem] lg:gap-[20rem] relative top-[-5.3rem]">
					<div className="flex-col">
						<BorderStruktur Jabatan="Sekretaris" Nama="Sindi" Width="140px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Raisa" Width="140px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Bendahara" Nama="Nazla" Width="140px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Muthia" Width="140px" />
					</div>
				</div>

				<img src="LineVertikal3.svg" alt="" className="relative top-[-12rem]" />

				{/* Cabang Keamanan – Kebersihan */}
				<div className="lg:flex">
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13rem]" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13rem] hidden lg:flex" />
					<img src="LineHorizontal.svg" alt="" className="relative top-[-13rem] hidden lg:flex" />
				</div>

				<div className="flex gap-[8rem] lg:gap-[20rem] relative top-[-13.7rem]">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				{/* Keamanan (2) + Kebersihan (1) */}
				<div className="flex gap-[5rem] lg:gap-[17rem] relative top-[-14.5rem]">
					<div className="flex-col">
						<BorderStruktur Jabatan="Keamanan" Nama="Siddik" Width="140px" />
						<div className="py-[3%]"></div>
						<BorderStruktur Jabatan="" Nama="Nadzar" Width="140px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Kebersihan" Nama="Tulus" Width="140px" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default StrukturKelas
