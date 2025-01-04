import ComponetHeader from "@/components/ComponentHeader/ComponentHeader";
import MoleculeLibraryTable from "@/components/MoleculeBank/MoleculeBankTable";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  return (
    <DefaultLayout>
      <ComponetHeader pageName="Molecule Bank" containActionButton={true} />
      <div className="flex flex-col gap-10">
        <MoleculeLibraryTable />
      </div>
    </DefaultLayout>
  );
};

export default Page;