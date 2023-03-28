import React from "react";
import { motion } from "framer-motion";
import BottomLine from "../../../components/BottomLine";

const Tentang = () => {
    return (
        <div className="parent pt-2 my-16">
            <div className="">
                <motion.div
                    className="mb-12"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1, type: "spring" },
                    }}
                >
                    <h3 className="text-accent text-center">Apa itu MSN PRODUCTION?</h3>
                    <h1 className="text-4xl font-semibold drop-shadow-md text-center">
                        Tentang <span className="text-primary">Kami</span>
                    </h1>
                    <BottomLine />
                </motion.div>
                <div className="pt-4 sm:px-20 px-5 items-center text-center">
                    <motion.div
                        className=""
                        initial={{ x: 200, opacity: 0 }}
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: { duration: 1, delay: 1.25 },
                        }}
                    >
                        <p className="text-accent font-medium">
                            PT. MULIA SEJATI NUSANTARA Berdiri Pada Tanggal 24 Juni 2019 Sebuah Perseroan Terbatas yang bergerak di bidang jasa Suplier & Contractor. Kemudian pada 22 January 2022 PT. MULIA SEJATI NUSANTARA Membuka cabang usaha Baru di Bidang Teknologi yang meliputi Pembuatan Website, Apilkasi Mobile, Branding, Content Creative, Digital Marketing & Advertising. Cabang ini di namakan “Mulia Sejati Nusantara Production" atau di singkat MSN PRODUCTION.
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Tentang;
