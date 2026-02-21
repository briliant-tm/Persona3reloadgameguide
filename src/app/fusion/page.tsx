import FusionClient from "./FusionClient";
import { PERSONAS } from "../../lib/data/personas";
import { SectionTitle } from "../../components/SectionTitle";

export default function FusionPage() {
    return (
        <main className="pt-24"> {/* Menambahkan padding agar tidak menabrak navbar */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative z-10">
                    <SectionTitle
                        title="Fusion Guide"
                        subtitle="Search and filter Personas to find the perfect fusion combination."
                    />
                </div>
            </div>
            {/* Berikan prop atau modifikasi FusionClient agar tidak double padding jika diperlukan */}
            <FusionClient staticPersonas={PERSONAS} />
        </main>
    );
}