import React from "react";
import ProductGrid from '../component/ProductGrid';
import { supabase } from '../lib/supabase/client';
import Navbar from "../component/Navbar";
import BannerSlider from "../component/BannerSlider";

async function getProducts() {
    const { data } = await supabase.from('products').select('*');
    return data;
}

export default async function Page() {
    const products = await getProducts();
    return (
        <>
            <Navbar />
            <BannerSlider />
            <main className="container mx-auto p-6 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold mb-6 text-blue-500 text-center">All Products</h1>
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <ProductGrid products={products} />
                </div>
            </main>
            <p className="text-center p-2.5 h-[40px] text-white text-sm">
                © All rights reserved by <span className="text-blue-500 font-semibold">@AbdullahMemon</span>
            </p>

        </>
    );
};
