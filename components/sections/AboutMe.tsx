export default function AboutMe() {
  const personalInfo = [
    {
      label: "First Name :",
      value: "Mark Anthony",
    },
    {
      label: "Last Name :",
      value: "Roda",
    },
    {
      label: "Age :",
      value: 25,
    },
    {
      label: "Nationality :",
      value: "Filipino",
    },
    {
      label: "Address :",
      value:
        "Dama de Noche, Locatha, Looc, Lapu-Lapu City, Cebu, 6015 Philippines",
    },
    {
      label: "Phone :",
      value: "+639558543435",
    },
    {
      label: "Email :",
      value: "rodamarkanthony90@gmail.com",
    },
    {
      label: "Language :",
      value: "English, Tagalog, Bisaya",
    },
  ];
  return (
    <section className="w-full flex flex-col gap-6 justify-center items-center pb-6">
      <h2
        id="about-me"
        className="text-white text-2xl md:text-4xl font-bold tracking-[3px] uppercase"
      >
        About{" "}
        <span className="text-[#043382] tracking-[3px] font-bold ">me</span>
      </h2>
      <div className="w-full flex flex-col gap-6 text-white px-12 sm:px-18 md:px-24 lg:px-32">
        <div className="flex gap-4 ">
          <div className="w-1 h-7 bg-[#043382] rounded" />
          <h3 className="text-xl font-bold tracking-[2px]">
            Personal Information
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-2 xl:px-12">
          {personalInfo.map((item, index) => (
            <div
              key={index}
              className="flex sm:flex-col lg:flex-row gap-4 text-sm md:text-base"
            >
              <label className="whitespace-nowrap">{item.label}</label>
              <span className="font-bold ">{item.value}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="rounded-lg p-4 border flex flex-col">
            <p className="text-5xl font-semibold text-[#043382]">3</p>
            <div className="flex gap-4 items-center">
              <hr className="border w-8" />
              <span className="uppercase text-lg tracking-[2px] font-medium">
                Years of experience
              </span>
            </div>
          </div>

          <div className="rounded-lg p-4 border flex flex-col">
            <p className="text-5xl font-semibold text-[#043382]">4</p>
            <div className="flex gap-4 items-center">
              <hr className="border w-8" />
              <span className="uppercase text-lg tracking-[2px] font-medium">
                Completed Projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
