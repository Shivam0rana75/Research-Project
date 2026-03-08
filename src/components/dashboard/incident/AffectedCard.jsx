export default function AffectedCard({ assets }) {
  return (
    <>
      {Object.values(assets).map((assetType) =>
        assetType.map((asset) => {

          let bgcolor = "";
          let color = "";

          if (asset.level === "CRITICAL") {
            bgcolor = "bg-[#7F1D1D33]";
            color = "text-[#F87171]";
          } else if (asset.level === "WARNING") {
            bgcolor = "bg-[#78350F33]";
            color = "text-[#FACC15]";
          } else if (asset.level === "MONITORING") {
            bgcolor = "bg-[#1E3A8A33]";
            color = "text-[#60A5FA]";
          }

          return (
            <div key={asset.name} className="bg-[#1E293B] flex justify-between items-center rounded-3xl w-full mt-5 p-6">

              <div className="flex flex-col justify-start">
                <p className="text-white text-xl font-semibold ml-1">
                  {asset.name}
                </p>

                <p className="text-[#C7D2E0] font-sans text-sm mt-1 ml-1">
                  {asset.type}
                </p>
              </div>

              <span className={`${bgcolor} ${color} text-sm font-semibold px-3 py-1 rounded-full`}>
                {asset.level}
              </span>

            </div>
          );
        })
      )}
    </>
  );
}