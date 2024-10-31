import MisiMSN from "../assets/images/VisiMisiImg/misi.svg"
import LayananMSN from "../assets/images/VisiMisiImg/layanan.svg"
import VisiMSN from "../assets/images/VisiMisiImg/visi.svg"

const visiMisi = [
    {
        id: 1,
        title: "Misi",
        icon: <img src={MisiMSN} alt="misi MSN PRODUCTION" />,
        description:
            "Menjadi Perusahaan swasta yang handal dalam penyedia jasa dan perdagangan sesuai dengan KBLI yang dimiliki.",
    },
    {
        id: 2,
        title: "Layanan",
        icon: <img src={LayananMSN} alt="layanan MSN PRODUCTION" />,
        description:
            "Dapatkan loyalitas konsumen, berikan mereka pengalaman yang berkesan dengan menciptakan hubungan yang saling menguntungkan.",
    },
    {
        id: 3,
        title: "Visi",
        icon: <img src={VisiMSN} alt="visi MSN PRODUCTION" />,
        description:
            "Dalam melaksanakan tugas - tugasnya Mulia Sejati Nusantara Production senantiasa menjaga, profesionalisme, kejujuran, kebersamaan, ketertiban, dan kesehatan kerja sehingga dihasilkan suatu karya yang berkualitas.",
    },
];

export default visiMisi;
