import landingImage from "../assets/landing.png";
import appDownlaodImage from "../assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className=" bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="text-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Download JapanEats App for faster ordering and personalised
            recommendations.
          </span>
          <span>
            <img src={appDownlaodImage} />
          </span>
        </div>
      </div>
    </div>
  );
}
